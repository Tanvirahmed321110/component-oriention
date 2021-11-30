import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    return (
        <div className="register">
            <div>
            <h2>Register For New User</h2>
            <form>
            <input placeholder="Type Name" type="text" /><br />
            <input placeholder="Type Email" type="email" /><br /> 
            <input placeholder="Type Password" type="password" /><br /> 
            <input style={{textAlign:"left"}} type="button" value="Submit"/>
            </form>
            <p>......or......</p>
            <p>Already Login?<Link to ="/login">Login</Link></p>  
        </div>
        </div>
    );
};

export default Register;