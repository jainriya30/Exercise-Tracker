import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component.js"
import ExercisesList from "./components/ex-list.js";
import EditExercise from "./components/edit-ex.js";
import CreateExercise from "./components/create-ex.js";
import CreateUser from "./components/create-user.js";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar/>
      <br/>
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
