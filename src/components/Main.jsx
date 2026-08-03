import About from './About';
import BoxShadow from './BoxShadow';
import './css/Main.css'
import Presentation from './Presentation';

const Main = () => {
    return (
        <main className="main-container">
            <Presentation />
            <div className='line-separator'></div>
            <BoxShadow />
            <div className='line-separator'></div>
            <About />
        </main>
    )
}

export default Main;