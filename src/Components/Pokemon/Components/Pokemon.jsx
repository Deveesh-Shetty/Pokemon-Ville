import axios from "axios";
import React, { useEffect, useState } from "react";
import "../Pokemon.css";

function Pokemon() {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
      .then((response) => {
        setLoading(false);
        console.log(response.data.results[5].name);
        setPokemon(response.data.results.map((item) => item.name));
      });
  }, []);

  return (
    <div className="pokemons">
      <h1>Hello</h1>
      <p>{pokemon}</p>
    </div>
  );
}

export default Pokemon;
