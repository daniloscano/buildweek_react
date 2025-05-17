import { createContext, useContext, useEffect, useState } from "react";

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const getAllProfiles = async () => {
        setIsLoading(true);

        try {
            const response = await fetch(
                "https://striveschool-api.herokuapp.com/api/profile/me",
                {
                    headers: {
                        "Content-type": "application/json",
                        Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
                    },
                },
            );
            const data = await response.json();
            setData(data);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getAllProfiles();
    }, []);

    return (
        <ProfileContext.Provider value={{ data, isLoading, error }}>
            {children}
        </ProfileContext.Provider>
    );
};
