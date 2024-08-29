import React, { useState, useEffect } from 'react';
import Sidebar from '../layout/Sidebar'; 
import '../../css/Form.css';  

const EditResultForm = ({ resultData, onUpdate }) => {
  const [result, setResult] = useState({
    studentName: '',
    unid: '',
    level: '',
    course: '',
    grade: '',
    gpa: '',
  });

  useEffect(() => {
    if (resultData) {
      setResult(resultData);
    }
  }, [resultData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResult({ ...result, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(result); 
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
          <h2>Edit Result</h2>
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
            <button type="submit" className="submit-button">Update Result</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditResultForm;
