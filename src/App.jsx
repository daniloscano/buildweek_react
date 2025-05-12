import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";

const App = () => {

    return (
        <Router>
            <Routes>
                <Route index path="/" element={<HomePage />} />
                <Route path="/profile/me" element={<ProfilePage />} />

                <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
        </Router>
    )
}

export default App
