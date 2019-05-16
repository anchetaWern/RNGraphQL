module.exports = {
  Query: {
    pokemon: (_, { id }, { dataSources }) =>
      dataSources.pokeAPI.getPokemonById({ id })
  }
};