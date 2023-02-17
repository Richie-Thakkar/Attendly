import React from 'react';
import StudentSidebar from '../components/StudentSidebar';
import './StudentAttendance.css';
import Footer from '../components/Footer';
import { Courses } from '../utils/Courses';
// import spit from '../assets/spit_logo-removebg-preview.png';

const StudentAttendance = (props) => {
    return (
        <>
            <div className='stu-atd'>
                <StudentSidebar />
                <div className='stu-atd-container'>
                    <div className='stu-atd-nav'>
                        <h3>Sardar Patel Institute of Technology</h3>
                        <div className='stu-atd-nav-name'>
                            <p>J</p>
                            <span>Ounkar Vijay Jagtap</span>
                        </div>
                    </div>
                    <div className='stu-atd-main'>
                        <h4>Courses</h4>
                        <div className='stu-atd-main-courses'>
                            <div className='row'>
                                {
                                    Courses.map((item) => {
                                        return (
                                            <div className='col-md-3' key={item.id}>
                                                <div className='stu-atd-course-item'>
                                                    <p> {item.name} </p>
                                                    <img src={item.img} alt="course" />
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className='stu-atd-footer'>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}

export default StudentAttendance