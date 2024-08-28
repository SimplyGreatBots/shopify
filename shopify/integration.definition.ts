import { IntegrationDefinition } from '@botpress/sdk'
import { INTEGRATION_NAME } from './src/const'
import { actions } from './src/definitions/actions'
import { configuration } from './src/definitions/configuration'
import { events } from './src/definitions/events'
import { states } from './src/definitions/states'

export default new IntegrationDefinition({
  name: INTEGRATION_NAME,
  version: '1.1.6',
  readme: 'hub.md',
  icon: 'icon.svg',
  configuration,
  actions,
  states,
  events,
})
