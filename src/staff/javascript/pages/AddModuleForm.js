import React, { useState } from 'react';
import Sidebar from '../layout/Sidebar'; 
import '../../css/Form.css';  

const AddModuleForm = () => {
  const [module, setModule] = useState({
    moduleName: '',
    moduleCode: '',
    overview: '',
    lecturers: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setModule({ ...module, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Module added:', module);
    setModule({
      moduleName: '',
      moduleCode: '',
      overview: '',
      lecturers: '',
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
          <h2>Add New Module</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="label" htmlFor="moduleName">Module Name</label>
              <input
                type="text"
                id="moduleName"
                name="moduleName"
                value={module.moduleName}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="moduleCode">Module Code</label>
              <input
                type="text"
                id="moduleCode"
                name="moduleCode"
                value={module.moduleCode}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="overview">Overview</label>
              <textarea
                id="overview"
                name="overview"
                value={module.overview}
                onChange={handleChange}
                className="input"
                rows="4"
                required
              />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="lecturers">Lecturers</label>
              <input
                type="text"
                id="lecturers"
                name="lecturers"
                value={module.lecturers}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
            <button type="submit" className="submit-button">Add Module</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddModuleForm;
