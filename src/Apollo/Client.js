import ApolloClient from "apollo-boost";
import {
  defaults,
  resolvers
} from "./LocalState";

export default new ApolloClient({
  uri: "http://localhost:8001",
  clientState: {
    defaults,
    resolvers
  }
})