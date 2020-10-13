import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../src/pages/Login/login";
import Nav from "../src/components/Nav/nav";
import Footer from "../src/components/Footer/footer";
function App() {
  return (
    <Router>
      <Nav />

      <Switch>

        {/* <Route exact path="/" component={Home}/> */}
        <Route exact path="/login" component={Login} />
        {/* <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/agenda" component={Agenda}/> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
