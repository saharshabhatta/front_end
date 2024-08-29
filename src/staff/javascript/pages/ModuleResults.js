import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Sidebar from '../layout/Sidebar';

const ModuleResults = () => {
  const [modules, setModules] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Function to fetch modules from the server with an optional search query
  const fetchModules = async (query = '') => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get('http://localhost:8000/results', {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NmMxZjgyMzNiYmExNWNmMjRmMjBjZTEiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcyNDkxODE1NCwiZXhwIjoyNzI0OTE4MTU0fQ._xijVZPZK2vgB58T6IxCyeeF881WV6OO1LGdv3o2eGA', // Replace with your valid token
        },
        params: {
          search: query,
        },
      });
      setModules(response.data);
    } catch (error) {
      console.error('Error fetching modules:', error);
      setError('Error fetching results. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Fetch modules when the component mounts or when searchQuery changes
  useEffect(() => {
    fetchModules(searchQuery);
  }, [searchQuery]);

  // Function to handle deleting a module
  const handleDeleteModule = async (resultId) => {
    try {
      await axios.delete(`http://localhost:8000/results/${resultId}`, {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NmMxZjgyMzNiYmExNWNmMjRmMjBjZTEiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcyNDkxODE1NCwiZXhwIjoyNzI0OTE4MTU0fQ._xijVZPZK2vgB58T6IxCyeeF881WV6OO1LGdv3o2eGA', // Replace with your valid token
        },
      });
      fetchModules(searchQuery); // Refresh the modules list after deletion
    } catch (error) {
      console.error('Error deleting module:', error);
      setError('Error deleting the result. Please try again later.');
    }
  };

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function to handle search button click
  const handleSearchClick = () => {
    fetchModules(searchQuery);
  };

  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <nav className="nav">
          WUC
        </nav>
        <div className="records">
          <h2>Results</h2>
          <div className="search-bar">
            <div>
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button onClick={handleSearchClick}>🔍</button>
            </div>
            <Link to="./add-result">
              <button 
                style={{
                  padding: '8px 12px',
                  fontSize: '14px',
                  backgroundColor: '#50BC82',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  marginLeft: 'auto',
                  width: '150px'
                }}
              >
                Add New Result
              </button>
            </Link>
          </div>
          {loading && <p>Loading...</p>}
          {error && <p className="error">{error}</p>}
          <table>
            <thead>
              <tr>
                <th>Student ID</th>
                <th>Module Code</th>
                <th>Grade</th>
                <th>Feedback</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {modules.map((module) => (
                <tr key={module.student_id}>
                  <td>{module.student_id}</td>
                  <td>{module.module_code}</td>
                  <td>{module.grade}</td>
                  <td>{module.feedback}</td>
                  <td>
                    <button 
                      className="archive"
                      onClick={() => handleDeleteModule(module.student_id)}
                    >
                      Archive
                    </button>
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

export default ModuleResults;
