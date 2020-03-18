import Sidenav from "../components/Sidenav";
import Footer from "../components/Footer";

export default ({ children }) => {
  return (
    <div className="antialiased text-gray-900 justify-center min-h-screen" id="app">
      <Sidenav />
      <main>
        { children }
      </main>
      <Footer />
    </div>
  )
}
