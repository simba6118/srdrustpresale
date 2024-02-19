import {useContext, useState} from 'react'
import ThemeContext from '../context/themeContext';

import "./components.css"
import FOLD from "../assets/img/fold.svg"
import SPREAD from "../assets/img/spread.svg"

const PrePayInput = (props) => {

    const tokens = useContext(ThemeContext);

    const [drop, setDrop] = useState(false);
    const [dropIndex, setDropIndex] = useState(0);

    const handleDrop = () => {
        setDrop(!drop);
    }

    const handleDropItem = (idx) => {
        setDropIndex(idx);
        // console.log(idx);
    }

    return (
        <div className="presale-pay-input display-flex">
            <div className="presale-pay-input-title display-flex">
                <div className="presale-pay-input-desc">
                    {props.title}:
                </div>
                <div className="presale-pay-input-balance display-flex">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className='token-icon'><path d="M18.3346 6.66667H10.8346C10.6136 6.66667 10.4017 6.75446 10.2454 6.91074C10.0891 7.06702 10.0013 7.27899 10.0013 7.5V12.5C10.0013 12.721 10.0891 12.933 10.2454 13.0893C10.4017 13.2455 10.6136 13.3333 10.8346 13.3333H18.3346V16.6667C18.3346 16.8877 18.2468 17.0996 18.0906 17.2559C17.9343 17.4122 17.7223 17.5 17.5013 17.5H2.5013C2.28029 17.5 2.06833 17.4122 1.91205 17.2559C1.75577 17.0996 1.66797 16.8877 1.66797 16.6667V3.33333C1.66797 3.11232 1.75577 2.90036 1.91205 2.74408C2.06833 2.5878 2.28029 2.5 2.5013 2.5H17.5013C17.7223 2.5 17.9343 2.5878 18.0906 2.74408C18.2468 2.90036 18.3346 3.11232 18.3346 3.33333V6.66667ZM12.5013 9.16667H15.0013V10.8333H12.5013V9.16667Z" fill="currentColor"></path></svg>
                    <div> 0 {tokens[dropIndex].ft}</div>
                </div>
            </div>
            <div className="presale-pay-input-part display-flex align-items-center">
                <div className="presale-pay-input-tag">
                    <div className='display-flex align-items-center'>
                        <img src={tokens[dropIndex].icon} alt={tokens[dropIndex].ft} className='token-icon'></img>
                        <input placeholder="0" className="ft-input"></input>
                    </div>
                </div>
                <div className="dropdown-token-relative display-flex align-items-center" onClick={handleDrop}>
                    
                    <div className="dropdown-token-first display-flex align-items-center"  >
                        <div className='display-flex align-items-center'>
                            <img src={tokens[dropIndex].icon} alt={tokens[dropIndex].ft} className='token-icon'></img>
                            <p>{tokens[dropIndex].ft}</p>
                        </div>
                        {drop ? <img src={SPREAD} alt='spread'></img> 
                        :
                        <img src={FOLD} alt='fold'></img>}
                    </div>
                    {drop &&
                    <div className="dropdown-token-list">
                        {tokens.map((token, idx) => {
                            return (
                                dropIndex !== idx && <div className="dropdown-token-item" onClick={() => handleDropItem(idx)}  ><img src={token.icon} alt={token.ft} className='token-icon'></img>{token.ft}</div>
                            )
                        })}
                    </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default PrePayInput;