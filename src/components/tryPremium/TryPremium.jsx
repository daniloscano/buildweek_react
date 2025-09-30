import { Star } from "lucide-react";

const TryPremium = ({ titleClass, iconSize, iconClass, text }) => {
    return (
        <h6 className={`mb-0 ${titleClass}`}>
            <span>
                <Star size={iconSize} className={`premium-icon ${iconClass}`} />
            </span>
            {text}
        </h6>
    );
};

export default TryPremium;
