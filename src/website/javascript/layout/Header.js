import React, { useEffect, useState } from 'react';
import '../../css/Header.css';

const Header = () => {
  const currentPath = window.location.pathname;
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollBox = document.querySelector('.scroll-box');
      const navContainer = document.querySelector('.nav-container');

      if (window.scrollY > 550) {
        scrollBox.style.display = 'block';
        navContainer.style.backgroundColor = 'transparent';
        navContainer.style.opacity = '1';
      } else {
        scrollBox.style.display = 'none';
        navContainer.style.backgroundColor = '#042745';
        navContainer.style.opacity = '76%';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMouseEnter = (id) => {
    setHoveredItem(id);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const NavItem = ({ id, href, isSubLink }) => (
    <li>
      <a
        id={id}
        href={href}
        className={
          currentPath === href && !hoveredItem
            ? isSubLink ? 'active2' : 'active1'
            : ''
        }
        onMouseEnter={() => handleMouseEnter(id)}
        onMouseLeave={handleMouseLeave}
      >
        {id}
      </a>
    </li>
  );

  return (
    <>
      <header>
        <div
          className="logo-container"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        ></div>

        <div className="nav-container-div">
          <nav>
            <ul className="nav-container">
              <NavItem id="Home" href="/" />
              <NavItem id="About" href="/about" />
              <NavItem id="Course" href="/course" />
              <NavItem id="Contact" href="/contact" />
              <NavItem id="News" href="/news" />
                    <NavItem id="Student" href="/student" isSubLink={true} />
                    <li className="line"></li>
                    <NavItem id="Staff" href="/staff" isSubLink={true} />
            </ul>
          </nav>
        </div>
      </header>

      <div className="scroll-box"></div>
    </>
  );
};

export default Header;
