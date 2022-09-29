import React from "react";
import PokeImage from "./Components/PokeImage";

function IndivPokemon({ data }) {
  console.log(data.sprites);
  return (
    <>
      <div className="individual-pokemon">
        <h1 className="pokemon-name">{data.name}</h1>
        <PokeImage
          images={data.sprites.other["official-artwork"]}
          name={data.name}
        />
      </div>
    </>
  );
}

export default IndivPokemon;
