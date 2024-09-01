import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Sidebar from '../layout/Sidebar';
import '../../css/ModuleRecord.css';

const ModuleRecord = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [modules, setModules] = useState([]);
    const [filteredModules, setFilteredModules] = useState([]);

    // Function to fetch modules from the server with an optional search query
    const fetchModules = (query = '') => {
        axios
            .get('http://localhost:8000/modules', {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NmMxZjgyMzNiYmExNWNmMjRmMjBjZTEiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcyNDkxODE1NCwiZXhwIjoyNzI0OTE4MTU0fQ._xijVZPZK2vgB58T6IxCyeeF881WV6OO1LGdv3o2eGA', // Replace with your valid token
                },
                params: {
                    search: query,
                },
            })
            .then((response) => {
                const data = response.data || [];
                setModules(data);
                filterModules(searchTerm); 
            })
            .catch((error) => {
                console.error('Error fetching modules:', error);
            });
    };

    // Fetch modules when the component mounts or when searchTerm changes
    useEffect(() => {
        fetchModules(searchTerm);
    }, [searchTerm]);

    // Function to filter modules based on search term
    const filterModules = (query) => {
        if (!query) {
            setFilteredModules(modules);
            return;
        }

        const results = modules.filter(module =>
            module.title && module.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredModules(results);
    };

    // Update filtered modules whenever the search term changes
    useEffect(() => {
        filterModules(searchTerm);
    }, [searchTerm, modules]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = () => {
        filterModules(searchTerm);
    };

    // Function to add a new module
    const addModule = () => {
        const newModule = {
            title: 'New Module Title',
            lecturer: 'New Lecturer',
        };

        axios
            .post('http://localhost:8000/modules', newModule, {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NmMxZjgyMzNiYmExNWNmMjRmMjBjZTEiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcyNDkxODE1NCwiZXhwIjoyNzI0OTE4MTU0fQ._xijVZPZK2vgB58T6IxCyeeF881WV6OO1LGdv3o2eGA', // Replace with your valid token
                },
            })
            .then((response) => {
                setModules([...modules, response.data]);
                filterModules(searchTerm); // Re-filter after adding a new module
            })
            .catch((error) => {
                console.error('Error adding module:', error);
            });
    };

    // Function to delete a module
    const deleteModule = (id) => {
        axios
            .delete(`http://localhost:8000/modules/${id}`, {
                headers: {
                    Authorization: 'Bearer YOUR_TOKEN_HERE', // Replace with your valid token
                },
            })
            .then(() => {
                setModules(modules.filter((module) => module.id !== id));
                filterModules(searchTerm); // Re-filter after deleting a module
            })
            .catch((error) => {
                console.error('Error deleting module:', error);
            });
    };

    return (
        <div className="app">
            <Sidebar />
            <div className="content">
                <nav className="nav"> WUC </nav>
                <div className="records">
                    <h2>Module Record</h2>
                    <div className="search-bar">
                        <div>
                            <label htmlFor="search-input" style={{ display: 'none' }}>Search</label>
                            <input
                                type="text"
                                id="search-input"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                            <button onClick={handleSearch} aria-label="Search">
                                🔍
                            </button>
                        </div>
                        <Link to="./add-module">
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
                                onClick={addModule}
                            >
                                Add New Module
                            </button>
                        </Link>
                    </div>
                    <div className="boxes-container">
                        {filteredModules.length > 0 ? (
                            filteredModules.map(module => (
                                <div className="boxes" key={module.id}>
                                    <h2>{module.title}</h2>
                                    <hr className="heading-line" />
                                    <h4>Overview:</h4>
                                    <p>Lecturer: {module.lecturer}</p>
                                    <button
                                        className="delete"
                                        onClick={() => deleteModule(module.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            ))
                        ) : (
                            <p>No modules found</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModuleRecord;
