import { useState, useEffect, ChangeEvent } from "react"
import { MdOutlineExpandMore, MdOutlineExpandLess } from 'react-icons/md'

const PrixForm = () => {
    const [minExpanded, setMinExpanded] = useState(false);
    const [maxExpanded, setMaxExpanded] = useState(false);
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(0);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (!target.closest('.prix-form .input-holder')) {
                setMinExpanded(false);
                setMaxExpanded(false);
            }
        };

        window.addEventListener('mousedown', handleOutsideClick);

        return () => {
            window.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const minChoseHandler = (min: number) => {
        setMinValue(min);
        setMinExpanded(false);
    }
    const maxChoseHandler = (max: number) => {
        setMaxValue(max);
        setMaxExpanded(false);
    }
    const minChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (!isNaN(value as any))
            setMinValue(value as any)
    }
    const maxChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (!isNaN(value as any))
            setMaxValue(value as any)
    }
    return <><h2 className="h2-prix">Prix</h2>
        <div className="prix-form">
            <div className="min-prix">
                <h2>minimum</h2>
                <div className="input-holder" >
                    {minExpanded ?
                        <MdOutlineExpandLess className="expand-icon-prix" onClick={() => {
                            setMinExpanded(!minExpanded);
                            setMaxExpanded(false);
                        }} /> :
                        <MdOutlineExpandMore className="expand-icon-prix" onClick={() => {
                            setMinExpanded(!minExpanded);
                            setMaxExpanded(false);
                        }} />}
                    <input type="number" placeholder="0 MAD" onChange={minChangeHandler} value={minValue} onClick={() => {
                        setMinExpanded(true);
                        setMaxExpanded(false);
                    }} />
                    {minExpanded ?
                        <div className="input-options">
                            <div onClick={() => minChoseHandler(0)}>0 MAD</div>
                            <div onClick={() => minChoseHandler(250000)}>250 000 MAD</div>
                            <div onClick={() => minChoseHandler(500000)}>500 000 MAD</div>
                            <div onClick={() => minChoseHandler(750000)}>750 000 MAD</div>
                            <div onClick={() => minChoseHandler(1000000)}>1 000 000 MAD</div>
                            <div onClick={() => minChoseHandler(1500000)}>1 500 000 MAD</div>
                            <div onClick={() => minChoseHandler(2000000)}>2 000 000 MAD</div>
                            <div onClick={() => minChoseHandler(3000000)}>3 000 000 MAD</div>
                            <div onClick={() => minChoseHandler(5000000)}>5 000 000 MAD</div>
                        </div> : ""
                    }
                </div>
            </div>
            <div className="max-prix">
                <h2>maximum</h2>
                <div className="input-holder" >
                    {maxExpanded ?
                        <MdOutlineExpandLess className="expand-icon-prix" onClick={() => {
                            setMaxExpanded(!maxExpanded);
                            setMinExpanded(false);
                        }} /> :
                        <MdOutlineExpandMore className="expand-icon-prix" onClick={() => {
                            setMaxExpanded(!maxExpanded);
                            setMinExpanded(false);
                        }} />}
                    <input type="number" placeholder="Aucun" value={maxValue} onChange={maxChangeHandler} onClick={() => {
                        setMaxExpanded(true);
                        setMinExpanded(false);
                    }} />
                    {maxExpanded ?
                        <div className="input-options">
                            <div onClick={() => maxChoseHandler(0)}>0 MAD</div>
                            <div onClick={() => maxChoseHandler(1000000)}>1 000 000 MAD</div>
                            <div onClick={() => maxChoseHandler(2500000)}>2 500 000 MAD</div>
                            <div onClick={() => maxChoseHandler(5000000)}>5 000 000 MAD</div>
                            <div onClick={() => maxChoseHandler(7500000)}>7 500 000 MAD</div>
                            <div onClick={() => maxChoseHandler(10000000)}>10 000 000 MAD</div>
                            <div onClick={() => maxChoseHandler(15000000)}>15 000 000 MAD</div>
                            <div onClick={() => maxChoseHandler(20000000)}>20 000 000 MAD</div>
                            <div onClick={() => maxChoseHandler(30000000)}>30 000 000 MAD</div>
                        </div> : ""
                    }
                </div>
            </div>
        </div></>
}

export default PrixForm;