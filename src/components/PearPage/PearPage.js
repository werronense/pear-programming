import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from '../../data.json';  
import './PearPage.scss';

const PearPage = () => {
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
    <div className="pear-page">
      <h1>{developer.name}</h1>
      <img src={developer.imageUrl} alt={developer.name} className="pear-image" />
      <p>{developer.paragraph}</p>
    </div>
  );
};

export default PearPage;
