export type Def = {
  api: string
  API: string
  method: string
  singular: string
  entityType: string
  plural: string
  apiMethod: string
  command: string
  id: string
  ids: string
  entitiesPath: string
}

export const defs: Def[] = []

import './defs/ec2'
