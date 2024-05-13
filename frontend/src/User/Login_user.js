import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import NavBar from "../MainPage/NavBar.js";
import "../User/Styles/Login_user.css";

const Login_user = ({ ...props }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");

  let flag = 0;

  const loginUser = async (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/skillspark/loginUser", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emailid: email,
        password: pass,
      }),
    })
      .then((response) => {
        if (response.status == 200) {
          response.json().then(data => {
            localStorage.setItem('user', "Navin Sharma");
            localStorage.setItem('email', "sharma.navi@northeastern.edu");
            navigate("/");
          });
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="Login">
      <NavBar/>
      <div className="UserLogin">
        <h1 id="LoginTitle">Login</h1>
      </div>
      <div className="UserLog">
        <form>
          <br />
          <div className="inputBox1">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <br />
          <div className="inputBox1">
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={pass}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <br />
          <div className="loginBtn2">
            <button type="submit" onClick={loginUser}>Login</button>
            <p className="registerAsk">
              New User? <Link to="/registerUser" className="registerBtn2">Sign Up</Link>
            </p>
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="ClassLogin">
            <p className="classLogin">
              Partner Dashboard Login  <Link to="/loginClasses" className="classLoginBtn3">Sign In</Link>
            </p>
          </div>
        </form>
      </div>
      <footer id="footer">
        <div class="container">
          <h3>Skill Spark</h3>
          <p>Experience the freedom of variety with Skill Spark</p>
          <div class="social-links">
            <a href="#" class="twitter">
              <i class="bx bxl-twitter"></i>
            </a>
            <a href="#" class="facebook">
              <i class="bx bxl-facebook"></i>
            </a>
            <a href="#" class="instagram">
              <i class="bx bxl-instagram"></i>
            </a>
            <a href="#" class="google-plus">
              <i class="bx bxl-skype"></i>
            </a>
            <a href="#" class="linkedin">
              <i class="bx bxl-linkedin"></i>
            </a>
          </div>
          <div class="copyright">
            &copy; Copyright{" "}
            <strong>
              <span style={{ color: "#ffb03b" }}>Skill Spark</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Login_user;
