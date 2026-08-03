import { use, useState } from 'react'
import './css/BoxShadow.css'
import Shadow from './Shadow'

const BoxShadow = () => {

    const [backgroundColor, setBackgroundColor] = useState("#97218d");
    const [borderColor, setBorderColor] = useState("#ffffff");
    const [shadowColor, setShadowColor] = useState("#6d095f");
    const [opacity, setOpacity] = useState(100);
    const [borderSize, setBorderSize] = useState(0);
    const [borderRadius, setBorderRadius] = useState(0);
    const [offSetX, setOffSetX] = useState(0);
    const [offSetY, setOffSetY] = useState(0);
    const [blurRadius, setBlurRadius] = useState(200);

    const [messageCopy, setMessageCopy] = useState("CSS");

    const handleMessageCopy = () => {
        const css = 
        `
            .boxShadow {
                height: 200px;
                width: 200px;
                background-color: ${backgroundColor};
                opacity: ${opacity / 100};
                border-radius: ${borderRadius};
                border: ${borderSize}px solid ${borderColor};
                box-shadow: ${offSetX}px ${offSetY}px ${blurRadius}px ${shadowColor};
            }
        `;
        navigator.clipboard.writeText(css)
        .then(() => {
            setMessageCopy("COPIADO!")
            setTimeout(() => {
                setMessageCopy("CSS")
            }, 1000)
        }).catch((error) => {
            console.error(error);
        })
    };

    return (
        <section className="container-boxShadow" id='shadow'>
            <div className='container-properties-boxShadow'>
                <div className="container-property">
                    <p>Background-color</p>
                    <input type="color" name="color" value={backgroundColor} onChange={(e) => setBackgroundColor(e.target.value)}/>
                    <span>{backgroundColor}</span>
                </div>
                <div className="container-property">
                    <p>Border-color</p>
                    <input type="color" name="color" value={borderColor} onChange={(e) => setBorderColor(e.target.value)}/>
                    <span>{borderColor}</span>
                </div>
                <div className="container-property">
                    <p>Shadow-color</p>
                    <input type="color" name="color" value={shadowColor} onChange={(e) => setShadowColor(e.target.value)}/>
                    <span>{shadowColor}</span>
                </div>
                <div className="container-property">
                    <p>Opacity</p>
                    <input type="range" name="range" min={1} max={100} value={opacity} onChange={(e) => setOpacity(e.target.value)}/>
                    <span>{opacity / 100}</span>
                </div>
                <div className="container-property">
                    <p>Border-size</p>
                    <input type="range" name="range" min={0} max={100} value={borderSize} onChange={(e) => setBorderSize(e.target.value)}/>
                    <span>{borderSize}</span>
                </div>
                <div className="container-property">
                    <p>Border-radius</p>
                    <input type="range" name="range" min={0} max={100} value={borderRadius} onChange={(e) => setBorderRadius(e.target.value)}/>
                    <span>{borderRadius}</span>
                </div>
                <div className="container-property">
                    <p>OffSET X</p>
                    <input type="range" name="range" min={0} max={150} value={offSetX} onChange={(e) => setOffSetX(e.target.value)}/>
                    <span>{offSetX}</span>
                </div>
                <div className="container-property">
                    <p>OffSET Y</p>
                    <input type="range" name="range" min={0} max={150} value={offSetY} onChange={(e) => setOffSetY(e.target.value)}/>
                    <span>{offSetY}</span>
                </div>
                <div className="container-property">
                    <p>Blur radius</p>
                    <input type="range" name="range" min={0} max={200} value={blurRadius} onChange={(e) => setBlurRadius(e.target.value)}/>
                    <span>{blurRadius}</span>
                </div>
            </div>
            <div className='container-preview-code-css'>
                <pre className='preview-code-css'>
                <code>
                    .{<span className='code-css-preview'>boxShadow</span>} {`{
    height: 200px;
    width: 200px;
    opacity: ${opacity / 100};
    border-radius: ${borderRadius}px;
    border: ${borderSize}px solid ${borderColor};
    background-color: ${backgroundColor};
    box-shadow: ${offSetX}px ${offSetY}px ${blurRadius}px ${shadowColor};
}`}
                </code>
                </pre>
            <button className='button-copy-css' onClick={handleMessageCopy}>{messageCopy}</button>
            </div>
            <div className='container-preview-boxShadow'>
                <Shadow backgroundColor={backgroundColor} opacity={opacity / 100} borderRadius={borderRadius} borderColor={borderColor} borderSize={borderSize} offSetX={offSetX} offSetY={offSetY} blurRadius={blurRadius} shadowColor={shadowColor} />
            </div>
        </section>
    )
}

export default BoxShadow