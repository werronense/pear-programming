import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PearCard from './Commponent/PearCard/PearCard';
import PearPage from './Commponent/PearPage/PearPage';
//import data from './data.json';  
import './App.css';
import axios from 'axios';

const App = () => {
  const [pears, setPears] = useState([]);

  useEffect(() => {
    //setDevelopers(data);  
    axios.get('http://localhost:5050/pears')
      .then(res => {
        setPears(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);


  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route exact path="/" element={
            <div className='card-container'>
              {pears.map(pear => (        
                <Link to={`/pears/${pear.name.split(' ')[0]}`} key={pear.name.split(' ')[0]}>
                  <PearCard developer={pear} />
                </Link>
              ))}
            </div>
          }/>
          <Route path="/pears/:name" element={<PearPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
