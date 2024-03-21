import './App.css';
import { PokemonList } from './PokemonList';

const pokedex = [
  { id: 0, number: '001', name: 'Bulbasaur' },
  { id: 1, number: '004', name: 'Charmander' },
  { id: 2, number: '007', name: 'Squirtle' },
  { id: 3, number: '025', name: 'Pikachu' },
  { id: 4, number: '039', name: 'Jigglypuff' },
];

function App() {
  return (
    <>
      <h1>React Lists</h1>
      <PokemonList pokedex={pokedex} />
    </>
  );
}

export default App;
