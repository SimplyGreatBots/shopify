import { INTEGRATION_NAME } from 'src/const'
import { z } from '@botpress/sdk'

export const orderCreatedSchema = z.object({
  type: z.literal(`${INTEGRATION_NAME}:orderCreated`).optional(),
  order_id: z.number(),
  shopName: z.string(),
  confirmation_number: z.string(),
  created_at: z.string(),
  currency: z.string().optional(),
  current_subtotal_price: z.string().optional(),
  current_total_discounts: z.string().optional(),
  current_total_price: z.string().optional(),
  current_total_tax: z.string().optional(),
  customer_locale: z.string().optional(),
  order_status_url: z.string().optional(),
  tags: z.string().optional(),
  fullBody: z.object({}).passthrough(),
})

export type orderCreated = z.infer<typeof orderCreatedSchema>

export const orderUpdatedSchema = z.object({
  type: z.literal(`${INTEGRATION_NAME}:orderUpdated`).optional(),
  order_id: z.number(),
  shopName: z.string(),
  cancel_reason: z.string().optional(),
  cancelled_at: z.string().optional(),
  closed_at: z.string().optional(),
  confirmation_number: z.string().optional(),
  confirmed: z.boolean().optional(),
  created_at: z.string(),
  currency: z.string(),
  current_subtotal_price: z.string(),
  current_total_discounts: z.string(),
  current_total_price: z.string(),
  current_total_tax: z.string(),
  customer_locale: z.string().optional(),
  tags: z.string().optional(),
  fullBody: z.object({}).passthrough(),
});

export type orderUpdated = z.infer<typeof orderUpdatedSchema>

export const orderCancelledSchema = z.object({
  type: z.literal(`${INTEGRATION_NAME}:orderCancelled`).optional(),
  order_id: z.number(),
  shopName: z.string(),
  cancel_reason: z.string(),
  closed_at: z.string().optional(),
  currency: z.string().optional(),
  current_subtotal_price: z.string().optional(),
  current_total_discounts: z.string().optional(),
  current_total_price: z.string().optional(),
  current_total_tax: z.string().optional(),
  customer_locale: z.string().optional(),
  order_status_url: z.string().optional(),
  tags: z.string().optional(),
  fullBody: z.object({}).passthrough(),
})

export type orderCancelled = z.infer<typeof orderCancelledSchema>

export const customerCreatedSchema = z.object({
  type: z.literal(`${INTEGRATION_NAME}:customerCreated`).optional(),
  shopName: z.string(),
  id: z.number(),
  email: z.string().nullable().optional(),
  accepts_marketing: z.boolean().nullable().optional(),
  first_name: z.string().nullable().optional(),
  last_name: z.string().nullable().optional(),
  orders_count: z.number().nullable().optional(),
  state: z.string().nullable().optional(),
  total_spent: z.string().nullable().optional(),
  last_order_id: z.string().nullable().optional(),
  note: z.string().nullable().optional(),
})

export type newCustomer = z.infer<typeof customerCreatedSchema>

export const customerUpdatedSchema = z.object({
  type: z.literal(`${INTEGRATION_NAME}:customerUpdate`).optional(),
  shopName: z.string(),
  id: z.number(),
  email: z.string().nullable().optional(),
  created_at: z.string(),
  updated_at: z.string(),
  first_name: z.string().nullable().optional(),
  last_name: z.string().nullable().optional(),
  orders_count: z.number().nullable().optional(),
  state: z.string().nullable().optional(),
  total_spent: z.string().nullable().optional(),
  last_order_id: z.string().nullable().optional(),
  note: z.string().nullable().optional(),
  verified_email: z.boolean().optional(),
  multipass_identifier: z.string().nullable().optional(),
  tax_exempt: z.boolean().optional(),
  tags: z.string().optional(),
  last_order_name: z.string().nullable().optional(),
  currency: z.string(),
  phone: z.string().nullable().optional(),
  addresses: z.array(z.object({})).optional(),
  tax_exemptions: z.array(z.object({})).optional(),
  email_marketing_consent: z.boolean().nullable().optional(),
  sms_marketing_consent: z.boolean().nullable().optional(),
  admin_graphql_api_id: z.string(),
})

export type updateCustomer = z.infer<typeof customerUpdatedSchema>