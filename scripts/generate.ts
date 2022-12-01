import fs from 'fs-extra'
import { groupBy } from 'lodash'
import dedent from 'dedent-js'
import path from 'path'

type Def = {
  api: string
  getById: string
  singular: string
  plural: string
  entity: string
  method: string
  ids: string
  entitiesPath: string
}

function ec2Describe(
  singular: string,
  {
    plural = singular + 's',
    ...options
  }: Partial<Def> & { plural?: string } = {}
): Def {
  return {
    api: 'EC2',
    getById: `describe${singular}ById`,
    singular,
    plural,
    entity: singular,
    method: `describe${plural}`,
    ids: `${singular}Ids`,
    entitiesPath: plural,
    ...options,
  }
}

const defs: Def[] = [
  ec2Describe('CapacityReservationFleet'),
  ec2Describe('CapacityReservation'),
  ec2Describe('CarrierGateway'),
  ec2Describe('ClientVpnEndpoint'),
  ec2Describe('CoipPool', { ids: 'PoolIds' }),
  ec2Describe('ConversionTask'),
  ec2Describe('CustomerGateway'),
  ec2Describe('EgressOnlyInternetGateway'),
  ec2Describe('ElasticGpu', {
    entity: 'ElasticGpus',
    entitiesPath: 'ElasticGpuSet',
  }),
  ec2Describe('ExportImageTask'),
  ec2Describe('ExportTask'),
  ec2Describe('Instance', { entitiesPath: 'Reservations?.[0]?.Instances' }),
  ec2Describe('SecurityGroup', { ids: 'GroupIds' }),
  ec2Describe('Snapshot'),
  ec2Describe('Subnet'),
  ec2Describe('Volume'),
  ec2Describe('Vpc'),
]

async function writeFile(file: string, content: string): Promise<void> {
  await fs.mkdirs(path.dirname(file))
  await fs.writeFile(file, content, 'utf8')
}

const exportMap: Record<
  string,
  string | { types: string; import: string; require: string }
> = { './package.json': './package.json' }

async function go() {
  for (const [api, group] of Object.entries(groupBy(defs, 'api'))) {
    exportMap[`./${api.toLowerCase()}`] = {
      types: `./types/v2/${api.toLowerCase()}.d.ts`,
      import: `./mjs/v2/${api.toLowerCase()}.mjs`,
      require: `./v2/${api.toLowerCase()}.cjs`,
    }
    await writeFile(
      path.resolve(__dirname, '..', 'mjs', 'v2', `${api.toLowerCase()}.mjs`),
      dedent`
        export * from '../../v2/${api.toLowerCase()}.js'
      `
    )
    await writeFile(
      path.resolve(__dirname, '..', 'src', 'v2', `${api.toLowerCase()}.ts`),
      dedent`
        import AWS from 'aws-sdk'

        ${group
          .map(
            ({
              api,
              getById,
              entity,
              singular,
              method,
              ids,
              entitiesPath,
            }) => dedent`
              export async function ${getById}(
                client: AWS.${api},
                id: string
              ): Promise<AWS.${api}.${entity}> {
                const entity = (await client.${method}({ ${ids}: [id] }).promise())
                  ?.${entitiesPath}?.[0]
                if (!entity) throw new Error(\`${singular} with id \${id} not found\`)
                return entity
              }
            `
          )
          .join('\n\n')}
      `
    )
  }

  const packageJsonPath = path.resolve(__dirname, '..', 'package.json')
  const packageJson = await fs.readJson(packageJsonPath)
  packageJson.exports = exportMap
  await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 })
}
go()
