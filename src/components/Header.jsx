import Navbar from "./Navbar"
import './css/Header.css'

const Header = () => {
    return (
        <header className="header-container" id="home">
            <h1 className="header-title">
                BoxShadow.<span>css</span>
            </h1>
            <Navbar />
        </header>
    )
}

export default Header