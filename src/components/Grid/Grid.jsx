import './Grid.css';
import { getCapitalized, getHexadecimnal, getId } from '../../helpers/functions';
function Grid( {pokemons, getPokemon } ){

    let style = {
        margin: '10px',
        width: '40%',
        height: '30vh',
        border: '3px solid #47a195'
    }

    return(
        <article className='pokedex__grid'>
            {
                pokemons.map( (e,i) => {  
                    return <div key={ i } data-testid="grid" onClick={ () => getPokemon( e.url )} style={ { ...style, background : getHexadecimnal( e.name ) } } className="pokedex__item">
                        <figure className='pokedex__grid_figure'>
                            <img className='pokedex__item__image' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getId(e.url)}.png`} alt='pokemon_image'/>
                        </figure>
                        <h5>#{ getId( e.url  )}</h5>
                        <br/>
                        <span>{ getCapitalized( e.name ) } </span>
                        <br/>
                    </div>
                })
            }
        </article>
    )
}


export default Grid;