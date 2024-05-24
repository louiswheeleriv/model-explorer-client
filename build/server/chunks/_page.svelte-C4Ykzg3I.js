import { c as create_ssr_component, v as validate_component, i as is_promise, n as noop, d as each, e as escape } from './ssr-0pzszXOP.js';
import { gql, ApolloClient, InMemoryCache } from '@apollo/client/core/index.js';

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
async function listFactions(client) {
  const { data } = await client.query({
    query: queryString,
    variables: {},
    fetchPolicy: "no-cache"
  });
  return data;
}
const FactionsTable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { modelExplorerGraphQLClient } = $$props;
  const factionsPromise = listFactions(modelExplorerGraphQLClient);
  if ($$props.modelExplorerGraphQLClient === void 0 && $$bindings.modelExplorerGraphQLClient && modelExplorerGraphQLClient !== void 0)
    $$bindings.modelExplorerGraphQLClient(modelExplorerGraphQLClient);
  return `<div>${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
    Loading factions...
  `;
    }
    return function(factions) {
      return ` <table><thead data-svelte-h="svelte-ejdve4"><th>ID</th> <th>Name</th></thead> <tbody>${each(factions.factions, ({ id, name }, i) => {
        return `<tr><td>${escape(id)}</td> <td>${escape(name)}</td> </tr>`;
      })}</tbody></table> `;
    }(__value);
  }(factionsPromise)}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const serverDomain = "http://localhost:3000";
  const modelExplorerGraphQLClient = new ApolloClient({
    uri: serverDomain + "/graphql",
    cache: new InMemoryCache()
  });
  return `<main><h2 data-svelte-h="svelte-3nfj36">Model Explorer</h2> <h3 data-svelte-h="svelte-1dx3lq5">Factions</h3> ${validate_component(FactionsTable, "FactionsTable").$$render($$result, { modelExplorerGraphQLClient }, {}, {})}</main> `;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-C4Ykzg3I.js.map
