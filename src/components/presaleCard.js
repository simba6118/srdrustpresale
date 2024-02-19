import StartIn from "./startIn"
import PricesBox from "./PricesBox"
import PrePayInput from "./prePayInput"
import PreReceiveInput from "./preReceiveInput"
import BuyTokenBox from "./buyTokenBox.js"
import AccessBox from "./accessBox"

import "./components.css"

const PresaleCard = () => {
    return (
        <div className="presale-card">
            <StartIn></StartIn>
            <PricesBox></PricesBox>
            <PrePayInput title="Amount in SOL You Pay"></PrePayInput>
            <PreReceiveInput title="Amount in $PRM You Receive"></PreReceiveInput>
            <div className="presale-btn display-flex align-items-center justify-content-center">
                <button className="pre-button display-flex align-items-center justify-content-center"><span>Buy Now</span></button>
            </div>
            <AccessBox></AccessBox>
            <BuyTokenBox></BuyTokenBox>
        </div>
    )
}

export default PresaleCard;