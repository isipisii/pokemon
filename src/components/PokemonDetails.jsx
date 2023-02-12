
const PokemonDetails = (props) => (
    <div 
      className="poke-details z-10  sm:w-[600px] sm:h-[350px] h-auto w-[280px]" 
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}
    > 
        <p onClick={() => {props.setClick(false)}}>exir</p>
        <h1 className="text-black font-bold text-[2rem] text-center">{props.name}</h1>
        <div className="flex sm:items-start justify-around gap-10 sm:mt-8 flex-col sm:flex-row items-center">
          <div className="w-[200px] h-[200px]">
              <img src={props.img} alt={props.name} className="w-[100%] h-[100%]"  />
          </div>
          <div className="flex mb-6 sm:mb-0 gap-4 sm:gap-8">
            <div className="leading-6">
              <h2 className="font-bold">Stats</h2>
              <p className='stat'>Height: {props.height}</p>
              <p className='stat'>Weight: {props.weight}</p>
              <p className='stat'>Hp: {props.hp}</p>
              <p className='stat'>Defense: {props.defense}</p>
              <p className='stat'>Special-attack: {props.specialAtk}</p>
              <p className='stat'>Special-defense: {props.specialDef}</p>
              <p className='stat'>Speed: {props.speed}</p>
            </div>
            <div>
              <h2 className="font-bold">Abilities</h2>
              {props.abilities.map(ability => (
                <p className='abilities'>{ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1)}</p>
              ))}

            </div>
          </div>
        </div>
    </div>
  )

export default PokemonDetails