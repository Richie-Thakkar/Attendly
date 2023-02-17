import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import StudentProfile from './pages/StudentProfile';
import StudentAttendance from './pages/StudentAttendance';
import StudentDashboard from './pages/StudentDashboard';
import Team from './pages/Team';
import TeacherDashboard from './pages/TeacherDashboard';
import TeacherProfile from './pages/TeacherProfile';
import TeacherAttendance from './pages/TeacherAttendance';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='app-links'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route exact path='/student/profile' element={<StudentProfile />} />
            <Route exact path='/student/dashboard' element={<StudentDashboard />} />
            <Route exact path='/student/attendance' element={<StudentAttendance />} />
            <Route exact path='/team' element={<Team />} />
            <Route exact path='/teacher/profile' element={<TeacherProfile />} />
            <Route exact path='/teacher/dashboard' element={<TeacherDashboard />} />
            <Route exact path='/teacher/attendance' element={<TeacherAttendance />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
