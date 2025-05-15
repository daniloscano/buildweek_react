import { Star } from "lucide-react";

const TryPremium = ({ titleClass, iconSize, iconClass }) => {
    return (
        <h6 className={`mb-0 ${titleClass}`}>
            <span>
                <Star size={iconSize} className={`premium-icon ${iconClass}`} />
            </span>
            Try Premium for €0
        </h6>
    );
};

export default TryPremium;
