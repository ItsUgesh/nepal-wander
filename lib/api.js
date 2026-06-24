import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient("http://localhost/nepalwander/graphql");

export async function getAllDestinations() {
  const query = `
    {
      destinations {
        nodes {
          id
          title
          slug
          destinationDetails {
            shortDescription
            heroImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    }
  `;

  const data = await client.request(query);
  return data.destinations.nodes;
}