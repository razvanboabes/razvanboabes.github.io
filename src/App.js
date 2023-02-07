import React from "react";
import "./App.css";
import "./logo.png";
import  Animatie  from "./Animatie";
import  Form  from "./Form";
function App() {
  return (
    <div className="app-container">
        <div className="HideOnMobile">
          <Animatie />
        </div>
        <div className="ShowOnMobile">
          <Form />
        </div>
    </div>
  );
}

export default App;
