import { createContext, useState } from "react";

export const ExperienceContext = createContext();

export const ExperienceProvider = ({ children }) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [payload, setPayload] = useState({
        role: "",
        company: "",
        startDate: "",
        endDate: "",
        description: "",
        area: "",
    });

    const handleExperience = (e) => {
        const { name, value } = e.target;

        setPayload({
            ...payload,
            [name]: value,
        });
    };

    const getAllExperiences = async (profileId) => {
        setIsLoading(true);

        try {
            const response = await fetch(
                `https://striveschool-api.herokuapp.com/api/profile/${profileId}/experiences`,
                {
                    headers: {
                        "Content-type": "application/json",
                        Authorization: `Bearer ${import.meta.env.VITE_STRIVE_TOKEN}`,
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

    const postExperience = async (profileId) => {
        setIsLoading(true);

        try {
            const response = await fetch(
                `https://striveschool-api.herokuapp.com/api/profile/${profileId}/experiences`,
                {
                    method: "POST",
                    body: JSON.stringify(payload),
                    headers: {
                        "Content-type": "application/json",
                        Authorization: `Bearer ${import.meta.env.VITE_STRIVE_TOKEN}`,
                    },
                },
            );
            return await response.json();
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <ExperienceContext.Provider
            value={{
                data,
                error,
                payload,
                isLoading,
                postExperience,
                handleExperience,
                getAllExperiences,
            }}
        >
            {children}
        </ExperienceContext.Provider>
    );
};
