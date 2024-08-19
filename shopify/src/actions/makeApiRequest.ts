import axios, { AxiosResponse } from "axios";
import * as botpress from '.botpress'

type MakeApiRequest = botpress.IntegrationProps['actions']['makeApiRequest']
type MakeApiRequestInput = botpress.actions.makeApiRequest.input.Input
type MakeApiRequestOuput = botpress.actions.makeApiRequest.output.Output
type IntegrationLogger = botpress.Client['client']['logger']

export const makeRequest = async (url: string, input: MakeApiRequestInput, accessToken: string): Promise<AxiosResponse> => {
    return await axios({
        method: input.method,
        url: url,
        data: input.requestBody ? JSON.parse(input.requestBody) : {},
        params: input.params ? JSON.parse(input.params) : {},
        headers: {
            'X-Shopify-Access-Token': accessToken,
            ...(input.headers ? JSON.parse(input.headers) : {}),
        },
    });
  };

const handleError = (errorMsg: string, error: any, logger: IntegrationLogger) => {
    const fullErrorMsg = `${errorMsg} ${
        error?.response?.status || error?.message || "Unknown Error"
      }`;
      logger.forBot().error(fullErrorMsg);

    return {
        success: false,
        error: fullErrorMsg,
    } as const;
};

export const makeApiRequest: MakeApiRequest = async ({input, ctx, logger}): Promise<MakeApiRequestOuput> => {

const url = `https://${ctx.configuration.shopName}.myshopify.com/admin/api/${input.path}`;

  try {
    logger.forBot().info(`Making API request to ${url} with method ${input.method}, headers ${input.headers}, params ${input.params}, and body ${input.requestBody}`);
    const res = await makeRequest(url, input, ctx.configuration.access_token);

    return { success: true, body: res.data, };

  } catch (e) {
    const errorMsg = `'Make API request' error:`;
    return handleError(errorMsg, e, logger);
  }

};
