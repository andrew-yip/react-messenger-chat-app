import React from 'react';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';

const Login = () => {
    return (
        <div id="login-page">
            <div id="login-card">
                <h2>Welcome to Messenger Chat!</h2>
                <div className='login-button google'>
                    <GoogleOutlined /> Sign In with Google
                    <br /> <br />
                    <FacebookOutlined /> Sign In with Facebook
                </div>
            </div>
        </div>
    );
}

export default Login;