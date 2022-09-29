import React from "react";
import PokeDesc from "./Components/PokeDesc";
import PokeImage from "./Components/PokeImage";

function IndivPokemon({ data }) {
  return (
    <>
      <div className="individual-pokemon">
        <PokeImage
          image={data.sprites.other["official-artwork"]}
          name={data.name}
          otherImages={data.sprites}
        />
      </div>
      <PokeDesc pokemon={data} />
    </>
  );
}

export default IndivPokemon;
