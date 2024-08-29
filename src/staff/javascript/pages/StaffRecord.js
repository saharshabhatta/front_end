import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Sidebar from '../layout/Sidebar';

const StaffRecords = () => {
  const [staff, setStaff] = useState([]);

  // Function to fetch staff from the server
  const fetchStaff = () => {
    axios
      .get('http://localhost:8000/staffs', {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NmMxZjgyMzNiYmExNWNmMjRmMjBjZTEiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcyNDkxODE1NCwiZXhwIjoyNzI0OTE4MTU0fQ._xijVZPZK2vgB58T6IxCyeeF881WV6OO1LGdv3o2eGA', // Replace with your valid token
        },
      })
      .then((response) => {
        setStaff(response.data);
      })
      .catch((error) => {
        console.error('Error fetching staff:', error);
      });
  };

  // Fetch staff on component mount
  useEffect(() => {
    fetchStaff();
  }, []);

  // Function to handle deleting a staff member
  const handleDeleteStaff = (staffId) => {
    axios
      .delete(`http://localhost:8000/users/${staffId}`, {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NmMxZjgyMzNiYmExNWNmMjRmMjBjZTEiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcyNDkxODE1NCwiZXhwIjoyNzI0OTE4MTU0fQ._xijVZPZK2vgB58T6IxCyeeF881WV6OO1LGdv3o2eGA', // Replace with your valid token
        },
      })
      .then(() => {
        fetchStaff(); // Refresh the staff list after deletion
      })
      .catch((error) => {
        console.error('Error deleting staff:', error.response || error.message || error);
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
          <h2>Staff Records</h2>
          <div className="search-bar">
            <div>
              <input type="text" placeholder="Search..." />
              <button>🔍</button>
            </div>
            <Link to="./add-staff">
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
                  width: '150px'
                }}
              >
                Add New Staff
              </button>
            </Link>
          </div>
          <table>
            <thead>
              <tr>
                <th>Email</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Date of Birth</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {staff.map((staffMember) => (
                <tr key={staffMember.user_id}>
                  <td>{staffMember.email}</td>
                  <td>{staffMember.name}</td>
                  <td>{staffMember.phone}</td>
                  <td>{staffMember.dob}</td>
                  <td>{staffMember.role}</td>
                  <td>
                    <Link to={`./edit-staff/${staffMember.user_id}`} className="edit">
                      <button className="edit">Edit</button>
                    </Link>
                    <button
                      className="delete"
                      onClick={() => handleDeleteStaff(staffMember.user_id)}
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

export default StaffRecords;
