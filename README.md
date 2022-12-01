# aws-sdk-get-by-id

[![CircleCI](https://circleci.com/gh/jcoreio/aws-sdk-get-by-id.svg?style=svg)](https://circleci.com/gh/jcoreio/aws-sdk-get-by-id)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![npm version](https://badge.fury.io/js/@jcoreio%2Faws-sdk-get-by-id.svg)](https://badge.fury.io/js/@jcoreio%2Faws-sdk-get-by-id)

Convenience methods to get AWS entities by id or error, for more concise code

All methods throw a [`NotFoundError`](#notfounderror) if the entity with the given id is not found.

To contribute more defs, add them in [`scripts/defs`](/scripts/defs/).
See [`scripts/defs.ts`](/scripts/defs.ts) and [`scripts/defs/ec2.ts`](/scripts/defs/ec2.ts)
for examples.

<!-- defs -->

# API Table of Contents

- [EC2](#ec2)
  - [`describeCapacityReservationFleetById`](#describecapacityreservationfleetbyid)
  - [`describeCapacityReservationById`](#describecapacityreservationbyid)
  - [`describeCarrierGatewayById`](#describecarriergatewaybyid)
  - [`describeClientVpnEndpointById`](#describeclientvpnendpointbyid)
  - [`describeCoipPoolById`](#describecoippoolbyid)
  - [`describeConversionTaskById`](#describeconversiontaskbyid)
  - [`describeCustomerGatewayById`](#describecustomergatewaybyid)
  - [`describeDhcpOptionsById`](#describedhcpoptionsbyid)
  - [`describeEgressOnlyInternetGatewayById`](#describeegressonlyinternetgatewaybyid)
  - [`describeElasticGpuById`](#describeelasticgpubyid)
  - [`describeFleetById`](#describefleetbyid)
  - [`describeFlowLogById`](#describeflowlogbyid)
  - [`describeFpgaImageById`](#describefpgaimagebyid)
  - [`describeHostById`](#describehostbyid)
  - [`describeHostReservationById`](#describehostreservationbyid)
  - [`describeExportImageTaskById`](#describeexportimagetaskbyid)
  - [`describeExportTaskById`](#describeexporttaskbyid)
  - [`describeImageById`](#describeimagebyid)
  - [`describeImportImageTaskById`](#describeimportimagetaskbyid)
  - [`describeImportSnapshotTaskById`](#describeimportsnapshottaskbyid)
  - [`describeInstanceById`](#describeinstancebyid)
  - [`describeInternetGatewayById`](#describeinternetgatewaybyid)
  - [`describeIpamById`](#describeipambyid)
  - [`describeIpamPoolById`](#describeipampoolbyid)
  - [`describeIpamScopeById`](#describeipamscopebyid)
  - [`describeIpv6PoolById`](#describeipv6poolbyid)
  - [`describeKeyPairById`](#describekeypairbyid)
  - [`describeLaunchTemplateById`](#describelaunchtemplatebyid)
  - [`describeLocalGatewayById`](#describelocalgatewaybyid)
  - [`describeLocalGatewayRouteTableById`](#describelocalgatewayroutetablebyid)
  - [`describeLocalGatewayVirtualInterfaceById`](#describelocalgatewayvirtualinterfacebyid)
  - [`describeLocalGatewayVirtualInterfaceGroupById`](#describelocalgatewayvirtualinterfacegroupbyid)
  - [`describeManagedPrefixListById`](#describemanagedprefixlistbyid)
  - [`describeNatGatewayById`](#describenatgatewaybyid)
  - [`describeNetworkAclById`](#describenetworkaclbyid)
  - [`describeNetworkInterfaceById`](#describenetworkinterfacebyid)
  - [`describePlacementGroupById`](#describeplacementgroupbyid)
  - [`describePrefixListById`](#describeprefixlistbyid)
  - [`describePublicIpv4PoolById`](#describepublicipv4poolbyid)
  - [`describeReplaceRootVolumeTaskById`](#describereplacerootvolumetaskbyid)
  - [`describeReservedInstanceById`](#describereservedinstancebyid)
  - [`describeRouteTableById`](#describeroutetablebyid)
  - [`describeSecurityGroupById`](#describesecuritygroupbyid)
  - [`describeSnapshotById`](#describesnapshotbyid)
  - [`describeSubnetById`](#describesubnetbyid)
  - [`describeTransitGatewayById`](#describetransitgatewaybyid)
  - [`describeTransitGatewayAttachmentById`](#describetransitgatewayattachmentbyid)
  - [`describeTransitGatewayMulticastDomainById`](#describetransitgatewaymulticastdomainbyid)
  - [`describeTransitGatewayPolicyTableById`](#describetransitgatewaypolicytablebyid)
  - [`describeTransitGatewayRouteTableById`](#describetransitgatewayroutetablebyid)
  - [`describeVerifiedAccessGroupById`](#describeverifiedaccessgroupbyid)
  - [`describeVerifiedAccessEndpointById`](#describeverifiedaccessendpointbyid)
  - [`describeVerifiedAccessTrustProviderById`](#describeverifiedaccesstrustproviderbyid)
  - [`describeVolumeById`](#describevolumebyid)
  - [`describeVpcById`](#describevpcbyid)
  - [`describeVpcEndpointById`](#describevpcendpointbyid)
  - [`describeVpcEndpointServiceConfigurationById`](#describevpcendpointserviceconfigurationbyid)
  - [`describeVpcPeeringConnectionById`](#describevpcpeeringconnectionbyid)
  - [`describeVpnConnectionById`](#describevpnconnectionbyid)

# EC2

## describeCapacityReservationFleetById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describeCapacityReservationFleetById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describeCapacityReservationFleetById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.CapacityReservationFleet>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describeCapacityReservationFleetById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describeCapacityReservationFleetById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.CapacityReservationFleet>
```

## describeCapacityReservationById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describeCapacityReservationById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describeCapacityReservationById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.CapacityReservation>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describeCapacityReservationById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describeCapacityReservationById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.CapacityReservation>
```

## describeCarrierGatewayById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describeCarrierGatewayById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describeCarrierGatewayById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.CarrierGateway>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describeCarrierGatewayById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describeCarrierGatewayById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.CarrierGateway>
```

## describeClientVpnEndpointById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describeClientVpnEndpointById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describeClientVpnEndpointById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.ClientVpnEndpoint>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describeClientVpnEndpointById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describeClientVpnEndpointById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.ClientVpnEndpoint>
```

## describeCoipPoolById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describeCoipPoolById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describeCoipPoolById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.CoipPool>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describeCoipPoolById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describeCoipPoolById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.CoipPool>
```

## describeConversionTaskById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describeConversionTaskById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describeConversionTaskById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.ConversionTask>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describeConversionTaskById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describeConversionTaskById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.ConversionTask>
```

## describeCustomerGatewayById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describeCustomerGatewayById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describeCustomerGatewayById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.CustomerGateway>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describeCustomerGatewayById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describeCustomerGatewayById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.CustomerGateway>
```

## describeDhcpOptionsById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describeDhcpOptionsById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describeDhcpOptionsById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.DhcpOptions>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describeDhcpOptionsById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describeDhcpOptionsById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.DhcpOptions>
```

## describeEgressOnlyInternetGatewayById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describeEgressOnlyInternetGatewayById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describeEgressOnlyInternetGatewayById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.EgressOnlyInternetGateway>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describeEgressOnlyInternetGatewayById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describeEgressOnlyInternetGatewayById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.EgressOnlyInternetGateway>
```

## describeElasticGpuById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describeElasticGpuById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describeElasticGpuById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.ElasticGpus>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describeElasticGpuById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describeElasticGpuById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.ElasticGpus>
```

## describeFleetById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describeFleetById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describeFleetById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.FleetData>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describeFleetById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describeFleetById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.FleetData>
```

## describeFlowLogById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describeFlowLogById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describeFlowLogById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.FlowLog>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describeFlowLogById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describeFlowLogById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.FlowLog>
```

## describeFpgaImageById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describeFpgaImageById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describeFpgaImageById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.FpgaImage>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describeFpgaImageById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describeFpgaImageById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.FpgaImage>
```

## describeHostById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describeHostById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describeHostById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.Host>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describeHostById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describeHostById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.Host>
```

## describeHostReservationById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describeHostReservationById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describeHostReservationById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.HostReservation>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describeHostReservationById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describeHostReservationById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.HostReservation>
```

## describeExportImageTaskById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describeExportImageTaskById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describeExportImageTaskById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.ExportImageTask>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describeExportImageTaskById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describeExportImageTaskById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.ExportImageTask>
```

## describeExportTaskById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describeExportTaskById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describeExportTaskById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.ExportTask>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describeExportTaskById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describeExportTaskById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.ExportTask>
```

## describeImageById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describeImageById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describeImageById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.Image>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describeImageById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describeImageById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.Image>
```

## describeImportImageTaskById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describeImportImageTaskById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describeImportImageTaskById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.ImportImageTask>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describeImportImageTaskById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describeImportImageTaskById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.ImportImageTask>
```

## describeImportSnapshotTaskById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describeImportSnapshotTaskById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describeImportSnapshotTaskById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.ImportSnapshotTask>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describeImportSnapshotTaskById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describeImportSnapshotTaskById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.ImportSnapshotTask>
```

## describeInstanceById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describeInstanceById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describeInstanceById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.Instance>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describeInstanceById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describeInstanceById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.Instance>
```

## describeInternetGatewayById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describeInternetGatewayById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describeInternetGatewayById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.InternetGateway>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describeInternetGatewayById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describeInternetGatewayById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.InternetGateway>
```

## describeIpamById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describeIpamById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describeIpamById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.Ipam>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describeIpamById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describeIpamById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.Ipam>
```

## describeIpamPoolById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describeIpamPoolById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describeIpamPoolById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.IpamPool>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describeIpamPoolById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describeIpamPoolById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.IpamPool>
```

## describeIpamScopeById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describeIpamScopeById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describeIpamScopeById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.IpamScope>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describeIpamScopeById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describeIpamScopeById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.IpamScope>
```

## describeIpv6PoolById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describeIpv6PoolById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describeIpv6PoolById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.Ipv6Pool>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describeIpv6PoolById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describeIpv6PoolById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.Ipv6Pool>
```

## describeKeyPairById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describeKeyPairById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describeKeyPairById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.KeyPair>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describeKeyPairById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describeKeyPairById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.KeyPair>
```

## describeLaunchTemplateById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describeLaunchTemplateById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describeLaunchTemplateById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.LaunchTemplate>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describeLaunchTemplateById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describeLaunchTemplateById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.LaunchTemplate>
```

## describeLocalGatewayById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describeLocalGatewayById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describeLocalGatewayById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.LocalGateway>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describeLocalGatewayById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describeLocalGatewayById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.LocalGateway>
```

## describeLocalGatewayRouteTableById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describeLocalGatewayRouteTableById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describeLocalGatewayRouteTableById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.LocalGatewayRouteTable>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describeLocalGatewayRouteTableById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describeLocalGatewayRouteTableById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.LocalGatewayRouteTable>
```

## describeLocalGatewayVirtualInterfaceById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describeLocalGatewayVirtualInterfaceById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describeLocalGatewayVirtualInterfaceById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.LocalGatewayVirtualInterface>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describeLocalGatewayVirtualInterfaceById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describeLocalGatewayVirtualInterfaceById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.LocalGatewayVirtualInterface>
```

## describeLocalGatewayVirtualInterfaceGroupById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describeLocalGatewayVirtualInterfaceGroupById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describeLocalGatewayVirtualInterfaceGroupById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.LocalGatewayVirtualInterfaceGroup>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describeLocalGatewayVirtualInterfaceGroupById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describeLocalGatewayVirtualInterfaceGroupById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.LocalGatewayVirtualInterfaceGroup>
```

## describeManagedPrefixListById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describeManagedPrefixListById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describeManagedPrefixListById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.ManagedPrefixList>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describeManagedPrefixListById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describeManagedPrefixListById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.ManagedPrefixList>
```

## describeNatGatewayById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describeNatGatewayById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describeNatGatewayById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.NatGateway>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describeNatGatewayById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describeNatGatewayById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.NatGateway>
```

## describeNetworkAclById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describeNetworkAclById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describeNetworkAclById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.NetworkAcl>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describeNetworkAclById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describeNetworkAclById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.NetworkAcl>
```

## describeNetworkInterfaceById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describeNetworkInterfaceById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describeNetworkInterfaceById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.NetworkInterface>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describeNetworkInterfaceById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describeNetworkInterfaceById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.NetworkInterface>
```

## describePlacementGroupById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describePlacementGroupById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describePlacementGroupById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.PlacementGroup>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describePlacementGroupById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describePlacementGroupById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.PlacementGroup>
```

## describePrefixListById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describePrefixListById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describePrefixListById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.PrefixList>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describePrefixListById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describePrefixListById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.PrefixList>
```

## describePublicIpv4PoolById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describePublicIpv4PoolById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describePublicIpv4PoolById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.PublicIpv4Pool>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describePublicIpv4PoolById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describePublicIpv4PoolById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.PublicIpv4Pool>
```

## describeReplaceRootVolumeTaskById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describeReplaceRootVolumeTaskById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describeReplaceRootVolumeTaskById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.ReplaceRootVolumeTask>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describeReplaceRootVolumeTaskById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describeReplaceRootVolumeTaskById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.ReplaceRootVolumeTask>
```

## describeReservedInstanceById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describeReservedInstanceById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describeReservedInstanceById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.ReservedInstances>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describeReservedInstanceById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describeReservedInstanceById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.ReservedInstances>
```

## describeRouteTableById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describeRouteTableById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describeRouteTableById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.RouteTable>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describeRouteTableById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describeRouteTableById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.RouteTable>
```

## describeSecurityGroupById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describeSecurityGroupById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describeSecurityGroupById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.SecurityGroup>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describeSecurityGroupById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describeSecurityGroupById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.SecurityGroup>
```

## describeSnapshotById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describeSnapshotById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describeSnapshotById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.Snapshot>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describeSnapshotById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describeSnapshotById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.Snapshot>
```

## describeSubnetById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describeSubnetById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describeSubnetById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.Subnet>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describeSubnetById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describeSubnetById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.Subnet>
```

## describeTransitGatewayById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describeTransitGatewayById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describeTransitGatewayById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.TransitGateway>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describeTransitGatewayById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describeTransitGatewayById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.TransitGateway>
```

## describeTransitGatewayAttachmentById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describeTransitGatewayAttachmentById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describeTransitGatewayAttachmentById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.TransitGatewayAttachment>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describeTransitGatewayAttachmentById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describeTransitGatewayAttachmentById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.TransitGatewayAttachment>
```

## describeTransitGatewayMulticastDomainById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describeTransitGatewayMulticastDomainById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describeTransitGatewayMulticastDomainById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.TransitGatewayMulticastDomain>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describeTransitGatewayMulticastDomainById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describeTransitGatewayMulticastDomainById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.TransitGatewayMulticastDomain>
```

## describeTransitGatewayPolicyTableById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describeTransitGatewayPolicyTableById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describeTransitGatewayPolicyTableById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.TransitGatewayPolicyTable>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describeTransitGatewayPolicyTableById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describeTransitGatewayPolicyTableById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.TransitGatewayPolicyTable>
```

## describeTransitGatewayRouteTableById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describeTransitGatewayRouteTableById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describeTransitGatewayRouteTableById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.TransitGatewayRouteTable>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describeTransitGatewayRouteTableById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describeTransitGatewayRouteTableById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.TransitGatewayRouteTable>
```

## describeVerifiedAccessGroupById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describeVerifiedAccessGroupById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describeVerifiedAccessGroupById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.VerifiedAccessGroup>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describeVerifiedAccessGroupById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describeVerifiedAccessGroupById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.VerifiedAccessGroup>
```

## describeVerifiedAccessEndpointById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describeVerifiedAccessEndpointById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describeVerifiedAccessEndpointById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.VerifiedAccessEndpoint>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describeVerifiedAccessEndpointById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describeVerifiedAccessEndpointById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.VerifiedAccessEndpoint>
```

## describeVerifiedAccessTrustProviderById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describeVerifiedAccessTrustProviderById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describeVerifiedAccessTrustProviderById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.VerifiedAccessTrustProvider>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describeVerifiedAccessTrustProviderById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describeVerifiedAccessTrustProviderById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.VerifiedAccessTrustProvider>
```

## describeVolumeById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describeVolumeById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describeVolumeById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.Volume>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describeVolumeById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describeVolumeById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.Volume>
```

## describeVpcById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describeVpcById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describeVpcById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.Vpc>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describeVpcById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describeVpcById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.Vpc>
```

## describeVpcEndpointById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describeVpcEndpointById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describeVpcEndpointById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.VpcEndpoint>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describeVpcEndpointById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describeVpcEndpointById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.VpcEndpoint>
```

## describeVpcEndpointServiceConfigurationById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describeVpcEndpointServiceConfigurationById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describeVpcEndpointServiceConfigurationById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.ServiceConfiguration>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describeVpcEndpointServiceConfigurationById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describeVpcEndpointServiceConfigurationById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.ServiceConfiguration>
```

## describeVpcPeeringConnectionById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describeVpcPeeringConnectionById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describeVpcPeeringConnectionById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.VpcPeeringConnection>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describeVpcPeeringConnectionById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describeVpcPeeringConnectionById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.VpcPeeringConnection>
```

## describeVpnConnectionById

### `aws-sdk`

```ts
import AWS from 'aws-sdk'
import { describeVpnConnectionById } from '@jcoreio/aws-sdk-get-by-id/v2/ec2'
```

#### Signature

```ts
declare async function describeVpnConnectionById(
  client: AWS.EC2,
  id: string
): Promise<AWS.EC2.VpnConnection>
```

### `@aws-sdk/client-ec2`

```ts
import EC2 from '@aws-sdk/client-ec2'
import { describeVpnConnectionById } from '@jcoreio/aws-sdk-get-by-id/v3/ec2'
```

#### Signature

```ts
declare async function describeVpnConnectionById(
  client: EC2.EC2Client,
  id: string
): Promise<EC2.VpnConnection>
```

<!-- defsend -->

# `NotFoundError`

```ts
import { NotFoundError } from '@jcoreio/aws-sdk-get-by-id/errors'
```

### Signature

```ts
export class NotFoundError extends Error {
  constructor(
    public readonly entityName: string,
    public readonly idProp: string,
    public readonly idValue: string
  ) {
    super(`${entityName} with ${idProp} ${idValue} not found`)
  }
}
```
