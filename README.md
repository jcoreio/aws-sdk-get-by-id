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
  - [`describeEgressOnlyInternetGatewayById`](#describeegressonlyinternetgatewaybyid)
  - [`describeElasticGpuById`](#describeelasticgpubyid)
  - [`describeExportImageTaskById`](#describeexportimagetaskbyid)
  - [`describeExportTaskById`](#describeexporttaskbyid)
  - [`describeInstanceById`](#describeinstancebyid)
  - [`describeSecurityGroupById`](#describesecuritygroupbyid)
  - [`describeSnapshotById`](#describesnapshotbyid)
  - [`describeSubnetById`](#describesubnetbyid)
  - [`describeVolumeById`](#describevolumebyid)
  - [`describeVpcById`](#describevpcbyid)

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
