import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Website Pages
import Home from './website/javascript/pages/Home';
import About from './website/javascript/pages/About';
import Course from './website/javascript/pages/Course';
import CourseDetail from './website/javascript/pages/Course-detail';
import Contact from './website/javascript/pages/Contact';
import News from './website/javascript/pages/News';

// Student Pages
import StudentHome from './student/javascript/pages/Home';

// Staff Pages
import StaffLogin from './staff/javascript/pages/Login';
import Dashboard from './staff/javascript/pages/Dashboard';
import StudentRecords from './staff/javascript/pages/StudentRecords';
import AddAssignmentForm from './staff/javascript/pages/AddAssignmentForm';
import AddCourseForm from './staff/javascript/pages/AddCourseForm';
import AddModuleForm from './staff/javascript/pages/AddModuleForm';
import AddResultForm from './staff/javascript/pages/AddResultForm';
import AddStaffForm from './staff/javascript/pages/AddStaffForm';
import AddStudentForm from './staff/javascript/pages/AddStudentForm';
import ArchiveRecords from './staff/javascript/pages/ArchiveRecords';
import AssignmentRecords from './staff/javascript/pages/AssignmentRecords';
import CourseRecord from './staff/javascript/pages/CourseRecord';
import EditAssignmentForm from './staff/javascript/pages/EditAssignmentForm';
import EditCourseForm from './staff/javascript/pages/EditCourseForm';
import EditModuleForm from './staff/javascript/pages/EditModuleForm';
import EditResultForm from './staff/javascript/pages/EditResultForm';
import EditStaffForm from './staff/javascript/pages/EditStaffForm';
import EditStudentForm from './staff/javascript/pages/EditStudentForm';
import ModuleRecord from './staff/javascript/pages/ModuleRecord';
import ModuleResults from './staff/javascript/pages/ModuleResults';
import StaffRecord from './staff/javascript/pages/StaffRecord';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        {/* Routes for Website Pages */}
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/course" component={Course} />
        <Route path="/course-detail" component={CourseDetail} />
        <Route path="/contact" component={Contact} />
        <Route path="/news" component={News} />

        {/* Routes for Student Pages */}
        <Route path="/student" exact component={StudentHome} />

        {/* Routes for Staff Pages */}
        <Route path="/staff" exact component={StaffLogin} />
        <Route path="/staff/dashboard" exact component={Dashboard} />
        <Route path="/staff/student-records" exact component={StudentRecords} />
        <Route path="/staff/add-assignment" exact component={AddAssignmentForm} />
        <Route path="/staff/add-course" exact component={AddCourseForm} />
        <Route path="/staff/add-module" exact component={AddModuleForm} />
        <Route path="/staff/add-result" exact component={AddResultForm} />
        <Route path="/staff/add-staff" exact component={AddStaffForm} />
        <Route path="/staff/add-student" exact component={AddStudentForm} />
        <Route path="/staff/archive-records" exact component={ArchiveRecords} />
        <Route path="/staff/assignment-records" exact component={AssignmentRecords} />
        <Route path="/staff/course-record" exact component={CourseRecord} />
        <Route path="/staff/edit-assignment" exact component={EditAssignmentForm} />
        <Route path="/staff/edit-course" exact component={EditCourseForm} />
        <Route path="/staff/edit-module" exact component={EditModuleForm} />
        <Route path="/staff/edit-result" exact component={EditResultForm} />
        <Route path="/staff/edit-staff" exact component={EditStaffForm} />
        <Route path="/staff/edit-student" exact component={EditStudentForm} />
        <Route path="/staff/module-record" exact component={ModuleRecord} />
        <Route path="/staff/results" exact component={ModuleResults} />
        <Route path="/staff/staff-records" exact component={StaffRecord} />
      </Switch>
    </Router>
  );
}

export default App;
