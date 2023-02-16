import {
  faAddressCard,
  faBars,
  faBriefcase,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import clsx from "clsx"
import { useState } from "react"
import Navlink from "./navlink"

const Navbar = () => {
  const [collapse, setCollapse] = useState(true)

  return (
    <div className="mt-6 bg-slate-700 bg-opacity-50 py-2 px-4">
      <div className="md:hidden flex justify-end">
        <button
          className="border-2 border-slate-400 rounded-md px-2 text-lg"
          onClick={() => {
            setCollapse(!collapse)
          }}
        >
          <span className="inline-block font-bold mr-2">MENU</span>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <nav>
        <ul
          className={clsx("flex flex-col items-end md:flex-row md:justify-center md:gap-6", collapse && "hidden")}
        >
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
}

export default Navbar
