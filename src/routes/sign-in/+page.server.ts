// import { redirect } from '@sveltejs/kit';
// // import { createSession } from '../../store/db';
// // import FactionsTable from '../lib/components/FactionsTable.svelte';
// import { dev } from '$app/environment';

// import { ApolloClient } from '@apollo/client/core';
// import signIn from '../../lib/graphql/sign_in';

// // Component params
// export let modelExplorerGraphQLClient: ApolloClient<object>;

// // const signInPromise = signIn(modelExplorerGraphQLClient);

// export const actions = {
//     signIn: async ({ request, cookies }) => {
//         const form = await request.formData();
//         const username = form.get('username');
//         const password = form.get('password');
//         if (username === '' || password === '') {
//             throw redirect(303, '/');
//         }
//         const response = await signIn(modelExplorerGraphQLClient, username, password);
//         // cookies.set('session_id', response., {
//         //     path: '/',
//         //     httpOnly: true,
//         //     sameSite: 'strict',
//         //     secure: !dev,
//         //     maxAge: 60 * 60 * 24 * 7 // one week
//         // });
//         throw redirect(303, '/protected');
//     }
// };
