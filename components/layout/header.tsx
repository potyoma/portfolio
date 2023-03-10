import Link from "next/link"

const Header = () => (
  <div className="flex justify-center pt-4">
    <Link href="/">
      <h3 className="flex justify-between font-semibold text-lg md:text-xl">
        <span className="mx-1 md:mx-2">Artem Novoselov</span>
        <span className="mx-1 md:mx-2">|</span>
        <span className="mx-1 md:mx-2">Full Stack Developer</span>
      </h3>
    </Link>
  </div>
)

export default Header
