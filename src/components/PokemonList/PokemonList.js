import React, {useEffect, useState} from 'react';
import './PokemonList.scss';
import {useParams} from 'react-router-dom';
import {debounce} from 'lodash';
import {getFilteredPokemons} from "../../services/filterService";
import PokemonCard from "../PokemonCard/PokemonCard";
import PokemonListToolbar from "../PokemonListToolbar/PokemonListToolbar";

const PokemonList = () => {

    const {page} = useParams();

    const [pokemons, setPokemons] = useState([]);
    const [totalCount, setTotalCount] = useState([]);

    const [nameFilter, setNameFilter] = useState('');
    const [types, setTypes] = useState([]);

    useEffect(() => {
        try {
            getFilteredPokemons(nameFilter, types, 20, (page - 1) * 20).then(({totalCount, results}) => {
                setPokemons(results);
                setTotalCount(totalCount);
            });
        } catch (e) {
            //TODO proper error handling
            console.error(e);
        }
    }, [page, nameFilter, types]);

    return (
        <>
            <PokemonListToolbar pageCount={Math.ceil(totalCount / 20)}
                                onName={debounce((name) => setNameFilter(name), 300)}
                                onFilter={(types) => setTypes(types)}
            />
            <div className="pokemon-list">
                {pokemons.map(p =>
                    <div className="pokemon-list__pokemon-wrapper" key={p.id}>
                        <PokemonCard pokemon={p}/>
                    </div>
                )}
            </div>
        </>
    );
};

export default PokemonList;