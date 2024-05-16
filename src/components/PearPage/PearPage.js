import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import './PearPage.scss';

const PearPage = () => {
  const { id } = useParams();
  const [developer, setDeveloper] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5050/pears`)
      .then(response => {
        const dev = response.data.find(d => d.id === id);
        setDeveloper(dev);
      })
      .catch(error => console.error("We have a trouble", error));
  }, [id]);

  if (!developer) {
    return <div>Loading...</div>;
  } 

  return (
    <div className="pear-page">
      <h1>{developer.name}</h1>
      <img src={developer.imageUrl} alt={developer.name} className="pear-image" />
      <p>{developer.paragraph}</p>
    </div>
  );
};

export default PearPage;
