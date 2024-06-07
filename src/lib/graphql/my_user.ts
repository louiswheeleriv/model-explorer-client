import { ApolloClient, gql } from '@apollo/client/core';
import type { MyUserQuery } from "../../__generated__/graphql";

const queryString = gql`
  query myUser {
    myUser {
      username
      email
    }
  }`;

export default async function myUser(client: ApolloClient<object>): Promise<MyUserQuery> {
  const { data } = await client.query<MyUserQuery>({
    query: queryString,
    variables: {},
    fetchPolicy: "no-cache",
  });
  return data;
}
