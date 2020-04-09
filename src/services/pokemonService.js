import axios from 'axios';

const POKEAPI_URL = 'https://pokeapi.co/api/v2';
const POKEMON_ENDPOINT = '/pokemon';
const POKEMON_SPECIES_ENDPOINT = '/pokemon-species';

const pokemons = new Map();
const pokemonSpecies = new Map();

export async function fetchPokemon(id = 1) {
    try {
        if (pokemons.has(id)) {
            return pokemons.get(id);
        }
        const {data} = await axios.get(`${POKEAPI_URL}${POKEMON_ENDPOINT}/${id}`);
        pokemons.set(data.id, data);
        return data;
    } catch (error) {
        throw error;
    }
}

export async function getPokemonSpecies(id = 1) {
    try {
        if (pokemonSpecies.has(id)) {
            return pokemonSpecies.get(id);
        }
        const {data} = await axios.get(`${POKEAPI_URL}${POKEMON_SPECIES_ENDPOINT}/${id}`);
        pokemonSpecies.set(data.id, data);
        return data;
    } catch (error) {
        throw error;
    }
}