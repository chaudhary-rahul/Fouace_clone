import React from "react";
import "../../Styles/footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <footer className="inner-footer">
        <div class="footer-items ">
          <h3 className="text-warning"> Contact us</h3>

          <ul>
            <li className="info">
              <i class="fa fa-home" aria-hidden="true"></i>260, 2<sup>nd</sup> Floor, Aggarwal City Mall, <br/>Plot No. 13, Road No. 24,<br/>New Delhi 120034. Near Chunmun Stores.
            </li>
            <li>
              <i class="fa fa-phone" aria-hidden="true"></i>123456789
            </li>
            <li>
              <i class="fa fa-envelope" aria-hidden="true"></i>xyz@gmail.com
            </li>
          </ul>
        </div>

        <div class="footer-items item1">
          <h3 className="text-warning"> Booking Now</h3>

          <ul>
            <a href="#">
              <li><i className="fa fa-angle-right"></i>Holidays</li>
            </a>
            <a href="#">
              <li><i className="fa fa-angle-right"></i>Hotel</li>
            </a>
            <a href="#">
              <li> <i className="fa fa-angle-right"></i>Flights</li>
            </a>
            <a href="#">
              <li><i className="fa fa-angle-right"></i>Bus</li>
            </a>
          </ul>
        </div>

        <div class="footer-items item2">
          <h3 className="text-warning"> Support</h3>

          <ul>
            <a href="#">
              <li><i className="fa fa-angle-right"></i>Services</li>
            </a>
            <a href="#">
              <li><i className="fa fa-angle-right"></i>Contact Us</li>
            </a>
            <a href="#">
              <li><i className="fa fa-angle-right"></i>About Us</li>
            </a>
          </ul>
        </div>

        <div class="footer-items">
          <h3 className="text-warning"> Policies & Terms</h3>

          <ul>
            <a href="#">
              <li><i className="fa fa-angle-right"></i>Privacy Policy</li>
            </a>
            <a href="#">
              <li><i className="fa fa-angle-right"></i>Term and conditions</li>
            </a>
          </ul>
        </div>
      </footer>
    </div>
  );
}
