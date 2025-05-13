import ProfileInfo from "../components/navigation/profileInfo/ProfileInfo.jsx";
import UsefullProfileLinkComponent from "../components/navigation/usefullProfileLinks/UsefullProfileLinkComponent.jsx";
import ThreeColsLayout from "../layouts/ThreeColsLayout.jsx";
import CustomButton from "../components/customButton/CustomButton.jsx";
import { ArrowUp, ArrowDown } from "lucide-react";

const HomePage = () => {
  return (
    <ThreeColsLayout>
      <div className="col col-12 col-md-6 col-lg-3">
        <ProfileInfo />
        <UsefullProfileLinkComponent />
      </div>
      <div className="col col-12 col-md-6 col-lg-5">Colonna da 5</div>
      <div className="col col-12 col-md-6 col-lg-4">Colonna da 4</div>
    </ThreeColsLayout>
  );
};

export default HomePage;
