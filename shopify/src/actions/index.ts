import '@botpress/client'
import { getCustomerOrders } from './get-customerOrders'
import { getCustomers } from './get-customers'
import { getProducts } from './get-products'
import { getProductVariants } from './get-productVariant'
import { makeApiRequest } from './makeApiRequest'

export default { getProducts, getProductVariants, getCustomers, getCustomerOrders, makeApiRequest }
