import { useState } from "react"
import PokemonDetails from "./PokemonDetails"

const Cards = (props) => {
  const [click, setClick] = useState(false)

  return (
    <>
      <div
        onClick={() => setClick(true)}
        className="xs:w-[200px] w-[220px] mx-auto my-0 border-black border-[2px] flex 
        flex-col gap-1 items-center p-3 bg-[#ffb700] cursor-pointer"
      >
        <div className="w-[170px] h-[170px]  border-black border-[2px] p-4 relative" id={props.types[0].type.name}>
          <p className="absolute top-1 left-1 type text-[10px]  text-white font-bold">{props.types[0].type.name.toUpperCase()}</p>
          <img 
            src={props.sprites.other.dream_world.front_default} 
            alt={props.name} 
            className="w-[100%] h-[100%]" 
          />
        </div>
        <p className="font-bold text-white">{props.name.toUpperCase()}</p>
      </div>

      {click && 
        <PokemonDetails
          img={props.sprites.other.dream_world.front_default}
          name={props.name.toUpperCase()}
          type={props.types[0].type.name}
          height={props.height}
          weight={props.weight}
          setClick={setClick}
          hp={props.stats[0].base_stat}
          defense={props.stats[1].base_stat}
          specialAtk={props.stats[2].base_stat}
          specialDef={props.stats[3].base_stat}
          speed={props.stats[4].base_stat}
          abilities={props.abilities}

      />}
  </>
  )
}

export default Cards