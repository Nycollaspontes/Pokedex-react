import { useEffect, useState } from "react";
import { getPokemons } from "./api";
import "./App.css";
import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";
import SearchBar from "./components/Searchbar";

function App() {
  const [loading, setLoading] = useState(false);
  const [allPokemons, setAllPokemons] = useState([]);

  const fetchAllPokemons = async () => {
    try {
      setLoading(true);
      const result = await getPokemons();
      const data = result.results
      setAllPokemons(data);
      setLoading(false);
    } catch (error) {
      console.log(`Fetch Pokemons Error:${error}`);
    }
  };

  useEffect(() => {
    fetchAllPokemons();
  }, []);
  return (
    <div>
      <Navbar />
      <SearchBar />
      <Pokedex pokemons={allPokemons} onLoading={loading} />
    </div>
  );
}

export default App;
