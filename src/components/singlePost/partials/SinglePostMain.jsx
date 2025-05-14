import { Earth, Hand, Lightbulb, ThumbsUp, Plus } from "lucide-react";
import CustomButton from "../../customButton/CustomButton.jsx";

const SinglePostMain = () => {
    const generateRandomStat = () => Math.floor(Math.random() * 500);

    return (
        <div className="pt-2 pb-1 border-top border-bottom border-secondary border-opacity-50">
            <div className="d-flex align-items-center gap-3">
                <div className="w-75 d-flex align-items-center gap-3">
                    <img
                        alt="user photo"
                        className="rounded-circle post-user-photo"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                    <div className="d-flex flex-column overflow-hidden text-white-50">
                        <h6 className="mb-0 text-white">
                            Fabrizia Lallo{" "}
                            <small className="text-white-50 fw-normal">
                                • 2°
                            </small>
                        </h6>
                        <small className="d-inline-block text-truncate">
                            I help tech professionals make better career
                            choices: salaries, companies and more...
                        </small>
                        <small className="d-flex align-items-center gap-1">
                            <span>3 giorni</span>
                            <span>•</span>
                            <span>Modificato</span>
                            <span>•</span>
                            <span>
                                <Earth size={14} />
                            </span>
                        </small>
                    </div>
                </div>
                <CustomButton
                    text="Segui"
                    icon={Plus}
                    iconPosition="left"
                    variant="post-follow-btn border-0 fw-medium ms-auto pe-0"
                />
            </div>
            <div className="p-1">
                <p className="mb-0">Ricevi un'offerta: 35.000€ lordi l'anno.</p>
                <p className="mb-0">
                    Ruolo in linea, stack ok.
                    <a
                        href="#"
                        className="post-other-link text-white-50 text-decoration-none ms-2"
                    >
                        ... altro
                    </a>
                </p>
            </div>
            <div className="d-flex justify-content-between align-items-center text-white-50">
                <div className="post-reaction-container position-relative">
                    <span className="position-absolute">
                        <ThumbsUp
                            size={16}
                            className="post-reaction-icons border border-black rounded-circle"
                        />
                    </span>
                    <span className="position-absolute">
                        <Hand
                            size={16}
                            className="post-reaction-icons border border-black rounded-circle"
                        />
                    </span>
                    <span className="position-absolute">
                        <Lightbulb
                            size={16}
                            className="post-reaction-icons border border-black rounded-circle"
                        />
                    </span>
                    <div className="ms-3">
                        <small className="ms-4">2024</small>
                    </div>
                </div>
                <small className="d-flex gap-2">
                    <span>{generateRandomStat()} commenti</span>
                    <span>•</span>
                    <span>{generateRandomStat()} diffusioni post</span>
                </small>
            </div>
        </div>
    );
};

export default SinglePostMain;
