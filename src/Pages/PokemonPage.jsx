import React from "react";
import { useLocation } from "react-router-dom";
import IndivPokemon from "../Components/Pokemon/IndivPokemon";

function PokemonPage() {
  const location = useLocation();
  const { pokemonData } = location.state;

  return (
    <main id="individual-pokemon">
      <IndivPokemon data={pokemonData} />
    </main>
  );
}

export default PokemonPage;
