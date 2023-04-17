import React from "react";
import "../../Styles/nav.css";

import pic from "../../Images/Logo.jpg";
export default function Secondnav() {
  return (
    <>
      <nav className="down-nav">
        <div className="navbar-image">
          <img className="img" src={pic}></img>
        </div>
        <div className="second-rightnav">
          <ul className="mylist2">
            <li className="nav-item3">
              <a href="tel+91-90822129" className="nav-link3" id="link1">
                HOME
              </a>
            </li>
            <li className="nav-item3">
              <a href="mail:abc@gmail.com" className="nav-link3">
                ABOUT US
              </a>
            </li>
            <li className="nav-item3">
              <a href="mail:abc@gmail.com" className="nav-link3">
                SERVICES
              </a>
            </li>
            <li className="nav-item3">
              {/* <a className="nav-link3" id="bars"><i className="fa-solid fa-bars" ></i>
              <option>Home</option>
            </a> */}
              <div class="dropdown" id="bars">
                <button
                  class="btn  dropdown-toggle"
                 
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa fa-bars text-danger"></i>
                </button>
                <ul class="dropdown-menu">
                <li>
                    <a class="dropdown-item" href="#">
                      Home
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Services
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item3">
              <a href="mail:abc@gmail.com" className="nav-link3">
                CONTACT US
              </a>
            </li>
            <li className="nav-item3">
              <a href="mail:abc@gmail.com" className="nav-link3">
                <i className="fa fa-search"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
