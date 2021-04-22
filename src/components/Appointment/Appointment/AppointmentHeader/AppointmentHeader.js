import React from 'react';
import contentIamge from '../../../../img/header-content-pic.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const AppointmentHeader = ({handleDateChange}) => {
    
    return (
        <main className="custom-content">
            <div class="row custom-row-height">
                <div className="d-flex align-items-center justify-content-between">
                    <div class="col-md-6 left-content">
                        <h1 className="fw-bold pb-3">Appointment</h1>
                        <Calendar
                            onChange={handleDateChange}
                            value={new Date()}
                        />
                    </div>
                    <div class="col-md-6">
                        <img className="w-100 " src={contentIamge} alt="" />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AppointmentHeader;