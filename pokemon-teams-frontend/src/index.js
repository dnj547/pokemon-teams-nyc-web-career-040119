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
      <button id ="b${trainer_index}" data-trainer-id="${trainer_index}">Add Pokemon</button>
      <ul id="ul${trainer_index}">
      </ul>
      </div>`
      trainer.pokemons.forEach(function (pokemon, poke_index) {
        const ul = document.querySelector(`#ul${trainer_index}`)
        ul.innerHTML += `
        <li>${pokemon.nickname} (${pokemon.species}) <button class="release" data-pokemon-id="${poke_index}">Release</button></li></li>
        `
      })

    })
    object.forEach(function (trainer, trainer_index) {
      const addButton = document.querySelector(`#b${trainer_index}`)
        addButton.addEventListener("click", function() {
        trainer.pokemons
      })
    })
    // .then(addEventListener())
  });



  function addButtonEventListener() {
    const addButton = document.querySelector("#b1")
      addButton.addEventListener("click", function() {
      console.log("Hi")
    })
  }

// const cards = document.querySelectorAll(".card")
//   cards.forEach(function (card) {
//   const button = document.querySelector("#0")
//   button.addEventListener("click", function() {
//     console.log("Hi")
//   })
// })


// fetch(POKEMONS_URL)
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(object) {
//     console.log(object)
//   })
