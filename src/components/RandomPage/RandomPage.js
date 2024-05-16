import './RandomPage.scss';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
<<<<<<< HEAD:src/Commponent/PearPage/PearPage.js
// import data from '../../data.json';  
import './PearPage.scss';
import axios from 'axios';

const PearPage = () => {
  const { name } = useParams();
  const [pear , setPear] = useState(null);
  
=======
import data from '../../data.json'; 
import PearCard from '../PearCard/PearCard'; 

const RandomPage = () => {
  const { id } = useParams();
  const [developer, setDeveloper] = useState(null);
>>>>>>> develop:src/components/RandomPage/RandomPage.js

  useEffect(() => {
    axios.get(`http://localhost:5050/pears/${name}`)
    .then(response => {
      setPear(response.data);
      console.log(response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
   
  }, [name]);

  if (!pear) {
    return <div>Loading...</div>;
  }

  const randomPear = pear[Math.floor(Math.random() * pear.length)];

  return (
<<<<<<< HEAD:src/Commponent/PearPage/PearPage.js
    <div className="pear-page">
      <div key={randomPear.id}>
        <h1>{randomPear.name}</h1>
        <img src={randomPear.imageURL} alt={randomPear.name} className="pear-image" />
        <p>{randomPear.paragraph}</p>
      </div>
=======
    <div className="random-page">
        <PearCard developer={developer}/>
        <PearCard developer={developer}/>
>>>>>>> develop:src/components/RandomPage/RandomPage.js
    </div>
  );
};

export default RandomPage;

