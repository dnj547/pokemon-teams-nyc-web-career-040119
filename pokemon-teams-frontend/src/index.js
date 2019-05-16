const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

fetch(TRAINERS_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    const main = document.querySelector("#main")
    object.forEach(function (trainer, trainer_index) {
      main.innerHTML += `
      <div class="card" data-id="${trainer_index}"><p>${trainer.name}</p>
      <button data-trainer-id="${trainer_index}">Add Pokemon</button>
      <ul id="ul${trainer_index}">
      </ul>
      </div>`
      trainer.pokemons.forEach(function (pokemon, poke_index) {
        const ul = document.querySelector(`#ul${trainer_index}`)
        ul.innerHTML += `
        <li>${pokemon.nickname}</li>
        `
      })


    })

  });

div1 = document.createElement("div")


// fetch(POKEMONS_URL)
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(object) {
//     console.log(object)
//   })
