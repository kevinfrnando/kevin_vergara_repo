import { useEffect, useState } from 'react';
import './App.css';
import Grid from './components/Grid/Grid';
import Pagination from './components/Pagination/Pagination';
import Pokemon from './components/Pokemon/Pokemon';
import Search from './components/Search/Search';
import { getCurrentPage } from './helpers/functions';

function App() {

  const [ url, setUrl ] = useState("https://pokeapi.co/api/v2/pokemon?limit=4");
  const [ pokemon, setPokemon ] = useState( null );
  const [ pokemons, setPokemons ] = useState( [] );
  const [ previous, setPrevious ] = useState("");
  const [ next, setNext ] = useState("");

  useEffect( ()=>{
    getPokemons();
    getCurrentPage( url );
  },[ url ]);

  const getPokemon = ( find ) => {
    fetch( find )
    .then( ( resp ) => resp.json()) 
    .then( ( data ) => {
      setPokemon( data );
      console.log( data )
    })
    .catch( err => console.log('Solicitud fallida', err) );
  }
  const getPokemons = () =>{
    fetch( url )
    .then( ( resp ) => resp.json()) 
    .then( ( data ) => {
      setPokemons( data.results );
      setPrevious( data.previous );
      setNext( data.next );
    })
    .catch( err => console.log('Solicitud fallida', err) );
  }

  return (
    <div className='container'>
      <header>
        <h1>Listado de Pokemon</h1>
        {/* <Search/> */}
      </header>
      <section className='pokedex__section'>
          <Grid 
            pokemons = { pokemons }
            getPokemon = { getPokemon }/>
          <Pokemon 
            pokemon={ pokemon }/>        
      </section>
      <footer>
        <Pagination
          backPage = { () => setUrl( previous ) }
          nextPage = { () => setUrl( next ) }
        />
      </footer>
    </div>
  );
}

export default App;
