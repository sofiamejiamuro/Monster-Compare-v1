const pokemonData = POKEMON.pokemon;

const showPokemons = (arrayPokemon, container) => {
    arrayPokemon.forEach((poke) => {
    container.appendChild(window.pokemonObj.card(poke.name, poke.img)); 
    
  });

};

showPokemons(pokemonData, document.getElementById("showAllPokemons"));


/*pokemonData.forEach( (poke) => {
      
document.getElementById("showAllPokemons").appendChild(card(poke.name, poke.img));
  
});*/


