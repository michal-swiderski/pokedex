import axios from 'axios';

const POKEAPI_URL = 'https://pokeapi.co/api/v2';
const POKEMON_ENDPOINT = '/pokemon';


const pokemons = [];

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

export async function fetchPokemonByName(name) {
    const cachedPokemon = pokemons.find(p => p.name === name)
    if (cachedPokemon) {
        return cachedPokemon;
    }

    try {
        const {data} = await axios.get(`${POKEAPI_URL}${POKEMON_ENDPOINT}/${name}`);
        pokemons.push(data);
        return data;
    } catch (error) {
        throw error;
    }
}
