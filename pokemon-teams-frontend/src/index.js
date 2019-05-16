const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

fetch(TRAINERS_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    console.log(object[0].name)
    const main = document.querySelector("#main")
    main.innerHTML += `
    <div class="card" data-id="1"><p>${object[0].name}</p></div>`
  })
div1 = document.createElement("div")
