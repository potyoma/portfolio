import ContactWithIcon from "@/components/contact/contactWithIcon"
import { faLinkedin, faTelegram } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const contacts = [
  {
    icon: faEnvelope,
    link: "mailto:artemnovoselov.contact@gmail.com",
    description: "artemnovoselov.contact@gmail.com",
  },
  {
    icon: faTelegram,
    link: "https://t.me/tyoma_dev",
    description: "@tyoma_dev",
  },
  {
    icon: faLinkedin,
    link: "https://linkedin.com/in/potyoma",
    description: "LinkedIn",
  },
]

const Contact = () => (
  <div
    className="mt-6 mb-auto flex justify-center items-center"
    style={{ height: "75vh" }}
  >
    <div className="grid border border-slate-200 rounded-lg">
      {contacts.map(({ icon, link, description }) => (
        <div key={description} className="my-6 px-4 flex">
          <ContactWithIcon icon={icon} link={link}>
            {description}
          </ContactWithIcon>
        </div>
      ))}
    </div>
  </div>
)

export default Contact
