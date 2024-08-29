import React, { useState } from 'react';
import Sidebar from '../layout/Sidebar'; 

const ArchiveRecords = () => {
  const [selectedType, setSelectedType] = useState('All');

  const students = [
    { id: '23834894', name: 'James Smith', level: 'L4', course: 'BSc Computing', type: 'Student Record' },
    { id: '23834863', name: 'Emily Johnson', level: 'L5', course: 'BBA', type: 'Staff Record' },
    { id: '23834818', name: 'Olivia Williams', level: 'L6', course: 'BSc Environment Science', type: 'Result Record' },
  ];

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  const filteredStudents = selectedType === 'All' ? students : students.filter(student => student.type === selectedType);

  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <nav className="nav">
          WUC
        </nav>
        <div className="records">
          <h2>Archive Records</h2>
          <div className="filter-bar">
            <label htmlFor="type"></label>
            <select id="type" value={selectedType} onChange={handleTypeChange}>
              <option value="All">Type</option>
              <option value="Archived">Student Record</option>
              <option value="Archived">Assignmnet Record</option>
              <option value="Archived">Result Record</option>
              <option value="Archived">Staff Record</option>
              <option value="Archived">Module Record</option>
              <option value="Archived">Course Record</option>
             
            </select>
          </div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Level</th>
                <th>Course</th>
                <th>Type</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student, index) => (
                <tr key={index}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.level}</td>
                  <td>{student.course}</td>
                  <td>{student.type}</td>
                  <td>
                    <button className="repost">Repost</button>
                    <button className="delete">Delete</button>
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

export default ArchiveRecords;
