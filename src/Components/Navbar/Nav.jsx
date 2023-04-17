import React from "react";
import "../../Styles/nav.css";
import Secondnav from './Secondnav';

import pic from "../../Images/Logo.jpg";
export default function Nav() {
  return (
    <div className="myconatiner">
      <nav className="navbar navbar-collapse mynav">
        <div className="navbar navbar-collapse nav1">
          <ul className="mylist">
            <li className="nav-item">
              <a href="tel: +91-9810822129" className="nav-link">
                <i class="fa fa-phone"></i> +91-98221111129
              </a>
            </li>
            <li className="nav-item">
              <a href="mail:abc@gmail.com" className="nav-link">
                <i class="fa fa-envelope"></i>mail@fouddfde.in
              </a>
            </li>
            <div className="icons">
              <li className="nav-item">
                <a className="nav-link">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <i class="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <i class="fa-brands fa-instagram" id="ing"></i>
                </a>
              </li>
            
            </div>
           
          </ul>
          <div className="right-nav">
          <li className="nav-item">
            <i className="fa fa-user"></i>SignIn / SignUp
          </li>
        </div>
        </div>
        
        <Secondnav/>
      </nav>
    </div>
  );
}
