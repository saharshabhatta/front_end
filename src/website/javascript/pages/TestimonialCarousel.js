import React, { useState } from 'react';
import '../../css/TestimonialCarousel.css';
import student1 from '../../images/Student1.png';
import student2 from '../../images/Student2.png';
import student3 from '../../images/Student3.png';

const TestimonialCarousel = () => {
 
  const testimonials = [
    {
      name: "Sneha Shrestha",
      degree: "MSc. COMPUTING",
      imageUrl: student1,
      testimonial: "My experience at this institution has been transformative. The MSc. Computing program offered a rigorous curriculum that not only challenged my technical skills but also expanded my understanding of innovative technologies. The supportive faculty and collaborative environment provided me with the tools and confidence needed to excel in my career. The hands-on projects and industry partnerships were invaluable, and I now feel well-prepared to tackle complex problems in the tech world. I highly recommend this program to anyone looking to advance their computing expertise and achieve their professional goals."
    }
    ,
    {
      name: "Aadarsha Shahi",
      degree: "MBA",
      imageUrl: student2,
      testimonial: "It was an honor to be a member of the Woodland community, and to graduate  with an MBA degree. I learned a great deal, expanded my horizons, and established the foundations for success in my career. I have subsequently gained further valuable experience, having been elected as Secretary of the Alumni Council. In the course of fulfilling this role, I have become involved with the University’s management, and participated in many meetings intended to further enrich student life at Woodland. I appreciate all of the faculty and staff members at Woodland who have taken the time and made the effort to teach me, and to help me develop my professional career."
    },
    {
      name: "John Smith",
      degree: "BSc. ENGINEERING",
      imageUrl: student3,
      testimonial: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium..."
    }
  ];

  // State to track the current index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next testimonial
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Function to go to the previous testimonial
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="testimonial-carousel">
      <button className="carousel-button prev" onClick={prevTestimonial}>
        &#9664;
      </button>
      <div className="testimonial-item">
        <div className="testimonial-left">
          <img src={testimonials[currentIndex].imageUrl} alt={testimonials[currentIndex].name} />
          <h3>{testimonials[currentIndex].name}</h3>
          <h3>{testimonials[currentIndex].degree}</h3>
        </div>
        <div className="testimonial-content">
          <p>{testimonials[currentIndex].testimonial}</p>
        </div>
      </div>
      <button className="carousel-button next" onClick={nextTestimonial}>
        &#9654;
      </button>
      <div className="carousel-dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
