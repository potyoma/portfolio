import Navlink from "./navlink"

const Navbar = () => (
  <div className="mt-6 bg-slate-700 bg-opacity-50 py-2">
    <nav>
      <ul className="flex justify-center gap-6">
        <li>
          <Navlink to="/work">Work</Navlink>
        </li>
        <li>
          <Navlink to="/about">About</Navlink>
        </li>
        <li>
          <Navlink to="/contact">Contact</Navlink>
        </li>
        <li>
          <Navlink to="/blog">Blog</Navlink>
        </li>
      </ul>
    </nav>
  </div>
)

export default Navbar
