import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';

function Footer() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/team");
    }

    return (
        <>
            <div className='footer-container'>
                <div className='footer-team'>
                    <p onClick={handleClick}>Developed by Team ROST</p>
                </div>
            </div>
        </>
    )
}

export default Footer