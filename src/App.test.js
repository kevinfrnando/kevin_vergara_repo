import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import Grid from './components/Grid/Grid';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';

const mockData = [
  {
    url : "fakeurl.com",
    name : "Fake Pokemon",
    previous : "",
    next : "",
  }
]

test('Should render Pokedex App', () => {
  render(<App setPrevious = { () =>{} } setNext = { () =>{} }/>);
  const label = screen.getByText(/Listado de Pokemon/i);
  expect( label ).toBeInTheDocument();
});


test('Should render Search', () => {
  render(<Search/>);
  const label = screen.getByPlaceholderText(/Buscar/i);
  expect( label ).toBeInTheDocument();
});

test('Should render Grid', () => {
  render(<Grid pokemons={ mockData }/>);
  const label = screen.getByText(/Fake Pokemon/i);
  expect( label ).toBeInTheDocument();
});

test('Should render Pagination', () => {
  render(<Pagination/>);
  const backLabel = screen.getByText(/atras/i);
  expect( backLabel ).toBeInTheDocument();  
  const nextLabel = screen.getByText(/siguiente/i);
  expect( nextLabel ).toBeInTheDocument();
});

test('Should render Pokemon on Click', () => {
  // const { container } = render( <Grid pokemons={ mockData }/> );
  // const mockCallBack = jest.fn();
  // // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  // const boxes = container.getElementsByClassName("pokedex__item");
  // container.fin

  // const { container }  = render(<Grid pokemons={ mockData } setPrevious = { () =>{} } setNext = { () =>{} }/>);
  // // const item = screen.getElementsByClassName("pokedex__item");
  // // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  // const boxes = container.getElementsByClassName("pokedex__item");
  
  // console.log( boxes )
  
  // expect( <Pokemon/> ).toBeCalled();  
});

async function withFetch() {
  const res = await Promise.resolve({
    json: () => Promise.resolve( mockData )
  });
  const json = await res.json()

  return json
}


describe("******* Api Pokemon *******", () => {
  describe("> When API call is successful", () => {
    test('works', async () => {
      const json = await withFetch()
      expect(Array.isArray(json)).toEqual(true)
    })
  });
})