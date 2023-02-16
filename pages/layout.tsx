import Footer from "@/components/layout/footer"
import Header from "@/components/layout/header"
import Navbar from "@/components/layout/navbar"

type Props = {
  children: string | JSX.Element | JSX.Element[]
}

const Layout: React.FC<Props> = ({ children }) => (
  <div className="bg-slate-800 w-screen h-screen text-white">
    <div className="fixed w-screen">
      <Header />
      <Navbar />
    </div>
    <div>{children}</div>
    <Footer />
  </div>
)

export default Layout
