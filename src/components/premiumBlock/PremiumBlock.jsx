import "./premiumBlock.css";
import { Star } from "lucide-react";

const PremiumBlock = () => {
    return (
        <div className="premium-block fw-medium py-3 px-4 rounded-3 d-flex flex-column">
            <small className="text-white-50 mb-1">
                Grow your career or business with Premium
            </small>
            <h6 className="mb-0">
                <span>
                    <Star size={18} className="premium-icon me-2" />
                </span>
                Try Premium for €0
            </h6>
        </div>
    );
};

export default PremiumBlock;
