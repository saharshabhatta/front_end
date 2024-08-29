// src/website/Layout.js

import React from 'react';
import Header from './Header';  // Import the Header component
import Footer from './Footer';  // Import the Footer component

/**
 * Layout component to wrap content with a Header and Footer.
 * 
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - Content to be displayed between the Header and Footer.
 * @returns {JSX.Element} The Layout component.
 */
const Layout = ({ children }) => {
  return (
    <div>
      {/* Render the Header component */}
      <Header />

      {/* Render the main content */}
      <div className="layout-content">
        {children}  {/* This will be the content passed from the parent component */}
      </div>

      {/* Render the Footer component */}
      <Footer />
    </div>
  );
};

export default Layout;
