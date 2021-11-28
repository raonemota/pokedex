import React, {useState, useEffect} from 'react';
import './App.css';
import contagemPokemon from './utils/Contador';
import Header from './components/Header'

import Pokecard from './components/Pokecard'

function App() {

  useEffect(()=>{
    document.title = "Pokédex - Buscador de pokémon"
    getPokemon();
  },[]);

  const [ pokemon, setPokemon ] = useState([]);
  const [ searchPokemon, setSearchPokemon ] = useState('')
  const [ contPokemon, setContPokemon ] = useState(0);

  const getPokemon = async() => {
    const pokemonArray = [];
    for (let i = 1; i < 150; i++) {
      pokemonArray.push(await getPokemonData(i))
    }  
    setPokemon(pokemonArray);
    setContPokemon(pokemonArray.length);
  }

  async function getPokemonData(i){
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    return res.json();
  }

  const handleSearchPokemon = (textInput) => {
    setSearchPokemon(textInput);
    const res = contagemPokemon(pokemon, textInput)
    setContPokemon(res);
  }


  return (
    <div>

      <Header 
        inputText={searchPokemon} 
        buscarPokemon={handleSearchPokemon}
        contPokemon={contPokemon} />

      <div className="MainFrame">
      
        <div className="container">

          {pokemon
            .filter((p, k)=>{
              if (searchPokemon === '') {
                return p
              }
              else 
                if(p.name.toLowerCase().includes(searchPokemon.toLowerCase())){
                  return (
                    <Pokecard 
                      key={k}
                      name={p.name}
                      id={("000" + p.id).slice(-3)}
                      img={p.sprites.front_default}
                      type_1={p.types[0].type.name}
                    />
                  )
                }
            })         
            .map((i,k)=>{
              return (
                <Pokecard 
                  key={k}
                  name={i.name}
                  id={("000" + i.id).slice(-3)}
                  img={i.sprites.front_default}
                  type_1={i.types[0].type.name}
                  />
              );

          })}


        </div>
      </div>
    </div>
  );
}

export default App;
