import './Pagination.css'

function Pagination( {backPage, nextPage, page } ){
    return(
        <div className='pokedex__footer'>
            <button type="button" onClick={ () => backPage() } className='pokedex__button'>Atras</button>
            {/* <span>Pagina { page }</span> */}
            <button type='button' onClick={ () => nextPage() } className='pokedex__button'>Siguiente</button>
        </div>
    )
}

export default Pagination;