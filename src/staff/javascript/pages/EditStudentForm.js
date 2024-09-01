import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import Sidebar from '../layout/Sidebar';
import '../../css/Form.css'; // Ensure this path is correct

const EditStudentForm = () => {
  const { id } = useParams(); // Extract id from URL params
  const history = useHistory();
  const [student, setStudent] = useState({
    id: '',
    name: '',
    level: '',
    course: '',
    dob: '',
    gender: '',
  });

  // Fetch student data by ID when the component mounts or ID changes
  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:8000/students/${id}`, {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NmMxZjgyMzNiYmExNWNmMjRmMjBjZTEiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcyNDk5NjMyMSwiZXhwIjoyNzI0OTk2MzIxfQ.EfEFPCK1eqLRkWOWbI7EPDsqbHq355jCgNPZbzaGqvk', // Replace with your valid token
          },
        })
        .then((response) => {
          setStudent(response.data);
        })
        .catch((error) => {
          console.error('Error fetching student data:', error);
        });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data for PATCH request
    const studentPayload = {
      name: student.name,
      level: student.level,
      course: student.course,
      dob: student.dob,
      gender: student.gender,
    };

    try {
      await axios.patch(
        `http://localhost:8000/students/${id}`, // Use ID in URL
        studentPayload,
        {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NmMxZjgyMzNiYmExNWNmMjRmMjBjZTEiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcyNDk5NjMyMSwiZXhwIjoyNzI0OTk2MzIxfQ.EfEFPCK1eqLRkWOWbI7EPDsqbHq355jCgNPZbzaGqvk', // Replace with your valid token
          },
        }
      );
      history.push('/staff/student-records'); // Redirect to student records after successful update
    } catch (error) {
      console.error('Error updating student data:', error);
    }
  };

  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <nav className="nav">
          WUC
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
