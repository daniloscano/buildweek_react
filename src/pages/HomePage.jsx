import ProfileInfo from "../components/profileInfo/ProfileInfo.jsx";
import UsefullProfileLinkComponent from "../components/usefullProfileLinks/UsefullProfileLinkComponent.jsx";
import ThreeColsLayout from "../layouts/ThreeColsLayout.jsx";
import NewsContainer from "../components/newsContainer/NewsContainer.jsx";
import Opportunity from "../components/opportunity/Opportunity.jsx";
import SinglePost from "../components/singlePost/SinglePost.jsx";
import PremiumBlock from "../components/premiumBlock/PremiumBlock.jsx";
import ProfileStats from "../components/profileStats/ProfileStats.jsx";

const HomePage = () => {
    return (
        <ThreeColsLayout>
            <div className="col col-12 col-md-6 col-lg-3">
                <ProfileInfo />
                <PremiumBlock />
                <ProfileStats />
                <UsefullProfileLinkComponent />
            </div>
            <div className="col col-12 col-md-6 col-lg-5">
                <SinglePost />
            </div>
            <div className="col col-12 col-md-6 col-lg-4">
                <div className="d-flex flex-column gap-3">
                    <NewsContainer />
                    <Opportunity />
                </div>
            </div>
        </ThreeColsLayout>
    );
};

export default HomePage;
