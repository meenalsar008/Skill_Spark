import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from "../Class/Navbar/classNavbar.js";
import '../Class/Styles/css/users.css'

const Users = () => {
  const [item, setItem] = useState(null);
  const [data, setClasses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/skillspark/getAllUser", {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setClasses(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <h2>Users</h2>
      <table className='tablestyle'>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Classes Rating</th>
            <th>Classes Comments</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr style={{ color: 'black' }} key={index}>
              <td>{item.fullname}</td>
              <td>{item.email}</td>
              <td>{item.classesRating}</td>
              <td>{item.classesComment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
