import React from 'react';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
import SideBar from '../SideBar/SideBar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useEffect, useState } from 'react/cjs/react.development';

const Dashboard = () => {
    const [selectedDate, setSelectedDate] =useState(new Date());
    const [appointments, setAppointments] = useState([]);

    const handleDateChange = data =>{
        setSelectedDate(data);
    }

    useEffect(() =>{
        fetch('http://localhost:5000/appointmentByDate', {
            method: "POST",
            headers: { 'content-type':'application/json'},
            body: JSON.stringify({data: selectedDate})
        })
        .then(res => res.json())
        .then(pickData => setAppointments(pickData) )
    }, [selectedDate])

    return (
        <section>
            <div className="container-fluid row">
                <div className="col-md-2">
                  <SideBar></SideBar>
                </div>
                <div className="col-md-5">
                <Calendar
                            onChange={handleDateChange}
                            value={new Date()}
                        />
                </div>
                <div className="col-md-5">
                <AppointmentByDate appointments={appointments}></AppointmentByDate>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;