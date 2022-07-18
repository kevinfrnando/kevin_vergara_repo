import { fireEvent, prettyDOM, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Grid from './Grid';
import { mockPokemon } from '../../helpers/functions';



describe('Grid Component', () =>{
  let component;
  const mockFunction = jest.fn();
  beforeEach( ()=>{
    // eslint-disable-next-line testing-library/no-render-in-setup
    component = render(<Grid pokemons={ [ mockPokemon] } getPokemon={ mockFunction }/>);
  });

  test('Should render Grid', () => {
    expect( component.container ).toHaveTextContent("Fake Pokemon");
  }); 

  test('Should to be able to Click on item', () => {
    // eslint-disable-next-line testing-library/no-render-in-setup, testing-library/prefer-screen-queries  
    const div = component.getByText("Fake Pokemon");
    fireEvent.click( div );
    expect( mockFunction ).toHaveBeenCalledTimes( 1 );
  }); 

})
 





// test('Should render Pokemon Component on click', () => {
//   const getPokemon = jest.fn();
//   render(<Grid pokemons={ mockData } getPokemon={ getPokemon }/>);
//   const item = screen.getByText("Fake Pokemon");
//   fireEvent.click( item, () =>{
//     render(< Pokemon/>);
//     console.log( render(< Pokemon/>) )
//   } )
//   expect( getPokemon.mock.calls ).toHaveLength( 1 );
//   // const pokemon = screen.getByText("Movimientos");
//   // expect( pokemon ).toBeInTheDocument();

// }); 