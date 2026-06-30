import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient(process.env.WORDPRESS_API_URL || "http://localhost/nepalwander/graphql");

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

export async function getPlaceBySlug(slug) {
  const query = `
    {
      placeBy(slug: "${slug}") {
        id
        title
        slug
        placeDetails {
          priceFrom
          duration
          groupSize
          difficulty
          bestTimeToVisit
          highlights
          itinerary
          mapLatitude
          mapLongitude
          imageGallery {
            node {
              sourceUrl
            }
          }
          parentDestination {
            nodes {
              ... on Destination {
                title
                slug
              }
            }
          }
        }
      }
    }
  `;

  const data = await client.request(query);
  return data.placeBy;
}

export async function getAllArticles() {
  const query = `
    {
      allTravelArticle {
        nodes {
          id
          title
          slug
          travelArticleDetails {
            excerpt
            readTime
            category
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
  return data.allTravelArticle.nodes;
}

export async function getArticleBySlug(slug) {
  const query = `
    {
      travelArticleBy(slug: "${slug}") {
        id
        title
        slug
        date
        travelArticleDetails {
          excerpt
          readTime
          category
          heroImage {
            node {
              sourceUrl
            }
          }
        }
        content
      }
    }
  `;

  const data = await client.request(query);
  return data.travelArticleBy;
}

export async function getAllTrekkingRoutes() {
  const query = `
    {
      trekkingRoutes {
        nodes {
          id
          title
          slug
          trekkingRouteDetails {
            difficulty
            duration
            maxElevation
            bestSeason
            priceFrom
            overview
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
  return data.trekkingRoutes.nodes;
}

export async function getTrekkingRouteBySlug(slug) {
  const query = `
    {
      trekkingRouteBy(slug: "${slug}") {
        id
        title
        slug
        trekkingRouteDetails {
          difficulty
          duration
          maxElevation
          bestSeason
          priceFrom
          overview
          itinerary
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
  return data.trekkingRouteBy;
}

//search
export async function searchAll(query) {
  const q = query.toLowerCase();

  const [destinations, routes, articles] = await Promise.all([
    getAllDestinations(),
    getAllTrekkingRoutes(),
    getAllArticles(),
  ]);

  const filteredDestinations = destinations.filter((d) =>
    d.title.toLowerCase().includes(q) ||
    d.destinationDetails.shortDescription?.toLowerCase().includes(q)
  );

  const filteredRoutes = routes.filter((r) =>
    r.title.toLowerCase().includes(q) ||
    r.trekkingRouteDetails.overview?.toLowerCase().includes(q)
  );

  const filteredArticles = articles.filter((a) =>
    a.title.toLowerCase().includes(q) ||
    a.travelArticleDetails.excerpt?.toLowerCase().includes(q)
  );

  return { destinations: filteredDestinations, routes: filteredRoutes, articles: filteredArticles };
}