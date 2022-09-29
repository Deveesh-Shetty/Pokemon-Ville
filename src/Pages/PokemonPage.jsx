import React from "react";
import { useLocation } from "react-router-dom";
import IndivPokemon from "../Components/Pokemon/IndivPokemon";
import Background from "../Components/UI Components/Background/Background";

function PokemonPage() {
  const location = useLocation();
  const { pokemonData } = location.state;

  return (
    <main id="individual-pokemon">
      <Background />
      <IndivPokemon data={pokemonData} />
    </main>
  );
}

export default PokemonPage;
