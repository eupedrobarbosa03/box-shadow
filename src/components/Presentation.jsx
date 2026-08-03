import './css/Presentation.css'

const Presentation = () => {
    return (
        <section className="presentation-container">
            <div className="container-text-presentation-boxShadow">
                <h2>Crie sombras em css ao vivo de forma rápida e eficaz!</h2>
                <p>Experimente agora esta aplicação gratuita.</p>
            </div>
            <pre className='container-code-css-presentation'>
                <code>
                    .{<span className='code-css-preview'>boxShadow</span>} {`{
    height: 300px;
    width: 300px;
    border-radius: 10px;
    border: 1px solid #000;
    background-color: #44f;
    box-shadow: 1px 1px 10px #fff;
}`}
                </code>
            </pre>
        </section>
    )
}

export default Presentation