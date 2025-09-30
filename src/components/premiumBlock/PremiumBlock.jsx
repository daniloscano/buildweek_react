import "./premiumBlock.css";
import TryPremium from "../tryPremium/TryPremium.jsx";

const PremiumBlock = () => {
    return (
        <div className="premium-block fw-medium py-3 px-4 rounded-3 d-flex flex-column mt-2">
            <small className="text-white-50 mb-1">
                Sblocca strumenti e informazioni Premium
            </small>
            <TryPremium iconSize={18} iconClass="me-2" text="Prova per 0 EUR" />
        </div>
    );
};

export default PremiumBlock;
