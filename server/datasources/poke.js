const { RESTDataSource } = require('apollo-datasource-rest');

class PokeAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://pokeapi.co/api/v2/';
  }

  pokemonReducer(pokemon, pokemonSpecies) {
    return {
      id: pokemon.id || 0,
      name: pokemon.name,
      desc: this.getDescription(pokemonSpecies.flavor_text_entries),
      pic: pokemon.sprites.front_default,
      types: this.getTypes(pokemon.types)
    };
  }


  getDescription(entries) {
    return entries.find(item => item.language.name === 'en').flavor_text;
  }


  getTypes(types) {
    return types.map(({ slot, type }) => {
      return {
        "id": slot,
        "name": type.name
      }
    });
  }


  async getPokemonByName({ name }) {
    const response = await this.get(name);
    return this.pokemonReducer(response);
  }


  async getPokemonById({ id }) {
    const pokemonResponse = await this.get(`pokemon/${id}`);
    const pokemonSpeciesResponse = await this.get(`pokemon-species/${id}`);
    return this.pokemonReducer(pokemonResponse, pokemonSpeciesResponse);
  }



}

module.exports = PokeAPI;