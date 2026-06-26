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
            bestSeason
            distanceFromKathmandu
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

export async function getDestinationBySlug(slug) {
  const query = `
    {
      destinationBy(slug: "${slug}") {
        id
        title
        slug
        destinationDetails {
          shortDescription
          bestSeason
          distanceFromKathmandu
          elevation
          heroImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `;

  const data = await client.request(query);
  return data.destinationBy;
}

export async function getPlacesByDestination(destinationSlug) {
  const query = `
    {
      places {
        nodes {
          id
          title
          slug
          placeDetails {
            priceFrom
            duration
            difficulty
            bestTimeToVisit
            parentDestination {
              nodes {
                ... on Destination {
                  slug
                }
              }
            }
            imageGallery {
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
  return data.places.nodes.filter((place) =>
    place.placeDetails.parentDestination.nodes.some(
      (dest) => dest.slug === destinationSlug
    )
  );
}