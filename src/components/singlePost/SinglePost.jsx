import "./singlePost.css";
import { Earth, Hand, Lightbulb, ThumbsUp } from "lucide-react";
import SinglePostHeader from "./partials/SinglePostHeader.jsx";
import SinglePostFooter from "./partials/SinglePostFooter.jsx";
import SinglePostMain from "./partials/SinglePostMain.jsx";

const SinglePost = () => {
    return (
        <div className="single-post-container rounded-3 px-3 py-1 mt-3">
            <SinglePostHeader />
            <SinglePostMain />
            <SinglePostFooter />
        </div>
    );
};

export default SinglePost;
