import axios from "axios";
import * as botpress from '.botpress'
import { SHOPIFY_API_VERSION } from '../const'

type MakeApiRequest = botpress.IntegrationProps['actions']['makeApiRequest']
type MakeApiRequestOuput = botpress.actions.makeApiRequest.output.Output

export const makeApiRequest: MakeApiRequest = async ({input, ctx, logger}): Promise<MakeApiRequestOuput> => {
    try {
      let config = {
        method: input.method,
        maxBodyLength: Infinity,
        url: `https://d4a820-b2.myshopify.com/admin/api/${SHOPIFY_API_VERSION}/${input.path}`,
        params: input.params ? JSON.parse(input.params) : {},
        headers: {
            'X-Shopify-Access-Token': ctx.configuration.access_token,
            ...(input.headers ? JSON.parse(input.headers) : {}),
        }
      };
      
      const response = await axios.request(config);
      logger.forBot().info('Successfully API Request made to Shopify:');
      return { success: true, body: response.data };
    } catch (error: any) {

      const fullErrorMsg = `${error} ${
        error?.response?.status || error?.message || "Unknown Error"
      }`;

      logger.forBot().error('API Request Failed with response:', error);

      return { success: false, body: { fullErrorMsg } };
    }
}