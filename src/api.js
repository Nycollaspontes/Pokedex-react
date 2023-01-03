export const searchPokemon = async (pokemon) => {
  const apiResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );

  if (apiResponse.status === 200) {
    const data = await apiResponse.json();
    return data;
  }
};
export const getPokemons = async (limit = 50, offset = 0) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}offset=${offset}`;
    const response = await fetch(url);
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};
