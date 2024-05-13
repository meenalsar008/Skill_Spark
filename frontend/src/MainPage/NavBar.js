import React, { useState } from "react";
import logo from "../Admin/images/Skillspark.png";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/css/style.css";
import { Link } from "react-router-dom";

export default function MainPageNavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    setIsLoggedIn(true);
  setUsername("John Doe");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  setUsername("");
  };

  return (
    <div>
      <header
        id="header"
        className="fixed-top d-flex align-items-center header-transparent"
      >
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <div className="logo me-auto">
            <h1>
              <img src={logo} alt="logo" />
            </h1>
          </div>
          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li>
                <Link className="nav-link scrollto" to="/#hero">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" to="#why-us">
                  About
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" to="/#why-us">
                  Why?
                </Link>
              </li>
              <li className="dropdown">
                <Link className="nav-link scrollto" to="/#">
                  Classes{" "}
                </Link>
                <i className="bi bi-chevron-down"></i>
                <ul>
                  <li className="dropdown">
                    <Link className="nav-link scrollto" to="/#">
                      <span>Dance</span> <i className="bi bi-chevron-right"></i>
                    </Link>
                    <ul>
                      <li>
                        <Link className="nav-link scrollto" to="/salsa">
                          Salsa
                        </Link>
                      </li>
                      <li>
                        <Link className="nav-link scrollto" to="/hiphop">
                          Hip-Hop
                        </Link>
                      </li>
                      <li>
                        <Link className="nav-link scrollto" to="/ballet">
                          Ballet
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <Link className="nav-link scrollto" to="/#">
                      <span>Cooking</span>{" "}
                      <i className="bi bi-chevron-right"></i>
                    </Link>
                    <ul>
                      <li>
                        <Link className="nav-link scrollto" to="/baking">
                          Baking
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="nav-link scrollto"
                          to="/healthyCooking"
                        >
                          Healthy Cooking
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="nav-link scrollto"
                          to="/kidsCooking"
                        >
                          Kids Cooking
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                  <Link className="nav-link scrollto" to="/#">
                      <span>Fitness</span>{" "}
                      <i className="bi bi-chevron-right"></i>
                    </Link>
                    <ul>
                      <li>
                        <Link className="nav-link scrollto" to="/zumba">
                          Zumba
                        </Link>
                      </li>
                      <li>
                        <Link className="nav-link scrollto" to="/aerobics">
                          Aerobics
                        </Link>
                      </li>
                      <li>
                        <Link className="nav-link scrollto" to="/pilates">
                          Pilates
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <Link className="nav-link scrollto" to="/#">
                      <span>Outdoor</span>{" "}
                      <i className="bi bi-chevron-right"></i>
                    </Link>
                    <ul>
                      <li>
                        <Link className="nav-link scrollto" to="/hiking">
                          Hiking
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="nav-link scrollto"
                          to="/rockClimbing"
                        >
                          Rock Climbing
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="nav-link scrollto"
                          to="/horseRiding"
                        >
                          Horse Riding
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <Link className="nav-link scrollto" to="/#">
                      <span>Sports</span>{" "}
                      <i className="bi bi-chevron-right"></i>
                    </Link>
                    <ul>
                      <li>
                        <Link className="nav-link scrollto" to="/cricket">
                          Cricket
                        </Link>
                      </li>
                      <li>
                        <Link className="nav-link scrollto" to="/football">
                          Football
                        </Link>
                      </li>
                      <li>
                        <Link className="nav-link scrollto" to="/soccer">
                          Soccer
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <Link className="nav-link scrollto" to="/#">
                      <span>Arts and Crafts</span>
                      <i className="bi bi-chevron-right"></i>
                    </Link>
                    <ul>
                      <li>
                        <Link className="nav-link scrollto" to="/painting">
                          Painting
                        </Link>
                      </li>
                      <li>
                        <Link className="nav-link scrollto" to="/knitting">
                          Knitting
                        </Link>
                      </li>
                      <li>
                        <Link className="nav-link scrollto" to="/pottery">
                          Pottery
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <Link className="nav-link scrollto" to="/#gallery">
                  Gallery
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" to="/#contact">
                  Contact
                </Link>
              </li>
            </ul>
            {isLoggedIn ? (
              <>
                <li>
                  <span className="nav-link">{username}</span>
                </li>
                <li>
                  <Link className="nav-link" to="/dashboardUser">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/settingUser">
                    Setting
                  </Link>
                </li>
                <li>
                  <button                
                  onClick={handleLogout}
                  className="book-a-table-btn scrollto"
                  type="button"
                  data-bs-container="body"
                  data-bs-toggle="popover"
                  data-bs-placement="bottom"
                  data-bs-content="Sign In"
                >
                  Logout
                </button>
                </li>
              </>
            ) : (
              <Link to="/loginUser">
                <button
                  className="book-a-table-btn scrollto"
                  type="button"
                  data-bs-container="body"
                  data-bs-toggle="popover"
                  data-bs-placement="bottom"
                  data-bs-content="Sign In"
                  onClick={handleLogin}
                >
                  Sign In
                </button>
              </Link>
            )}
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    </div>
  );
}