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
 