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
      <meta name="description" content="Personal portfolio" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="flex flex-col min-h-screen bg-slate-800 text-white">
      <Header />
      <Navbar />
      <main className="mb-auto">{children}</main>
      <Footer />
    </div>
  </>
)

export default Layout
