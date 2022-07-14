import React from 'react'

const PokemonDisplay = (props) => {
  const {pokemons} = props;
  return (
      <div>
        {pokemons.map((pokemon, i) => <li key={i}>{pokemon.name}</li>)}
      </div>
  )
}

export default PokemonDisplay;