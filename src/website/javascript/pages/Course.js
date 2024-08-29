import React from 'react';  // Import React library for building components
import '../../css/Course.css';
import Layout from '../layout/Layout.js';  // Import Layout component which includes Header and Footer
import CourseImage from '../../images/computer-science.jpg';

const Course = () => {
  return (
    <Layout>
      <main>
        <section className="black-section"></section>
        <section className="section-course">
          <div className="main-course-div">
            <div className="section-title">
              <h1>Available Courses</h1>
            </div>
        
            <div className="course-grid-container">

              <a href="/course-detail">
                <div className="course-container">
                  <img className="course-image" src={CourseImage} alt="Course 1" />
                  <div className="course-name-container">
                    <h2>B.Sc. Software Engineering</h2>
                  </div>
                </div>
              </a>

              <a href="/course-detail">
                <div className="course-container">
                  <img className="course-image" src={CourseImage} alt="Course 1" />
                  <div className="course-name-container">
                    <h2>B.Sc. Software Engineering</h2>
                  </div>
                </div>
              </a>

              <a href="/course-detail">
                <div className="course-container">
                  <img className="course-image" src={CourseImage} alt="Course 1" />
                  <div className="course-name-container">
                    <h2>B.Sc. Software Engineering</h2>
                  </div>
                </div>
              </a>

              <a href="/course-detail">
                <div className="course-container">
                  <img className="course-image" src={CourseImage} alt="Course 1" />
                  <div className="course-name-container">
                    <h2>B.Sc. Software Engineering</h2>
                  </div>
                </div>
              </a>

              <a href="/course-detail">
                <div className="course-container">
                  <img className="course-image" src={CourseImage} alt="Course 1" />
                  <div className="course-name-container">
                    <h2>B.Sc. Software Engineering</h2>
                  </div>
                </div>
              </a>

              <a href="/course-detail">
                <div className="course-container">
                  <img className="course-image" src={CourseImage} alt="Course 1" />
                  <div className="course-name-container">
                    <h2>B.Sc. Software Engineering</h2>
                  </div>
                </div>
              </a>

            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};


export default Course;
