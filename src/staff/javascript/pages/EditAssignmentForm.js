import React, { useState, useEffect } from 'react';
import Sidebar from '../layout/Sidebar';
import '../../css/Form.css';  

const EditAssignmentForm = ({ assignmentData, onSave }) => {
  const [assignment, setAssignment] = useState({
    courseName: '',
    assignmentTitle: '',
    description: '',
    dueDate: '',
    file: null,
  });

  useEffect(() => {
    if (assignmentData) {
      setAssignment({
        ...assignmentData,
        file: null, 
      });
    }
  }, [assignmentData]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setAssignment({ ...assignment, file: files[0] });
    } else {
      setAssignment({ ...assignment, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(assignment);
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
          <h2>Edit Assignment</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="label" htmlFor="courseName">Module code</label>
              <input
                type="text"
                id="courseName"
                name="courseName"
                value={assignment.courseName}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="assignmentTitle">Assignment Title</label>
              <input
                type="text"
                id="assignmentTitle"
                name="assignmentTitle"
                value={assignment.assignmentTitle}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="dueDate">Due Date</label>
              <input
                id="dueDate"
                name="dueDate"
                type="date"
                value={assignment.dueDate}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="file">Upload File</label>
              <input
                type="file"
                id="file"
                name="file"
                onChange={handleChange}
                className="input"
              />
            </div>
            <button type="submit" className="submit-button">Save Changes</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditAssignmentForm;
