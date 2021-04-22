import React from 'react';
import { useState } from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import AppointmentHeader from './AppointmentHeader/AppointmentHeader';
import BookAppointment from './BookAppointment/BookAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] =useState(new Date());

    const handleDateChange = data =>{
        setSelectedDate(data);
    }
    return (
        <div>
      <NavBar></NavBar>
      <AppointmentHeader handleDateChange ={handleDateChange}></AppointmentHeader>
      <BookAppointment selectedDate={selectedDate}></BookAppointment>
        </div>
    );
};

export default Appointment;