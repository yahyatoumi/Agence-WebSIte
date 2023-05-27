import { useState } from 'react';
import ReactDOM from "react-dom";
import { MdOutlineArrowDropDown, MdOutlineExpandMore } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { IoLanguage } from 'react-icons/io5'
import { IoMdMenu } from 'react-icons/io'
import { BiSearch } from 'react-icons/bi'

interface DisplayOptions {
    acheter: boolean;
    vendre: boolean;
    credit: boolean
}

const options: DisplayOptions = {
    acheter: false,
    vendre: false,
    credit: false
}

const Nav = () => {
    const [displayMenu, setDisplayMenu] = useState(false);
    const [displayOptions, setDisplayOptions] = useState(options);
    return <nav>
        <div className='img'>

        </div>
        <ul className="nav-options">
            <li className='options-acheter'>
                Acheter
                <MdOutlineArrowDropDown className='expand-arrow' />
                <div className='options'>
                    <a href="#">
                        Apartements et maisons a vendre
                    </a>
                    <a href="#">
                        Imobillier neuf
                    </a>
                </div>
            </li>
            <li>Louer</li>
            <li className='options-vendre'>Vendre
                <MdOutlineArrowDropDown className='expand-arrow' />
                <div className='options'>
                    <a href="#">
                        Estimation immobilière
                    </a>
                    <a href="#">
                        Estimation de loyer
                    </a>
                    <a href="#">
                        Publier une annonce
                    </a>
                    <a href="#">
                        Comment vendre votre maison ?
                    </a>
                </div>
            </li>
            <li>Prix immobilierr</li>
            <li className='options-credit'>Credit immobilier
                <MdOutlineArrowDropDown className='expand-arrow' />
                <div className='options'>
                    <a href="#">
                        Crédit immobilier
                    </a>
                    <a href="#">
                        Demander un crédit
                    </a>
                    <a href="#">
                        Calculateur de budget
                    </a>
                    <a href="#">
                        Calculateur de Mensualité
                    </a>
                </div>
            </li>
            <li>Trouver une agence</li>
        </ul>
        <ul className="login-side">
            <li className='lang-li'>
                <IoLanguage className='lang-icon' />
                Arab</li>
            <li className='profile-li'>
                <CgProfile className='profile-icon' />
                Connexion</li>
            <li className='pro-li'>Offers pro
                <BsBoxArrowUpRight className='pro-icon' />
            </li>
        </ul>
        <div className='search-bar'>
            <input type="text" placeholder='Entrez une ville, un quartier , une adresse' />
            <div className='search-icon-holder' >
                <BiSearch className='search-icon' />
            </div>
        </div>
        <IoMdMenu className='menu-icon' onClick={() => setDisplayMenu(!displayMenu)} />
        {displayMenu ? <div className='displayed-menu'>
            <div className='bienvenue'>
                <h1>Bienvenue sur agenz</h1>
                <div className='button-holder'>
                    <CgProfile className='icon' />
                    <button>Se Connecter</button>
                </div>
            </div>
            <ul className="menu-nav-options">
                <li className={displayOptions.acheter ? 'menu-options-acheter blue' : 'menu-options-acheter'} onClick={() => setDisplayOptions({
                    acheter: !displayOptions.acheter,
                    vendre: displayOptions.vendre,
                    credit: displayOptions.credit
                })}>
                    Acheter
                    <MdOutlineExpandMore className='menu-expand-arrow' />
                </li>
                {displayOptions.acheter ? <div className='menu-options'>
                    <a href="#">
                        Apartements et maisons a vendre
                    </a>
                    <a href="#">
                        Imobillier neuf
                    </a>
                </div> : ""}

                <li>Louer</li>
                <li className={displayOptions.vendre ? 'menu-options-vendre blue' : 'menu-options-vendre'} onClick={() => setDisplayOptions({
                    acheter: displayOptions.acheter,
                    vendre: !displayOptions.vendre,
                    credit: displayOptions.credit
                })}>Vendre
                    <MdOutlineExpandMore className='menu-expand-arrow' />
                </li>
                {displayOptions.vendre ? <div className='menu-options'>
                    <a href="#">
                        Estimation immobilière
                    </a>
                    <a href="#">
                        Estimation de loyer
                    </a>
                    <a href="#">
                        Publier une annonce
                    </a>
                    <a href="#">
                        Comment vendre votre maison ?
                    </a>
                </div> : ""}
                
                <li>Prix immobilierr</li>
                <li className={displayOptions.credit ? 'menu-options-credit blue' : 'menu-options-credit'}  onClick={() => setDisplayOptions({
                    acheter: displayOptions.acheter,
                    vendre: displayOptions.vendre,
                    credit: !displayOptions.credit
                })}>Credit immobilier
                    <MdOutlineExpandMore className='menu-expand-arrow' />
                </li>
                {displayOptions.credit ? <div className='menu-options'>
                    <a href="#">
                        Crédit immobilier
                    </a>
                    <a href="#">
                        Demander un crédit
                    </a>
                    <a href="#">
                        Calculateur de budget
                    </a>
                    <a href="#">
                        Calculateur de Mensualité
                    </a>
                </div> : ""}
                
                <li>Trouver une agence</li>
            </ul>
            <div className='nav-last-section'>
                <div className='language-section'><IoLanguage /> العربية</div>
                <div className='pro-section'><BsBoxArrowUpRight /> Offers pro</div>
            </div>

        </div> : ""}
        {displayMenu ? ReactDOM.createPortal(<div className='back-drop' onClick={() => setDisplayMenu(false)}></div>, document.getElementById("back-drop")!) : ""}
    </nav>
}

export default Nav;