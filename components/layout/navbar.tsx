import {
  faAddressCard,
  faBriefcase,
  faCircleQuestion,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons"
import Navlink from "./navlink"

const Navbar = () => (
  <div className="mt-6 bg-slate-700 bg-opacity-50 py-2">
    <nav>
      <ul className="flex justify-center gap-6">
        <li>
          <Navlink to="/work" icon={faBriefcase}>
            Work
          </Navlink>
        </li>
        <li>
          <Navlink to="/about" icon={faCircleQuestion}>
            About
          </Navlink>
        </li>
        <li>
          <Navlink to="/contact" icon={faAddressCard}>
            Contact
          </Navlink>
        </li>
        {/* Removed temporarily */}
        {/* TODO: Add blog parsing */}
        {/* <li>
          <Navlink to="/blog" icon={faPenToSquare}>
            Blog
          </Navlink>
        </li> */}
      </ul>
    </nav>
  </div>
)

export default Navbar
