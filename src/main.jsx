import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App.jsx";
import { ExperienceProvider } from "./contexts/ExperienceContext.jsx";
import { ProfileProvider } from "./contexts/ProfileContext.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ProfileProvider>
            <ExperienceProvider>
                <App />
            </ExperienceProvider>
        </ProfileProvider>
    </StrictMode>,
);
