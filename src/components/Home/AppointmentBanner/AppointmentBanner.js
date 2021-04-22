import React from 'react';
import css from './AppointmentBanner.css';
import doctorImg from '../../../img/doctor-pic.png';
const AppointmentBanner = () => {
    return (
        <div className="container custom-banner-g d-flex justify-content-center align-items-center mt-5">
            <div className="col-md-4"><img className=" doctorImg" src={doctorImg} alt=""/></div>
            <div className="col-md-8">
                <h4 className="text-customColor">APPOINTMENT</h4>
                <h1 className="text-light">Make an appointment <br/> Today</h1>
                <p className="text-light mt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere dolorem, voluptas harum quidem quis similique?</p>
                <button className="btn btn-custom mt-3">Book Appointment</button>
            </div>
        </div>
    );
};

export default AppointmentBanner;