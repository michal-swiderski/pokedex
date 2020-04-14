import React, {useEffect, useState} from 'react';
import './PokemonList.scss';
import {useHistory, useParams} from 'react-router-dom';
import {debounce} from 'lodash';
import {getFilteredPokemons} from "../../services/filterService";
import Media from "react-media";
import PokemonCard from "../PokemonCard/PokemonCard";
import PokemonListToolbar from "../PokemonListToolbar/PokemonListToolbar";
import PokemonListEntry from "../PokemonListEntry/PokemonListEntry";

const PokemonList = () => {

    const {page} = useParams();
    const history = useHistory();

    const [pokemons, setPokemons] = useState([]);
    const [totalCount, setTotalCount] = useState([]);

    const [nameFilter, setNameFilter] = useState('');
    const [types, setTypes] = useState([]);

    useEffect(() => {
        getFilteredPokemons(nameFilter, types, 20, (page - 1) * 20).then(({totalCount, results}) => {
            setPokemons(results);
            setTotalCount(totalCount);
        }).catch(e => {
            console.error(e);
            history.push('/error');
        });
    }, [page, nameFilter, types, history]);

    const list = pokemons.map(p =>
        <div className="pokemon-list__pokemon-wrapper" key={p.id}>
            <PokemonCard pokemon={p}/>
        </div>);

    const mobileList = pokemons.map(p =>
        <div className="pokemon-list__pokemon-wrapper" key={p.id}>
            <PokemonListEntry pokemon={p}/>
        </div>);

    return (
        <>
            <PokemonListToolbar
                pageCount={Math.ceil(totalCount / 20)}
                onName={debounce((name) => setNameFilter(name), 300)}
                onFilter={(types) => setTypes(types)}
            />
            <div className="pokemon-list">

                <Media queries={{
                    sm: "(min-width: 0) and (max-width: 480px)"
                }}>
                    {
                        matches => (
                            <React.Fragment>
                                {matches.sm ? mobileList : list}
                            </React.Fragment>
                        )
                    }
                </Media>
            </div>
        </>
    );
};

export default PokemonList;