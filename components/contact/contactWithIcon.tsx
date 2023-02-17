import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

type Props = {
  icon: IconProp
  link: string
  children: string
}

const ContactWithIcon: React.FC<Props> = ({ icon, link, children }) => (
  <Link href={link}>
    <div className="flex gap-5 justify-center items-center hover:text-blue-500">
      <FontAwesomeIcon size="2x" icon={icon} />
      <span className="font-bold text-lg">{children}</span>
    </div>
  </Link>
)

export default ContactWithIcon
