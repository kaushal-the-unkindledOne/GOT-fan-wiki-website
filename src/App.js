import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Characters from './components/Characters';
import Dragons from './components/Dragons';
import Kingdoms from './components/Kingdoms';
import Details from './components/Details';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/custom.css';

const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/:id" element={<Details />} />
          <Route path="/dragons" element={<Dragons />} />
          <Route path="/dragons/:id" element={<Details />} />
          <Route path="/kingdoms" element={<Kingdoms />} />
          <Route path="/kingdoms/:id" element={<Details />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

