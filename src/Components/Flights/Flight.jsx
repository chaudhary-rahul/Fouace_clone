import React, { useState } from "react";
import "../../Styles/flight.css";
import pic1 from "../../Images/banner-1.jpg";
import pic2 from "../../Images/banner-2.jpg";
import rhino from "../../Images/rhino.png";
import map from "../../Images/map.jpg";

import Return from "./Return";
import Multicity from "./multicity";
import Aircal from "./aircal";
import Oneway from "./Oneway";
// import Footer from "../Footer/footer";

export default function Flight() {
  const [returncheck, setReturncheck] = useState(false);
  const [multicity, setMulticity] = useState(false);
  const [aircalndr, setAircalndr] = useState(false);
  const [flights, setFlight] = useState(true);

  const chnageairformstate = () => {
    setAircalndr(true);
    setMulticity(false);
    setReturncheck(false);
    setFlight(false);
  };
  const changeMultipleform = () => {
    setMulticity(true);
    setAircalndr(false);
    setReturncheck(false);
    setFlight(false);
  };
  const changereturnstate = () => {
    setReturncheck(true);
    setAircalndr(false);
    setMulticity(false);
    setFlight(false);
  };
  const changeoneway = () => {
    setReturncheck(false);
    setAircalndr(false);
    setMulticity(false);
    setFlight(true);
  };
  return (
    <>
      <div className="flight-container">
        <div id="carouselExampleAutoplaying"
          class="carousel slide mycrsl"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={pic1} class="d-block w-100 crsl" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={pic2} class="d-block w-100 crsl" alt="..." />
            </div>

            <div className="img-container">
              <img src={map} id="myimg1" alt="pictur1"></img>
              <img src={rhino} id="myimg2" alt="picture2"></img>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
            aria-hidden="true"
            
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
            aria-hidden="true"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        <div className="myform">
          <div className="flight-options container">
            <ul class="formnav">
              <li class="choose" id="Flight">
                <a class="flgt" href="#null">
                  <span></span>Flights
                </a>
              </li>
              <li class="choose" id="Hotel">
                <a class="flgt" href="#null">
                  <span></span>Hotels
                </a>
              </li>
              <li class="choose" id="Holiday">
                <a class="flgt" href="#null">
                  <span></span>Holidays
                </a>
              </li>
              <li class="choose" id="Bus">
                <a class="flgt" href="#null">
                  <span></span>Bus
                </a>
              </li>
            </ul>
          </div>

          <div className="flight-form">
            <div className="form">
              <form>
                <label>
                  <input
                    type="radio"
                    defaultChecked={true}
                    value="oneway"
                    name="form"
                    id="radio1"
                    onClick={changeoneway}
                  />
                  <p onClick={changeoneway}>One Way</p>
                </label>
                <label>
                  <input
                    type="radio"
                    name="form"
                    // defaultChecked={false}

                    id="radio1"
                    value="return"
                    onClick={changereturnstate}
                  />
                  <p onClick={changereturnstate}>Return</p>
                </label>
                <label>
                  <input
                    type="radio"
                    // defaultChecked={false}
                    value="multicity"
                    id="radio1"
                    name="form"
                    onClick={changeMultipleform}
                  />
                  <p
                    // onClick={() => setMulticity(true)}
                    onClick={changeMultipleform}
                  >
                    Multi-City
                  </p>
                </label>
                <label>
                  <input
                    type="radio"
                    // defaultChecked={false}
                    className="airbtn"
                    id="radio1"
                    value="aircalender"
                    name="form"
                    onClick={chnageairformstate}
                  />
                  <p
                    // onClick={()=>setAircalndr(true)}
                    onClick={chnageairformstate}
                  >
                    Air Calendar
                  </p>
                </label>
              </form>
            </div>
            <div className="form2">
              {flights ? <Oneway /> : null}
              {multicity ? <Multicity /> : null}
              {aircalndr ? <Aircal /> : null}
              {returncheck ? <Return key="aircl" /> : null}
            </div>

            {/* <div className="mybtnn">
              <button className="btn2" type="submit">
                Search
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
