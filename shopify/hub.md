This integration enables you to connect your Botpress chatbot with Shopify, a leading e-commerce platform. With this integration, you can facilitate seamless interactions related to store operations directly from your chatbot.

To effectively use the integration, you'll need to provide your Shopify store name (as seen in the browser/URL) and the access token generated after creating a Shopify app.

## Tutorial Video
    [![image](https://i.imgur.com/mWb0uV9.png)](https://youtu.be/yjvsoaCvjmU)

## Configuration Setup

To set up the Shopify integration in Botpress, the following configurations are required:

1. **Shop/Store Name**: Found in the URL when accessing your Shopify store. For instance, if the URL to your store admin is \`https://admin.shopify.com/store/botpress-test-store\`, then the shop name you'll enter is \`botpress-test-store\`.
2. **API Access Token**: This token is essential for allowing Botpress to communicate with your Shopify store. To get a token you will need to create a new Shopify app (instructions below).

## Create Shopify App
1. Go to 'Apps and Sales Channels' in the Shopify dashboard.
2. Click on 'Develop Apps'.
3. Select 'Create an App' and give your app a name.
4. Click on 'API Credentials' and under 'Access Tokens', select 'Configure Admin API Scopes'
5. For this integration you will need to check the 'Read' access box for 'Customers', 'Orders', and 'Products'. This will give the bot the access to read each of these properties.
6. Click 'Save' and then 'Install app' to finish your installation. 
7. After installing you can go to 'API Credentials' and 'Admin API access token' to view/copy your token. 

## Enable Integration

To activate the Shopify integration in Botpress:

1. Access the Botpress admin dashboard.
2. Go to the "Integrations" tab.
3. Search for the Shopify integration and select "Enable" or "Configure."
4. Input the required Shop/Store Name and Admin API access token.
5. Save your configurations.

## Usage

### Actions
After enabling the integration, your Botpress chatbot can communicate with Shopify for product and customer queries using the actions below:

- Get Customer List: Returns a list of customers.
- Get Customer Order List: Returns a list of orders for a specific customer by status (open, closed, cancelled, or any).
- Get Product List: Returns a list of products using Id, Title, or Product Type.
- Get Product Variants List: Returns a list of variants of a product by Id.

### Events
After enabling the integration, your Botpres chatbot can receive events from Shopify using the events below:

- Order Created: Triggered when an order is created.
- Order Updated: Triggered when an order is updated. 
- Order Cancelled: Triggered when an order is cancelled. 
- Customer Created: Triggered when a customer is created.
- Customer Updated: Triggered when a customer is updated. 

 Note: You cannot link these events to specific conversations. These events are for storing event information within your chatbot (e.g., storing customer/order data in a table to query)

## Limitations
1. There may be rate limits applied by Shopify's API.
2. Events are not linked to conversations.
