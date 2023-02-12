
const Types = (props) => (
        <div className="flex gap-2 items-center">
          
            <label className="custom-label text-white" htmlFor="category">Types:</label>

            <select
            className="border-slate-400 rounded border-[1px] outline-none p-1"
            name="type"
            id="type"
            value={props.type}
            onChange={(e) => props.setType(e.target.value)}
            >   
                <option value="all">All</option>
                <option value="grass">Grass</option>
                <option value="fire">Fire</option>
                <option value="water">Water</option>
                <option value="bug">Bug</option>
                <option value="poison">Poison</option>
                <option value="electric">Electric</option>
                <option value="ground">Ground</option>
                <option value="normal">Normal</option>
                <option value="fairy">Fairy</option>
                <option value="fighting">Fighting</option>
                <option value="ice">Ice</option>
                <option value="rock">Rock</option>
                <option value="ghost">Ghost</option>
                <option value="psychic">Psychic</option>
                <option value="dark">Dark</option>
                <option value="steel">Steel</option>
            </select>

        </div>
  )

export default Types