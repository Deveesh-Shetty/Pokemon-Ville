import React from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";

function Pokemon(props) {
  const navigate = useNavigate();

  const { data, loading, error } = useFetch(props.pokemonList.url);
  if (loading) {
    return;
  }
  if (error) {
    console.log(error);
  }

  function openPokemon() {
    navigate(`/pokemon/${data.name}`, {
      state: {
        pokemonData: data,
      },
    });
  }

  return (
    <div className="pokemon" onClick={openPokemon}>
      <img src={data.sprites.front_default} alt={data.name} />
      <div>
        <h1 className="pokemon-name">{props.pokemonList.name}</h1>
        {/* <img src={data.sprites.back_default} alt={data.name} /> */}
        <div className="types">
          {data.types.map((type, index) => (
            <p key={index}>{type.type.name}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pokemon;
