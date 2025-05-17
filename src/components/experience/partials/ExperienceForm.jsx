import { useContext } from "react";
import { ExperienceContext } from "../../../contexts/ExperienceContext.jsx";
import CustomButton from "../../customButton/CustomButton.jsx";

const ExperienceForm = ({ onSubmit }) => {
    const { payload, handleExperience } = useContext(ExperienceContext);

    return (
        <form onSubmit={onSubmit} className="d-flex flex-column gap-3">
            <div>
                <input
                    type="text"
                    name="role"
                    value={payload.role}
                    className="form-control"
                    onChange={handleExperience}
                    placeholder="Tipo di impiego"
                />
            </div>
            <div>
                <input
                    type="text"
                    name="company"
                    value={payload.company}
                    className="form-control"
                    onChange={handleExperience}
                    placeholder="Azienda o organizzazione"
                />
            </div>
            <div className="d-flex gap-3">
                <div>
                    <span>Data di inizio</span>
                    <input
                        type="date"
                        name="startDate"
                        value={payload.startDate}
                        className="form-control"
                        onChange={handleExperience}
                    />
                </div>
                <div>
                    <span>Data di fine</span>
                    <input
                        type="date"
                        name="endDate"
                        value={payload.endDate}
                        className="form-control"
                        onChange={handleExperience}
                    />
                    <small className="d-inline-block">
                        *lasciare libero se questo è il lavoro attuale
                    </small>
                </div>
            </div>
            <div>
                <textarea
                    name="description"
                    className="form-control"
                    placeholder="Descrizione"
                    value={payload.description}
                    onChange={handleExperience}
                ></textarea>
            </div>
            <div>
                <input
                    type="text"
                    name="area"
                    value={payload.area}
                    placeholder="Località"
                    className="form-control"
                    onChange={handleExperience}
                ></input>
            </div>
            <CustomButton
                text="Aggiungi"
                variant="bg-primary fw-medium border-0 shadow py-2 px-4 align-self-start"
            />
        </form>
    );
};

export default ExperienceForm;
