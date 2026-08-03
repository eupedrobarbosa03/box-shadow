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
        {id: "#", title: "Home"},
        {id: "#shadow", title: "Shadow"},
        {id: "#about", title: "Sobre"},
        {id: "#", title: "Github"}
    ])

    return (
        <>
            <button className='button-menu-navbar' onClick={handleChangeStateNavbar}>
                <FontAwesomeIcon className='icon' icon={faBars} />
            </button>
            <nav className={`navbar-container ${showNavbar}`}>
                {linksNavbar.map((link) => (
                    <a href={`${link.id}`} onClick={handleChangeStateNavbar}>{link.title}</a>
                ))}
            </nav>
        </>
    )
}

export default Navbar