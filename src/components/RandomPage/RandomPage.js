import './RandomPage.scss';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from '../../data.json'; 
import PearCard from '../PearCard/PearCard'; 

const RandomPage = () => {
  const { id } = useParams();
  const [developer, setDeveloper] = useState(null);

  useEffect(() => {
    const dev = data.find(d => d.id === parseInt(id));
    setDeveloper(dev);
  }, [id]);

  if (!developer) {
    return <div>Loading...</div>;
  }

  return (
    <div className="random-page">
        <PearCard developer={developer}/>
        <PearCard developer={developer}/>
    </div>
  );
};

export default RandomPage;

