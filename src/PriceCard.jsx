// src/PriceCard.js
import React from 'react';
import './PriceCard.css';

const PriceCard = ({ plan }) => {
    return (
        <div className="price-card">
            <h3>{plan.name}</h3>
            <h1>{plan.price}</h1>
            <ul>
                {plan.features.map((feature, index) => (
                    <li key={index} className={feature.included ? '' : 'excluded'}>
                        {feature.name}
                    </li>
                ))}
            </ul>
            <button className="button">BUTTON</button>
        </div>
    );
};

export default PriceCard;
