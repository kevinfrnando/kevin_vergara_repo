import './Pokemons.css';
import { getCapitalized, getId } from '../../helpers/functions';

function Pokemon( { pokemon } ){

    return(
        pokemon != null ? 
        <aside className="pokedex__aside">
            <figure className='pokedex__figure'>
                <img className='pokedex__image' src={ pokemon?.sprites?.other?.home?.front_default} alt='pokemon_image'/>
            </figure>
            <h3>#{getId( pokemon.forms[0].url)}</h3>
            <h3>{ getCapitalized( pokemon.name ) }</h3>
            <div className='pokedex__details'>
                <b><label>Types</label></b><br/>
                {
                    <span>
                        {
                            pokemon.types.map( ( e ) => (
                                e.type.name + " "
                            ))
                        }
                    </span>
                }<br/>
                <b><label>Peso</label></b><br/>
                <span>{ pokemon.weight }kg</span><br/>
                <b><label>Sprites</label></b><br/>
                    <figure className='pokedex__sprites'>
                        <img className='pokedex__sprite' src={ pokemon.sprites.back_default} alt='back_default'/>
                        <img className='pokedex__sprite' src={ pokemon.sprites.back_shiny} alt='back_shiny'/>
                        <img className='pokedex__sprite' src={ pokemon.sprites.front_default} alt='front_default'/>
                        <img className='pokedex__sprite' src={ pokemon.sprites.front_shiny} alt='front_shiny'/>
                    </figure>
                <b><label>Movimientos</label></b><br/>
                    <textarea className='pokedex__textarea' readOnly={true} rows={4} value={pokemon.moves.map( ( e ) => (
                        e.move.name + " "
                    ))}/>
                        
            </div>
        </aside> 
        : 
        <></>
    )
}


export default Pokemon;