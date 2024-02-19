import "./components.css"

const CountItem = (props) => {
    return (
        <div className="count-item display-flex justify-content-center align-items-center">
            <div className="count-item-title">{props.title}</div>
            <div className="count-item-segment display-flex justify-content-center align-items-center ">
                <div className="flip-card">
                    <div className="flip-card-top">0</div>
                    <div className="flip-card-bottom">0</div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-top">0</div>
                    <div className="flip-card-bottom">0</div>
                </div>
            </div>
        </div>
    );
}

export default CountItem;