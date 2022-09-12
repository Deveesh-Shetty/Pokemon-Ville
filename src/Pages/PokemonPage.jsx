import React from "react";
import Background from "../Components/Home/Components/Background";
import Pokemon from "../Components/Pokemon/Components/Pokemon";
import Navbar from "../Components/UI Components/Navbar/Navbar";

function PokemonPage() {
  return (
    <div id="pokemon-page">
      {/* <Background /> */}
      <Navbar />
      <Pokemon />
    </div>
  );
}

export default PokemonPage;
