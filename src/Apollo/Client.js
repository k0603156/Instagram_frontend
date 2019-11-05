import ApolloClient from "apollo-boost";
import { defaults, resolvers } from "./LocalState";

export default new ApolloClient({
  uri: "http://localhost:8001",
  clientState: {
    defaults,
    resolvers
  },
  request: async operation => {
    const token = await localStorage.getItem("token");
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ""
      }
    });
  },
  onError: ({ graphQLErrors, networkError, response, operation, forward }) => {
    if (graphQLErrors) {
    }
    if (networkError) {
    }
  }
});
