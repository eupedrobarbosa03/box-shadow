import { useState } from 'react'
import './css/Footer.css'

const Footer = () => {

    const [linksNavbar] = useState([
        {path: "#", title: "Home"},
        {path: "#shadow", title: "Shadow"},
        {path: "#about", title: "Sobre"},
        {path: "https://eupedrobarbosa03.github.io/box-shadow/", title: "Github", target: "_blank"},
        {path: "https://github.com/eupedrobarbosa03/", target: "_blank", title: "Autor"}
    ])

    return (
        <footer className="footer-container">
            <div className="top-footer">
                <nav className='navbar-container-footer'>
                    <h3>LINKS RÁPIDOS</h3>
                    {linksNavbar.map((link) => (
                        <a href={link.path} target={link.target}>{link.title}</a>
                    ))}
                </nav>
                <div className="container-title-footer">
                    <h2>BoxShadow.css</h2>
                </div>
            </div>
            <p className='copyright'>BoxShadow.css - Todos os direitos reservados. ®</p>
        </footer>
    )
}

export default Footer