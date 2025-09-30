import Navigation from "../components/navigation/Navigation.jsx";

const ThreeColsLayout = ({ children }) => {
    return (
        <>
            <Navigation />
            <main className="container-fluid">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                        {children}
                    </div>
                </div>
            </main>
            {/* footer */}
        </>
    );
};

export default ThreeColsLayout;
