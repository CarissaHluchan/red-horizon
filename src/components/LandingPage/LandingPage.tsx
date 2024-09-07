import './LandingPage.css';
import InteractiveMars from '../InteractiveMars/InteractiveMars';

function LandingPage() {

    return (
        <div>
            <header className='title'>
                <h1>Red Horizon</h1>
                <div className='title-question'>Do you want to see more about the Red Planet?</div>
                <div className='title-directions'>Click around and discover NASA's images of Mars</div>
            </header>
            <InteractiveMars />
        </div>
    )
}

export default LandingPage;