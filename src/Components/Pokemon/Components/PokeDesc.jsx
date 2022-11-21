import React from "react"

function PokeDesc({ pokemon }) {
  console.log(pokemon)
  return (
    <div className="pokemon-description">
      <h1 className="pokemon-name">{pokemon.name}</h1>
      <div className="pokemon-description-wrapper">
        <div className="abilities">
          <h2>Abilities</h2>
          <div>
            {pokemon.abilities.map((ability, index) => (
              <p key={index}>{ability.ability.name}</p>
            ))}
          </div>
        </div>
        <div className="stats">
          <h2>Stats</h2>
          <div>
            {pokemon.stats.map((stat, index) => (
              <div key={index}>
                <p>{stat.stat.name}</p>
                <p>{stat.base_stat}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="types">
          <h2>Types</h2>
          <div>
            {pokemon.types.map((type, index) => (
              <p key={index}>{type.type.name}</p>
            ))}
          </div>
        </div>
        <div className="physical-stats">
          <h2>Physical Stats</h2>
          <div>
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
          </div>
        </div>
        <div className="moves">
          <h2>Moves</h2>
          <div>
            {pokemon.moves.map((move, index) => (
              <p key={index}>{index % 10 === 0 ? move.move.name : ""}</p>
              //   Getting only few moves since there are many
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokeDesc
