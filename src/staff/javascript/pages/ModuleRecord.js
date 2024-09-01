import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Sidebar from '../layout/Sidebar';
import '../../css/ModuleRecord.css';

const ModuleRecord = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [modules, setModules] = useState([]);
    const [filteredModules, setFilteredModules] = useState([]);

    const fetchModules = (query = '') => {
        axios
            .get('http://localhost:8000/modules', {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NmMxZjgyMzNiYmExNWNmMjRmMjBjZTEiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcyNTE2MDYzNiwiZXhwIjoyNzI1MTYwNjM2fQ.ccGC8dGCZZJHjsbjA6CBTzOEfFk9iujjwnCwvEhZYgk', // Replace with your valid token
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

    useEffect(() => {
        fetchModules(searchTerm);
    }, [searchTerm]);

    const filterModules = (query) => {
        if (!query) {
            setFilteredModules(modules);
            return;
        }

        const results = modules.filter(module =>
            module.name && module.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredModules(results);
    };

    useEffect(() => {
        filterModules(searchTerm);
    }, [searchTerm, modules]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = () => {
        filterModules(searchTerm);
    };

    const addModule = () => {
        const newModule = {
            module_code: 'NEWCODE123',
            course_id: 'COURSE123',
            name: 'New Module Name',
            description: 'This is a new module.',
            lecturer: 'New Lecturer',
        };

        axios
            .post('http://localhost:8000/modules', newModule, {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NmMxZjgyMzNiYmExNWNmMjRmMjBjZTEiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcyNTE2MDYzNiwiZXhwIjoyNzI1MTYwNjM2fQ.ccGC8dGCZZJHjsbjA6CBTzOEfFk9iujjwnCwvEhZYgk', // Replace with your valid token
                },
            })
            .then((response) => {
                setModules([...modules, response.data]);
                filterModules(searchTerm); 
            })
            .catch((error) => {
                console.error('Error adding module:', error);
            });
    };

    const deleteModule = (id) => {
        axios
            .delete(`http://localhost:8000/modules/${id}`, {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NmMxZjgyMzNiYmExNWNmMjRmMjBjZTEiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcyNTE2MDYzNiwiZXhwIjoyNzI1MTYwNjM2fQ.ccGC8dGCZZJHjsbjA6CBTzOEfFk9iujjwnCwvEhZYgk', // Replace with your valid token
                },
            })
            .then(() => {
                setModules(modules.filter((module) => module.id !== id));
                filterModules(searchTerm); 
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
                            filteredModules.map((module, index) => (
                                <div className="boxes" key={`${module.id}-${index}`}>
                                    <h2>{module.name}</h2>
                                    <hr className="heading-line" />
                                    <p><strong>Module Code:</strong> {module.module_code}</p>
                                    <p><strong>Course ID:</strong> {module.course_id}</p>
                                    <p><strong>Description:</strong> {module.description}</p>
                                    <p><strong>Lecturer:</strong> {module.lecturer}</p>
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
