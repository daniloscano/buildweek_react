import TwoColsLayout from "../layouts/TwoColsLayout.jsx";

const ProfilePage = () => {
    return (
        <TwoColsLayout>
            <div className="col col-12 col-md-6 col-lg-8">
                Colonna da 8
            </div>
            <div className="col col-12 col-md-6 col-lg-4">
                Colonna da 4
            </div>
        </TwoColsLayout>


    );
};

export default ProfilePage;