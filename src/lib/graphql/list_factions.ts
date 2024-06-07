import { ApolloClient, gql } from '@apollo/client/core';
import type { ListFactionsQuery } from "../../__generated__/graphql";

const queryString = gql`
  query listFactions {
    factions {
      id
      name
      models {
        name
        userModels {
          user {
            username
          }
          name
          status
          quantity
          userImageAssociations {
            userImage {
              url
            }
          }
        }
      }
    }
  }`;

export default async function listFactions(client: ApolloClient<object>): Promise<ListFactionsQuery> {
  console.log('requesting factions list');
  const { data } = await client.query<ListFactionsQuery>({
    query: queryString,
    variables: {},
    fetchPolicy: "no-cache",
  });
  console.log('got factions list');
  return data;
}
