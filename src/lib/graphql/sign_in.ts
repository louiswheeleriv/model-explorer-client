import { ApolloClient, gql } from '@apollo/client/core';
import type { SignInMutation } from "../../__generated__/graphql";

const mutationString = gql`
mutation SignIn($input: SignInInput!) {
  signIn(input: $input) {
    user {
      id
      username
      email
    }
  }
}`;

export default async function signIn(client: ApolloClient<object>, username: String, password: String): Promise<SignInMutation> {
  const { data } = await client.mutate<SignInMutation>({
    mutation: mutationString,
    variables: {
      input: {
        username: username,
        password: password
      }
    },
    fetchPolicy: "no-cache",
  });
  return data;
}
