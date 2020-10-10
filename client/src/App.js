import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Login from "../src/pages/Login/login"
function App() {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/" component={Home}/> */}
        <Route exact path="/login" component={Login}/>
        {/* <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/agenda" component={Agenda}/> */}
      </Switch>
    </Router>
  );
}

export default App;
