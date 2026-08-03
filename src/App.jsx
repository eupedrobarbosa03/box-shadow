import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import ReturnHome from "./components/ReturnHome"

function App() {

  return (
    <>
      <div className="app-container">
        <Header />
        <Main />
        <ReturnHome />
      </div>
      <Footer />
    </>
  )
}

export default App
