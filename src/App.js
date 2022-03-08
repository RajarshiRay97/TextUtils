import './App.css';
import Navbar from './Components/Navbar';
import TextForm from "./Components/TextForm";
import React, {useState} from 'react';
import Alert from './Components/Alert';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


// function based component
function App() {
  const [navStyle, setNavStyle] = useState({
    navTheme: "navbar-light",
    background: "bg-light"
  });

  const [mainBGClass, setMainBGClass] = useState("lightMain");

  const [containerStyle, setContainerStyle] = useState("lightContainerStyle");

  const [alert, setAlert] = useState(null);

  const [accordionStyle, setAccordionStyle] = useState({
    classForAI: "lightAI",
    classForAC: "lightAC"
  });

  // function to show alert message
  const showAlert = (message, type, classTitle) => {
    setAlert({
      msg: message,
      type: type,
      displayClass: classTitle
    });
  }

  // function to close the alert
  const close = ()=>{
    setAlert({
      msg: "",
      type: "",
      displayClass: "closeMessage"
    });
  }

  // function to change the application theme
  const changeTheme = ()=>{
    if (navStyle.background === "bg-light"){
      document.body.style.backgroundColor = "#151a33";
      setNavStyle({
        navTheme: "navbar-dark",
        background: "bg-darkBlue"
      });
      setMainBGClass("darkMain");
      setContainerStyle("darkContainerStyle");
      showAlert("Dark mode has been enabled.","success", "showMessage");
      setTimeout(()=>{
        close();
      },5000);
      setAccordionStyle({
        classForAI: "darkAI",
        classForAC: "darkAC"
      });
    }
    else{
      document.body.style.backgroundColor = "white";
      setNavStyle({
        navTheme: "navbar-light",
        background: "bg-light"
      });
      setMainBGClass("lightMain");
      setContainerStyle("lightContainerStyle");
      showAlert("Light mode has been enabled.","success","showMessage");
      setTimeout(()=>{
        close();
      },5000);
      setAccordionStyle({
        classForAI: "lightAI",
        classForAC: "lightAC"
      });
    }
  }


  return (
    <>
      <Router>
      <Navbar brandName="TextUtils" aboutText="About Us" navbarStyle={navStyle} changable={changeTheme} />
      <Alert alertObj={alert} closeAlert={close}/>
      <div className={mainBGClass} style={{padding: "40px 0px"}}>
        <Routes>
          <Route exact path="/" element={<TextForm heading="Enter Text To Analyze" customizeClass={containerStyle} alert={showAlert} closeAlert={close}/>} />
          <Route exact path="/about" element={<About customizeClass={containerStyle} classAccordion={accordionStyle}/>} />
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
