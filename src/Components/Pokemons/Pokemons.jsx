import React from "react";
import Pokemon from "./Pokemon";
import useFetch from "../../Hooks/useFetch";
import "./Pokemons.css";

function Pokemons() {
  const { data, error, loading } = useFetch(
    "https://pokeapi.co/api/v2/pokemon?"
  );
  if (loading) {
    return (
      <h1 className="loader">Summoning Pokemon...from the Pokemon Realm</h1>
    );
    // Change this later
  }
  if (error) {
    console.log(error);
  }
  const pokemons = data.results.map((pokemon, index) => (
    <Pokemon key={index} pokemonList={pokemon} />
  ));
  return <div className="pokemon-list">{pokemons}</div>;
}

export default Pokemons;
