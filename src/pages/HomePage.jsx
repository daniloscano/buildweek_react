import ProfileInfo from "../components/navigation/ProfileInfo.jsx";
import ThreeColsLayout from "../layouts/ThreeColsLayout.jsx";

const HomePage = () => {
  return (
    <ThreeColsLayout>
      <div className="col col-12 col-md-6 col-lg-3">
        <ProfileInfo />
      </div>
      <div className="col col-12 col-md-6 col-lg-5">Colonna da 5</div>
      <div className="col col-12 col-md-6 col-lg-4">Colonna da 4</div>
    </ThreeColsLayout>
  );
};

export default HomePage;
