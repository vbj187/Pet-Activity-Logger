import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import ActivitiesList from "./components/ActivitiesList";
import EditActivity from "./components/EditActivity";
import CreateActivity from "./components/CreateActivity";
import CreatePet from "./components/CreatePet";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route path="/" exact component={ActivitiesList} />
        <Route path="/edit/:id" exact component={EditActivity} />
        <Route path="/create" exact component={CreateActivity} />
        <Route path="/user" exact component={CreatePet} />
      </div>
    </Router>
  );
}

export default App;
