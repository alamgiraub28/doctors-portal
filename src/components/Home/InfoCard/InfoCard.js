import React from 'react';
import css from './infoCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InfoCard = ({ info }) => {
    return (
        <div className="col-md-4 cardContain">
            <div className={`d-flex py-3 justify-content-center align-items-center info-${info.background}`}>
                <div  className="text-white infoIcon"><FontAwesomeIcon icon={info.icon}/></div>
                <div className="m-3 text-white text-start">
                    <h4>{info.title}</h4>
                    <small>{info.description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;