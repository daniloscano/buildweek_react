import './newPost.css'
import CustomButton from "../customButton/CustomButton.jsx";
import { Play, Image, Newspaper } from "lucide-react";

const NewPost = () => {
    return (
        <>
            <div className="rounded rounded-4 p-3 new-post-container">
                <div className="d-flex align-items-center gap-4 p-2 new-post-content">
                    <div className="d-flex justify-content-center align-items-center p-2 avatar">
                        DS
                    </div>
                    <input
                        className="form-control rounded rounded-4 create-post-input"
                        name="create-post"
                        placeholder="Crea un post"
                        type="text"
                    />
                </div>
                <div className="d-flex align-items-center justify-content-around mt-1 p-2 type-btn-container">
                    <CustomButton
                        icon={Play}
                        iconPosition="left"
                        text="Video"
                    />
                    <CustomButton
                        icon={Image}
                        iconPosition="left"
                        text="Foto"
                    />
                    <CustomButton
                        icon={Newspaper}
                        iconPosition="left"
                        text="Scrivi un articolo"
                    />
                </div>
            </div>
        </>
    );
};

export default NewPost;