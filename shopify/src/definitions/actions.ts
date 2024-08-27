import { IntegrationDefinitionProps, z} from '@botpress/sdk'
import { describe } from 'node:test'

type ActionDefinition = NonNullable<IntegrationDefinitionProps['actions']>[string]

const getProducts = {
  title: 'Get Products List',
  description: 'Gets a list of all products based on the parameters',
  input: {
    schema: z.object({
      ids: z.string().optional().describe('Comma-separated list of product IDs.'),
      title: z.string().optional().describe('The exact product title.'),
      product_type: z.string().optional().describe('Exact product type.'),
      limit: z
      .number()
      .min(0)
      .max(250)
      .default(50)
      .optional()
      .describe('Return up to this many results per page. Default is 50, Maximum is 250'),
    }),
  },
  output: {
    schema: z.object({
      productsList: z.array(z.object({}).passthrough()),
    }),
  },
} satisfies ActionDefinition

const getProductVariants = {
  title: 'Get Product Variants List',
  description: 'Gets a list of all product variants based on the parameters',
  input: {
    schema: z.object({
      product_id: z.string().optional().describe('The product ID to retrieve its variants'),
      limit: z
        .number()
        .min(0)
        .max(250)
        .default(50)
        .optional()
        .describe('Return up to this many results per page. Default is 50, Maximum is 250'),
    }),
  },
  output: {
    schema: z.object({
      productVariantsList: z.array(z.object({}).passthrough()),
    }),
  },
} satisfies ActionDefinition

const getCustomers = {
  title: 'Get Customers List',
  description: 'Gets a list of all customers based on the parameters',
  input: {
    schema: z.object({
      ids: z.string().optional().describe('Comma-separated list of customers IDs.'),
      limit: z
        .number()
        .min(0)
        .max(250)
        .default(50)
        .optional()
        .describe('Return up to this many results per page. Default is 50, Maximum is 250'),
    }),
  },
  output: {
    schema: z.object({
      customersList: z.array(z.object({}).passthrough()),
    }),
  },
} satisfies ActionDefinition

const getCustomerOrders = {
  title: 'Get Customer Orders List',
  description: 'Gets a list of all customer orders based on the parameters',
  input: {
    schema: z.object({
      customer_id: z.string().optional().describe('The exact customer ID.'),
      status: z
        .string()
        .optional()
        .default('open')
        .describe(
          'The status of the order. It could be any of the following variables: "open","closed","cancelled","any"'
        ),
    }),
  },
  output: {
    schema: z.object({
      customerOrdersList: z.array(z.object({}).passthrough()),
    }),
  },
} satisfies ActionDefinition

const makeApiRequest = {
  title: 'Make API Request',
  description: 'Makes a request to Shopify API',
  input: {
    schema: z.object({
      method: z.string().describe('The HTTP method to use for the request. Options: GET, POST, PUT, DEL'),
      path: z.string().describe('The endpoint of the request. Only paths after "/api/2024-07" is needed. Example: products.json'),
      headers: z.string().optional().describe('The headers to include in the request (JSON Stringified). Example: { "Content-Type": "application/json" }'),
      params: z.string().optional().describe('The query parameters to include in the request (JSON Stringified). Example: { "limit": 10 }'),
      requestBody: z.string().optional().describe('The body of the request (JSON Stringified). Example: Example: { "product": { "title": "Simply Great Product", "variants": [{ "price": "199.99" }] } }'),
    }),
    },
    output: {
      schema: z.object({
        success: z.boolean(),
        body: z.object({}).passthrough(),
      }).passthrough(),
    },
  } satisfies ActionDefinition

export const actions = { getProducts, getProductVariants, getCustomers, getCustomerOrders, makeApiRequest }
