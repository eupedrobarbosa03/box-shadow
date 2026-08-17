import './css/About.css'

const About = () => {
    return (  
        <section className="section-container-about">
            <section className="section-about" id='about'>
                <h2>Sobre o boxshadow.css</h2>
                <p>BoxShadow.css é uma aplicação web gratuita que permite a criação de sombras em tempo real com css. A ideia é voltada para visualização em tempo real com copiagem do código css.</p>
            </section>
            <section className='section-advantages'>
                <h2>Vantagens</h2>
                <p>Código CSS em tempo real. Uma ótima opção para desenvolvimento com dois monitores. O BoxShadow.css também é disponível para uso mobile.</p>
            </section>
            <section className='section-settings'>
                <h2>Configurações</h2>
                <p>No boxshadow.css é possível configurar border-radius, border-color, tamanho da borda, background, shadow, blur radius, offSetX, offSetY e opacity.</p>
            </section>
        </section>
    )
}

export default About