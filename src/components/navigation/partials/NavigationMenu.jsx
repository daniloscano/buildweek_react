import { Ellipsis, Grip } from "lucide-react";
import TryPremium from "../../tryPremium/TryPremium.jsx";

const NavigationMenu = () => {
    return (
        <div className="nav-right-side-icons d-flex align-items-center gap-4 py-2 ps-md-4">
            <div className="d-md-none">
                <Ellipsis />
            </div>

            <div className="nav-icons-list d-none d-md-flex flex-column align-items-center">
                <Grip />
                <small className="d-none d-lg-block text-nowrap">
                    For Business
                </small>
            </div>
            <div className="d-none d-lg-block">
                <TryPremium
                    text="Prova Premium per 0 EUR"
                    titleClass="nav-icons-list text-nowrap d-flex flex-column align-items-center small"
                />
            </div>
        </div>
    );
};

export default NavigationMenu;
