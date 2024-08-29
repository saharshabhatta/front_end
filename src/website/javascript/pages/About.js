import React, { useState } from 'react';
import Layout from '../layout/Layout.js';
import '../../css/About.css';
import Chairman from '../../images/chairman.jpg';
import Graduation from '../../images/graduation-story.jpg';
import Leadership from '../../images/leadership.jpg';
import Graduation2 from '../../images/Graduation.jpg';
import CourseImage from '../../images/computer-science.jpg';

const About = () => {
  const [activeSection, setActiveSection] = useState('story');

  return (
    <Layout>
      <main>
        <section className="about-navigation">
          <ul className="next-nav">
            <li>
              <button
                className={`story-button ${activeSection === 'story' ? 'active5' : ''}`}
                onClick={() => setActiveSection('story')}
              >
                Our Story
              </button>
            </li>
            <li>
              <button
                className={`leadership-button ${activeSection === 'leadership' ? 'active5' : ''}`}
                onClick={() => setActiveSection('leadership')}
              >
                Leadership
              </button>
            </li>
            <li>
              <button
                className={`placement-button ${activeSection === 'placement' ? 'active5' : ''}`}
                onClick={() => setActiveSection('placement')}
              >
                Placement
              </button>
            </li>
          </ul>
          
          {activeSection === 'story' && (
            <div className="story">
              <div className="each-container">
                <img className="image" src={Graduation} alt="Graduation" />
                <div className="detail">
                  <h2>Our Story</h2>
                  <p>
                    Founded in 1890, our university has evolved from a small liberal arts college into
                    a global leader in research and innovation. With a commitment to excellence, 
                    diversity, and community, we empower students to excel in their fields and 
                    contribute meaningfully to society. Our legacy of academic and social impact 
                    continues to grow.
                  </p>
                </div>
              </div>

              <div className="each-container">
                <div className="detail">
                  <h2>Message From Chairman</h2>
                  <p>
                    Welcome to our esteemed university! As Chairman, I am proud to lead an 
                    institution dedicated to academic excellence, innovation, and community 
                    impact. Our commitment to fostering a dynamic learning environment and 
                    nurturing future leaders drives us forward. Together, we shape a brighter 
                    future for our students and society. Thank you for being part of our journey.
                  </p>
                </div>
                <img className="image" src={Chairman} alt="Chairman" />
              </div>
            </div>
          )}

          {activeSection === 'leadership' && (
            <div className="leadership">
              <div className="each-container">
                <img className="image" src={Leadership} alt="Leadership Program" />
                <div className="detail">
                  <h2>Leadership</h2>
                  <p>
                    Our leadership team, comprising seasoned academics and industry experts, drives 
                    our university's vision and strategic initiatives. Dedicated to fostering a dynamic 
                    learning environment, they champion innovation, academic excellence, and community 
                    engagement. Their collaborative approach and forward-thinking mindset ensure our 
                    institution remains at the forefront of higher education.
                  </p>
                </div>
              </div>

              <div className="each-container">
                <div className="detail">
                  <h2>Student Experience</h2>
                  <p>
                    Our university is dedicated to providing an enriching student experience, 
                    combining rigorous academics with vibrant campus life. Students engage in 
                    diverse extracurricular activities, benefit from personalized support 
                    services, and form lasting connections with peers and mentors. This holistic 
                    approach prepares them for success both during and after their academic journey.
                  </p>
                </div>
                <img className="image" src={Leadership} alt="Leadership Program" />
              </div>
            </div>
          )}

          {activeSection === 'placement' && (
            <div className="placement">
              <div className="each-container">
                <img className="image" src={Leadership} alt="Placement Program" />
                <div className="detail">
                  <h2>Placement</h2>
                  <p>
                    Our university’s placement program connects students with top employers, 
                    offering tailored career services, internships, and job placement support. 
                    Through industry partnerships and networking events, we equip students with 
                    the skills and opportunities needed to secure rewarding positions. Our 
                    commitment ensures graduates transition smoothly from academia to the 
                    professional world.
                  </p>
                </div>
              </div>

              <div className="each-container">
                <div className="detail">
                  <h2>Further Studies</h2>
                  <p>
                    Our university supports students' aspirations for further studies through 
                    comprehensive guidance and resources. We offer assistance with application 
                    processes, scholarships, and research opportunities. Our robust network of 
                    academic advisors and alumni connections helps students navigate graduate 
                    programs and advanced studies, paving the way for continued academic and 
                    professional growth.
                  </p>
                </div>
                <img className="image" src={Leadership} alt="Further Studies Program" />
              </div>
            </div>
          )}
        </section>

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

        <section className="gallery">
          <div>
            <h2>College Premises</h2>
          </div>
          <div className="image-grid">
            <img className="image" src={Graduation2} alt="Graduation" />
            <img className="image" src={Graduation2} alt="Graduation" />
            <img className="image" src={Graduation2} alt="Graduation" />
            <img className="image" src={Graduation2} alt="Graduation" />
            <img className="image" src={Graduation2} alt="Graduation" />
            <img className="image" src={Graduation2} alt="Graduation" />
            <img className="image" src={Graduation2} alt="Graduation" />
            <img className="image" src={Graduation2} alt="Graduation" />
            <img className="image" src={Graduation2} alt="Graduation" />
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default About;
