import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PearPage from './components/PearPage/PearPage';
import MainPage from './components/MainPage/MainPage';
import data from './data.json';  
import './App.scss';

const App = () => {
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    setDevelopers(data);  
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
