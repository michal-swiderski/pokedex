import axios from 'axios';

const POKEAPI_URL = 'https://pokeapi.co/api/v2';
const POKEMON_ENDPOINT = '/pokemon';
const POKEMON_SPECIES_ENDPOINT = '/pokemon-species';


const pokemons = [];

export async function getPokemonCount() {
    try {
        const {data} = await axios.get(`${POKEAPI_URL}${POKEMON_ENDPOINT}`);
        return data.count;
    } catch (error) {

    }
}

export async function fetchPokemons(limit = 20, offset = 0) {
    try {
        const {data} = await axios.get(`${POKEAPI_URL}${POKEMON_ENDPOINT}?limit=${limit}&offset=${offset}`);

        const result = [];
        const requests = [];
        data.results.forEach(entry => {
            //if a pokemon already exists in our array, don't fetch it again;
            const pokemon = pokemons.find(p => p.name === entry.name);
            if (pokemon) {
                pokemons.push(pokemon);
                result.push(pokemon);
                return;
            }
            const req = axios.get(entry.url).then(({data}) => {
                result.push(data);
                pokemons.push(data);
            });
            requests.push(req);
        });

        await Promise.all(requests);
        result.sort((a, b) => a.id - b.id);
        return result;
    } catch (error) {
        throw error;
    }
}