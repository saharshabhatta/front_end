import React, { useState } from 'react';
import Sidebar from '../layout/Sidebar'; 
import '../../css/Form.css';  

const AddResultForm = () => {
  const [result, setResult] = useState({
    studentName: '',
    unid: '',
    level: '',
    course: '',
    grade: '',
    gpa: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResult({ ...result, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Result added:', result);
    setResult({
      studentName: '',
      unid: '',
      level: '',
      course: '',
      grade: '',
      gpa: '',
    });
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
          <h2>Add New Result</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="label" htmlFor="studentName">Student Name</label>
              <input
                type="text"
                id="studentName"
                name="studentName"
                value={result.studentName}
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
                value={result.unid}
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
                value={result.level}
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
                value={result.course}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="grade">Grade</label>
              <input
                type="text"
                id="grade"
                name="grade"
                value={result.grade}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="gpa">GPA</label>
              <input
                type="text"
                id="gpa"
                name="gpa"
                value={result.gpa}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
            <button type="submit" className="submit-button">Add Result</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddResultForm;
