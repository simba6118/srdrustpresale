
import "./pages.css"
import CoinImg from "../assets/img/pre-coin.png"
import DogImg from "../assets/img/dog.png"
import CatImg from "../assets/img/cat.png"

const Claim = () => {
    return (
        <div className = "claim-part display-flex justify-content-center align-items-center" >
            <span className="claim-title">Claim $PRM</span>
            <div className="claim-description">
                Claim your $PRM tokens now and unlock a world of exclusive unbeatable deals!
                <br/>
                <span><b>It's time to elevate your experience!</b></span>
            </div>
            <div className="claim-calculating-amount">
                <p>Calculating your claimable amount</p>
                <div className="form-amount display-flex justify-content-center align-items-center">
                    <img src={CoinImg} alt="coinImg" className="claim-box-img"/>    
                    <div className="spinner-border"></div>
                </div>
                <button className="claim-btn">claim</button>
            </div>
            <img src={DogImg} alt="dogImg" className="dog-img"></img>
            <img src={CatImg} alt="catImg" className="cat-img"></img>
        </div>
    );
}

export default Claim;