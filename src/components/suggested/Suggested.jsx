import "./suggested.css";
import { Eye } from "lucide-react";
import CustomButton from "../customButton/CustomButton.jsx";

const Suggested = () => {
    return (
        <div className="suggested-container rounded p-3">
            <h5 className="mb-0">Consigliato per te</h5>
            <small className="text-white-50 d-flex">
                <span>
                    <Eye size={20} className="pb-1" />
                </span>
                <span>Solo per te</span>
            </small>
            <div className="border border-secondary rounded p-2 mt-2 d-flex flex-column gap-1">
                <div className="d-flex align-items-center gap-2">
                    <img
                        alt="Profile Page Icon"
                        className="rounded-top-1"
                        src="https://static.licdn.com/aero-v1/sc/h/49z3lf7yjp58c9akkb8fehl40"
                    />
                    <h6 className="mb-0">
                        Scrivi un riepilogo per metter in evidenza la tua
                        personalità o la tua esperienza lavorativa
                    </h6>
                </div>
                <small className="d-inline-block mt-2">
                    Gli utenti che includono un riepilogo ricevono fino a 3,9
                    volte più visualizzazioni del profilo.
                </small>
                <CustomButton
                    text="Aggiungi un riepilogo"
                    variant="py-0 fw-medium align-self-start"
                />
            </div>
        </div>
    );
};

export default Suggested;
