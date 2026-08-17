import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import ReturnHome from "./components/ReturnHome"
import Reveal from "./components/Reveal"

function App() {

  return (
    <>
      <div className="app-container">
        <Header />
        <Main />
        <ReturnHome />
      </div>
      <Reveal>
        <Footer />
      </Reveal>
    </>
  )
}

export default App
