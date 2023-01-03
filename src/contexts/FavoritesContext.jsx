import React from "react";

const FavoriteContext = React.createContext({
  favoritePokemons: [],
  updateFavoritePokemons: (id) => null,
});

export const favoriteProvider = FavoriteContext.Provider;

export default FavoriteContext;
