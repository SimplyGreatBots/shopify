import { orderUpdatedSchema } from 'src/schemas'
import * as botpress from '.botpress'

type Implementation = ConstructorParameters<typeof botpress.Integration>[0]
type RegisterFunction = Implementation['handler']
type IntegrationContext = Parameters<RegisterFunction>[0]['ctx']
type Client = Parameters<RegisterFunction>[0]['client']

export const fireOrderUpdated = async ({
  req,
  client,
  ctx,
  logger,
}: {
  req: any
  client: Client
  ctx: IntegrationContext
  logger: any
}) => {
  const shopifyEvent = JSON.parse(req.body)
const payload = {
    order_id: shopifyEvent.id,
    shopName: ctx.configuration.shopName,
    confirmation_number: shopifyEvent.confirmation_number,
    created_at: shopifyEvent.created_at,
    currency: shopifyEvent.currency,
    current_subtotal_price: shopifyEvent.current_subtotal_price,
    current_total_discounts: shopifyEvent.current_total_discounts,
    current_total_price: shopifyEvent.current_total_price,
    current_total_tax: shopifyEvent.current_total_tax,
    customer_locale: shopifyEvent.customer_locale,
    order_status_url: shopifyEvent.order_status_url,
    tags: shopifyEvent.tags,
    fullBody: req,
}

const parsedObject = orderUpdatedSchema.parse(payload)

  logger.forBot().info(`Recieved an order updated event for ${shopifyEvent.id}`)

  await client.createEvent({
    type: 'orderUpdated',
    payload: parsedObject,
  })
}
