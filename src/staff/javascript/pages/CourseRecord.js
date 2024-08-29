import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Sidebar from '../layout/Sidebar';
import '../../css/CourseRecord.css';

const CourseRecord = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [courses, setCourses] = useState([]);
    const [filteredCourses, setFilteredCourses] = useState([]);

    // Fetch courses from the server with an optional search query
    const fetchCourses = (query = '') => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NmMxZjgyMzNiYmExNWNmMjRmMjBjZTEiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcyNDkxODE1NCwiZXhwIjoyNzI0OTE4MTU0fQ._xijVZPZK2vgB58T6IxCyeeF881WV6OO1LGdv3o2eGA'; // Replace with your valid token

        axios
            .get('http://localhost:8000/courses', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                params: {
                    search: query,
                },
            })
            .then((response) => {
                const data = response.data || [];
                setCourses(data);
                filterCourses(searchTerm); // Re-filter after fetching data
            })
            .catch((error) => {
                console.error('Error fetching courses:', error);
            });
    };

    // Fetch courses when the component mounts or when searchTerm changes
    useEffect(() => {
        fetchCourses(searchTerm);
    }, [searchTerm]);

    // Function to filter courses based on search term
    const filterCourses = (query) => {
        if (!query) {
            setFilteredCourses(courses);
            return;
        }

        const results = courses.filter(course =>
            course.name && course.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredCourses(results);
    };

    // Update filtered courses whenever the search term or courses change
    useEffect(() => {
        filterCourses(searchTerm);
    }, [searchTerm, courses]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = () => {
        filterCourses(searchTerm);
    };

    const handleDelete = (id) => {
        if (!id) {
            console.error('Invalid course ID');
            return;
        }

        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NmMxZjgyMzNiYmExNWNmMjRmMjBjZTEiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcyNDkxODE1NCwiZXhwIjoyNzI0OTE4MTU0fQ._xijVZPZK2vgB58T6IxCyeeF881WV6OO1LGdv3o2eGA'; // Replace with your valid token

        axios
            .delete(`http://localhost:8000/courses/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then(() => {
                // Remove the deleted course from the state
                setCourses(courses.filter(course => course.course_id !== id));
                filterCourses(searchTerm);
            })
            .catch((error) => {
                console.error('Error deleting course:', error);
            });
    };

    const handleEdit = (id) => {
        // Navigate to edit page with course ID
        window.location.href = `/edit-course/${id}`;
    };

    const handleArchive = (id) => {
        // Implement archive functionality as needed
        console.log('Archive functionality for course ID:', id);
    };

    return (
        <div className="app">
            <Sidebar />
            <div className="content">
                <nav className="nav">WUC</nav>
                <div className="records">
                    <h2>Course Record</h2>
                    <div className="search-bar">
                        <div>
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                            <button onClick={handleSearch} aria-label="Search">
                                🔍
                            </button>
                        </div>
                        <Link to="./add-course">
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
                                Add New Course
                            </button>
                        </Link>
                    </div>
                    <div className="three-column-container">
                        {filteredCourses.length > 0 ? (
                            filteredCourses.map(course => (
                                <div className="box" key={course.course_id}> {/* Ensure a unique key */}
                                    <h3>{course.name}</h3>
                                    <p>Course ID: {course.course_id}</p>
                                    <p>Description: {course.description}</p>
                                    <p>Leader: {course.leader}</p>
                                    <div className="button-group">
                                        <button onClick={() => handleEdit(course.course_id)}>Edit</button>
                                        <button onClick={() => handleArchive(course.course_id)}>Archive</button>
                                        <button onClick={() => handleDelete(course.course_id)}>Delete</button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No courses found</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseRecord;
