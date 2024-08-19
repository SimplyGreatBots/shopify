import { fireCustomerCreated } from './events/customerCreated'
import { fireCustomerUpdated } from './events/customerUpdated'
import { fireOrderCancelled } from './events/orderCancelled'
import { fireOrderCreated } from './events/orderCreated'
import { fireOrderUpdated } from './events/orderUpdated'
import * as botpress from '.botpress'

export const handler: botpress.IntegrationProps['handler'] = async ({ req, client, ctx, logger }) => {
  if (req.headers['x-shopify-topic'] === 'orders/create') {
    return fireOrderCreated({ req, client, ctx, logger })
  }

  if (req.headers['x-shopify-topic'] === 'orders/updated') {
    return fireOrderUpdated({ req, client, ctx, logger })
  }

  if (req.headers['x-shopify-topic'] === 'orders/cancelled') {
    return fireOrderCancelled({ req, client, ctx, logger })
  }

  if (req.headers['x-shopify-topic'] === 'customers/create') {
    return fireCustomerCreated({ req, client, ctx, logger })
  }

  if (req.headers['x-shopify-topic'] === 'customers/update') {
    return fireCustomerUpdated({ req, client, ctx, logger })
  }
}
