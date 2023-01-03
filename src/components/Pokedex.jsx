import Pokemon from "./Pokemon";

const Pokedex = (props) => {
  const { pokemons, onLoading } = props;
  return (
    <div>
      <div className="pokedex-header">
        <h1>Pokedex</h1>
        <div>Paginacao</div>
      </div>
      {onLoading ? (
        <div>Carregando , segura Fera</div>
      ) : (
        <div className="pokedex-grid"> 
          {pokemons.map((pokemon , index) => {
            return (<Pokemon pokemonName={pokemon.name} />)
          })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
