import "./experience.css";
import { Plus } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import CustomModal from "../customModal/CustomModal.jsx";
import ExperienceForm from "./partials/ExperienceForm.jsx";
import ExperiencesList from "./partials/ExperiencesList.jsx";
import { ProfileContext } from "../../contexts/ProfileContext.jsx";
import { ExperienceContext } from "../../contexts/ExperienceContext.jsx";

const Experience = () => {
    const [show, setShow] = useState(false);
    const { data: myProfile } = useContext(ProfileContext);
    const {
        error,
        isLoading,
        postExperience,
        data: experiences,
        getAllExperiences,
    } = useContext(ExperienceContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        myProfile && postExperience(myProfile._id);
    };

    useEffect(() => {
        myProfile && getAllExperiences(myProfile._id);
    }, [myProfile]);

    return (
        <div className="experience-container rounded px-4 py-3">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="mb-0">Esperienza</h4>
                <button className="add-exp-btn" onClick={() => setShow(true)}>
                    <Plus size={32} />
                </button>
            </div>
            <CustomModal
                show={show}
                setShow={setShow}
                text="Aggiungi una tua esperienza lavorativa"
            >
                <ExperienceForm onSubmit={handleSubmit} />
            </CustomModal>
            {isLoading && <h5>Loading...</h5>}
            {!isLoading && error && (
                <h5>[Errore] Qualcosa è andato storto, riprova più tardi.</h5>
            )}
            {!isLoading &&
                !error &&
                experiences &&
                experiences.map((experience, i) => (
                    <ExperiencesList key={`exp-${i}`} experience={experience} />
                ))}
        </div>
    );
};

export default Experience;
