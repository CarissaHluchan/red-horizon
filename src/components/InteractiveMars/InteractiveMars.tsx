import './InteractiveMars.css';

import clickableMarsImage from '../../assets/MARS-Viking.jpg';
import clickablePhobosMoon from '../../assets/Phobos.jpg';
import clickableDeimosMoon from '../../assets/Deimos.jpg';
import clickableRover from '../../assets/Rover.png'

function InteractiveMars() {

    return (
        <div className='interactive-zone'>
            <div className='mars-title-rover'>
                <h2 className='clickable-mars-title'>
                    Mars
                    <span className='hover-text'>See all the images of Mars</span>
                </h2>
                <img src={clickableMarsImage} alt='Mars' className='clickable-mars-image' />
                <img src={clickableRover} alt='Rover' className='clickalbe-rover' />
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