import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { mockResponse } from './helpers/functions';
import Grid from './components/Grid/Grid';
import Pagination from './components/Pagination/Pagination';

beforeEach ( async () => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue( mockResponse )
  });
});

describe("******* Pokedex APP *******", () => {
  
  it("Should mount the component and render pokemon names when api responds", async() => {
    
    const { getByTestId } =  render(<App>
      <Grid getPokemon={ jest.fn() } setPokemon ={ jest.fn() }></Grid>
        <Pagination found = { true } backStart={ () => jest.fn() }/>
      </App>);
    expect( screen.getByText("Listado de Pokemon") ).toBeInTheDocument() ;
    await waitFor( ()=> {
      const fakePokemon = screen.getByText("Fake Pokemon");
      // eslint-disable-next-line testing-library/prefer-screen-queries
      expect( fakePokemon ).toBeInTheDocument();

      })
  });


})
