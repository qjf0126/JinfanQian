import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

const sections = [
  { name: 'Background', href: '#background' },
  { name: 'Research', href: '#research' },
  { name: 'Findings', href: '#findings' },
  { name: 'Ideation & Validation', href: '#ideation' },
  { name: 'Prototyping & Testing', href: '#Prototype' },
  { name: 'Final Design', href: '#final' },
  { name: 'Diccussion', href: '#discussion' },
];

const section = [
  { name: <i className="bi bi-house"></i>, href: '/' },
];

const Navigation = () => {
  const [showNavigation, setShowNavigation] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const researchSection = document.querySelector('#research');
      if (researchSection) {
        const scrollPosition = window.scrollY;

        let currentSection = '';
        sections.forEach((section) => {
          const sectionEl = document.querySelector(section.href);
          if (sectionEl) {
            const sectionOffset = sectionEl.offsetTop;
            if (scrollPosition >= sectionOffset && scrollPosition < sectionOffset + sectionEl.offsetHeight) {
              currentSection = section.name;
            }
          }
        });
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 在Navigation组件中添加条件渲染
  if (activeSection === 'Background') {
    return null; // 如果activeSection是'BACKGROUND'，则不渲染导航
  }

  return (
    <nav className={`navigation ${showNavigation ? 'show' : ''}`}>
      <div className="navigation-home">
        {section.map((section) => (
          <Link
            key={section.name}
            to={section.href}
            className={activeSection === section.name ? 'active' : ''}
            onClick={() => {
              if (section.name === 'Home') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            {section.name}
          </Link>
        ))}
      </div>
      <div className="navigation-content">
        {sections.map((section) => (
          <a
            key={section.name}
            href={section.href}
            className={activeSection === section.name ? 'active' : ''}
          >
            {section.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;