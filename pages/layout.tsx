import Footer from "@/components/layout/footer"
import Header from "@/components/layout/header"
import Navbar from "@/components/layout/navbar"
import Head from "next/head"

type Props = {
  children: string | JSX.Element | JSX.Element[]
}

const Layout: React.FC<Props> = ({ children }) => (
  <>
    <Head>
      <title>Artem Novoselov</title>
    </Head>
    <div className="flex flex-col min-h-screen bg-slate-800 text-white">
      <Header />
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  </>
)

export default Layout
