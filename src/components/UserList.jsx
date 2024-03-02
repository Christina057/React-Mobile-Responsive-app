import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai'; 
import { AiOutlineUser } from 'react-icons/ai';
import './UserList.css'; 

const UserList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [employeeList, setEmployeeList] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    fetch('/employeedata.json') 
      .then((response) => response.json())
      .then((data) => setEmployeeList(data))
      .catch((error) => console.error('Error fetching employee data:', error));
  }, []); 

  const handleSearch = () => {
    const query = searchQuery.trim().toLowerCase();
  
    const isNumericID = /^\d+$/.test(query);
  
    const filteredEmployees = employeeList.filter((employee) => {
      const matchesName = employee.name.toLowerCase().includes(query);
      const matchesID = isNumericID && employee.id.toString().includes(query);
      return matchesName || matchesID;
    });
  
    setFilteredEmployees(filteredEmployees.length > 0 ? filteredEmployees : employeeList);
  };
  

  return (
    <div className="user-list-container">
      <h1>User List Page</h1>
      <div className="search-bar">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by name"
        />
        <button type="button" onClick={handleSearch}>
          Search
        </button>
      </div>
      <ul>
        {filteredEmployees.map((employee) => (
          <li key={employee.id}>
            <strong>{employee.name}</strong>
            <br />
            ID: {employee.id} | Date of Birth: {employee.dob} | Role: {employee.role}
          </li>
        ))}
      </ul>
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

export default UserList;
