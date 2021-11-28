const contagemPokemon = (pokemonArray, searchInput) => {

    let cont = 0
    pokemonArray.filter((p) => {
      if (p.name.toLowerCase().includes(searchInput.toLowerCase())) {
        cont = cont + 1
      }
    })

    return ( cont )

}


export default contagemPokemon