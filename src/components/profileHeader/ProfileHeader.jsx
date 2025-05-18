import './profileHeader.css';
import {useContext, useEffect} from "react";
import {ProfileContext} from "../../contexts/ProfileContext.jsx";

const ProfileHeader = () => {
    const { profile, isLoading, error, getProfileMeInfo } = useContext(ProfileContext)

    useEffect(() => {
        getProfileMeInfo()
    }, []);

    return (
        <>
            <div className="rounded rounded-3 profile-header">
                <img
                    className="img-fluid profile-cover-image"
                    src="https://static.licdn.com/aero-v1/sc/h/lortj0v1h4bx9wlwbdx6zs3f"
                    alt="profile cover image"
                />



                <img
                    src={profile.image}
                    alt={`${profile.name} ${profile.surname} avatar`}
                />
            </div>
        </>
    );
};

export default ProfileHeader;