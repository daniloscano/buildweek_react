import { navbarIconLinks } from "../dataSource.js";

const NavigationIcons = () => {
    return (
        <ul className="nav-icons-list w-100 list-unstyled mb-0 d-flex justify-content-between justify-content-md-around justify-content-lg-end align-items-center gap-lg-4 ms-lg-auto">
            {navbarIconLinks.map((iconLink) => {
                const { id, icon, text } = iconLink;
                const Icon = icon;

                return (
                    <li key={id}>
                        <a
                            href="#"
                            className="d-flex flex-column align-items-center"
                        >
                            <Icon />
                            <small className="d-none d-lg-block">{text}</small>
                        </a>
                    </li>
                );
            })}
        </ul>
    );
};

export default NavigationIcons;
