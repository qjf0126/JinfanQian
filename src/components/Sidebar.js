import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const sections = [
  { name: 'BACKGROUND', to: 'background' },
  { name: 'GETTING STARTED', to: 'getting-started' },
  { name: 'FAIL FAST, ITERATE FAST', to: 'fail-fast' },
  // Add other sections here
];

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    scrollSpy.update();

    const handleScroll = () => {
      let currentSection = '';
      sections.forEach((section) => {
        const element = document.getElementById(section.to);
        const scrollTop = window.scrollY;
        const elementTop = element.offsetTop;
        const elementHeight = element.clientHeight;

        if (scrollTop >= elementTop && scrollTop < elementTop + elementHeight) {
          currentSection = section.to;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav>
      <ul>
        {sections.map((section) => (
          <li key={section.name}>
            <Link
              activeClass="active"
              to={section.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onSetActive={() => setActiveSection(section.to)}
            >
              <span className={activeSection === section.to ? 'active' : ''}>
                {section.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;