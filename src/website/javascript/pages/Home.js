import React from 'react';
import Layout from '../layout/Layout.js';  // Import the Layout component which includes Header and Footer
import '../../css/Home.css';  // Import CSS specific to the Home page for styling
import '@fortawesome/fontawesome-svg-core/styles.css';  // Import FontAwesome core styles for icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  // Import FontAwesomeIcon component to use icons
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';  // Import the search icon from FontAwesome
import libraryImage from '../../images/Library1.jpg';  // Import the image of the college library
import graduationImage from '../../images/Graduation.jpg';  // Import the image of student graduation

const Home = () => {
  return (
    <Layout>
      <main>
        {/* 
          Section for course search.
          This section has a black background and contains a search form.
        */}
        <section className="black-background-section">[]
          <div className="search-form-container-div">
            {/* Container for the search title */}
            <div className="search-title-container">
              {/* Title for the search form */}
              <h2>Search For A Course</h2>
            </div>
            <div className="form-container-div">
              {/* 
                Search form for users to input search keywords.
                Includes an input field for the course title or keyword and a search button with an icon.
              */}
              <form className="search-form">
                <div>
                  {/* Input field for search keywords */}
                  <input 
                    type="text" 
                    name="search-value" 
                    placeholder="Enter Course Title or Any Search Keyword" 
                  />
                </div>
                <div>
                  {/* Button with FontAwesome search icon */}
                  <button>
                    <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" style={{ color: 'white' }} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* 
          Section with a gray background that introduces the university.
          Contains two blocks: one for a welcome message and another for student experience.
        */}
        <section className="gray-background-section">
          <div className="welcome-container-div">
            {/* Container for welcome messages and images */}
            <div className="welcome-message-div">
              {/* 
                First block: Welcome message about the university.
                Includes a title and a paragraph describing the university's offerings and community.
              */}
              <div className="welcome-message-chunk-div">
                <div className="welcome-message-title-div">
                  {/* Title for the welcome message */}
                  <h2>Welcome to Woodland</h2>
                </div>
                <div className="welcome-message-paragraph-div">
                  {/* Paragraph describing the university */}
                  <p>
                    Welcome to Woodland University College, where academic excellence meets
                    innovative learning. We offer a diverse range of programs designed 
                    to equip students with practical skills and knowledge for the real 
                    world. Our vibrant campus fosters growth, creativity, and a strong 
                    sense of community. Join us and embark on your path to success!
                  </p>
                </div>
              </div>
              {/* 
                Second block: Student experience details.
                Includes a title and a paragraph highlighting the vibrant campus life and opportunities.
              */}
              <div className="welcome-message-chunk-div">
                <div className="welcome-message-title-div">
                  {/* Title for the student experience section */}
                  <h2>Student Experience</h2>
                </div>
                <div className="welcome-message-paragraph-div">
                  {/* Paragraph describing the student experience */}
                  <p>
                    At Woodland University College, student experience is at the heart of 
                    everything we do. Our vibrant campus life, supportive community, and 
                    diverse extracurricular opportunities foster personal and academic growth. 
                    From state-of-the-art facilities to real-world learning experiences, we 
                    ensure students thrive both inside and outside the classroom, making 
                    lifelong memories along the way.
                  </p>
                </div>
              </div>
            </div>
            {/* 
              Image of the college library.
              Positioned next to the welcome messages.
            */}
            <div>
              <img className="potrait-image" src={libraryImage} alt="College Library" />
            </div>
          </div>
        </section>

        {/* 
          Section showcasing career placement opportunities.
          Includes a landscape image and a block detailing career placement services.
        */}
        <section>
          <div className="welcome-container-div add-margin">
            <div>
              {/* 
                Image of student graduation.
                Positioned to the left of the career placement details.
              */}
              <img className="landscape-image" src={graduationImage} alt="Student Graduation" />
            </div>
            <div className="right-detail-container">
              {/* 
                Block discussing career placement services.
                Contains a title and a paragraph about the university’s support for career development.
              */}
              <div className="welcome-message-title-div">
                {/* Title for the career placement section */}
                <h2>Exceptional Career Placement</h2>
              </div>
              <div className="welcome-message-paragraph-div">
                {/* Paragraph describing career placement services */}
                <p>
                  Woodland University College prides itself on exceptional career 
                  placement services, guiding students from classroom to career. With 
                  strong industry connections, personalized support, and a dedicated 
                  career center, our graduates secure top positions in their fields. 
                  We’re committed to helping every student achieve their professional 
                  aspirations and succeed in the global job market.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Home;
