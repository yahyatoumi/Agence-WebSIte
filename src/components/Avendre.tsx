import { useState } from 'react';
import { IoIosRadioButtonOff } from 'react-icons/io';

interface Prop {
    avendre: string;
    onchange: React.Dispatch<React.SetStateAction<string>>
}

interface Radios {
    first: boolean;
    second: boolean;
    third: boolean
}

const Avendre: React.FC<Prop> = ({ avendre, onchange }) => {
    const radios: Radios = { first: false, second: false, third: false };
    const [radio, setRadio] = useState({ ...radios, first: true });
    return <div className="avendre-cart">
        <div className="first-option option" onClick={() => {
            onchange("A vendre")
            setRadio({ ...radios, first: true })
        }}>
            <div  className={radio.first ? "selected-radio radio" : "radio"}/>
            <div className='option-p'>A vendre</div>
        </div>
        <div className="second-option option" onClick={() => {
            onchange("A louer")
            setRadio({ ...radios, second: true })
        }}>
            <div className={radio.second ? "selected-radio radio" : "radio"} />
            <div className='option-p'>A louer</div>
        </div>
        <div className="third-option option" onClick={() => {
            onchange("Projets neufs")
            setRadio({ ...radios, third: true })
        }}>
            <div className={radio.third ? "selected-radio radio" : "radio"}/>
            <div className='option-p'>Projets neufs</div>
        </div>
        <div className='button-holder'>
            <button>Valider</button>
        </div>
    </div>
}

export default Avendre;