import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../css/sidebar.css'; 

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === `/staff${path}`;

  return (
    <div className="sidebar">
      <ul>
        <li className={isActive('/dashboard') ? 'active' : ''}>
          <Link to="./dashboard">Dashboard</Link>
        </li>
        <li className={isActive('/student-records') ? 'active' : ''}>
          <Link to="./student-records">Student Record</Link>
        </li>
        <li className={isActive('/assignment-records') ? 'active' : ''}>
          <Link to="./assignment-records">Assignment</Link>
        </li>
        <li className={isActive('/results') ? 'active' : ''}>
          <Link to="./results">Result</Link>
        </li>
        <li className={isActive('/staff-records') ? 'active' : ''}>
          <Link to="./staff-records">Staff Record</Link>
        </li>
        <li className={isActive('/module-record') ? 'active' : ''}>
          <Link to="./module-record">Module Record</Link>
        </li>
        <li className={isActive('/course-record') ? 'active' : ''}>
          <Link to="./course-record">Course Record</Link>
        </li>
        <li className={isActive('/archive-records') ? 'active' : ''}>
          <Link to="./archive-records">Archive</Link>
        </li>
        <li className={isActive('') ? 'active' : ''}>
          <Link to="/staff">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
