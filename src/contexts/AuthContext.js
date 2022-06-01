import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

// creating the context
const AuthContext = React.createContext();

// to grab that context
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ( {  children }) => {
    const [loading, setLoading] = useState(true); // setting loading state
    const [user, setUser] = useState(null); // setting user state to null
    const navigate = useNavigate();

    useEffect(() => {
        auth.onAuthStateChanged((user) => { // grabbing the user from firebase authentication
            setUser(user);
            setLoading(false);

            // only navigate to the chats if we have a user
            if (user) navigate('/chats'); // using react router dom to push our applcation to '/chats'
            
        })
    }, [user, navigate]);

    const value = { user };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}