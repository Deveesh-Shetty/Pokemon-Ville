import React from "react";
import { useState } from "react";
import useFetch from "../../../Hooks/useFetch";

function MainHeader() {
  const [pokemon, setPokemon] = useState();
  const { data, error, loading } = useFetch(
    "https://pokeapi.co/api/v2/pokemon?limit=3"
  );
  return (
    !loading && (
      <header className="hero">
        <img src="Assets/pokemon-logo.png" alt="Pokemon Logo" />
      </header>
    )
  );
}

export default MainHeader;
