import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import clsx from "clsx"

type Props = {
  to: string
  children: string | JSX.Element | JSX.Element[]
  icon?: IconProp
}

const Navlink: React.FC<Props> = ({ to, children, icon }) => {
  const { pathname } = useRouter()

  return (
    <div
      className={clsx(
        "text-2xl font-semibold m-1 hover:text-blue-500 hover:scale-125",
        pathname === to && "text-blue-500 scale-125"
      )}
    >
      <Link href={to}>
        {icon && <FontAwesomeIcon size="xs" className="mr-2" icon={icon} />}
        {children}
      </Link>
    </div>
  )
}

export default Navlink
