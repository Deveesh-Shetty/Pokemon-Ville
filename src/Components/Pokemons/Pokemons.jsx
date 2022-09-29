import React from "react";
import { useState } from "react";
import useFetch from "../../Hooks/useFetch";
import Pokemon from "./Pokemon";
import PrimaryBtn from "../UI Components/Buttons/Primary Button/PrimaryBtn";
import "./Pokemons.css";

function Pokemons() {
  const [URL, setURL] = useState("https://pokeapi.co/api/v2/pokemon?");
  const { data, error, loading } = useFetch(URL);
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
  function nextPage() {
    if (data.next === null) return;
    setURL(data.next);
  }
  function previousPage() {
    if (data.previous === null) return;
    setURL(data.previous);
  }

  return (
    <>
      <div className="pokemon-list">{pokemons}</div>
      <div className="button-list">
        <PrimaryBtn text="Previous Page" clickEvent={previousPage} />
        <PrimaryBtn text="Next Page" clickEvent={nextPage} />
      </div>
    </>
  );
}

export default Pokemons;
