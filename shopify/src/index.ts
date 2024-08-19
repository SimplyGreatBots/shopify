import actions from './actions'
import { handler } from './handler'
import { register } from './setup/register'
import { unregister } from './setup/unregister'
import * as botpress from '.botpress'

export default new botpress.Integration({
  register,
  unregister,
  channels: {},
  actions,
  handler
})
