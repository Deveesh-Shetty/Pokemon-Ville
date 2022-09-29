import React from "react";
import styles from "./Pokemon.module.css";

function IndivPokemon({ data }) {
  console.log(data);
  return (
    <>
      <div className="individual-pokemon">
        <h1 className="pokemon-name">{data.name}</h1>
        <img
          src={data.sprites.front_default}
          alt={data.name}
          className={styles["pokemon-image"]}
        />
        <img
          src={data.sprites.front_shiny}
          alt={data.name}
          className={styles["pokemon-image"]}
        />
        <img
          src={data.sprites.back_default}
          alt={data.name}
          className={styles["pokemon-image"]}
        />
        <img
          src={data.sprites.back_shiny}
          alt={data.name}
          className={styles["pokemon-image"]}
        />
      </div>
    </>
  );
}

export default IndivPokemon;
