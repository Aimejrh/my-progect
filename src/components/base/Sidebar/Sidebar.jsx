import React from 'react';
import './Sidebar.scss';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="/path/to/logo.png" alt="Prime Clinic" />
      </div>
      <nav>
        <ul>
          <li><a href="#">Записаться</a></li>
          <li><a href="#">О клинике</a></li>
          <li><a href="#">Запросы</a></li>
          <li><a href="#">Мои записи</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;