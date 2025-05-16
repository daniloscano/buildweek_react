import {createContext, useState} from "react";

export const ProfileContext = createContext()

export const ProfileProvider = ({ children }) => {
    const [ profile, setProfile ] = useState({})
    const [ isLoading, setIsLoading ] = useState(false)
    const [ error, setError ] = useState('')

    const getProfileMeInfo = async () => {
        try {
            setIsLoading(true)
            const response = await fetch(`${import.meta.env.VITE_PROFILE_ME_ENDPOINT}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${import.meta.env.VITE_STRIVE_TOKEN}`
                }
            })
            const data = await response.json();
            setProfile(data)
        } catch (e) {
            setError(e.message)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <ProfileContext.Provider value={
            {
                profile, isLoading, error,
                getProfileMeInfo
            }
        }>
            { children }
        </ProfileContext.Provider>
    )
}