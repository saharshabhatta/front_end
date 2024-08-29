import React, { useState, useEffect } from 'react';
import Sidebar from '../layout/Sidebar'; 
import '../../css/Form.css';  

const EditStaffForm = ({ staffData, onUpdate }) => {
  const [staff, setStaff] = useState({
    id: '',
    name: '',
    phoneNumber: '',
    jobTitle: '',
    department: '',
    type: '',
  });

  useEffect(() => {
    if (staffData) {
      setStaff(staffData);
    }
  }, [staffData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStaff({ ...staff, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(staff); // Pass the updated staff data to the parent component or backend
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
          <h2>Edit Staff Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="label" htmlFor="id">Staff ID</label>
              <input
                type="text"
                id="id"
                name="id"
                value={staff.id}
                onChange={handleChange}
                className="input"
                required
                readOnly 
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
              <label className="label" htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={staff.phoneNumber}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="jobTitle">Job Title</label>
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                value={staff.jobTitle}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="department">Department</label>
              <input
                type="text"
                id="department"
                name="department"
                value={staff.department}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="type">Type</label>
              <select
                id="type"
                name="type"
                value={staff.type}
                onChange={handleChange}
                className="input"
                required
              >
                <option value="">Select Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
              </select>
            </div>
            <button type="submit" className="submit-button">Update Staff</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditStaffForm;
