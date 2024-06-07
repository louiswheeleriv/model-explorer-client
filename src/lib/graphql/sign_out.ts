import { ApolloClient, gql } from '@apollo/client/core';
import type { SignOutMutation } from "../../__generated__/graphql";

const mutationString = gql`
  mutation SignOut {
    signOut(input: {}) {
      success
    }
  }`;

export default async function signOut(client: ApolloClient<object>): Promise<SignOutMutation> {
  const { data } = await client.mutate<SignOutMutation>({
    mutation: mutationString,
    variables: {},
    fetchPolicy: "no-cache",
  });
  if (!data) throw new Error('Unable to sign out');
  return data;
}
