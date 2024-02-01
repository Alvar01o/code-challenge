import SearchInput from "./SearchInput";
import NavLogo from "./NavLogo";
import NavOptions from "./NavOptions";
export default function Navbar() {
  return (
    <nav className="bg-blue-800 flex justify-between ">
      <NavLogo/>
      <div className=" min-w-40 px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
            <SearchInput onTriggerSearch={() => { }} searchplaceholder="¿Que esta Buscando?"/>
        </div>
      </div>
      <NavOptions/>
    </nav>
  )
}