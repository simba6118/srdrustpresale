import "./components.css"
import CoinImg from "../assets/img/pre-coin.png"

const PreReceiveInput = (props) => {
    return (
        <div className="presale-pay-input display-flex">
        <div className="presale-pay-input-title display-flex">
            <div className="presale-pay-input-desc">
                {props.title}:
            </div>
            <div className="presale-pay-input-balance display-flex">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="balance-img"><path d="M18.3346 6.66667H10.8346C10.6136 6.66667 10.4017 6.75446 10.2454 6.91074C10.0891 7.06702 10.0013 7.27899 10.0013 7.5V12.5C10.0013 12.721 10.0891 12.933 10.2454 13.0893C10.4017 13.2455 10.6136 13.3333 10.8346 13.3333H18.3346V16.6667C18.3346 16.8877 18.2468 17.0996 18.0906 17.2559C17.9343 17.4122 17.7223 17.5 17.5013 17.5H2.5013C2.28029 17.5 2.06833 17.4122 1.91205 17.2559C1.75577 17.0996 1.66797 16.8877 1.66797 16.6667V3.33333C1.66797 3.11232 1.75577 2.90036 1.91205 2.74408C2.06833 2.5878 2.28029 2.5 2.5013 2.5H17.5013C17.7223 2.5 17.9343 2.5878 18.0906 2.74408C18.2468 2.90036 18.3346 3.11232 18.3346 3.33333V6.66667ZM12.5013 9.16667H15.0013V10.8333H12.5013V9.16667Z" fill="currentColor"></path></svg>{props.balance ? props.balance: 0}
                <div>$PRM</div>
            </div>
        </div>
            <div className="presale-pay-input-part display-flex align-items-center">
                <img src={CoinImg} alt="coinImg" className="price-box-img"/>
                <div className="presale-pay-input-tag">
                    <input placeholder="0" className="ft-input"></input>
                </div>
            </div>
        </div>
    );
}

export default PreReceiveInput;