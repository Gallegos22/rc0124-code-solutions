'use strict';
async function userFunction() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const user = await response.json();
    console.log(user);
  } catch (error) {
    console.log('Not a good API', error);
  }
}
console.log(userFunction());
async function favPokemon() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/berry/cheri/');
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const pokemon = await response.json();
    console.log(pokemon);
  } catch (error) {
    console.log('Not a good API', error);
  }
}
console.log(favPokemon());
