import React from 'react'
import { useEffect, useState } from 'react'
import Cards from './Cards'
import NavBar from './NavBar'

const CardFeed = () => {
  const [allPokemons, setAllPokemons] = useState([])
  const [loadPokemon, setLoadPokemon] = useState("https://pokeapi.co/api/v2/pokemon?limit=100")
  const [type, setType] = useState("all")

  function createPokemon(result) {
    result.forEach(async (pokemon) => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
      const data = await response.json()
      setAllPokemons(prevPokemon => [...prevPokemon, data])
    })
  }

  async function getPokemons() {
    try {
      const response = await fetch(loadPokemon)
      const data = await response.json()
      setLoadPokemon(data.next)
      createPokemon(data.results)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getPokemons()
  }, [])

  const filteredPokemons = allPokemons.filter( pokemon => {
    if (type === 'all') {
      return true
    }
    return pokemon.types.some((t) => t.type.name === type)
  })

  const pokemon = filteredPokemons.map((p, index) => {
    console.log(p)
    return (
      <Cards
        key={index}
        index={index}
        {...p}
      />
    )
  })

  return (
    <>
      <NavBar
        type={type}
        setType={setType}
      />
      <div className="h-[auto]" >
        <div className="flex flex-wrap sm:justify-between px-4 sm:flex-row md:px-8 py-4 gap-8  ">
          {pokemon}
        </div>
        <button onClick={getPokemons}> Show more</button>
      </div>
    </>
  )
}

export default CardFeed