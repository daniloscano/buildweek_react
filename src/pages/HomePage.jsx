import ProfileInfo from "../components/navigation/profileInfo/ProfileInfo.jsx";
import UsefullProfileLinkComponent from "../components/navigation/usefullProfileLinks/UsefullProfileLinkComponent.jsx";
import ThreeColsLayout from "../layouts/ThreeColsLayout.jsx";
<<<<<<< HEAD
import CustomButton from "../components/customButton/CustomButton.jsx";
import { ArrowUp, ArrowDown } from "lucide-react";
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
=======
import NewPost from "../components/newPost/NewPost.jsx";

const HomePage = () => {
    return (
        <ThreeColsLayout>
            <div className="col col-12 col-md-6 col-lg-3">
                Colonna da 3
            </div>
            <div className="col col-12 col-md-6 col-lg-5">
                <NewPost />
            </div>
            <div className="col col-12 col-md-6 col-lg-4">
                Colonna da 4
            </div>
        </ThreeColsLayout>
    );
>>>>>>> main
};

export default HomePage;
