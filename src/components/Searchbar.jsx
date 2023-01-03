import { useState } from "react";
import { searchPokemon } from "../api";

const SearchBar = () => {

  const [search, setSearch] = useState("ditto");
  const [pokemon, setPokemon] = useState();

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const onButtonClickHandler = () => {
    onSearchHandler(search)
  };
  const onSearchHandler = async (pokemon) => {
    const result = await searchPokemon(pokemon);
    setPokemon(result);
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input
          type="text"
          placeholder="Buscar pokemon"
          onChange={onChangeHandler}
        />
      </div>
      <div className="searchbar-btn">
        <button onClick={onButtonClickHandler}>enviar</button>
      </div>
      <div>
        {pokemon ? (
          <div>
            <div>Nome : {pokemon.name}</div>
            <div>Peso : {pokemon.weight}</div>
            <img src={pokemon.sprites.front_default} alt="" />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SearchBar;
