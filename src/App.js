import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import { plantcontext } from "./contexts/plantcontext"
import PrivateRoute from "./components/PrivateRoute";

import PlantsList from "./components/PlantsList"
import Addplant from "./components/Addplant"

import Login from "./components/Login";
import Register from "./components/Register";
import './App.css';
import { axiosWithAuth } from "./components/axiosWithAuth";


function App() {

  const [plants, setplants] = useState([]);



  useEffect(() => {
    axiosWithAuth()
    .get("/plants").then((res) => {
      console.log(res)
      setplants(res.data);
    });
  }, []);

  const addplant = newplant => {
 
    axiosWithAuth()
      .post("/plants", newplant)
      .then(res => {
        console.log(res);
        setplants([...plants, newplant]);
      })
      .catch(err => {
        console.error(err);
      });
       
  };  
  const deleteplant = (plants) => {

    axiosWithAuth().delete(`/plants/${plants.id}`);
  };

  
  return (
    <plantcontext.Provider value={{ addplant, plants }}>
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route exact path="/Register" component={Register} />
        <PrivateRoute path="/PlantsList" component={PlantsList} />{/* PrivateRoute */}
        <PrivateRoute path="/Addplant" component={Addplant} />{/* PrivateRoute */}
      </div>
    </Router>
    </plantcontext.Provider>
  );
}

export default App;
