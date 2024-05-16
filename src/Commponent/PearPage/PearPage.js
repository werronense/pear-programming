import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import data from '../../data.json';  
import './PearPage.scss';
import axios from 'axios';

const PearPage = () => {
  const { name } = useParams();
  const [pear , setPear] = useState(null);
  

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
    <div className="pear-page">
      <div key={randomPear.id}>
        <h1>{randomPear.name}</h1>
        <img src={randomPear.imageURL} alt={randomPear.name} className="pear-image" />
        <p>{randomPear.paragraph}</p>
      </div>
    </div>
  );
};

export default PearPage;
