import ProfileInfo from "../components/navigation/profileInfo/ProfileInfo.jsx";
import UsefullProfileLinkComponent from "../components/navigation/usefullProfileLinks/UsefullProfileLinkComponent.jsx";
import ThreeColsLayout from "../layouts/ThreeColsLayout.jsx";
import NewsContainer from "../components/newsContainer/NewsContainer.jsx";
import Footer from "../components/footer/footer.jsx";
import { ProfileInfoProvider } from "../contexts/ProfileContextInfo.jsx";

const HomePage = () => {
  return (
    <ProfileInfoProvider>
      <ThreeColsLayout>
        <div className="col col-12 col-md-6 col-lg-3">
          <ProfileInfo />
          <UsefullProfileLinkComponent />
        </div>
        <div className="col col-12 col-md-6 col-lg-5">Colonna da 5</div>
        <div className="col col-12 col-md-6 col-lg-4">
          <NewsContainer />
          <Footer />
        </div>
      </ThreeColsLayout>
    </ProfileInfoProvider>
  );
};
export default HomePage;
