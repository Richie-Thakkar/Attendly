import React, { useState } from 'react';
import './StudentSidebar.css';
import logo from '../assets/logo192.png';
import { NavLink, useNavigate } from 'react-router-dom';

function TeacherSidebar() {
    // let { children } = props;
    let navigate = useNavigate();
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const handleLogout = () => {
        navigate("/");
    }
    return (
        <>
            <div className='stu-sb'>
                <div className='stu-sb-container'>
                    <div className='stu-sb-logo'>
                        {/* <NavLink exact to="/student/dashboard"> */}
                        <img src={logo} alt="logo" />
                        {/* </NavLink> */}
                    </div>
                    <div className='stu-sb-menu'>
                        <div className='stu-sb-menu-item'>
                            <NavLink to="/teacher/dashboard" className={({ isActive }) => (isActive ? "active stu-sb-menu-link" : 'none stu-sb-menu-link')} onClick={handleClick}>
                                <i className='bx bxs-home' style={{ color: '#fef8f8' }}  ></i>
                                <p>Home</p>
                            </NavLink>
                        </div>
                        <div className='stu-sb-menu-item'>
                            <NavLink to="/teacher/profile" className={({ isActive }) => (isActive ? "active stu-sb-menu-link" : 'none stu-sb-menu-link')} onClick={handleClick}>
                                <i className='bx bxs-user' style={{ color: '#fef8f8' }}></i>
                                <p>Profile</p>
                            </NavLink>
                        </div>
                        <div className='stu-sb-menu-item'>
                            <NavLink to="/teacher/attendance" className={({ isActive }) => (isActive ? "active stu-sb-menu-link" : 'stu-sb-menu-link none')} onClick={handleClick}>
                                <i className='bx bxs-calendar-check' style={{ color: '#fef8f8' }}></i>
                                <p>Attendance</p>
                            </NavLink>
                        </div>
                    </div>
                    <div className='stu-sb-logout'>
                        {/* <button onClick={handleLogout} className=''>Logout</button> */}
                        <button onClick={handleLogout} className="logout-custom-btn logout-btn-7"><span>Logout</span></button>
                    </div>
                </div>
                {/* <main>{children}</main> */}
            </div>
        </>
    )
}

export default TeacherSidebar