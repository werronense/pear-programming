import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PearPage from './components/PearPage/PearPage';
import MainPage from './components/MainPage/MainPage';
import data from './data.json';  
import './App.scss';
import axios from 'axios';

const App = () => {
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5050/pears')
      .then(response => setDevelopers(response.data))
      .catch(error => console.error("We have a trouble", error));
  }, []);

  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route exact path="/" element={<MainPage developers={developers} />}/>
          <Route path="/developer/:id" element={<PearPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
