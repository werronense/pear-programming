import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import data from '../../data.json';  
import './PearPage.scss';
import axios from 'axios';

const PearPage = () => {
  const { name } = useParams();
  const [pear , setPear] = useState(null);
  const pear1 = pear[0]

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

  return (
    <div className="pear-page">
      <h1>{pear1.name}</h1>
      <img src={pear1.imageURL} alt={pear1.name} className="pear-image" />
      <p>{pear1.paragraph}</p>
    </div>
  );
};

export default PearPage;
