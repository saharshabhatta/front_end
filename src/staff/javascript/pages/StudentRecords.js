import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Sidebar from '../layout/Sidebar';

const StudentRecords = () => {
  const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Function to fetch students from the server with an optional search query
  const fetchStudents = (query = '') => {
    axios
      .get('http://localhost:8000/students', {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NmMxZjgyMzNiYmExNWNmMjRmMjBjZTEiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcyNDk5NjMyMSwiZXhwIjoyNzI0OTk2MzIxfQ.EfEFPCK1eqLRkWOWbI7EPDsqbHq355jCgNPZbzaGqvk', // Replace with your valid token
        },
        params: {
          search: query,
        },
      })
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error('Error fetching students:', error);
      });
  };

  // Fetch students when the component mounts or when searchQuery changes
  useEffect(() => {
    fetchStudents(searchQuery);
  }, [searchQuery]);

  // Function to handle deleting a student
  const handleDeleteStudent = (studentId) => {
    axios
      .delete(`http://localhost:8000/students/${studentId}`, {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NmMxZjgyMzNiYmExNWNmMjRmMjBjZTEiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcyNDk5NjMyMSwiZXhwIjoyNzI0OTk2MzIxfQ.EfEFPCK1eqLRkWOWbI7EPDsqbHq355jCgNPZbzaGqvk', // Replace with your valid token
        },
      })
      .then(() => {
        fetchStudents(searchQuery); // Refresh the students list after deletion
      })
      .catch((error) => {
        console.error('Error deleting student:', error.response || error.message || error);
      });
  };

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function to handle search button click
  const handleSearchClick = () => {
    fetchStudents(searchQuery);
  };

  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <nav className="nav">
          WUC
        </nav>
        <div className="records">
          <h2>Student Records</h2>
          <div className="search-bar">
            <div>
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button onClick={handleSearchClick}>🔍</button>
            </div>
            <Link to="./add-student">
              <button 
                style={{
                  padding: '8px 12px',
                  fontSize: '14px',
                  backgroundColor: '#50BC82',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  marginLeft: 'auto',
                  width: '150px',
                }}
              >
                Add New Student
              </button>
            </Link>
          </div>
          <table>
            <thead>
              <tr>
                <th>UN ID</th>
                <th>Name</th>
                <th>Level</th>
                <th>Course</th>
                <th>DOB</th>
                <th>Gender</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.unid}>
                  <td>{student.unid}</td>
                  <td>{student.name}</td>
                  <td>{student.level}</td>
                  <td>{student.course_id}</td>
                  <td>{student.dob}</td>
                  <td>{student.gender}</td>
                  <td>
                    <Link to={`./edit-student/${student.unid}`} className="edit">
                      <button className="edit">Edit</button>
                    </Link>
                    <button
                      className="delete"
                      onClick={() => handleDeleteStudent(student.unid)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentRecords;
