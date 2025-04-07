import logo from './logo.svg';
import './App.css';
import Home from "../src/pages/home"
import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
// import { Router } from 'express';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </Router>
  );
}

export default App;
