import { useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai'

interface Check {
    appartement: boolean;
    ville: boolean;
    maison: boolean;
    riad: boolean;
    bureau: boolean;
    terrain: boolean;
    commerce: boolean;
    localIndustriel: boolean;
}

const checkers: Check = {
    appartement: false,
    ville: false,
    maison: false,
    riad: false,
    bureau: false,
    terrain: false,
    commerce: false,
    localIndustriel: false
}

const TypeForm = () => {
    const [tout, setTout] = useState(false);
    const [checks, setChecks] = useState(checkers);

    const toutChoseHandler = () => {
        const newCheckers = {
            appartement: !tout,
            ville: !tout,
            maison: !tout,
            riad: !tout,
            bureau: !tout,
            terrain: !tout,
            commerce: !tout,
            localIndustriel: !tout
        };
        setChecks(newCheckers);
        setTout(!tout);
    }

    const checkerClickHandler = (type: keyof Check) => {
        setChecks(prevChecks => {
            const updatedChecks = {
                ...prevChecks,
                [type]: !prevChecks[type]
            };

            const allValuesTrue = Object.values(updatedChecks).every(value => value === true);
            if (allValuesTrue) {
                setTout(true);
            } else {
                setTout(false);
            }

            return updatedChecks;
        });
    };

    return <>
        <h2>Type</h2>
        <div className='type-form'>
            <div className='checker-holder' onClick={() => toutChoseHandler() }>
                <AiOutlineCheck className={tout ? 'check-icon check-tout checked' : 'check-icon check-tout'} />
                Tout sélectionner
            </div>
            <div className='checker-holder' onClick={() => checkerClickHandler("appartement")} >
                <AiOutlineCheck className={checks.appartement ? 'check-icon checked' : 'check-icon'} />
                Appartement
            </div>
            <div className='checker-holder' onClick={() => checkerClickHandler("ville")}>
                <AiOutlineCheck className={checks.ville ? 'check-icon checked' : 'check-icon'} />
                Ville
            </div>
            <div className='checker-holder' onClick={() => checkerClickHandler("maison")}>
                <AiOutlineCheck className={checks.maison ? 'check-icon checked' : 'check-icon'} />
                Maison
            </div>
            <div className='checker-holder' onClick={() => checkerClickHandler("riad")}>
                <AiOutlineCheck className={checks.riad ? 'check-icon checked' : 'check-icon'} />
                Riad
            </div>
            <div className='checker-holder' onClick={() => checkerClickHandler("bureau")}>
                <AiOutlineCheck className={checks.bureau ? 'check-icon checked' : 'check-icon'} />
                Bureau
            </div>
            <div className='checker-holder' onClick={() => checkerClickHandler("terrain")}>
                <AiOutlineCheck className={checks.terrain ? 'check-icon checked' : 'check-icon'} />
                Terrain
            </div>
            <div className='checker-holder' onClick={() => checkerClickHandler("commerce")}>
                <AiOutlineCheck className={checks.commerce ? 'check-icon checked' : 'check-icon'} />
                Commerce
            </div>
            <div className='checker-holder' onClick={() => checkerClickHandler("localIndustriel")}>
                <AiOutlineCheck className={checks.localIndustriel ? 'check-icon checked' : 'check-icon'} />
                Local Industriel
            </div>
        </div>
    </>
}

export default TypeForm;