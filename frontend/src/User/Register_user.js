import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import NavBar from "../MainPage/NavBar.js";

const Register_user = () => {

  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [dob, setDOB] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");
  const [confirmpass, setConfirmPassword] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [emergencyContactNumber, setEmergencyContactNumber] = useState("");


  const loginUser = async (e) => {
    e.preventDefault();
    fetch(`http://localhost:8080/skillspark/addUser`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: firstname,
        lastname: lastname,
        dob: dob,
        address: {
          street: street,
          city: city,
          state: state,
          zip: zipcode
        },
        emailid: email,
        password: pass,
        confirmPassword: confirmpass,
        contactNumber: contactNumber,
        emergencyContact: emergencyContactNumber
      }),
    })
      .then((response) => {
        response.json();
        if (response.status == 200) {
          navigate("/dashboard");
        } else {
          alert("Invalid Username or Password");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <div className="Register">
      <NavBar />
      <div className="UserReg">
        <h2 id="RegisterTitle">Registration</h2>
      </div>
      <div className="UserInp">
        <form>
          <div className="inputBox">
            <label>First Name</label>
            <input
              type="text"
              placeholder="First Name"
              value={firstname} onChange={(e) => setFirstname(e.target.value)}
              required
            />
          </div>
          <br />
          <div className="inputBox">
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              value={lastname} onChange={(e) => setLastname(e.target.value)}
              required
            />
          </div>
          <br />
          <div className="inputBox">
            <label>Date of Birth</label>
            <input
              type="date"
              placeholder="Date of Birth"
              value={dob} onChange={(e) => setDOB(e.target.value)}
              required
            />
          </div>
          <br />
          <div className="inputBox">
            <label>Address</label>
            <br />
            <input
              type="text"
              placeholder="Street"
              name="street"
              value={street} onChange={(e) => setStreet(e.target.value)}
              required
            />
          </div>
          <br />
          <div className="inputBox">
            <label></label>
            <input
              type="text"
              placeholder="City"
              name="city"
              value={city} onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <br />
          <div className="inputBox">
            <label></label>
            <input
              type="text"
              placeholder="State"
              name="state"
              value={state} onChange={(e) => setState(e.target.value)}
              required
            />
          </div>
          <br />
          <div className="inputBox">
            <label></label>
            <input
              type="text"
              placeholder="Zip"
              name="zip"
              value={zipcode} onChange={(e) => setZipcode(e.target.value)}
              required
            />
          </div>
          <br />
          <div className="inputBox">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Email Address"
              value={email} onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <br />
          <div className="inputBox">
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={pass} onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <br />
          <div className="inputBox">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmpass} onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <br />
          <div className="inputBox">
            <label>Contact Number</label>
            <input
              type="tel"
              placeholder="Contact Number"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              required
            />
          </div>
          <br />
          <div className="inputBox">
            <label>Emergency Contact</label>
            <input
              type="text"
              placeholder="Emergency Contact"
              value={emergencyContactNumber} onChange={(e) => setEmergencyContactNumber(e.target.value)}
              required
            />
          </div>
          <br />
          <div className="registerBtn1">
            <button type="submit" onClick={loginUser}>Register</button>
            <p className="loginAsk">
              Already Registered?
              <Link to="/loginUser" className="loginBtn1">
                Sign In
              </Link>
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

export default Register_user;
