import React, { useState } from 'react';
import Sidebar from '../layout/Sidebar';
import '../../css/Form.css';
import axios from 'axios';

const AddStudentForm = () => {
  const [student, setStudent] = useState({
    email: '',
    password: '12345', // Predefined or input from a form field
    unid: '',
    level: '',
    name: '',
    course_id: '',
    dob: '',
    gender: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NmMxZjgyMzNiYmExNWNmMjRmMjBjZTEiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcyNDk5NjMyMSwiZXhwIjoyNzI0OTk2MzIxfQ.EfEFPCK1eqLRkWOWbI7EPDsqbHq355jCgNPZbzaGqvk'; // Replace with a valid token
      const response = await axios.post('http://localhost:8000/students', student, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json', // Ensure the content type is set
        }
      });
      console.log('Student added:', response.data);
      setStudent({
        email: '',
        password: '12345',
        unid: '',
        level: '',
        name: '',
        course_id: '',
        dob: '',
        gender: '',
      });
    } catch (error) {
      console.error('Error adding student:', error.response ? error.response.data : error.message);
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
          <h2>Add New Student</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="label" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={student.email}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="unid">UN ID</label>
              <input
                type="text"
                id="unid"
                name="unid"
                value={student.unid}
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
                value={student.name}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="level">Level</label>
              <input
                type="text"
                id="level"
                name="level"
                value={student.level}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="course_id">Course ID</label>
              <input
                type="text"
                id="course_id"
                name="course_id"
                value={student.course_id}
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
                value={student.dob}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="gender">Gender</label>
              <select
                id="gender"
                name="gender"
                value={student.gender}
                onChange={handleChange}
                className="input"
                required
              >
                <option value="">Select Gender</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>
            </div>
            <button type="submit" className="submit-button">Add Student</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddStudentForm;
