import { useCallback, useEffect, useState } from 'react';
import './App.css';
import Grid from './components/Grid/Grid';
import Pagination from './components/Pagination/Pagination';
import Pokemon from './components/Pokemon/Pokemon';
import Search from './components/Search/Search';
import { getCurrentPage } from './helpers/functions';

function App() {

  const [ api, setApi ] = useState("https://pokeapi.co/api/v2/pokemon?limit=4");
  const [ pokemon, setPokemon ] = useState( null );
  const [ pokemons, setPokemons ] = useState( [] );
  const [ previous, setPrevious ] = useState("");
  const [ next, setNext ] = useState("");
  const [ currentPage, setCurrentPage ] = useState("");
  const [ currentUrl, setCurrentUrl ] = useState( api );
  const [ found, setFound ] = useState( false );
  
  const getPokemons = useCallback( async () => {
    try{
      await fetch( currentUrl )
      .then( ( resp ) => resp.json()) 
      .then( ( data ) => {
        setPokemons( data.results );
        setPrevious( data.previous );
        setNext( data.next );
      })
    }catch( err ){
      setPokemons([]);
    }
  }, [ currentUrl ])


  useEffect( ()=>{
    getPokemons();
    setCurrentPage( getCurrentPage( currentUrl ) );
  },[ currentUrl, getPokemons ]);

  const getPokemon = ( find ) => {
    fetch( find )
    .then( ( resp ) => resp.json()) 
    .then( ( data ) => {
      setPokemon( data );
    })
    .catch( err => console.log('Solicitud fallida', err) );
  }


  const backStart = () => { setCurrentUrl( api ); getPokemons(); setFound( false )} 
  const back = () => { getPokemons(); setFound( false )} 

  return (
    <div className='container'>
      <header className='pokedex__header'>
        <h1>Listado de Pokemon</h1>
        <Search 
          setPokemons= { setPokemons }
          setFound = { setFound } />
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
          previousPage = { () => setCurrentUrl( previous ) }
          nextPage = { () => setCurrentUrl( next ) }
          back = { back }
          backStart = { backStart }
          found = { found }
          setFound = { setFound }
          currentPage = { currentPage }
        />
      </footer>
    </div>
  );
}

export default App;
