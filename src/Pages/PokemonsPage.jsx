import React from "react";
import Pokemons from "../Components/Pokemons/Pokemons";
import Navbar from "../Components/UI Components/Navbar/Navbar";

function PokemonsPage() {
  return (
    <main id="pokemon-page">
      <Navbar />
      <Pokemons />
    </main>
  );
}

export default PokemonsPage;
