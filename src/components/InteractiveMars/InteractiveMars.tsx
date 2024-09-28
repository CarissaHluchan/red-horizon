import './InteractiveMars.css';
import { Link } from 'react-router-dom'

import MainMarsImage from '../../assets/MARS-Viking.jpg';
import clickablePhobosMoon from '../../assets/Phobos.jpg';
import clickableDeimosMoon from '../../assets/Deimos.jpg';
import clickableRover from '../../assets/Rover.png';
import GuiTarget from '../../assets/GUI-Target.png';

import { MarsDataType } from '../App/App';

interface InteractiveMarsProps {
    handleClick: (target: MarsDataType) => void;
}

function InteractiveMars({ handleClick }: InteractiveMarsProps) {

    return (
        <div className='interactive-zone'>
            <div className='mars-parent-container'>
                <img src={MainMarsImage} alt='Mars' className='main-mars-image' />
                <Link to='/AllMarsMedia' className='mars-title-wrapper' onClick={() => { handleClick('') }}>
                    <h2 className='mars-title'> Mars</h2>
                    <span className='hover-text-mars-title'>See all the images of Mars</span>
                    <img src={GuiTarget} alt='GUI target on mars title' className='gui-target-mars-title' />
                </Link>
                <Link to='/mars/rovers' className='rover-wrapper' onClick={() => { handleClick('rovers') }}>
                    <span className='hover-text-rovers'>Rovers</span>
                    <img src={clickableRover} alt='Rover' className='clickalbe-rover' />
                    <img src={GuiTarget} alt='GUI target on rover' className='gui-target-rover' />
                </Link>
                <Link to='/mars/polarIceCaps' className='ice-cap-wrapper' onClick={() => { handleClick('polarIceCaps') }}>
                    <span className='hover-text-ice-cap'>Polar Ice Caps</span>
                    <img src={GuiTarget} alt='GUI target on polor ice cap ' className='gui-target-ice-cap' />
                </Link>
                <Link to='/mars/olympusMons' className='olympus-mons-wrapper' onClick={() => { handleClick('olympusMons') }}>
                    <span className='hover-text-olympus-mons'>Olympus Mons</span>
                    <img src={GuiTarget} alt='GUI target on Olympus Mons' className='gui-target-olympus-mons' />
                </Link>
                <Link to='/mars/ascraeusMons' className='ascraeus-mons-wrapper' onClick={() => { handleClick('ascraeusMons') }}>
                    <span className='hover-text-ascraeus-mons'>Ascraeus Mons</span>
                    <img src={GuiTarget} alt='GUI target on Ascraeus Mons' className='gui-target-ascraeus-mons' />
                </Link>
                <Link to='/mars/pavonisMons' className='pavonis-mons-wrapper' onClick={() => { handleClick('pavonisMons') }}>
                    <span className='hover-text-pavonis-mons'>Pavonis Mons</span>
                    <img src={GuiTarget} alt='GUI target on Pavonis Mons' className='gui-target-pavonis-mons' />
                </Link>
                <Link to='/mars/arsiaMons' className='arsia-mons-wrapper' onClick={() => { handleClick('arsiaMons') }}>
                    <span className='hover-text-arsia-mons'>Arsia Mons</span>
                    <img src={GuiTarget} alt='GUI target on Arsia Mons ' className='gui-target-arsia-mons' />
                </Link>
                <Link to='/mars/vallesMarineris' className='valles-marineris-wrapper' onClick={() => { handleClick('vallesMarineris') }}>
                    <span className='hover-text-valles-marineris'>Valles Marineris</span>
                    <img src={GuiTarget} alt='GUI target on Valles Marineris' className='gui-target-valles-marineris' />
                </Link>
                <Link to='/mars/argyrePlanitia' className='argyre-planitia-wrapper' onClick={() => { handleClick('argyrePlanitia') }}>
                    <span className='hover-text-argyre-planitia'>Argyre Planitia</span>
                    <img src={GuiTarget} alt='GUI target on Argyre Planitia' className='gui-target-argyre-planitia' />
                </Link>
                <Link to='/mars/candorChasma' className='candor-chasma-wrapper' onClick={() => { handleClick('candorChasma') }}>
                    <span className='hover-text-candor-chasma'>Candor Chasma</span>
                    <img src={GuiTarget} alt='GUI target on Candor Chasma' className='gui-target-candor-chasma' />
                </Link>
                <Link to='/mars/aresVallis' className='ares-vallis-wrapper' onClick={() => { handleClick('aresVallis') }}>
                    <span className='hover-text-ares-vallis'>Ares Vallis</span>
                    <img src={GuiTarget} alt='GUI target on Ares Vallis' className='gui-target-ares-vallis' />
                </Link>
            </div>
            <div className='moons'>
                <Link to='/mars/phobos' className='phobos-wrapper' onClick={() => { handleClick('phobos') }}>
                    <div className='phobos-title'>Phobos</div>
                    <img src={clickablePhobosMoon} alt='Phobos' className='clickable-phobos-moon' />
                    <img src={GuiTarget} alt='GUI target on Phobos' className='gui-target-phobos' />
                </Link>
                <Link to='mars/deimos' className='deimos-wrapper' onClick={() => { handleClick('deimos') }}>
                    <div className='deimos-title'>Deimos</div>
                    <img src={clickableDeimosMoon} alt='Deimos' className='clickable-deimos-moon' />
                    <img src={GuiTarget} alt='GUI target on Deimos' className='gui-target-deimos' />
                </Link>
            </div>
        </div>
    )
}

export default InteractiveMars;