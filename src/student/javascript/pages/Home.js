import React from 'react';
import Layout from '../../../website/javascript/layout/Layout.js';
import '../../css/Home.css'; // Importing the CSS file for styling

/**
 * Home Component
 * This component displays a full-screen popup overlay that informs the user
 * that the page is under construction. It includes a "Go Back" button
 * that allows the user to navigate back to the previous page.
 */
const Home = () => {
  /**
   * goBack Function
   * This function navigates the user back to the previous page
   * using the browser's history API.
   */
  const goBack = () => {
    window.history.back();
  };

  return (
    <Layout>
      <div className="popup-overlay">
        <div className="popup-content">
          {/* Display the main message */}
          <h1>Page Under Construction!</h1>
          {/* Display a sub-message */}
          <p>Thank you for your patience.</p>
          {/* Button to navigate back to the previous page */}
          <button onClick={goBack}>Go Back</button>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
