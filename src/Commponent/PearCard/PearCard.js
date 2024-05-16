import React from 'react';
import './PearCard.scss';

const PearCard = ({ developer }) => {
    return (
        <div className='pear-card'>
            <img src={developer.image} alt={developer.name} className="pear-image" />
            <h2>{developer.name}</h2>
        </div>
    );
};

export default PearCard;
