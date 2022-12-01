import fs from 'fs-extra'
import { groupBy } from 'lodash'
import dedent from 'dedent-js'
import path from 'path'
import { defs } from './defs'
import prettier from 'prettier'

async function go() {
  const config = await prettier.resolveConfig(__filename)

  const exportMap: Record<
    string,
    string | { types: string; import: string; require: string }
  > = { './package.json': './package.json' }

  async function writeFile(file: string, content: string): Promise<void> {
    await fs.mkdirs(path.dirname(file))
    await fs.writeFile(
      file,
      prettier.format(content.replace(/\n?$/, '\n'), {
        ...config,
        filepath: file,
      }),
      'utf8'
    )
  }

  const root = path.resolve(__dirname, '..')
  const src = path.resolve(root, 'src')

  async function writeSourceFile(file: string, content: string): Promise<void> {
    await writeFile(path.join(src, file), content)
    const rel = file.replace(/\.[^.]+$/, '')
    exportMap[`./${rel}`] = {
      types: `./types/${rel}.d.ts`,
      import: `./mjs/${rel}.mjs`,
      require: `./${rel}.js`,
    }
    const mjsFile = path.resolve(root, 'mjs', `${rel}.mjs`)
    await writeFile(
      mjsFile,
      dedent`
      export * from '${path.join(
        path.relative(path.dirname(mjsFile), root),
        `${rel}.js`
      )}'
    `
    )
  }

  await writeSourceFile(
    'errors.ts',
    dedent`
      export class NotFoundError extends Error {
        constructor(
          public readonly entityName: string,
          public readonly idProp: string,
          public readonly idValue: string
        ) {
          super(\`\${entityName} with \${idProp} \${idValue} not found\`)
        }
      }
    `
  )

  const readme = []

  const packageJsonPath = path.resolve(root, 'package.json')
  const packageJson = await fs.readJson(packageJsonPath)

  const groups = groupBy(defs, 'api')

  readme.push(`# API Table of Contents`)

  for (const [api, group] of Object.entries(groups)) {
    const API = group[0].API

    readme.push(dedent`
      - [${API}](#${api})
        ${group
          .map(({ method }) => `- [\`${method}\`](#${method.toLowerCase()})`)
          .join('\n  ')}
    `)
  }

  for (const [api, group] of Object.entries(groups)) {
    const API = group[0].API

    readme.push(`# ${API}`)

    for (const { method, entityType } of group) {
      readme.push(dedent`
        ## ${method}

        ### \`aws-sdk\`

        \`\`\`ts
        import AWS from 'aws-sdk'
        import { ${method} } from '${packageJson.name}/v2/${api}'
        \`\`\`

        #### Signature

        \`\`\`ts
        declare export async function ${method}(
          client: AWS.${API},
          id: string
        ): Promise<AWS.${API}.${entityType}>
        \`\`\`

        ### \`@aws-sdk/client-${api}\`

        \`\`\`ts
        import ${API} from '@aws-sdk/client-${api}'
        import { ${method} } from '${packageJson.name}/v3/${api}'
        \`\`\`

        #### Signature

        \`\`\`ts
        declare export async function ${method}(
          client: ${API}.${API}Client,
          id: string
        ): Promise<${API}.${entityType}>
        \`\`\`
      `)
    }

    await writeSourceFile(
      `v2/${api}.ts`,
      dedent`
        import AWS from 'aws-sdk'
        import { NotFoundError } from '../errors'

        ${group
          .map(
            ({
              method,
              entityType,
              apiMethod,
              id,
              ids,
              entitiesPath,
            }) => dedent`
              export async function ${method}(
                client: AWS.${API},
                id: string
              ): Promise<AWS.${API}.${entityType}> {
                const entity = (await client.${apiMethod}({ ${ids}: [id] }).promise())
                  ?.${entitiesPath}?.[0]
                if (!entity) {
                  throw new NotFoundError(${JSON.stringify(
                    entityType
                  )}, ${JSON.stringify(id)}, id)
                }
                return entity
              }
            `
          )
          .join('\n\n')}
      `
    )

    await writeSourceFile(
      `v3/${api}.ts`,
      dedent`
        import * as ${API} from '@aws-sdk/client-${api}'
        import { NotFoundError } from '../errors'

        ${group
          .map(
            ({ method, entityType, command, id, ids, entitiesPath }) => dedent`
              export async function ${method}(
                client: ${API}.${API}Client,
                id: string
              ): Promise<${API}.${entityType}> {
                const entity = (
                  await client.send(
                    new ${API}.${command}({ ${ids}: [id] })
                  )
                )?.${entitiesPath}?.[0]
                if (!entity) {
                  throw new NotFoundError(${JSON.stringify(
                    entityType
                  )}, ${JSON.stringify(id)}, id)
                }
                return entity
              }
            `
          )
          .join('\n\n')}
      `
    )
  }

  packageJson.exports = exportMap
  await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 })

  {
    const readmePath = path.resolve(root, 'README.md')
    const README = await fs.readFile(readmePath, 'utf8')
    const lines = README.split(/\r\n?|\n/gm)
    const start = lines.findIndex((l) => /<!-- defs -->/.test(l))
    const end = lines.findIndex((l) => /<!-- defsend -->/.test(l))
    if (start != null && end != null) {
      lines.splice(start + 1, end - start - 1, readme.join('\n\n'))
    }
    await writeFile(readmePath, lines.join('\n'))
  }
}

go()
