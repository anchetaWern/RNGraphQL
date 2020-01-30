import React, { Component } from "react";
import { ActivityIndicator } from "react-native";

import { ApolloProvider, Query } from "react-apollo";
import gql from "graphql-tag";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

import Pokemon from "./src/components/Pokemon";
import getRandomInt from "./src/helpers/getRandomInt";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "http://192.168.1.73:4000/graphql"
});
const client = new ApolloClient({
  link,
  cache
});

export const AppContext = React.createContext({ data: { pokemon: null } });

export default class App extends Component {
  state = {
    query: null
  };

  componentDidMount() {
    const query = this.getQuery();
    this.setState({
      query
    });
  }

  getQuery = () => {
    const randomID = getRandomInt(1, 807);
    return `
      query GetPokemonById {
        pokemon(id: ${randomID}) {
          id,
          name,
          desc,
          pic,
          types {
            id,
            name
          }
        }
      }
    `;
  };

  onGetNewPokemon = () => {
    const query = this.getQuery();
    this.setState({
      query
    });
  };

  render() {
    const { query } = this.state;
    if (!query) return null;
    // return <ActivityIndicator size="large" color="#0000ff" />;
    return (
      <ApolloProvider client={client}>
        <Query
          query={gql`
            ${query}
          `}
        >
          {({ loading, error, data }) => {
            if (loading || error)
              return <ActivityIndicator size="large" color="#0000ff" />;
            return (
              <AppContext.Provider
                value={{ ...data.pokemon, onPress: this.onGetNewPokemon }}
                style={styles.container}
              >
                <Pokemon />
              </AppContext.Provider>
            );
          }}
        </Query>
      </ApolloProvider>
    );
  }
  //
}
//

const styles = {
  container: {
    flex: 1
  }
};
