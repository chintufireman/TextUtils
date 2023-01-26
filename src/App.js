import "./App.css";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import { Routes } from "react-router";
import { BrowserRouter as Router, Route, BrowserRouter } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light"); //whether dark mode enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#071017";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.background = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      <BrowserRouter>
        <NavBar
          title={"TextUtils"}
          aboutText="About TextUtils"
          mode={mode}
          toggleMode={toggleMode}
        />
        {/* here NavBar is actually component it is actually like 
      a empty form which we are using and title="Textutils"
      is the props which we want to pass the NavBar functions
      of in simple terms it is properties or parameter of 
      function */}
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={ 
               <TextForm
               showAlert={showAlert}
               heading="Try TextUtils Word Counter, Character Counter"
               mode={mode}
             />
            } />
           
            <Route exact path="/about" element={ <About  mode={mode} />} />
            {/* if you dont use exact the example see below
              1. /user -> component1
              2. /user/about -> component2 then without using exact it will 
              direct you to the first component because react does the partial matching
            */}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
