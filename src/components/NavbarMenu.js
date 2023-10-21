import React, { useState, useEffect } from 'react';
import '../style/NavbarMenu.css';

const NavbarMenu = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedDate = currentDateTime.toLocaleDateString();
  const formattedTime = currentDateTime.toLocaleTimeString();

  return (
    <div className="navbar">
      <div className="date-time">
        <span className="date">{formattedDate}</span>
        <span className="time">{formattedTime}</span>
      </div>
    </div>
  );
};

export default NavbarMenu;
