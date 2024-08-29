import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Sidebar from '../layout/Sidebar';

const AssignmentRecords = () => {
  const [assignments, setAssignments] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Function to fetch assignments from the server with an optional search query
  const fetchAssignments = (query = '') => {
    axios
      .get('http://localhost:8000/assignments', {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NmMxZjgyMzNiYmExNWNmMjRmMjBjZTEiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcyNDkxODE1NCwiZXhwIjoyNzI0OTE4MTU0fQ._xijVZPZK2vgB58T6IxCyeeF881WV6OO1LGdv3o2eGA', // Replace with your valid token
        },
        params: {
          search: query,
        },
      })
      .then((response) => {
        setAssignments(response.data);
      })
      .catch((error) => {
        console.error('Error fetching assignments:', error);
      });
  };

  // Fetch assignments when the component mounts or when searchQuery changes
  useEffect(() => {
    fetchAssignments(searchQuery);
  }, [searchQuery]);

  // Function to add a new assignment
  const addAssignment = () => {
    // Data to be added, should match the API requirements
    const newAssignment = {
      module_code: 'New Module Code',
      assignment_brief: 'Brief description of the assignment',
      assignment_deadline: new Date().toISOString(),
      isArchived: false,
      assignment_url: 'http://example.com/assignment-url',
    };

    axios
      .post('http://localhost:8000/assignments', newAssignment, {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NmMxZjgyMzNiYmExNWNmMjRmMjBjZTEiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcyNDkxODE1NCwiZXhwIjoyNzI0OTE4MTU0fQ._xijVZPZK2vgB58T6IxCyeeF881WV6OO1LGdv3o2eGA', // Replace with your valid token
        },
      })
      .then((response) => {
        setAssignments([...assignments, response.data]);
      })
      .catch((error) => {
        console.error('Error adding assignment:', error);
      });
  };

  // Function to delete an assignment
  const deleteAssignment = (id) => {
    axios
      .delete(`http://localhost:8000/assignments/${id}`, {
        headers: {
          Authorization: 'Bearer YOUR_TOKEN_HERE', // Replace with your valid token
        },
      })
      .then(() => {
        setAssignments(assignments.filter((assignment) => assignment.id !== id));
      })
      .catch((error) => {
        console.error('Error deleting assignment:', error);
      });
  };

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function to handle search button click
  const handleSearchClick = () => {
    fetchAssignments(searchQuery);
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
                <th>Assignment Brief</th>
                <th>Assignment Deadline</th>
                <th>Is Archived</th>
                <th>Assignment URL</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {assignments.map((assignment) => (
                <tr key={assignment.id}>
                  <td>{assignment.id}</td>
                  <td>{assignment.module_code}</td>
                  <td>{assignment.assignment_brief}</td>
                  <td>{new Date(assignment.assignment_deadline).toLocaleDateString()}</td>
                  <td>{assignment.isArchived ? 'Yes' : 'No'}</td>
                  <td>
                    <a href={assignment.assignment_url} target="_blank" rel="noopener noreferrer">
                      View Assignment
                    </a>
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
