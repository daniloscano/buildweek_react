import "./premiumBlock.css";
import TryPremium from "../tryPremium/TryPremium.jsx";

const PremiumBlock = () => {
    return (
        <div className="premium-block fw-medium py-3 px-4 rounded-3 d-flex flex-column">
            <small className="text-white-50 mb-1">
                Grow your career or business with Premium
            </small>
            <TryPremium iconSize={18} iconClass="me-2" />
        </div>
    );
};

export default PremiumBlock;
