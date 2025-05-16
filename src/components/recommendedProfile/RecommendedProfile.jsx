import { React, useEffect, useState } from "react";
import "./RecommendedProfile.css";
import { Button } from "react-bootstrap";
import CustomButton from "../customButton/CustomButton";
import { UserPlus } from "lucide-react";

const RecommendedProfile = () => {
  const [usersProfile, setUsersProfile] = useState([]);

  const getUsersProfile = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_ENDPOINT_PROFILES}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_STRIVE_TOKEN}`,
          },
        }
      );

      const data = await response.json();

      setUsersProfile(data);
      console.log(data);
    } catch (error) {}
  };

  useEffect(() => {
    getUsersProfile();
  }, []);

  return (
    <>
      <div className="p-2 rounded profile-container">
        <div className="text-white">
          <h3>Persone che potresti conoscere</h3>
          <small>Dalla tua scuola o università</small>
        </div>
        {usersProfile.length > 0 &&
          usersProfile.slice(5, 10).map((user) => (
            <div>
              <div className="d-flex gap-2 align-items-center mb-3">
                <img className="profile-img mb-2" src={user.image} alt="user" />
                <div className="d-flex flex-column">
                  <div className="d-flex gap-2">
                    <h5 className="text-white mb-0">{user.name}</h5>
                    <h5 className="text-white mb-0">{user.surname}</h5>
                  </div>
                  <div className="d-flex flex-column text-white fw-light">
                    <p className="mb-0">{user.title}</p>
                    <CustomButton
                      text="collegati"
                      icon={UserPlus}
                      iconPosition="left"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default RecommendedProfile;
