import CountItem from "./countItem";

import "./components.css"

const StartIn = () => {
    return (
        <div className="startin">
            <div className="startin-title">Pre-Sale Starts In</div>
            <div className="startin-count justify-content-center">
                <CountItem title="DAYS"></CountItem>
                <CountItem title="HRS"></CountItem>
                <CountItem title="MIN"></CountItem>
                <CountItem title="SEC"></CountItem>
            </div>
        </div>
    );
}

export default StartIn;