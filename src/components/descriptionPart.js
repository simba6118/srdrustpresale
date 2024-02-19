
import "./components.css"

import CoinImg from "../assets/img/pre-coin.png"

const DescriptionPart = () => {
    return (
        <div className = "description-part">
            <div className="description-part-header">
                <div className="description-part-header-title">
                    <p>The Primes proudly presents</p>
                    <span>$PRM</span>
                </div>
                <img src={CoinImg} alt="coinImage" className="coin-img"/>
            </div>
            <div className="description-part-body display-flex">
                <span>Discover the next era of <b>The Primes</b> with <b>$PRM, our ecosystem's on-chain token,</b> soon to be integrated with all our solutions and unlocking new features. <b>$PRM</b> paves the way for expanding beyond just NFTs.</span>
            </div>
        </div>
    );
}

export default DescriptionPart;