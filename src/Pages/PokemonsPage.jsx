import React from "react";
import Pokemons from "../Components/Pokemons/Pokemons";
import Background from "../Components/UI Components/Background/Background";
import Navbar from "../Components/UI Components/Navbar/Navbar";

function PokemonsPage() {
  return (
    <main id="pokemon-page">
      <Background />
      <Navbar />
      <Pokemons />
    </main>
  );
}

export default PokemonsPage;
