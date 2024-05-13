import React from "react";
import logo from "../../Admin/images/Skillspark.png";
import "../../MainPage/assets/vendor/bootstrap/css/bootstrap.min.css";
import "../../MainPage/assets/css/style.css";
import { Link } from "react-router-dom";

export default function MainPageNavBar() {
    return (
        <div>
            <header id="header" className="fixed-top d-flex align-items-center header-transparent">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                    <div className="logo me-auto">
                        <h1>
                            <img src={logo} alt="logo" />
                        </h1>
                    </div>
                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li><Link className="nav-link scrollto" to="/classDashboard">Dashboard</Link></li>
                            <li><Link className="nav-link scrollto" to="/viewUsers">User</Link></li>
                            <li className="dropdown"> <Link className="nav-link scrollto" to="/#">Settings </Link><i className="bi bi-chevron-down"></i>
                                <ul>
                                    <li className="dropdown">
                                            <li><Link className="nav-link scrollto" to="/updateClass">View Profile</Link></li>
                                            <li><Link className="nav-link scrollto" to="/hiphop">Settings</Link></li>
                                            <li><Link className="nav-link scrollto" to="/ballet">Logout</Link></li>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                </div>
            </header>
        </div>
    )
}