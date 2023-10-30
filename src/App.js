import Navbar from "./Navbar";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Footer from "./Footer";
import Home from "./Home";
import Home1 from "./Home1";
import './App.css';


function App() {
  return(
  
    <div>
      <Navbar/>
      <h3>Welcome</h3>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
