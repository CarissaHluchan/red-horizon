import './InteractiveMars.css';
import { Link } from 'react-router-dom'

import MainMarsImage from '../../assets/MARS-Viking.jpg';
import clickablePhobosMoon from '../../assets/Phobos.jpg';
import clickableDeimosMoon from '../../assets/Deimos.jpg';
import clickableRover from '../../assets/Rover.png';
import GuiTarget from '../../assets/GUI-Target.png';

function InteractiveMars() {

    return (
        <div className='interactive-zone'>
            <div className='mars-parent-container'>
                <Link to='/AllMarsMedia'>
                    <h2 className='clickable-mars-title'>
                        Mars
                        <span className='hover-text-mars-title'>See all the images of Mars</span>
                    </h2>
                </Link>
                <img src={MainMarsImage} alt='Mars' className='main-mars-image' />
                <Link to='/mars/rovers'>
                    <div className='rover-wrapper'>
                        <span className='hover-text-rovers'>Rovers</span>
                        <img src={clickableRover} alt='Rover' className='clickalbe-rover' />
                        <img src={GuiTarget} alt='GUI target on rover' className='gui-target-rover' />
                    </div>
                </Link>
                {/* <div className='square'></div> */}
            </div>
            <div className='moons'>
                <Link to='/mars/phobos'>
                    <div className='phobos-wrapper'>
                        <div className='phobos-title'>Phobos</div>
                        <img src={clickablePhobosMoon} alt='Phobos' className='clickable-phobos-moon' />
                        <img src={GuiTarget} alt='GUI target on Phobos' className='gui-target-phobos' />
                    </div>
                </Link>
                <Link to='mars/deimos'>
                    <div className='deimos-wrapper'>
                        <div className='deimos-title'>Deimos</div>
                        <img src={clickableDeimosMoon} alt='Deimos' className='clickable-deimos-moon' />
                        <img src={GuiTarget} alt='GUI target on Deimos' className='gui-target-deimos' />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default InteractiveMars;