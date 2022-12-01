import { Def, defs } from '../defs'

function describe(
  singular: string,
  {
    plural = singular + 's',
    ...options
  }: Partial<Def> & { plural?: string } = {}
) {
  const id = options.id || `${singular}Id`
  defs.push({
    api: 'ec2',
    API: 'EC2',
    method: `describe${singular}ById`,
    singular,
    plural,
    apiMethod: `describe${plural}`,
    command: `Describe${plural}Command`,
    id,
    ids: `${id}s`,
    entityType: singular,
    entitiesPath: plural,
    ...options,
  })
}

describe('CapacityReservationFleet')
describe('CapacityReservation')
describe('CarrierGateway')
describe('ClientVpnEndpoint')
describe('CoipPool', { ids: 'PoolIds' })
describe('ConversionTask')
describe('CustomerGateway')
describe('EgressOnlyInternetGateway')
describe('ElasticGpu', {
  entityType: 'ElasticGpus',
  entitiesPath: 'ElasticGpuSet',
})
describe('ExportImageTask')
describe('ExportTask')
describe('Instance', { entitiesPath: 'Reservations?.[0]?.Instances' })
describe('SecurityGroup', { id: 'GroupId' })
describe('Snapshot')
describe('Subnet')
describe('Volume')
describe('Vpc')
