import "./style/App.css";
import React from 'react';

// importing react-router-dom components
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

//importing components pages
import Home from "./pages/Home";

function App() {
  return (
    <Router> 
    <Routes>
      <Route path="/"  exact element={<Home />} />
    </Routes>
  </Router>
  );
}

export default App;
