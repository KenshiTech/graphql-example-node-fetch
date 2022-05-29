import fetch from "node-fetch";

/**
 * This is the Kenshi Deep Index endpoint for GraphQL
 */
const endpoint = "https://api.kenshi.io/index/graphql";
const apikey = "API_KEY";
const owner = "API_KEY_OWNER";

/**
 * Define your GraphQL query here
 */
const query = `{
    getEntries(blockchain: "binance-testnet", apikey: "${apikey}", owner: "${owner}") {
      event {
        name
      }
    }
  }`;

/**
 * Post request sending the GraphQL query to the
 * Kenshi Deep Index endpoint
 */
const response = await fetch(endpoint, {
  method: "POST",
  body: JSON.stringify({ query }),
});

/**
 * Receive the data and print it
 */
const data = await response.json();
console.log(data);
