import React from 'react'
import { useEffect, useState } from 'react'
import Cards from './Cards'
import NavBar from './NavBar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

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
      <div className="h-[auto] flex flex-col items-center" >
        <div className="flex flex-wrap sm:justify-between px-4 sm:flex-row md:px-8 py-4 gap-8  ">
          {pokemon}
        </div>
        <button onClick={getPokemons} className="bg-[#2774ba] hover:bg-[#4694dced] px-[1rem] py-[.5rem] flex gap-3 items-center text-white mb-4">Show more<FontAwesomeIcon icon={faCaretDown} /></button>
      </div>
    </>
  )
}

export default CardFeed