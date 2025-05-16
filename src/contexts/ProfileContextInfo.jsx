import { createContext, useState } from "react";

export const ProfileInfoContext = createContext();

export const ProfileInfoProvider = ({ children }) => {
  const [myProfile, setMyProfile] = useState([]);

  const getMyProfile = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_ENDPOINT_ME}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_STRIVE_TOKEN}`,
        },
      });
      const data = await response.json();

      setMyProfile(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProfileInfoContext.Provider
      value={{
        setMyProfile,
        myProfile,
        getMyProfile,
      }}
    >
      {children}
    </ProfileInfoContext.Provider>
  );
};
