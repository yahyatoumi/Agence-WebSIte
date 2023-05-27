import { IoMdClose } from 'react-icons/io'
import PrixForm from "./Filter-form/PrixForm";
import TypeForm from "./Filter-form/TypeForm";

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