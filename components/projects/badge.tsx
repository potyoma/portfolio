import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

type Props = {
  icon: IconProp
  to: string
}

const LinkBadge: React.FC<Props> = ({ icon, to }) => (
  <div className="rounded-full flex bg-slate-800 justify-center items-center border border-blue-100 text-blue-100 h-8 w-8 hover:border-blue-500 hover:text-blue-500">
    <Link href={to} target="_blank">
      <FontAwesomeIcon icon={icon} />
    </Link>
  </div>
)

export default LinkBadge
