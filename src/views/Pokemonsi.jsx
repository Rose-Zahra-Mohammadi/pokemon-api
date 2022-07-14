import React, {useState} from "react";
import PokemonDisplay from "../components/PokemonDisplay";


const Pokemons = () => {
    const [pokemons, setPokemons] = useState([])

    const fetchPokemonWithAwait = async() => {
        try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon`)
        const jsonResponse = await response.json()
        setPokemons(jsonResponse.results)
    }catch(err){
        setPokemons()
        alert("the pokemon is not available")
    }

    }

    return (
        <div>
            
            {/* <button onClick={fetchPokemonWithThen}> Fecth Pokemon</button> */}
            <button onClick={fetchPokemonWithAwait}> Fecth Pokemon</button>
            {
                pokemons?
                <PokemonDisplay pokemons ={pokemons}/>:
                
            <h1>Fetch a pokemon by clicking the button</h1>
            }
            
        </div>
        
    )
}

export default Pokemons;