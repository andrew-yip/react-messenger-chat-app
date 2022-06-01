import React from "react";
import { useNavigate } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../firebase";

const Chats = () => {

    const navigate = useNavigate();

    // log out
    const handleLogout = async () => {
        await auth.signOut();
        navigate('/');
    }

    return (
       <div className="chats-page">
           <div className="nav-bar">
                <div className="logo-tab">
                    Messenger Chat App
                </div>
                <div onClick={handleLogout} className="logout-tab">
                    Logout
                </div>

                <ChatEngine height="calc(100vh - 66px)" projectId="PROJECT_ID" userName="." userSecret="."/>
           </div>
       </div>
    );
}

export default Chats;