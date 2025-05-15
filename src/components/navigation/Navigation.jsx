import "./navigation.css";
import { Linkedin } from "lucide-react";
import SearchBar from "./partials/SearchBar.jsx";
import NavigationMenu from "./partials/NavigationMenu.jsx";
import NavigationIcons from "./partials/NavigationIcons.jsx";
import NavigationProfile from "./partials/NavigationProfile.jsx";

const Navigation = () => {
    return (
        <nav className="linkedin-navbar container-fluid">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-3 col-xl-4 d-flex gap-2 py-2">
                        <a href="#" className="navbar-logo p-2 rounded-1">
                            <Linkedin />
                        </a>
                        <SearchBar />
                    </div>
                    <div className="col-9 col-xl-8 d-flex align-items-center justify-content-around gap-4">
                        <NavigationIcons />
                        <NavigationProfile />
                        <NavigationMenu />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
