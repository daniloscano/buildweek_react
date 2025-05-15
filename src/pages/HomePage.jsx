import ProfileInfo from "../components/profileInfo/ProfileInfo.jsx";
import UsefullProfileLinkComponent from "../components/usefullProfileLinks/UsefullProfileLinkComponent.jsx";
import ThreeColsLayout from "../layouts/ThreeColsLayout.jsx";
import NewsContainer from "../components/newsContainer/NewsContainer.jsx";

const HomePage = () => {
    return (
        <ThreeColsLayout>
            <div className="col col-12 col-md-6 col-lg-3">
                <ProfileInfo />
                <UsefullProfileLinkComponent />
            </div>
            <div className="col col-12 col-md-6 col-lg-5">Colonna da 5</div>
            <div className="col col-12 col-md-6 col-lg-4">
                <NewsContainer />
            </div>
        </ThreeColsLayout>
    );
};

export default HomePage;
