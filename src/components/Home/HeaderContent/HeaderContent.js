import React from 'react';
import contentIamge from '../../../img/header-content-pic.png';
import css from './HeaderContent.css';

const HeaderContent = () => {
    return (
        <main className="custom-content">
            <div class="row custom-row-height">
                <div className="d-flex align-items-center justify-content-between">
                <div class="col-md-6 left-content">
                <h1 className="fw-bold pb-3">Your New Smail <br/> Starts Here</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ex hic nemo repellat incidunt iusto totam! Beatae ad nam at! repellat incidunt iusto totam!</p>
                <button className="btn btn-custom">GET APPOINTMENT</button>
                
                </div>
                <div class="col-md-6">
                    <img className="w-100 " src={contentIamge} alt=""/>
                </div>
                </div>
            </div>
        </main>
    );
};

export default HeaderContent;