import { faGithub, faTelegram } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import SocialLink from "./socialLink"

const Footer = () => (
  <div className="flex flex-col items-center gap-2 bg-slate-700 bg-opacity-50 py-4">
    <ul className="flex justify-around gap-3">
      <li>
        <SocialLink to="https://t.me/tyoma_dev" icon={faTelegram} />
      </li>
      <li>
        <SocialLink to="https://github.com/potyoma" icon={faGithub} />
      </li>
      <li>
        <SocialLink
          to="mailto:artyomnovosyolov254@gmail.com"
          icon={faEnvelope}
        />
      </li>
    </ul>
    <span>Artem Novoselov - 2023</span>
  </div>
)

export default Footer
