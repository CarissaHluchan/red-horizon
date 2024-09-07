import './InteractiveMars.css';

import clickableMarsImage from '../../assets/MARS-Viking.jpg';
import clickablePhobosMoon from '../../assets/Phobos.jpg';
import clickableDeimosMoon from '../../assets/Deimos-1.jpg';

function InteractiveMars() {

    return (
        <div>
            <img src={clickableMarsImage} alt='Mars' className='clickable-mars-image' />
            <div className='moons'>
                <img src={clickablePhobosMoon} alt='Phobos' className='clickable-phobos-moon' />
                <img src={clickableDeimosMoon} alt='Deimos' className='clickable-deimos-moon' />
            </div>
        </div>
    )
}

export default InteractiveMars;