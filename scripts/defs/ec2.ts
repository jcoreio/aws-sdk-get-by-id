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
describe('CoipPool', { id: 'PoolId' })
describe('ConversionTask')
describe('CustomerGateway')
describe('DhcpOptions', { plural: 'DhcpOptions' })
describe('EgressOnlyInternetGateway')
describe('ElasticGpu', {
  entityType: 'ElasticGpus',
  entitiesPath: 'ElasticGpuSet',
})
describe('Fleet', { entityType: 'FleetData' })
describe('FlowLog')
describe('FpgaImage')
describe('Host')
describe('HostReservation', {
  ids: 'HostReservationIdSet',
  entitiesPath: 'HostReservationSet',
})
describe('ExportImageTask')
describe('ExportTask')
describe('Image')
describe('ImportImageTask', { id: 'ImportTaskId' })
describe('ImportSnapshotTask', { id: 'ImportTaskId' })
describe('Instance', { entitiesPath: 'Reservations?.[0]?.Instances' })
describe('InternetGateway')
describe('Ipam')
describe('IpamPool')
describe('IpamScope')
describe('Ipv6Pool', { id: 'PoolId' })
describe('KeyPair')
describe('LaunchTemplate')
describe('LocalGateway')
describe('LocalGatewayRouteTable')
describe('LocalGatewayVirtualInterface')
describe('LocalGatewayVirtualInterfaceGroup')
describe('ManagedPrefixList', {
  id: 'PrefixListId',
  entitiesPath: 'PrefixLists',
})
describe('NatGateway')
describe('NetworkAcl')
describe('NetworkInterface')
describe('PlacementGroup', { id: 'GroupId' })
describe('PrefixList')
describe('PublicIpv4Pool', { id: 'PoolId' })
describe('ReplaceRootVolumeTask')
describe('ReservedInstance', {
  entityType: 'ReservedInstances',
  ids: 'ReservedInstancesIds',
})
describe('RouteTable')
describe('SecurityGroup', { id: 'GroupId' })
describe('Snapshot')
describe('Subnet')
describe('TransitGateway')
describe('TransitGatewayAttachment')
describe('TransitGatewayMulticastDomain')
describe('TransitGatewayPolicyTable')
describe('TransitGatewayRouteTable')
describe('VerifiedAccessGroup')
describe('VerifiedAccessEndpoint')
describe('VerifiedAccessTrustProvider')
describe('Volume')
describe('Vpc')
describe('VpcEndpoint')
describe('VpcEndpointServiceConfiguration', {
  id: 'ServiceId',
  entityType: 'ServiceConfiguration',
  entitiesPath: 'ServiceConfigurations',
})
describe('VpcPeeringConnection')
describe('VpnConnection')
