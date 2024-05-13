import React, { useState } from "react";
import NavBar from "../MainPage/NavBar";
import "../User/Styles/Setting_user.css";

const user = {
  firstName: "Navin",
  lastName: "sharma",
  email: "sharma.navi@northeastern.edu",
  password: "password123",
  confirmPassword: "password123",
  dob: "01/01/1990",
  contactNumber: "1234567890",
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
  },
  emergencyContact: "Navin sharma - 9876543210",
};

const User_settings = () => {
  const [firstName, setFirstName] = useState(() => user.firstName);
  const [lastName, setLastName] = useState(() => user.lastName);
  const [email] = useState(() => user.email); // Email set as not-editable
  const [password, setPassword] = useState(() => user.password);
  const [confirmPassword, setConfirmPassword] = useState(
    () => user.confirmPassword
  );
  const [dob, setDob] = useState(() => user.dob);
  const [contactNumber, setContactNumber] = useState(() => user.contactNumber);
  const [address, setAddress] = useState(() => ({
    street: user.address.street,
    city: user.address.city,
    state: user.address.state,
    zip: user.address.zip,
  }));
  const [emergencyContact, setEmergencyContact] = useState(
    () => user.emergencyContact
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API to update user settings with the updated state values
    // ...
  };
  return (
    <div className="Setting">
      <NavBar />
      <div className="UserSet">
        <h1 className="settingTitle">Setting</h1>
      </div>
      <div className="userData">
        <form onSubmit={handleSubmit}>
          <div className="setBox">
            <label>First Name</label>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="setBox">
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="setBox">
            <label>Email</label>
            <input type="text" placeholder="Email" value={email} readOnly />
          </div>
          <div className="setBox">
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="setBox">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="setBox">
            <label>Date of Birth</label>
            <input
              type="text"
              placeholder="Date of Birth"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <div className="setBox">
            <label>Contact Number</label>
            <input
              type="text"
              placeholder="Contact Number"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
          </div>
          <div className="setBox">
            <label>Street</label>
            <input
              type="text"
              placeholder="Street"
              value={address.street}
              onChange={(e) =>
                setAddress({ ...address, street: e.target.value })
              }
            />
          </div>
          <div className="setBox">
            <label>City</label>
            <input
              type="text"
              placeholder="City"
              value={address.city}
              onChange={(e) => setAddress({ ...address, city: e.target.value })}
            />
          </div>
          <div className="setBox">
            <label>State</label>
            <input
              type="text"
              placeholder="State"
              value={address.state}
              onChange={(e) =>
                setAddress({ ...address, state: e.target.value })
              }
            />
          </div>
          <div className="setBox">
            {" "}
            <label>Zip</label>
            <input
              type="text"
              placeholder="Zip"
              value={address.zip}
              onChange={(e) => setAddress({ ...address, zip: e.target.value })}
            />
          </div>
          <div className="setBox">
            <label>Emergency Contact</label>
            <input
              type="text"
              placeholder="Emergency Contact"
              value={emergencyContact}
              onChange={(e) => setEmergencyContact(e.target.value)}
            />
          </div>
          <div className="btnChange">
          <button id="btn1" type="submit">Save</button>
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

export default User_settings;
