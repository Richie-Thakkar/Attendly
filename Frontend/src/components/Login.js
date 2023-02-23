import React, { useState } from 'react';
import './Login.css';

function Login_button() {
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    });
    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const email = credentials.email;
        const password = credentials.password;
        const data = { email, password };
        console.log(data);
        fetch('/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
      }
      

    return (
        <>
            <div className='login'>
                <form className="lform" onSubmit={handleSubmit}>
                    <div className='login-container'>
                        <h4>Login</h4>
                        <div className="login-input-box">
                            <input className='main-color login-email' type="email" name="email" value={credentials.email} onChange={handleChange} placeholder="Enter your username" />
                            <div className="login-icon"><i className='bx bxs-user'></i><p>|</p></div>
                        </div>
                        <div className="login-input-box">
                            <input type="password" className='login-pass' name="password" value={credentials.password} onChange={handleChange} placeholder="Enter your password" />
                            <div className="login-icon"><i className='bx bxs-lock-alt'></i><p>|</p></div>
                        </div>
                        <div className="login-pass-right">
                            <p>Forgot password?</p>
                        </div>
                        <button type="submit" className="login-button login-button-2">Login</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login_button