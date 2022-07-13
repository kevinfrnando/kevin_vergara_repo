import './Search.css'
function Search( { setPokemons } ){

    const searchPokemon = ( e ) =>{
        // if( e.length > 0 ){
        //     fetch( "https://pokeapi.co/api/v2/pokemon/"+e )
        //         .then( 
                    
        //             ( resp ) => { 
        //                 console.log( "https://pokeapi.co/api/v2/pokemon/"+e )
        //                 resp.json() 
        //                 }) 
        //         .then( ( data ) => setPokemons( [ data.abilities[0] ] ) )
        //         .catch( err => console.log('Solicitud fallida', err) );
        //     }
    }
    return(
        <>
            <input className="pokedex__search" onChange={ ( e ) => { searchPokemon( e.target.value ) } } placeholder="Buscar" type="text"/>
        </>
    )
}


export default Search;