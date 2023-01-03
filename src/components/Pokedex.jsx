import Pagination from "./Pagination";
import Pokemon from "./Pokemon";

const Pokedex = (props) => {
  const { pokemons, onLoading, page, totalPages, setPage } = props;
  console.log(page);

  const previousClick = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const nextClick = () => {
    if (page + 1 !== totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <div>
      <div className="pokedex-header">
        <h1>Pokedex</h1>
        <Pagination
          page={page + 1}
          totalPages={totalPages}
          previousClick={previousClick}
          nextClick={nextClick}
        />
      </div>
      {onLoading ? (
        <div>Carregando , segura Fera</div>
      ) : (
        <div className="pokedex-grid">
          {pokemons.map((pokemon, index) => {
            return <Pokemon pokemon={pokemon} key={index} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
