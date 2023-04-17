import React ,{useState} from "react";
import "../../Styles/flight.css";
import '../../Styles/search.css'

export default function Aircal() {
  const data = ["Jaipur", "Delhi", "Bengaluru", "Mumbai"];
 
  const [val,setVal] = useState({
    LeavingFrom:'',
    LeavingTo:'',
    DepartureYear:'',
    DepartureMonth:'',
   
  })

 

  const changehandle=(e)=>{
    let name = e.target.name;
    let value = e.target.value
    setVal({...val, [name]:value})
  }
  function Handlesubmit(e){
    e.preventDefault()
    console.log(val)
    // setVal("")
  }
  return (
    <form onSubmit={Handlesubmit}>
    <div className="divair">
      <div className="formdata1">
        <p>Leaving From</p>
       
        <div className="searchbox">
          <input
            list="data"
            id="onewayin"
            placeholder="  From"
            name="LeavingFrom"
            type={"text"}
            value={val.LeavingFrom} 
            onChange={changehandle}
          />
          <datalist id="data" value={val.LeavingFrom} onChange={changehandle}>
            {data.map((op) => (
              <option  value={op}>{op}</option>
            ))}
          </datalist>
        </div>
      </div>

      <span className="itag">
        <i class="fa-sharp fa-solid fa-arrow-right-arrow-left"
        ></i>
      </span>
      <div className="formdata2">
        <p>Going To</p>
       
        <div className="searchbox">
          <input
            list="data"
            id="onewayin2"
            placeholder=" To"
            name="LeavingTo"
            type={"text"}
            value={val.LeavingTo} 
            onChange={changehandle}
          />
          <datalist id="data" value={val.LeavingTo} onChange={changehandle}>
            {data.map((op) => (
              <option  value={op}>{op}</option>
            ))}
          </datalist>
        </div>
      </div>

      <div className=" formdatair4">
        <p>Departure Month</p>
        <select className="select"
            onChange={changehandle}
            name="DepartureMonth"
            value={val.DepartureMonth}>
          <option value="March">March</option>
          <option value="Jan">Jan</option>
          <option value="Feb">Feb</option>
          <option value="March">March</option>
          {/* <option value="3">March</option> */}
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
      </div>
      <div className="formdata5">
        <p>Departure Year</p>
        <select className="select2" 
          
            onChange={changehandle}
            name="DepartureYear"
            value={val.DepartureYear}>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
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
