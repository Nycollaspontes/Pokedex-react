const Pokemon = (props) => {
  const { pokemon } = props;

  const onHearthClick = () => {
    console.log("Pode favoritar")
  }
  const hearth = "❤"


  return (
    <div className="pokemon-card">
      <div className="pokemon-image-container">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3>{pokemon.name}</h3>
          <p>{pokemon.weight}Kg</p>
          <div>{pokemon.id}</div>
        </div>

        <div className="card-bottom">
          <div className="pokemon-type">
            {pokemon.types.map((type, index) => {
              return (
                <div key={index} className="pokemon-type-text">
                  {type.type.name}
                </div>
              );
            })}
          </div>
          <button className="pokemon-hearth-btn" onClick={onHearthClick}>
            {hearth}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
