import TwoColsLayout from "../layouts/TwoColsLayout.jsx";
import ProfileHeader from "../components/profileHeader/ProfileHeader.jsx";

const ProfilePage = () => {
    return (
        <TwoColsLayout>
            <div className="col col-12 col-md-6 col-lg-8">
                <ProfileHeader />
            </div>
            <div className="col col-12 col-md-6 col-lg-4">
                Colonna da 4
            </div>
        </TwoColsLayout>


    );
};

export default ProfilePage;