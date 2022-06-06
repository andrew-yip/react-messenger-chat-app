import React, {useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";

const Chats = () => {

    const navigate = useNavigate();
    const { user } = useAuth();
    const [loading, setLoading] = useState(true);
    //console.log(user);

    // log out
    const handleLogout = async () => {
        await auth.signOut();
        navigate('/');
    }

    // to retrieve the image
    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();

        return new File([data], "userPhoto.jpg", { type: 'image/jpeg' });
    }

    // to retrieve the already created user
    useEffect(() => {
        if (!user) {
            navigate('/');
            return;
        }

        axios.get('https://api.chatengine.io/users/me', {
            headers: {
                "project-id": "",
                "user-name": user.email,
                "user-secret": user.uid,
            }
        })

        .then(() => {
            setLoading(false);
        })

        .catch(() => {
            // for an already existing user
            let formdata = new FormData();
            formdata.append('email', user.email);
            formdata.append('username', user.email);
            formdata.append('secret', user.uid);

            getFile(user.photoURL)
                .then ((avatar) => {
                    formdata.append('avatar', avatar, avatar.name);

                    // to create a user
                    axios.post('https://api.chatengine.io/users', 
                    formdata,
                    { headers: { "private-key": "" } }
                    )
                    .then(() => setLoading(false))
                    .catch((error) => console.log(error))
                        
                })
        })

    }, [user, navigate]);

    if (!user || loading) return 'Loading...';

    return (
       <div className="chats-page">
           <div className="nav-bar">
                <div className="logo-tab">
                    Messenger Chat App
                </div>
                <div onClick={handleLogout} className="logout-tab">
                    Logout
                </div>

                <ChatEngine height="calc(100vh - 66px)" projectID="" userName={user.email}
            userSecret={user.uid}/>
           </div>
       </div>
    );
}

export default Chats;