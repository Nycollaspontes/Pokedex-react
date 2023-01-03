import { useEffect, useState } from "react";
import { getPokemonData, getPokemons } from "./api";
import "./App.css";
import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";
import SearchBar from "./components/Searchbar";

function App() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [allPokemons, setAllPokemons] = useState([]);
  const itensPerPage = 25;

  const fetchAllPokemons = async () => {
    try {
      setLoading(true);
      const result = await getPokemons(itensPerPage , itensPerPage * page) ;
      const data = result.results;
      const promises = data.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const resultsPokemons = await Promise.all(promises);
      setAllPokemons(resultsPokemons);
      setLoading(false);
      setTotalPages(Math.ceil(result.count  / itensPerPage));
    } catch (error) {
      console.log(`Fetch Pokemons Error:${error}`);
    }
  };

  useEffect(() => {
    fetchAllPokemons();
  }, [page]);


  return (
    <div>
      <Navbar />
      <SearchBar />
      <Pokedex
        pokemons={allPokemons}
        onLoading={loading}
        setPage={setPage}
        page={page}
        totalPages={totalPages}
      />
    </div>
  );
}

export default App;
