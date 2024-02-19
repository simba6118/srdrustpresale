import "./layouts.css"
import PreButton from "../components/preButton";

const Navbar = () => {
    return (
        <div className = "nav-box">
            <div className="nav-box-content">
                <PreButton name="Connect Wallet"></PreButton>
            </div>
        </div>
    );
}

export default Navbar;