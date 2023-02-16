import Link from "next/link"
import React from "react"

type Props = {
  to: string
  children: string | JSX.Element | JSX.Element[]
}

const Navlink: React.FC<Props> = ({ to, children }) => (
  <div className="text-2xl font-semibold m-1 hover:text-blue-500 hover:scale-125">
    <Link href={to}>{children}</Link>
  </div>
)

export default Navlink
