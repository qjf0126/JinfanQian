import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

const TopBar = () => {
  const [showTopBar, setShowTopBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // 下滑时隐藏 TopBar
        setShowTopBar(false);
      } else {
        // 上滑时显示 TopBar
        setShowTopBar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={`topbar ${showTopBar ? 'show' : 'hide'}`}>
      <div className="topbar-left">
        <button className="topbar-button">
          <i className="bi bi-house" style={{ marginRight: '8px' }}></i>
          <NavLink 
            to="/" 
            className="topbar-button"
            style={({ isActive }) => ({ 
                fontWeight: isActive ? 'bold' : 'normal',
                textDecoration: isActive ? 'underline' : 'none',
            })}
            >
            Homepage
          </NavLink>
        </button>
      </div>  
      <div className="topbar-right">
        <NavLink 
          to="/project3" 
          className="topbar-button"
          style={({ isActive }) => ({ 
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'underline' : 'none',
          })}
        >
          Next Project: Tide of Food Delivery Waste
        </NavLink>
      </div>
    </div>
  );
};

export default TopBar;