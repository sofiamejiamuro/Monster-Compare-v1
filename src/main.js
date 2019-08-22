// funciones puras 

window.pokemonObj = {
    card : (name, image) => {
    const containerCard = document.createElement("div");
    const imagePoke = document.createElement("img");
    const namePoke = document.createElement("p");
    const textNamePoke = document.createTextNode(name);

    imagePoke.setAttribute("src", image);
    imagePoke.setAttribute("class","pokeImg");
    namePoke.setAttribute("class", "name");
    containerCard.setAttribute("class","singlePokemon");

    namePoke.appendChild(textNamePoke);
    containerCard.appendChild(namePoke);
    containerCard.appendChild(imagePoke);
    return containerCard;
  },
  
};