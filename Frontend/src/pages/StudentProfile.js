import React from 'react';
import StudentSidebar from '../components/StudentSidebar';
import './StudentProfile.css';
import { Student } from '../utils/Courses';
import Footer from '../components/Footer';

const StudentProfile = (props) => {
    return (
        <>
            <div className='stu-prf'>
                <StudentSidebar />
                <div className='stu-prf-container'>
                    <div className='stu-prf-header'>
                        <div className='stu-prf-info'>
                            <img src={Student.img} alt="img" />
                            <p>{Student.name}</p>
                        </div>
                        <i class='bx bxs-edit-alt'></i>
                    </div>
                    <div className='stu-prf-main'>
                        <div className='stu-prf-main-left'>
                            <div className='stu-prf-list'>
                                <div className='stu-prf-list-head'>
                                    <p>UID</p>
                                </div>
                                <div className='stu-prf-list-det'>
                                    <p>{Student.uid}</p>
                                </div>
                            </div>
                            <div className='stu-prf-list'>
                                <div className='stu-prf-list-head'>
                                    <p>Branch</p>
                                </div>
                                <div className='stu-prf-list-det'>
                                    <p>{Student.branch}</p>
                                </div>
                            </div>
                            <div className='stu-prf-list'>
                                <div className='stu-prf-list-head'>
                                    <p>Year of Passing</p>
                                </div>
                                <div className='stu-prf-list-det'>
                                    <p>{Student.yop}</p>
                                </div>
                            </div>
                            <div className='stu-prf-list'>
                                <div className='stu-prf-list-head'>
                                    <p>Student email</p>
                                </div>
                                <div className='stu-prf-list-det'>
                                    <p>{Student.emailStudent}</p>
                                </div>
                            </div>
                            <div className='stu-prf-list'>
                                <div className='stu-prf-list-head'>
                                    <p>Father Name</p>
                                </div>
                                <div className='stu-prf-list-det'>
                                    <p>{Student.nameDad}</p>
                                </div>
                            </div>
                            <div className='stu-prf-list'>
                                <div className='stu-prf-list-head'>
                                    <p>Address</p>
                                </div>
                                <div className='stu-prf-list-det'>
                                    <p>{Student.address}</p>
                                </div>
                            </div>
                        </div>
                        <div className='stu-prf-main-right'>
                            <div className='stu-prf-list'>
                                <div className='stu-prf-list-head'>
                                    <p>Academic Year</p>
                                </div>
                                <div className='stu-prf-list-det'>
                                    <p>{Student.academicYear}</p>
                                </div>
                            </div><div className='stu-prf-list'>
                                <div className='stu-prf-list-head'>
                                    <p>Current Year</p>
                                </div>
                                <div className='stu-prf-list-det'>
                                    <p>{Student.year}</p>
                                </div>
                            </div><div className='stu-prf-list'>
                                <div className='stu-prf-list-head'>
                                    <p>Semester</p>
                                </div>
                                <div className='stu-prf-list-det'>
                                    <p>{Student.sem}</p>
                                </div>
                            </div><div className='stu-prf-list'>
                                <div className='stu-prf-list-head'>
                                    <p>Parent Email</p>
                                </div>
                                <div className='stu-prf-list-det'>
                                    <p>{Student.emailParent}</p>
                                </div>
                            </div><div className='stu-prf-list'>
                                <div className='stu-prf-list-head'>
                                    <p>Mother Name</p>
                                </div>
                                <div className='stu-prf-list-det'>
                                    <p>{Student.nameMom}</p>
                                </div>
                            </div><div className='stu-prf-list'>
                                <div className='stu-prf-list-head'>
                                    <p>Date of Birth</p>
                                </div>
                                <div className='stu-prf-list-det'>
                                    <p>{Student.dob}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='stu-prf-footer'>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}

export default StudentProfile