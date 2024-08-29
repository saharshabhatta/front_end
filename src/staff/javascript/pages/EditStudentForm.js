import React, { useState, useEffect } from 'react';
import Sidebar from '../layout/Sidebar';  
import '../../css/Form.css';  

const EditStudentForm = ({ studentData, onUpdate }) => {
  const [student, setStudent] = useState({
    id: '',
    name: '',
    level: '',
    course: '',
    dob: '',
    gender: '',
  });

  useEffect(() => {
    if (studentData) {
      setStudent(studentData);
    }
  }, [studentData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(student); 
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
          <h2>Edit Student Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="label" htmlFor="id">UN ID</label>
              <input
                type="text"
                id="id"
                name="id"
                value={student.id}
                onChange={handleChange}
                className="input"
                required
                readOnly // ID should typically not be editable
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
              <label className="label" htmlFor="course">Course</label>
              <input
                type="text"
                id="course"
                name="course"
                value={student.course}
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
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <button type="submit" className="submit-button">Update Student</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditStudentForm;
