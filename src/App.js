
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import './Styles/nav.css'
import Nav from './Components/Navbar/Nav';
import Flight from './Components/Flights/Flight';
import Footer from './Components/Footer/footer'


function App() {
  return (
   <>
     <div className="App">
        <Nav/>
   
        <Flight/>
  
    </div>
    <div>
      <Footer/>
    </div>
    {/* <Searchbox/> */}
   </>

  );
}



{
  /*
  
  <div class="carousel-item active">
            <img src={pic1} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={pic2} class="d-block w-100" alt="..." />
          </div>*/
}
export default App;
