import React from "react";
import { HeaderArea } from './style';

const Header = (props) => {

    const handleInputSearch = (e) => {
        props.buscarPokemon(e)
    }

    return (
        <HeaderArea>
            <div className="container">
                <div className="search-box">
                    <h1>Pokédex</h1>
                    <input type="search" value={props.inputText} onChange={(e) => {handleInputSearch(e.target.value)}} />
                    <span>Encontrado: {props.contPokemon} { props.contPokemon > 1 ? 'Pokémons' : 'Pokémon'} </span>
                </div>
            </div>
        </HeaderArea>
    )

    
};

export default Header;