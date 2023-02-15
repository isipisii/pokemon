import Types from './Types'

const NavBar = (props) => (
    <div className="flex justify-between bg-[#2774ba] h-[60px] px-8 items-center">
      <h2 className="text-white font-bold text-[1.5rem]">Pokemon</h2>
      <div className="flex items-center gap-2">
        <Types
          type={props.type}
          setType={props.setType}
        />
      </div>
    </div>
  )

export default NavBar