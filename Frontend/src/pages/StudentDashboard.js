import React from 'react';
import StudentSidebar from '../components/StudentSidebar';
import './StudentDashboard.css';

const StudentDashboard = (props) => {
    return (
        <>
            <div className='stu-db'>
                <StudentSidebar />
                <div className='stu-db-container'>Student_Dashboard</div>
            </div>
        </>
    )
}

export default StudentDashboard