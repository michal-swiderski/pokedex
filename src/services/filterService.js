import {fetchPokemonByNameOrId, fetchPokemonList, fetchPokemonListByType} from "./pokemonService";
import {intersectionBy} from 'lodash';

export async function getFilteredPokemons(name = '', types = [], limit = 20, offset = 0) {
    try {
        const pokemonNamesList = await fetchPokemonList();
        const filteredByName = pokemonNamesList.filter(pokemon => pokemon.name.startsWith(name));

        const pokemonsByType = [];
        const typeRequests = [];
        types.forEach(type => {
            const req = fetchPokemonListByType(type).then(pokemons => {
                pokemonsByType.push(pokemons)
            });
            typeRequests.push(req);
        });

        await Promise.all(typeRequests);
        let filtered = intersectionBy(filteredByName, ...pokemonsByType, 'name');
        const count = filtered.length;
        filtered = filtered.slice(offset, offset + limit);

        const filteredResults = [];
        await Promise.all(filtered.map(({name}) => fetchPokemonByNameOrId(name).then(pokemon => filteredResults.push(pokemon))));

        return {
            totalCount: count,
            results: filteredResults.sort((a, b) => a.id - b.id)
        };
    } catch (error) {
        throw error;
    }
}