import './css/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Navbar = () => {

    const [showNavbar, setShowNavbar] = useState("");

    const handleChangeStateNavbar = () => {
        setShowNavbar((prevShowNavbar) => prevShowNavbar === "" ? "show" : "");
    };

    const [linksNavbar] = useState([
        {path: "#", title: "Home"},
        {path: "#shadow", title: "Shadow"},
        {path: "#about", title: "Sobre"},
        {path: "https://github.com/eupedrobarbosa03/box-shadow", title: "Github", target: "_blank"}
    ])

    return (
        <>
            <button className='button-menu-navbar' onClick={handleChangeStateNavbar}>
                <FontAwesomeIcon className='icon' icon={faBars} />
            </button>
            <nav className={`navbar-container ${showNavbar}`}>
                {linksNavbar.map((link) => (
                    <a href={`${link.path}`} target={link.target} onClick={handleChangeStateNavbar}>{link.title}</a>
                ))}
            </nav>
        </>
    )
}

export default Navbar