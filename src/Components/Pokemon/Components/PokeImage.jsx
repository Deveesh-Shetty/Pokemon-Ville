import React from "react";
import styles from "../Pokemon.module.css";

function PokeImage({ images, name }) {
  console.log(images);
  return (
    <div className="pokemon-image">
      <img
        src={images.front_default}
        alt={name}
        className={styles["pokemon-image"]}
      />
    </div>
  );
}

export default PokeImage;
