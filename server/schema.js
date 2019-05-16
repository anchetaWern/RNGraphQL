const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    pokemon(id: ID!): Pokemon
  }

  type Pokemon {
    id: ID!
    name: String
    desc: String
    pic: String
    types: [PokemonType]
  }

  type PokemonType {
    id: Int
    name: String
  }
`;

module.exports = typeDefs;