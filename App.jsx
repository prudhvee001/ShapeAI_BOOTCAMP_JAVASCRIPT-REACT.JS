import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App() {
  var currYear = new Date().getFullYear();

  return (
  <div>
    
    <Header/>
    <Footer/>
    <Note/>
    <Note/>
    
    
  </div> 
  );
}

export default App;