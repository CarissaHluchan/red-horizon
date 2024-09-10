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
                <Link to='/AllMarsMedia'>
                    <h2 className='clickable-mars-title'>
                        Mars
                        <span className='hover-text-mars-title'>See all the images of Mars</span>
                        <img src={GuiTarget} alt='GUI target on mars title' className='gui-target-mars-title' />
                    </h2>
                </Link>
                <img src={MainMarsImage} alt='Mars' className='main-mars-image' />
                <Link to='/mars/rovers' onClick={() => { handleClick('rovers') }}>
                    <div className='rover-wrapper'>
                        <span className='hover-text-rovers'>Rovers</span>
                        <img src={clickableRover} alt='Rover' className='clickalbe-rover' />
                        <img src={GuiTarget} alt='GUI target on rover' className='gui-target-rover' />
                    </div>
                </Link>
                <Link to='/mars/polarIceCaps' className='ice-cap-wrapper' onClick={() => { handleClick('polarIceCaps') }}>
                    {/* <div className='ice-cap-wrapper'> */}
                        <span className='hover-text-ice-cap'>Polar Ice Caps</span>
                        <img src={GuiTarget} alt='GUI target on polor ice cap ' className='gui-target-ice-cap' />
                    {/* </div> */}
                </Link>
                <Link to='/mars/olympusMons' className='olympus-mons-wrapper' onClick={() => { handleClick('olympusMons') }}>
                    {/* <div className='olympus-mons-wrapper'> */}
                        <span className='hover-text-olympus-mons'>Olympus Mons</span>
                        <img src={GuiTarget} alt='GUI target on Olympus Mons' className='gui-target-olympus-mons' />
                    {/* </div> */}
                </Link>
                <Link to='/mars/ascraeusMons' className='ascraeus-mons-wrapper' onClick={() => { handleClick('ascraeusMons') }}>
                    {/* <div className='ascraeus-mons-wrapper'> */}
                        <span className='hover-text-ascraeus-mons'>Ascraeus Mons</span>
                        <img src={GuiTarget} alt='GUI target on Ascraeus Mons' className='gui-target-ascraeus-mons' />
                    {/* </div> */}
                </Link>
                <Link to='/mars/pavonisMons' className='pavonis-mons-wrapper' onClick={() => { handleClick('pavonisMons') }}>
                    {/* <div className='pavonis-mons-wrapper'> */}
                        <span className='hover-text-pavonis-mons'>Pavonis Mons</span>
                        <img src={GuiTarget} alt='GUI target on Pavonis Mons' className='gui-target-pavonis-mons' />
                    {/* </div> */}
                </Link>
                <Link to='/mars/arsiaMons' className='arsia-mons-wrapper' onClick={() => { handleClick('arsiaMons') }}>
                    {/* <div className='arsia-mons-wrapper'> */}
                        <span className='hover-text-arsia-mons'>Arsia Mons</span>
                        <img src={GuiTarget} alt='GUI target on Arsia Mons ' className='gui-target-arsia-mons' />
                    {/* </div> */}
                </Link>
                <Link to='/mars/vallesMarineris' className='valles-marineris-wrapper' onClick={() => { handleClick('vallesMarineris') }}>
                    {/* <div className='valles-marineris-wrapper'> */}
                        <span className='hover-text-valles-marineris'>Valles Marineris</span>
                        <img src={GuiTarget} alt='GUI target on Valles Marineris' className='gui-target-valles-marineris' />
                    {/* </div> */}
                </Link>
                <Link to='/mars/argyrePlanitia' className='argyre-planitia-wrapper' onClick={() => { handleClick('argyrePlanitia') }}>
                    {/* <div className='argyre-planitia-wrapper'> */}
                        <span className='hover-text-argyre-planitia'>Argyre Planitia</span>
                        <img src={GuiTarget} alt='GUI target on Argyre Planitia' className='gui-target-argyre-planitia' />
                    {/* </div> */}
                </Link>
                <Link to='/mars/candorChasma' className='candor-chasma-wrapper' onClick={() => { handleClick('candorChasma') }}>
                    {/* <div className='candor-chasma-wrapper'> */}
                        <span className='hover-text-candor-chasma'>Candor Chasma</span>
                        <img src={GuiTarget} alt='GUI target on Candor Chasma' className='gui-target-candor-chasma' />
                    {/* </div> */}
                </Link>
                <Link to='/mars/aresVallis' className='ares-vallis-wrapper' onClick={() => { handleClick('aresVallis') }}>
                    {/* <div className='ares-vallis-wrapper'> */}
                        <span className='hover-text-ares-vallis'>Ares Vallis</span>
                        <img src={GuiTarget} alt='GUI target on Ares Vallis' className='gui-target-ares-vallis' />
                    {/* </div> */}
                </Link>

                {/* <div className='square'></div> */}
            </div>
            <div className='moons'>
                <Link to='/mars/phobos' className='phobos-wrapper' onClick={() => { handleClick('phobos') }}>
                    {/* <div className='phobos-wrapper'> */}
                        <div className='phobos-title'>Phobos</div>
                        <img src={clickablePhobosMoon} alt='Phobos' className='clickable-phobos-moon' />
                        <img src={GuiTarget} alt='GUI target on Phobos' className='gui-target-phobos' />
                    {/* </div> */}
                </Link>
                <Link to='mars/deimos' className='deimos-wrapper' onClick={() => { handleClick('deimos') }}>
                    {/* <div className='deimos-wrapper'> */}
                        <div className='deimos-title'>Deimos</div>
                        <img src={clickableDeimosMoon} alt='Deimos' className='clickable-deimos-moon' />
                        <img src={GuiTarget} alt='GUI target on Deimos' className='gui-target-deimos' />
                    {/* </div> */}
                </Link>
            </div>
        </div>
    )
}

export default InteractiveMars;