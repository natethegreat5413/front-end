
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Register from "./components/Register";
import './App.css';


import PlantList from "./components/PlantsList";
function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route exact path="/Register" component={Register} />
        <Route path="/PlantsList" component={PlantList} />{/* PrivateRoute */}
       
      </div>
    </Router>
  );
}

export default App;
