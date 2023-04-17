import React ,{useState,useRef} from "react";
import "../../Styles/flight.css";
import '../../Styles/search.css'


export default function Return() {
  const data = ["Jaipur", "Delhi", "Bengaluru", "Mumbai"];
  const Travellers = ["1","2","3","4","5","6"];
  const dateInputRef = useRef(null);

  
  const [val,setVal] = useState({
    from:'',
    to:'',
    DepartureDate:'',
    ReturnDate:'',
    TotalTravellers:'',
    Class:''
  })
  const [changevalue, setChangevalue] = useState("To");
  const [seconval, setSecondval] = useState("From");


  const changestates = () => {
    setChangevalue(seconval);
    setSecondval(changevalue);
  };
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
      <div className="formdata1">
        <p>Leaving From</p>
        <div className="searchbox">
          <input
            list="data"
            id="onewayin"
            placeholder="From"
            name="from"
            type={"text"}
            value={val.from} 
            onChange={changehandle}
          />
          <datalist id="data" value={val.from} onChange={changehandle}>
            {data.map((op) => (
              <option  value={op}>{op}</option>
            ))}
          </datalist>
        </div>
      </div>

      <span className="itag">
        <i class="fa-sharp fa-solid fa-arrow-right-arrow-left" onClick={changestates}></i>
      </span>
      <div className="formdata2">
        <p>Going To</p>
        <div className="searchbox">
          <input
            list="data"
            id="onewayin2"
            placeholder="To"
            name="to"
            type={"text"}
            value={val.to}
             onChange={changehandle}
          />
          <datalist id="data" value={val.to} onChange={changehandle}>
            {data.map((op) => (
              <option  value={op}>{op}</option>
            ))}
          </datalist>
        </div>
      </div>
      <div className="formdata3">
        <p>Departure</p>
        <input 
        value={val.DepartureDate} id="input3" 
        type="date"
        name="DepartureDate"
         onChange={changehandle}
         ref={dateInputRef}
        />
      </div>

      <div className=" returnformdat4">
        <p>Return</p>
        <input 
        value={val.ReturnDate} id="input4" 
        type="date"
        name="ReturnDate"
         onChange={changehandle}
         ref={dateInputRef}
        />
      </div>
      <div className="formdata5">
        <p>Travellers | Class</p>
        <input placeholder="1 Travellers" 
        list="tarveller"
          type={'text'}
          name="TotalTravellers"
          value={val.TotalTravellers}
          onChange={changehandle}

        />
         <datalist value={val.TotalTravellers} onChange={changehandle} id="tarveller" >
          {Travellers.map((ind)=>(
            <option value={ind} >{ind}</option>
          ))}
        </datalist>
      </div>
      <div className="formdata6">
        <p>Class</p>
        <select class="select" className="select" onChange={changehandle} name="Class" value={val.Class}>
          <option value="Economy">Economy</option>
          <option value="PremiumEconomy">PremiumEconomy</option>
          <option value="Business">Business</option>
          <option value="First">First</option>
        </select>
      </div>
      <div className="mybtnn">
              <button className="btn2" type="submit">
                Search
              </button>
            </div>
    </form>
  );
}
