import React, {useEffect, useState} from 'react';
import './PokemonList.scss';
import {useHistory, useParams} from 'react-router-dom';
import {getFilteredPokemons} from "../../services/filterService";
import PokemonCard from "../PokemonCard/PokemonCard";
import Pagination from "../Pagination/Pagination";

const PokemonList = () => {

    const [pokemons, setPokemons] = useState([]);
    const [totalCount, setTotalCount] = useState([]);

    const {page} = useParams();
    const history = useHistory();

    useEffect(() => {
        try {
            getFilteredPokemons('', [], 20, (page - 1) * 20).then(({totalCount, results}) => {
                setPokemons(results);
                setTotalCount(totalCount);
            });
        } catch (e) {
            //TODO proper error handling
            console.error(e);
        }
    }, [page]);

    return (
        <div>

            <Pagination pages={10} page={Number.parseInt(page)} onChange={(page) => {
                history.push('/' + page)
            }}/>
            <div className="pokemon-list">
                {pokemons.map(p =>
                    <div className="pokemon-list__pokemon-wrapper" key={p.id}>
                        <PokemonCard pokemon={p}/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PokemonList;