import { useState, useEffect, ChangeEvent } from "react"
import { MdOutlineExpandMore, MdOutlineExpandLess } from 'react-icons/md'
import { IoMdClose } from 'react-icons/io'
import { CgProfile } from 'react-icons/cg';
import PrixForm from "./Filter-form/PrixForm";
import TypeForm from "./Filter-form/TypeForm";

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

interface Props {
    expandedProp: boolean;
    onchange: (name: string) => void
}

const Filter: React.FC<Props> = ({ expandedProp, onchange }) => {
    let ret = <div className="filter-cart">
        <div className="filter-header">
            <div className="n-of-results">2709 résultats</div>
            <IoMdClose className="close" onClick={() => onchange("Filter")} />
        </div>
        <div className="filter-form">
            <PrixForm />
            <TypeForm />
        </div>
        <div className='button-holder'>
            <button>Valider</button>
        </div>
    </div>;
    if (!expandedProp)
        ret = <></>;
    return ret;
}

export default Filter;