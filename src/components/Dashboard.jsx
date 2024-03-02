import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai'; 
import './Dashboard.css'; 

const Dashboard = () => {
  const productivityData = {
    'Monday': '75%',
    'Tuesday': '80%',
    'Wednesday': '85%',
    'Thursday': '70%',
    'Friday': '90%',
    'Saturday': '60%',
    'Sunday': '50%',
  };

  return (
    <div className="dashboard-container">
      <h1>Dashboard Page</h1>
      <div className="dashboard-card">
        <div className="productivity-data">
          {Object.entries(productivityData).map(([day, percentage]) => (
            <div key={day} className="bar-container">
              <strong>{day}:</strong>
              <div className="bar" style={{ width: percentage }}>
                {percentage}
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="middle-footer">
        <ul>
          <li>
            <Link to="/dashboard" className="nav-link">
              Home <AiFillHome />
            </Link>
          </li>
          <li>
            <Link to="/user-list" className="nav-link">
              User List <AiOutlineUser />
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Dashboard;
