import React from "react";
import useFetch from "../../Hooks/useFetch";

function Pokemon(props) {
  const { data, loading, error } = useFetch(props.pokemonList.url);
  if (loading) {
    return;
  }
  if (error) {
    console.log(error);
  }
  console.log(data);
  // console.log(data.types);
  // data.moves.map((type) => {
  //   console.log(type.move.name);
  // });

  return (
    <div className="Pokemon">
      <h1>{props.pokemonList.name}</h1>
      <img src={data.sprites.front_default} alt={data.name} />
      {data.types.map((type, index) => (
        <div>
          <p key={index}>{type.type.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Pokemon;
