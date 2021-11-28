import React from "react";
import { Card } from './style';
import  PRIMARY from './colors';

const Pokecard = (props) => {

    return (
        <Card background={PRIMARY[props.type_1].back} border={PRIMARY[props.type_1].border} text={PRIMARY[props.type_1].title}> 
            <div className="titleCard">
                <h2 className="namePokemon">{props.name}</h2>
                <h1 className="idPokemon">#{props.id}</h1>
            </div>
            
            <div className="bodyCard">
                <div className="itensCard">
                    <span>{props.type_1}</span>
                    <span>Poison</span>    
                </div>
                <div className="imgCard">
                    <img src={props.img} />
                </div>
            </div> 
        </Card>
    )
    
};

export default Pokecard;