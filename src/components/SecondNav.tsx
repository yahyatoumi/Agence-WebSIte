import { useState, useEffect } from 'react'
import { BiSearch } from 'react-icons/bi'
import { MdOutlineExpandMore, MdOutlineExpandLess } from 'react-icons/md'
import Avendre from './Avendre'
import Filter from './Filter';



const lis: Li[] = [
    {
        name: "A vendre",
        expanded: false
    },
    {
        name: "Prix",
        expanded: false
    },
    {
        name: "Type",
        expanded: false
    },
    {
        name: "Surface",
        expanded: false
    },
    {
        name: "Chambres",
        expanded: false
    },
    {
        name: "Filter",
        expanded: false
    },
]

const SecondNav = () => {
    const [expanded, setExpanded] = useState<Li[]>(lis);
    const [avendre, setAvendre] = useState("A vendre");
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (!target.closest('.li') && !target.closest('.avendre-cart') && !target.closest('.filter-cart')) {
                setExpanded(lis.map(li => {
                    li.expanded = false;
                    return li
                }));
            }
        };

        window.addEventListener('mousedown', handleOutsideClick);

        return () => {
            window.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);
    const handleItemClick = (name: string) => {
        setExpanded(prevExpanded =>
            prevExpanded.map(li => {
                if (li.name === name)
                    li.expanded = !li.expanded;
                else
                    li.expanded = false;
                return li;
            })
        );
    };
    return <div className="second-nav">
        <div className='search-bar'>
            <input type="text" placeholder='Entrez une ville, un quartier , une adresse' />
            <div className='search-icon-holder' >
                <BiSearch className='search-icon' />
            </div>
        </div>
        <div className='second-nav-ul'>
            <div className='ul'>
                <div className='avendre li-wrapper '>
                    <div className='li' onClick={() => handleItemClick("A vendre")}>
                        {avendre}
                        <div className='icon-holder'>
                            {expanded[0].expanded ? <MdOutlineExpandLess className='expand-icon' /> : <MdOutlineExpandMore className='expand-icon' />}
                        </div>
                    </div>
                    {expanded[0].expanded ? <Avendre avendre={avendre} onchange={setAvendre} /> : ""}
                </div>
                <div className='li-wrapper prix'>

                    <div className='li' onClick={() => handleItemClick("Prix")}>
                        {"Prix"}
                        <div className='icon-holder'>
                            {expanded[1].expanded ? <MdOutlineExpandLess className='expand-icon' /> : <MdOutlineExpandMore className='expand-icon' />}
                        </div>
                    </div>
                </div>
                <div className='li-wrapper type'>
                    <div className='li' onClick={() => handleItemClick("Type")}>
                        {"Type"}
                        <div className='icon-holder'>
                            {expanded[2].expanded ? <MdOutlineExpandLess className='expand-icon' /> : <MdOutlineExpandMore className='expand-icon' />}
                        </div>
                    </div>
                </div>
                <div className='li-wrapper surface'>

                    <div className='li' onClick={() => handleItemClick("Surface")}>
                        {"Surface"}
                        <div className='icon-holder'>
                            {expanded[3].expanded ? <MdOutlineExpandLess className='expand-icon' /> : <MdOutlineExpandMore className='expand-icon' />}
                        </div>
                    </div>
                </div>
                <div className='li-wrapper chambres'>

                    <div className='li' onClick={() => handleItemClick("Chambres")}>
                        {"Chambres"}
                        <div className='icon-holder'>
                            {expanded[4].expanded ? <MdOutlineExpandLess className='expand-icon' /> : <MdOutlineExpandMore className='expand-icon' />}
                        </div>
                    </div>
                </div>
                <div className='li-wrapper filter'>
                    <div className='li' onClick={() => handleItemClick("Filter")}>
                        {"Filter"}
                        <div className='icon-holder'>
                            {expanded[5].expanded ? <MdOutlineExpandLess className='expand-icon' /> : <MdOutlineExpandMore className='expand-icon' />}
                        </div>
                    </div>
                    <Filter expandedProp={expanded[5].expanded} onchange={handleItemClick}/>
                </div>
            </div>
        </div>
    </div>
}

export default SecondNav;