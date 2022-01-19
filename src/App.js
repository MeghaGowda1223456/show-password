// import logo from './logo.svg';
import "./App.css";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Contact from "./components/Contact";
import ShowPassword from "./components/ShowPassword";


function App() {
  return (
    // <Router>
    //   <div className="App">
    //     <div style={{ display: "flex", justifyContent: "space-evenly" }}>
    //       <Link to="/">App</Link>
    //       <Link to="/home">Home</Link>
    //       <Link to="/contact-us">Contactus</Link>
    //       <Link to="/about-us">AboutUs</Link>
    //     </div>
    //     <Route
    //       path="/"
    //       exact={true}
    //       render={(props) => {
    //         return "App component"; ///to render the plain text
    //       }}
    //     />
    //     <Route path="/home" component={Home} />
    //     <Route exact path="/contact-us" component={ContactUs} />
    //     <Route exact={true} path="/contact-us" component={Contact} />
    //     <Route  path="/contact-us/contact/" component={Contact} />

    //     <Route path="/aboutus" component={AboutUs} />
    //     {/* <Home />
    //     <ContactUs />
    //     <AboutUs /> */}
    //   </div>
    // </Router>
    <ShowPassword/>
  );
}

export default App;
