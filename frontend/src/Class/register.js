import React, { Component, useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const ClassesAdd = () => {
  const navigate = useNavigate();
  const [fullname, setFullname] = useState("");
  const [imageUrl, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [pass, setPassword] = useState("");
  const [confirmpass, setConfirmPassword] = useState("");
  const [classesContactNumber, setClassesContactNumber] = useState("");
  const [pointOfContactNumber, setPointOfContactNumber] = useState("");
  const [classesType, setClassesType] = useState("");
  const [classesStartTime, setClassesStartTime] = useState("");
  const [classesEndTime, setClassesEndTime] = useState("");
  const [classesAmount, setClassesAmount] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();
    fetch(`http://localhost:8080/skillspark/addClasses`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname: fullname,
        imageUrl: imageUrl,
        email: email,
        password: pass,
        confirmPassword: confirmpass,
        classesContactNumber: classesContactNumber,
        pointOfContactNumber: pointOfContactNumber,
        address: {
          street: street,
          city: city,
          state: state,
          zip: zipcode
        },
        classesType: classesType,
        classesStartTime: classesStartTime,
        classesEndTime: classesEndTime,
        classesAmount: classesAmount,
        classesApprovalStatus: "",
        classesRating: 0,
        classesComment: ""
      }),
    })
      .then((response) => {
        response.json();
        if (response.status === 200) {
          navigate("/dashboard");
        } else {
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App" >
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/"></a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"></li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <form>
            <h3>Sign In</h3>
            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={email} onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={pass} onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mb-3 d-flex align-items-center">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
              <p className="forgot-password mb-0 ms-auto">
                Forgot <a href="#">password?</a>
              </p>
            </div>
            <br></br>
            <div className="d-grid">
              <button type="submit" className="custom-btn">
                Submit
              </button>
            </div>
            <p className="new-user mb-0 ms-auto">
              New User? <Link to="/register">Sign up!</Link>
            </p>
          </form>
        </div>
      </div>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <form>
            <h3>Sign Up</h3>

            <div className="mb-3">
              <label>Full name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                value={fullname} onChange={(e) => setFullname(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={email} onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={pass} onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <br></br>
            <div className="d-grid">
              <button type="submit" className="custom-btn">
                Sign Up
              </button>
            </div>
            <p className="forgot-password text-right">
              Already registered <Link to="/login">Sign in?</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
export default ClassesAdd;