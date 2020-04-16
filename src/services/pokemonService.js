import axios from 'axios';

const POKEAPI_URL = 'https://pokeapi.co/api/v2';
const POKEMON_ENDPOINT = '/pokemon';
const POKEMON_SPECIES_ENDPOINT = '/pokemon-species';


export async function fetchPokemonList() {
    try {
        const {data} = await axios.get(`${POKEAPI_URL}${POKEMON_ENDPOINT}?limit=-1`);
        return data.results;
    } catch (error) {
        throw error;
    }
}

export async function fetchPokemonListByType(type) {
    try {
        const {data} = await axios.get(`${POKEAPI_URL}/type/${type}`);
        return data.pokemon.map(el => el.pokemon);
    } catch (error) {
        throw error;
    }
}

export async function fetchPokemonByNameOrId(nameId) {
    try {
        const {data} = await axios.get(`${POKEAPI_URL}${POKEMON_ENDPOINT}/${nameId}`);
        return data;
    } catch (error) {
        if (error.request.status === 404) {
            return null;
        }
        throw error;
    }
}

export async function fetchPokemonSpeciesByName(name) {
    try {
        const {data} = await axios.get(`${POKEAPI_URL}${POKEMON_SPECIES_ENDPOINT}/${name}`);
        return data;
    } catch (error) {
        throw error;
    }
}
