import React from "react"
import { useState } from "react"
import "../Pokemon.css"

function PokeImage({ image, name, otherImages }) {
  const [activeImage, setActiveImage] = useState(image.front_default)
  const changeImage = (event) => {
    let src = event.target.src
    setActiveImage(src)
  }
  return (
    <div className="image-container">
      <div className="active-image">
        <img src={activeImage} alt={name} className="pokemon-image" />
      </div>
      <div className="image-set">
        <img
          src={image.front_default}
          alt={`Front ${name}`}
          onClick={changeImage}
        />
        <img
          src={otherImages.front_default}
          alt={`Front ${name}`}
          onClick={changeImage}
        />
        <img
          src={otherImages.back_default}
          alt={`Back ${name}`}
          onClick={changeImage}
        />
        <img
          src={otherImages.front_shiny}
          alt={`Front Shiny ${name}`}
          onClick={changeImage}
        />
        <img
          src={otherImages.back_shiny}
          alt={`Back Shiny ${name}`}
          onClick={changeImage}
        />
      </div>
    </div>
  )
}

export default PokeImage
