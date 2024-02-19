import DescriptionPart from "../components/descriptionPart";
import PresaleCard from "../components/presaleCard";


import "./pages.css"


const PresalePart = () => {
    
    return (
        <div className="presale-dashbaord display-flex justify-content-center align-items-center">
            <div className = "presale-part">
                <PresaleCard></PresaleCard>
                <DescriptionPart></DescriptionPart>
            </div>
        </div>
    );
}

export default PresalePart;