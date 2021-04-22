import React from 'react';
import css from './ServiceCard.css';

const ServiceCard = ({serviceName}) => {
    return (
        <div className="col-md-4 text-center mt-5">
            <img className="custom-icon" src={serviceName.icon} alt=""/>
           <h3>{serviceName.title}</h3>
           <p>{serviceName.description}</p>      
        </div>
    );
};

export default ServiceCard;