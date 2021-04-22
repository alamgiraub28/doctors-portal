import React from 'react';
import { useState } from 'react/cjs/react.development';
import AppointmentForm from '../AppointmentForm/AppointmentForm';


const BookingCard = ({booking, date}) => {
    const [modalIsOpen, setIsOpen] =useState(false);
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal(){
      setIsOpen(false);
    }
    return (
        <div className="col-md-4 mb-4">
            <div className="card p-3 shadow">
                <div className="card-body text-center">
                    <h5 className="card-title text-customColor">{booking.subject}</h5>
                    <h6 className="card-title text-customColor">{booking.visitionHour}</h6>
                    <p className="card-title text-customColor">Space Available: {booking.totalSpace}</p>
                    <button onClick={openModal} className="btn btn-custom">Booking Appointment</button>
                    <AppointmentForm modalIsOpen={modalIsOpen} date={date} appointmentName={booking.subject} closeModal={closeModal}></AppointmentForm>
                </div>
            </div>
            
        </div>
    );
};

export default BookingCard;