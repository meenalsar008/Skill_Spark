import React from "react";
import Navbar from "../Class/Navbar/classNavbar.js";
import "./Styles/css/style.css";
import "boxicons/css/boxicons.min.css";

export default function classDashboard() {
  return (
    <div className="App">
      <Navbar />
      <div className="dash_column_right">
        <hr />
        <div className="main__title">
          <img src="assets/hello.svg" alt="" />
          <div className="main__greeting"></div>
        </div>

        <div className="main__cards">
          <div className="cardDash">
            <i
              className="fa fa-user-o fa-2x text-lightblue"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Average Reviews</p>
              <span className="font-bold text-title">
                <i class="bx bxs-star">4.8</i>
              </span>
            </div>
          </div>

          <div className="cardDash">
            <i
              className="fa fa-calendar fa-2x text-lightblue"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of Users</p>
              <span className="font-bold text-title">
                <i class="bx bx-user">15</i>
              </span>
            </div>
          </div>
          <div className="cardDash">
            <i
              className="bx bx-teacher fa-2x text-lightblue"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of Instructors</p>
              <span className="font-bold text-title">6</span>
            </div>
          </div>

          <div className="cardDash">
            <i
              className="fa fa-thumbs-up fa-2x text-green"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of locations</p>
              <span className="font-bold text-title">
                <i
                  class="bx bx-map
"
                >
                  4
                </i>
              </span>
            </div>
          </div>
        </div>

        <div class="charts">
          <div class="charts__right">
            <div class="charts__right__title">
              <div>
                <h1>Stats Reports</h1>
                <span>
                  <i class="fa fa-arrow-turn-up"></i>
                </span>
              </div>
            </div>

            <div class="charts__right__cards">
              <div class="card1" id="cardtitle">
                <h1>Revenue generated</h1>
                <p id="cardtitle">$13,150</p>
              </div>

              <div class="card2" id="cardtitle">
                <h1>Employees</h1>
                <p id="cardtitle">5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
