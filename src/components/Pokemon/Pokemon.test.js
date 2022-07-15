import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pokemon from './Pokemon';
import { mockPokemon } from '../../helpers/functions';
const mockFunction = jest.fn();

test('Should render Pokedex App', () => {
  render( <Pokemon pokemon={ mockPokemon }/>);
  const pokemon = screen.getByText("Fake Pokemon");
  expect( pokemon ).toBeInTheDocument();
});  
