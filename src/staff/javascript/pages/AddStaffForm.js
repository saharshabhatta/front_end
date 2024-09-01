import React, { useState } from 'react';
import Sidebar from '../layout/Sidebar';
import '../../css/Form.css';

const AddStaffForm = () => {
  const [staff, setStaff] = useState({
    email: '',
    name: '',
    phone: '',
    dob: '',
    role: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStaff({ ...staff, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NmMxZjgyMzNiYmExNWNmMjRmMjBjZTEiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcyNTE1MjI1NSwiZXhwIjoyNzI1MTUyMjU1fQ.VOiJDApLCHH6TaFVCYuven1CdQJNPOeuo21xHsZEhQI';
  
      const response = await fetch('http://localhost:8000/staffs/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          email: staff.email,
          password: 'defaultPassword', // Placeholder password; adjust as needed
          name: staff.name,
          dob: staff.dob,
          phone: staff.phone,
          // Removed the role field as it's not accepted by the server
        }),
      });
  
      if (response.ok) {
        console.log('Staff added successfully:', staff);
        setStaff({
          email: '',
          name: '',
          phone: '',
          dob: '',
        });
      } else {
        console.error('Failed to add staff:', await response.text());
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  

  return (
    <div className="container">
      <Sidebar className="sidebar" />
      <div className="content">
        <nav className="nav">
          <div style={{ padding: '10px 20px' }}>
            WUC
          </div>
        </nav>
        <div className="form-container">
          <h2>Add New Staff</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="label" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={staff.email}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={staff.name}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="phone">Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={staff.phone}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="dob">Date of Birth</label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={staff.dob}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="role">Role</label>
              <input
                type="text"
                id="role"
                name="role"
                value={staff.role}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
            <button type="submit" className="submit-button">Add Staff</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddStaffForm;
