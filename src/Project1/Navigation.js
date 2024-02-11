import React, { useState, useEffect } from 'react';

const sections = [
  { name: 'Background', href: '#background' },
  { name: 'Research & Findings', href: '#research' },
  { name: 'Ideation & Validation', href: '#ideation' },
  { name: 'Prototyping & Testing', href: '#Prototype' },
  { name: 'Final Design', href: '#final' },
  { name: 'Diccussion', href: '#diccussion' },
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