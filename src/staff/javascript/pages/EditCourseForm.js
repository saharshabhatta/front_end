import React, { useState, useEffect } from 'react';
import Sidebar from '../layout/Sidebar'; 
import '../../css/Form.css';  

const EditCourseForm = ({ courseData, onUpdate }) => {
  const [course, setCourse] = useState({
    courseName: '',
    courseDescription: '',
    lecturer: '',
  });

  useEffect(() => {
    if (courseData) {
      setCourse(courseData);
    }
  }, [courseData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(course); 
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
          <h2>Edit Course</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="label" htmlFor="courseName">Course Name</label>
              <input
                type="text"
                id="courseName"
                name="courseName"
                value={course.courseName}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="courseDescription">Course Description</label>
              <textarea
                id="courseDescription"
                name="courseDescription"
                value={course.courseDescription}
                onChange={handleChange}
                className="input"
                rows="4"
                required
              />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="lecturer">Lecturer</label>
              <input
                type="text"
                id="lecturer"
                name="lecturer"
                value={course.lecturer}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
            <button type="submit" className="submit-button">Update Course</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditCourseForm;
