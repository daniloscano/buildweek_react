import { Search } from "lucide-react";

const SearchBar = () => {
    return (
        <form className="nav-search-bar input-group">
            <button type="submit" className="input-group-text search-bar-btn">
                <Search size={18} />
            </button>
            <input
                type="search"
                placeholder="Search"
                className="form-control d-none d-xl-block"
            />
        </form>
    );
};

export default SearchBar;
