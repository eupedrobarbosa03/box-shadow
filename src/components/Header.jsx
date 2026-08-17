import Navbar from "./Navbar"
import Reveal from "./Reveal"
import './css/Header.css'

const Header = () => {
    return (
        <header className="header-container" id="home">
            <h1 className="header-title">
                BoxShadow.<span>css</span>
            </h1>
            <Reveal>
                <Navbar />
            </Reveal>
        </header>
    )
}

export default Header