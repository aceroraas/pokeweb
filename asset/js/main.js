let pokemons = [];

function getPokemons() {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=05&offset=10")
    .then((respuesta) => respuesta.json())

    .then((datos) => {
      pokemons = datos.results;
      crearPokemones(pokemons);
    })

    .catch((e) => {
      console.log(e);
    });
}

function getImgPokemon(url = "") {
  if (url.length > 0) {
    return fetch(url)
      .then((respuesta) => respuesta.json())
      .catch((e) => {
        console.log(e);
      });
  } else {
    alert("la url esta vacia");
  }
}

function crearPokemones(data) {
  let base = document.getElementById("pokemons");
  for (let i = 0; i < data.length; i++) {
    let button = document.createElement("div");

    let nombre = document.createElement("h3");
    let img = document.createElement("img");
    nombre.innerText = data[i].name;
    getImgPokemon(data[i].url).then((pokemon) => {
      img.src = pokemon.sprites.front_default;
      
      button.addEventListener("click", (e) => {
        let imagenPrincipal = document.getElementById('imgPokemon');
        imagenPrincipal.src=pokemon.sprites.front_default;
      });
      
      button.appendChild(img);
      button.appendChild(nombre);
    });
    base.appendChild(button);
  }
}

window.addEventListener("load", () => {
  getPokemons();
  console.log(pokemons);
});
