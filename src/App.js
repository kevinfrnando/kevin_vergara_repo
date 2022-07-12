import './App.css';
import Grid from './components/Grid/Grid';
import Pagination from './components/Pagination/Pagination';
import Pokemon from './components/Pokemon/Pokemon';
import Search from './components/Search/Search';

function App() {
  return (
    <>
      <header>
        <h1>Listado de Pokemon</h1>
        <Search/>
      </header>
      <section>
        <article>
          <Grid/>
        </article>
        <aside>
          <Pokemon/>
        </aside>
      </section>
      <footer>
        <Pagination/>
      </footer>
    </>
  );
}

export default App;
