import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { mockResponse } from './helpers/functions';

beforeEach ( async () => {
  await jest.spyOn( global , 'fetch').mockResolvedValue({
    json : jest.fn().mockResolvedValue( mockResponse )
  });

});
afterEach(() => {
  jest.restoreAllMocks()
});

describe("******* Pokedex APP *******", () => {

  test("Should mount the component and render pokemon names when api responds", async() => {
    render(<App previousPage = { jest.fn() }  nextPage = { jest.fn() }/>);
    expect( screen.getByText("Listado de Pokemon") ).toBeInTheDocument() ;
    await waitFor( ()=> {
      expect( screen.getByText("Fake Pokemon") ).toBeInTheDocument();
    })
  });
  

  
})
