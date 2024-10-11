import InteractiveMars from '../InteractiveMars/InteractiveMars';
import { MarsDataType } from '../App/App';
import './LandingPage.css';

interface LandingPageProps {
    handleClick: (target: MarsDataType) => void;
}

function LandingPage({ handleClick }: LandingPageProps) {

    return (
        <div>
            <header className='title'>
                <h1 tabIndex={0} >Red Horizon</h1>
                <div className='title-question' tabIndex={0} >Do you want to see more about the Red Planet?</div>
                <div className='title-directions' tabIndex={0}>Click around and discover NASA's images of Mars</div>
                <div className='title-directions-2' tabIndex={0}>Scroll down to explore the Horizon</div>
            </header>
            <InteractiveMars handleClick={handleClick} />
        </div>
    );
};

export default LandingPage;