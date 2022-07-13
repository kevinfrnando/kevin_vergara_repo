import { useState } from 'react';
import './Search.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadCry } from '@fortawesome/free-solid-svg-icons';

function Search( { setPokemons, setFound } ){


    const searchPokemon = ( e ) =>{
        e.preventDefault();
        let pokemon = e.target[0].value.toLowerCase();
        if( pokemon.length > 0 ){
            console.log( e.target[0].value );
            
            fetch( "https://pokeapi.co/api/v2/pokemon/"+pokemon )
                .then( ( resp ) =>  {
                    if ( resp.status === 200 ){
                        setFound( true )
                        return resp.json()
                    }else{
                        setFound( false );
                        let toast = document.getElementById("toast");
                        toast.className = "show";
                        setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 5000);
                    }
                } ) 
                .then( ( data ) => setPokemons( [
                    {
                        "name" : pokemon,
                        "url" : `https://pokeapi.co/api/v2/pokemon/${data.id}/`
                    }
                ] )
                .catch( err => console.log('Solicitud fallida', err) ));
        }
    }
    return(
        <form action="#" onSubmit={ ( e ) => searchPokemon( e ) } className="pokedex__form">
            <input title='Escribe el nombre de un Pokemon y presiona ENTER.' className="pokedex__search" placeholder="Buscar" type="text"/>
            <div id="toast"><div id="img"><FontAwesomeIcon icon={faSadCry} /> </div><div id="desc">No se encontro el Pokemon.</div></div>
        </form>
    )
}


export default Search;