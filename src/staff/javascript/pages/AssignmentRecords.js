import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Sidebar from '../layout/Sidebar';

const AssignmentRecords = () => {
  const [assignments, setAssignments] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState(null); // To handle and display errors

  // Fetch assignments from the server with an optional search query
  const fetchAssignments = (query = '') => {
    axios
      .get('http://localhost:8000/modules', {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NmMxZjgyMzNiYmExNWNmMjRmMjBjZTEiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcyNTE1MjI1NSwiZXhwIjoyNzI1MTUyMjU1fQ.VOiJDApLCHH6TaFVCYuven1CdQJNPOeuo21xHsZEhQI', // Replace with your JWT token
        },
        params: {
          search: query,
        },
      })
      .then((response) => {
        setAssignments(response.data);
        setError(null); // Clear any previous errors
      })
      .catch((error) => {
        console.error('Error fetching assignments:', error);
        setError('Failed to fetch assignments.'); // Set an error message
      });
  };

  // Fetch assignments when the component mounts or when searchQuery changes
  useEffect(() => {
    fetchAssignments(searchQuery);
  }, [searchQuery]);

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function to handle search button click
  const handleSearchClick = () => {
    fetchAssignments(searchQuery);
  };

  // Function to delete an assignment
  const deleteAssignment = (id) => {
    axios
      .delete(`http://localhost:8000/modules/${id}`, {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NmMxZjgyMzNiYmExNWNmMjRmMjBjZTEiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcyNTE1MjI1NSwiZXhwIjoyNzI1MTUyMjU1fQ.VOiJDApLCHH6TaFVCYuven1CdQJNPOeuo21xHsZEhQI', // Replace with your JWT token
        },
      })
      .then(() => {
        setAssignments(assignments.filter((assignment) => assignment.id !== id));
      })
      .catch((error) => {
        console.error('Error deleting assignment:', error);
        setError('Failed to delete assignment.'); // Set an error message
      });
  };

  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <nav className="nav">
          WUC
        </nav>
        <div className="records">
          <h2>Assignment Records</h2>
          {error && <div className="error-message">{error}</div>} {/* Display error message */}
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
            <Link to="./add-assignment">
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
                Add New Assignment
              </button>
            </Link>
          </div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Module Code</th>
                <th>Assignment Title</th>
                <th>Description</th>
                <th>Due Date</th>
                <th>File</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {assignments.map((assignment) => (
                <tr key={assignment.id}>
                  <td>{assignment.id}</td>
                  <td>{assignment.module_code}</td>
                  <td>{assignment.assignmentTitle}</td>
                  <td>{assignment.description}</td>
                  <td>{new Date(assignment.dueDate).toLocaleDateString()}</td>
                  <td>
                    {assignment.file ? (
                      <a href={assignment.file} target="_blank" rel="noopener noreferrer">
                        View File
                      </a>
                    ) : (
                      'No file'
                    )}
                  </td>
                  <td>
                    <Link to={`./edit-assignment/${assignment.id}`} className="edit">
                      <button className="edit">Edit</button>
                    </Link>
                    <button
                      className="delete"
                      onClick={() => deleteAssignment(assignment.id)}
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

export default AssignmentRecords;
