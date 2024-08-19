import { IntegrationDefinitionProps, z } from '@botpress/sdk'
import { customerCreatedSchema, customerUpdatedSchema, orderCreatedSchema, orderUpdatedSchema, orderCancelledSchema,} from 'src/schemas'

export type OrderCreated = z.infer<typeof orderCreated.schema>

const orderCreated = {
  schema: orderCreatedSchema,
  ui: {},
}

export type OrderUpdated = z.infer<typeof orderUpdated.schema>

const orderUpdated = {
  schema: orderUpdatedSchema,
}

export type OrdeCancelled = z.infer<typeof orderCancelled.schema>

const orderCancelled = {
  schema: orderCancelledSchema,
  ui: {},
}

export type CustomerCreated = z.infer<typeof customerCreated.schema>

const customerCreated = {
  schema: customerCreatedSchema,
  ui: {},
}

export type CustomerUpdated = z.infer<typeof customerUpdated.schema>

const customerUpdated = {
  schema: customerUpdatedSchema,
  ui: {},
}

export const events = {
  orderCreated,
  orderUpdated,
  orderCancelled,
  customerCreated,
  customerUpdated
} satisfies IntegrationDefinitionProps['events']
