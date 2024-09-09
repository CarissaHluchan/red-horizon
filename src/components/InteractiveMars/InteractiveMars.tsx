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
                <Link to='/mars/rovers' onClick={() => {handleClick('rovers')}}>
                    <div className='rover-wrapper'>
                        <span className='hover-text-rovers'>Rovers</span>
                        <img src={clickableRover} alt='Rover' className='clickalbe-rover' />
                        <img src={GuiTarget} alt='GUI target on rover' className='gui-target-rover' />
                    </div>
                </Link>
                <Link to='/mars/polarIceCaps' onClick={() => {handleClick('polarIceCaps')}}>
                    <img src={GuiTarget} alt='GUI target on polor ice cap ' className='gui-target-ice-cap' />
                </Link>
                <Link to='/mars/olmpusMons' onClick={() => {handleClick('olmpusMons')}}>
                    <img src={GuiTarget} alt='GUI target on Olmpus Mons' className='gui-target-olmpus-mons' />
                </Link>
                <Link to='/mars/ascraeusMons' onClick={() => {handleClick('ascraeusMons')}}>
                    <img src={GuiTarget} alt='GUI target on Ascraeus Mons' className='gui-target-ascraeus-mons' />
                </Link>
                <Link to='/mars/pavonisMons' onClick={() => {handleClick('pavonisMons')}}>
                    <img src={GuiTarget} alt='GUI target on Pavonis Mons' className='gui-target-pavonis-mons' />
                </Link>
                <Link to='/mars/arsiaMons' onClick={() => {handleClick('arsiaMons')}}>
                    <img src={GuiTarget} alt='GUI target on Arsia Mons ' className='gui-target-arsia-mons' />
                </Link>
                <Link to='/mars/vallesMarineris' onClick={() => {handleClick('vallesMarineris')}}>
                    <img src={GuiTarget} alt='GUI target on Valles Marineris' className='gui-target-valles-marineris' />
                </Link>
                <Link to='/mars/argyrePlanitia' onClick={() => {handleClick('argyrePlanitia')}}>
                    <img src={GuiTarget} alt='GUI target on Argyre Planitia' className='gui-target-argyre-planitia' />
                </Link>
                <Link to='/mars/candorChasma' onClick={() => {handleClick('candorChasma')}}>
                    <img src={GuiTarget} alt='GUI target on Candor Chasma' className='gui-target-candor-chasma' />
                </Link>
                <Link to='/mars/aresVallis' onClick={() => {handleClick('aresVallis')}}>
                    <img src={GuiTarget} alt='GUI target on Ares Vallis' className='gui-target-ares-vallis' />
                </Link>

                {/* <div className='square'></div> */}
            </div>
            <div className='moons'>
                <Link to='/mars/phobos' onClick={() => {handleClick('phobos')}}>
                    <div className='phobos-wrapper'>
                        <div className='phobos-title'>Phobos</div>
                        <img src={clickablePhobosMoon} alt='Phobos' className='clickable-phobos-moon' />
                        <img src={GuiTarget} alt='GUI target on Phobos' className='gui-target-phobos' />
                    </div>
                </Link>
                <Link to='mars/deimos' onClick={() => {handleClick('deimos')}}>
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