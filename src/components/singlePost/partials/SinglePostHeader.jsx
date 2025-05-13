import CustomButton from "../../customButton/CustomButton.jsx";
import { Ellipsis, X } from "lucide-react";

const SinglePostHeader = () => {
    return (
        <div className="d-flex align-items-center justify-content-between py-1">
            <div className="d-flex align-items-center gap-2">
                <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="user photo"
                    className="header-user-photo rounded-circle"
                />
                <small className="mb-0 fw-medium">
                    <span className="text-white-50 fw-normal">
                        Ecco cosa festeggia
                    </span>{" "}
                    Alessia Riccardo
                </small>
            </div>
            <div className="d-flex gap-1">
                <CustomButton
                    variant="single-post-btn bg-transparent p-1 d-flex align-items-center border-0"
                    text=""
                    iconPosition="right"
                    icon={Ellipsis}
                />
                <CustomButton
                    variant="single-post-btn bg-transparent p-1 d-flex align-items-center border-0"
                    text=""
                    iconPosition="right"
                    icon={X}
                />
            </div>
        </div>
    );
};

export default SinglePostHeader;
