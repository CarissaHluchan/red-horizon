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
                <div className='moons-and-titles'>
                    <div className='moon-titles'>Phobos</div>
                    <img src={clickablePhobosMoon} alt='Phobos' className='clickable-phobos-moon' />
                </div>
                <div className='moons-and-titles'>
                    <div className='moon-titles'>Deimos</div>
                    <img src={clickableDeimosMoon} alt='Deimos' className='clickable-deimos-moon' />
                </div>
            </div>
        </div>
    )
}

export default InteractiveMars;