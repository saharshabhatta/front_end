import React from 'react';  // Import React library for building components
import Layout from '../layout/Layout.js';  // Import Layout component which includes Header and Footer
import '../../css/NewsBlogSection.css';
import merryChristmasImage from '../../images/MerryChristmas.png'; 
import memories from '../../images/Memories.png';
import unite from '../../images/Unite.png';
import TestimonialCarousel from './TestimonialCarousel.js';

const News = () => {
  return (
    <Layout>
      <div className="news-blogs">
        <h2>News & Blogs</h2>
        <hr className="section-divider" />
        <div className="blog-items">
          <div className="blog-item">
          <img src={merryChristmasImage} alt="Ho! Ho! Ho! Merry Christmas!" />
          <h3>Ho! Ho! Ho! Merry Christmas!</h3>
          <p>
              Downtown Square, Cityville<br />
              December 25, 2024<br />
              6:00 PM - 9:00 PM
          </p>
          <p>
              Join us for a festive evening filled with holiday cheer! Enjoy live music, delicious treats, and a visit from Santa Claus. Don't miss out on this magical Christmas celebration for the whole family.
          </p>
          </div>
          
          <div className="blog-item">
          <img src={memories} alt="Creating Lasting Memories" />
          <h3>Creating Lasting Memories</h3>
          <p>
              Central Park, New York City<br />
              October 15, 2024<br />
              2:00 PM - 5:00 PM
          </p>
          <p>
              Come and create cherished memories with us in Central Park! We’ll have a variety of fun activities including arts and crafts, games, and a storytelling session. It’s a great opportunity for families to spend quality time together in a beautiful outdoor setting.
          </p>
          </div>

          <div className="blog-item">
          <img src={unite} alt="Unite. Triumph. Conquer." />
          <h3>Unite. Triumph. Conquer.</h3>
          <p>
              Victory Stadium, Sports City<br />
              November 10, 2024<br />
              10:00 AM - 4:00 PM
          </p>
          <p>
              Join us for an exhilarating day of sports and team-building activities at Victory Stadium! This event will feature various competitive games, motivational speeches, and awards for outstanding achievements. It's an opportunity to unite, excel, and celebrate success with fellow participants.
          </p>
          </div>
          </div>
      </div>
      <TestimonialCarousel/>
    </Layout>
  );
};

export default News;
