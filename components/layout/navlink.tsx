import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import React from "react"

type Props = {
  to: string
  children: string | JSX.Element | JSX.Element[]
  icon?: IconProp
}

const Navlink: React.FC<Props> = ({ to, children, icon }) => (
  <div className="text-2xl font-semibold m-1 hover:text-blue-500 hover:scale-125">
    <Link href={to}>
      {icon && <FontAwesomeIcon size="xs" className="mr-2" icon={icon} />}
      {children}
    </Link>
  </div>
)

export default Navlink
