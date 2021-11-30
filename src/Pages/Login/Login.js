import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {googleSignIn}=useAuth()
    return (
        <div className="register">
            <div>
            <h2>LogIn Form</h2>
            <form>
            <input placeholder="Type Email" type="email" /><br />
            <input placeholder="Type Password" type="password" /><br /> 
            <button>Submit</button>
            </form>
            <p>......or......</p>
            <button onClick={googleSignIn}>Google SignIn</button>
            <p>Are You New User?<Link to ="/register">Register</Link></p>  
        </div>
        </div>
    );
};

export default Login;