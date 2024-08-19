import { IntegrationDefinitionProps, z } from '@botpress/sdk'

export const states = {
  configuration: {
    type: 'integration',
    schema: z.object({ webhookIds: z.array(z.string()).optional() }),
  },
} satisfies IntegrationDefinitionProps['states']
