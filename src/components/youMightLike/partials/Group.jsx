import CustomButton from "../../customButton/CustomButton.jsx";

const Group = ({ img, text, usersNum }) => {
    return (
        <div className="group-container d-flex gap-2 mt-2 pb-4">
            <img src={img} alt="AI" className="align-self-start" />
            <div className="d-flex flex-column">
                <h6 className="might-like-title mb-0">{text}</h6>
                <small className="text-white-50">{usersNum} utenti</small>
                <CustomButton
                    text="Iscriviti"
                    variant="subscribe-btn align-self-start py-1 mt-2"
                />
            </div>
        </div>
    );
};

export default Group;
