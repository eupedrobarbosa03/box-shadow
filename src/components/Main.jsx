import About from './About';
import BoxShadow from './BoxShadow';
import './css/Main.css'
import Presentation from './Presentation';
import Reveal from './Reveal';

const Main = () => {
    return (
        <main className="main-container">
            <Reveal>
                <Presentation />
            </Reveal>
            <div className='line-separator'></div>
            <Reveal>
                <BoxShadow />
            </Reveal>
            <div className='line-separator'></div>
            <Reveal>
                <About />
            </Reveal>
        </main>
    )
}

export default Main;