import React, {useEffect, useState} from 'react';
import './PokemonList.scss';
import {useHistory, useParams} from 'react-router-dom';
import {debounce} from 'lodash';
import {getFilteredPokemons} from "../../services/filterService";
import Media from "react-media";
import PokemonCard from "../PokemonCard/PokemonCard";
import PokemonListToolbar from "../PokemonListToolbar/PokemonListToolbar";
import PokemonListEntry from "../PokemonListEntry/PokemonListEntry";
import Loader from "../Loader/Loader";

const PokemonList = () => {

    const {page} = useParams();
    const history = useHistory();

    const [pokemons, setPokemons] = useState([]);
    const [totalCount, setTotalCount] = useState([]);

    const [nameFilter, setNameFilter] = useState('');
    const [types, setTypes] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getFilteredPokemons(nameFilter, types, 20, (page - 1) * 20)
            .then(({totalCount, results}) => {
                setPokemons(results);
                setTotalCount(totalCount);
                setIsLoading(false);
            })
            .catch(e => {
                console.error(e);
                history.push('/error');
            });
    }, [page, nameFilter, types, history]);


    const cardList = pokemons.map(p =>
        <div className="pokemon-list__pokemon-wrapper" key={p.id}>
            <PokemonCard pokemon={p}/>
        </div>);

    const mobileList = pokemons.map(p =>
        <div className="pokemon-list__pokemon-wrapper" key={p.id}>
            <PokemonListEntry pokemon={p}/>
        </div>);

    const pokemonList = (
        <div className="pokemon-list">
            <Media queries={{
                sm: "(min-width: 0) and (max-width: 420px)"
            }}>
                {
                    matches => matches.sm ? mobileList : cardList
                }
            </Media>
        </div>)

    return (
        <>
            <PokemonListToolbar
                showPagination={pokemons.length !== 0}
                pageCount={Math.ceil(totalCount / 20)}
                onName={
                    debounce(name => {
                        setNameFilter(name);
                        history.push('/page/1')
                    }, 300)
                }
                onFilter={
                    debounce(types => {
                        setTypes(types);
                        history.push('/page/1')
                    }, 300)
                }
            />
            {!isLoading && pokemons.length === 0 ?
                <h2 className="search-failure">No pokemon matched your search :(</h2> : null}
            {isLoading ? <Loader/> : pokemonList}

        </>
    );
};

export default PokemonList;