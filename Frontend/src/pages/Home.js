import React from 'react';
import './Home.css';
import Footer from '../components/Footer';
import Login from '../components/Login';
import logo from '../assets/logo192.png';
import image from '../assets/logo512.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    function vary() {
        console.log("Clicked");
        var blur = document.getElementById('login-blur');
        blur.classList.toggle('login-active');

        var popup = document.getElementById("login-popup");
        popup.classList.toggle('login-deac');
    }

    const navigate = useNavigate();
    const sidebar = () => {
        navigate("/student/dashboard");
    }
    const teacher = () => {
        navigate("/teacher/dashboard");
    }
    return (
        <>
            <div className='login-popup' id="login-popup">
                <Login />
            </div>
            <div className='home-container' id="login-blur">
                <div className='home-header'>
                    <div className='home-header-logo'>
                        <img src={logo} alt="logo" onClick={sidebar} />
                    </div>
                    <div className='home-header-login'>
                        <button type='submit' onClick={vary}>Login</button>
                    </div>
                </div>
                <div className='home-main'>
                    <div className='home-main-text'>
                        <p>Welcome to Attendly!</p>
                        <p>An Attendence Tracker for defaulter analysis to help students and teachers alike</p>
                    </div>
                    <div className='home-main-img'>
                        <img src={image} onClick={teacher} alt="pic" />
                    </div>
                </div>
                <div className='home-footer'>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Home