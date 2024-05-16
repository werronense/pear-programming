import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PearCard from './Commponent/PearCard/PearCard';
import PearPage from './Commponent/PearPage/PearPage';
import axios from 'axios';
import './App.css';

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
          <Route exact path="/" element={
            <div className='card-container'>
              {developers.map(dev => (
                <Link to={`/developer/${dev.id}`} key={dev.id}>
                  <PearCard developer={dev} />
                </Link>
              ))}
            </div>
          }/>
          <Route path="/developer/:id" element={<PearPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
