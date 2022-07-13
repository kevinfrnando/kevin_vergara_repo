import './Pagination.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function Pagination( {previousPage, nextPage, currentPage, found, back, backStart } ){
    return(
        found ? 
        <>
            <button type="button" className='pokedex__found' onClick={ () => back() }>Volver</button>
            <button type="button" className='pokedex__found' onClick={ () => backStart() }>Volver al inicio</button>
        </>
        :
        <div className='pokedex__footer'>
            <button type="button" onClick={ () => previousPage() } className='pokedex__button'>
                <FontAwesomeIcon className='pokedex__pag_buttons' icon={faAngleLeft} /> 
                Atras
            </button>
            <span>Pagina { currentPage  } </span>
            <button type='button' onClick={ () => nextPage() } className='pokedex__button'>
                Siguiente 
                <FontAwesomeIcon className='pokedex__pag_buttons' icon={faAngleRight} /> 
            </button>
        </div>
    )
}

export default Pagination;