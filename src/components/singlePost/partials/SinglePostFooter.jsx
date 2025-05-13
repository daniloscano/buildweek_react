import CustomButton from "../../customButton/CustomButton.jsx";
import { MessageCircleMore, Repeat2, Send, ThumbsUp } from "lucide-react";

const SinglePostFooter = () => {
    return (
        <div className="d-flex justify-content-around py-2">
            <CustomButton
                variant="single-post-btn footer-btn bg-transparent p-1 d-flex align-items-center border-0"
                text="Consiglia"
                iconPosition="left"
                icon={ThumbsUp}
            />
            <CustomButton
                variant="single-post-btn footer-btn bg-transparent p-1 d-flex align-items-center border-0"
                text="Commenta"
                iconPosition="left"
                icon={MessageCircleMore}
            />
            <CustomButton
                variant="single-post-btn footer-btn bg-transparent p-1 d-flex align-items-center border-0"
                text="Diffondi il post"
                iconPosition="left"
                icon={Repeat2}
            />
            <CustomButton
                variant="single-post-btn footer-btn bg-transparent p-1 d-flex align-items-center border-0"
                text="Invia"
                iconPosition="left"
                icon={Send}
            />
        </div>
    );
};

export default SinglePostFooter;
