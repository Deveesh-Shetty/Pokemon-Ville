import React from "react";
import styles from "../Pokemon.css";

function PokeImage({ image, name, otherImages }) {
  return (
    <>
      <img
        src={image.front_default}
        alt={name}
        className={styles["pokemon-image"]}
      />
      <div>
        <img src={otherImages.front_default} alt={`Front ${name}`} />
        <img src={otherImages.back_default} alt={`Back ${name}`} />
        <img src={otherImages.front_shiny} alt={`Front Shiny ${name}`} />
        <img src={otherImages.back_shiny} alt={`Back Shiny ${name}`} />
      </div>
    </>
  );
}

export default PokeImage;
