import { useState } from "react";

const SearchBar = () => {
  const [pokemon, setPokemon] = useState("charizard");

  function searchPokemon(e) {
    setPokemon(e.target.value)
    if(e.target.value === 0){
      onSearch(undefined)
    }
  }
  function onButtonClickHandler(){
    console.log(pokemon);
  }

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input
          type="text"
          placeholder="Buscar pokemon"
          onChange={searchPokemon}
        />
        <div className="searchbar-btn">
          <button onClick={onButtonClickHandler}>enviar</button>
          
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
