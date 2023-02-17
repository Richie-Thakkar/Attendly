import React from 'react';
import './TeacherDashboard.css';
import { Teacher } from '../utils/Courses';
import Footer from '../components/Footer';
import TeacherSidebar from '../components/TeacherSidebar';

const TeacherDashboard = (props) => {
    return (
        <>
            <div className='tch-db'>
                <TeacherSidebar />
                <div className='tch-db-container'>
                    <div className='tch-db-text'>
                        <div className='tch-db-text-gre'>
                            <h3>Hello {Teacher.name}!</h3>
                        </div>
                        <div className='tch-db-text-desp'>
                            <p>Your Assigned Subjects for the current semester are given below:</p>
                            <p>Select the subject for which you want to mark attendance</p>
                        </div>
                    </div>
                    <div className='tch-db-sub'>
                        <div className='row'>
                            {
                                Teacher.subjects.map((item, index) => {
                                    return (
                                        <div className='col-md-3' key={index}>
                                            <div className='tch-db-sub-item'>
                                                <p> {item} </p>
                                                {/* <img src={item.img} alt="course" /> */}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='tch-db-footer'>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeacherDashboard