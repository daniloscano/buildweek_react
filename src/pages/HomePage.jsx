import ThreeColsLayout from "../layouts/ThreeColsLayout.jsx";
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
};

export default HomePage;