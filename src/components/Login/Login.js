import React, { useState } from 'react';
import './Login.css';
import useAuth from '../Hooks/useAuth';

const Login = () => {
    const { signInWithGoogle, error} = useAuth();

    const [email, setEmail] = useState('');

    return (
        <div className="container">
            <div className="form">
                <h1>Login</h1>
                <div className="input-group">
                    <p>Email:</p>
                    <input type="email" placeholder="abc@xyz.com" id="" />
                    <p>Password:</p>
                    <input type="password" placeholder="********" id="" />
                </div>
                <br />
                <button type="submit">Login</button>
                <br />
                <button type="submit" onClick={signInWithGoogle}>Login with Google</button>
                <p style={{ color: "red" }}>{error}</p>
            </div>
        </div>
    );
};

export default Login;