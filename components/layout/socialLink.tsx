import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

type Props = {
  icon: IconProp
  to: string
}

const SocialLink: React.FC<Props> = ({ icon, to }) => (
  <div>
    <Link target="_blank" href={to}>
      <FontAwesomeIcon size="xl" icon={icon} />
    </Link>
  </div>
)

export default SocialLink
