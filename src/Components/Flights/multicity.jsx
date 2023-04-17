import { React, useState, useRef } from "react";
import "../../Styles/flight.css";
import "../../Styles/search.css";

export default function Multicity() {
  const data = ["Jaipur", "Delhi", "Bengaluru", "Mumbai"];
  const Travellers = ["1", "2", "3", "4", "5", "6"];
  const dateInputRef = useRef(null);

  const [val, setVal] = useState({
    Origin: "",
    Destination: "",
    DepartureDate: "",
    TotalTravellers: "",
    Class: "",
  });

  const changehandle = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setVal({ ...val, [name]: value });
  };
  function Handlesubmit(e) {
    e.preventDefault();
    console.log(val);
    // setVal("")
  }
  return (
    <form onSubmit={Handlesubmit}>
      <div className="divm">
        <div className="formdata1 formdata1m">
          <p>Origin</p>
          <div className="searchbox">
            <input
              list="data"
              id="onewayin"
              placeholder="From"
              name="Origin"
              type={"text"}
              value={val.Origin}
              onChange={changehandle}
            />
            <datalist id="data" value={val.from} onChange={changehandle}>
              {data.map((op) => (
                <option value={op}>
                  {op}
                </option>
              ))}
            </datalist>
          </div>
        </div>

        <div className="formdata2 formdata2m">
          <p>Destination</p>

          <div className="searchbox">
            <input
              list="data"
              id="onewayin"
              placeholder="From"
              name="Destination"
              type={"text"}
              value={val.Destination}
              onChange={changehandle}
            />
            <datalist id="data" value={val.from} onChange={changehandle}>
              {data.map((op) => (
                <option value={op}>
                  {op}
                </option>
              ))}
            </datalist>
          </div>
        </div>
        <div className="formdata3">
          <p>Depart Date</p>
          <input
            value={val.DepartureDate}
            id="input3"
            type="date"
            name="DepartureDate"
            onChange={changehandle}
            ref={dateInputRef}
          />
        </div>

        <div className=" formdata4m">
          <p>Travellers | Class</p>
          <input
            placeholder="1 Travellers"
            list="tarveller"
            type={"text"}
            name="TotalTravellers"
            value={val.TotalTravellers}
            onChange={changehandle}
          />
          <datalist
            value={val.TotalTravellers}
            onChange={changehandle}
            id="tarveller"
          >
            {Travellers.map((ind) => (
              <option value={ind}>
                {ind}
              </option>
            ))}
          </datalist>
        </div>
        <div className="formdata5">
          <p>Class</p>
          <select
            className="select"
            onChange={changehandle}
            name="Class"
            value={val.Class}
          >
            <option value="Economy">Economy</option>
            <option value="PremiumEconomy">PremiumEconomy</option>
            <option value="Business">Business</option>
            <option value="First">First</option>
          </select>
        </div>
      </div>
      <div className="mybtnn">
        <button className="btn2" type="submit">
          Search
        </button>
      </div>
    </form>
  );
}
