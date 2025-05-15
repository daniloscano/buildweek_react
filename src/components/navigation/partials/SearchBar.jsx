import { Search } from "lucide-react";

const SearchBar = () => {
    return (
        <div className="nav-search-bar input-group">
            <span className="input-group-text">
                <Search size={18} />
            </span>
            <input
                type="search"
                placeholder="Search"
                className="form-control d-none d-xl-block"
            />
        </div>
    );
};

export default SearchBar;
