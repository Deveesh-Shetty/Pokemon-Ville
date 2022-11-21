import React from "react"
import { useState } from "react"
import "../Pokemon.css"

function PokeImage({ image, name, otherImages }) {
  const [active, setActive] = useState(null)
  return (
    <div className="image-container">
      <img src={image.front_default} alt={name} className="pokemon-image" />
      <div className="image-set">
        <img src={otherImages.front_default} alt={`Front ${name}`} />
        <img src={otherImages.back_default} alt={`Back ${name}`} />
        <img src={otherImages.front_shiny} alt={`Front Shiny ${name}`} />
        <img src={otherImages.back_shiny} alt={`Back Shiny ${name}`} />
      </div>
    </div>
  )
}

export default PokeImage
