import { render, screen } from '@testing-library/react';
import App from './App';
import Grid from './components/Grid/Grid';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

const mockData = [
  {
    url : "fakeurl.com",
    name : "Fake Pokemon"
  }
]

test('Should render Pokedex App', () => {
  render(<App/>);
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
