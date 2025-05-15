import './opportunity.css';
import CustomButton from "../customButton/CustomButton.jsx";

const Opportunity = () => {
    return (
        <>
            <div className="rounded rounded-3 opportunity-container">
                <img
                    className="opportunity-top-cover"
                    src="https://static.licdn.com/aero-v1/sc/h/lortj0v1h4bx9wlwbdx6zs3f"
                    alt="opportunity cover image"
                />
                <div
                    className="d-flex flex-column justify-content-center gap-2 p-3 opportunity-content"
                >
                    <div className="avatar">
                        <div className="d-flex justify-content-center align-items-center gap-5 avatar-container">
                            <img
                                className="img-fluid avatar-image-circle"
                                src="https://www.clipartmax.com/png/middle/100-1005846_waiter-free-icon-avatar-profile-circle-png.png"
                                alt=""
                            />
                            <img
                                className="img-fluid avatar-image-squared"
                                src="https://www.clipartmax.com/png/middle/100-1005846_waiter-free-icon-avatar-profile-circle-png.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <p
                        className="text-center fw-bold mb-0 opportunity-title"
                    >
                        ?UTENTE?, scopri le opportunità offerte da Primark
                    </p>
                    <p
                        className="text-center opportunity-subtitle"
                    >
                        Scopri le ultime offerte di lavoro e notizie
                    </p>
                    <CustomButton
                        text="Segui"
                        variant="outlined"
                    />
                </div>
            </div>
        </>
    );
};

export default Opportunity;