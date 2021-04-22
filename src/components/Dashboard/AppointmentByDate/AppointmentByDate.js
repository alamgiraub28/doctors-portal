import React from 'react';
import AppointmentList from '../../Appointment/Appointment/AppointmentList/AppointmentList';

const AppointmentByDate = ({appointments}) => {
    console.log(appointments);
    return (
        <div>
           <h2 className="text-customColor text-center">Appointment List</h2>
            {
                appointments.length?
                <AppointmentList appointments={appointments}></AppointmentList>
                :
                <div className="p-5">
                    <h4 className="lead text-center"> No Appointments Available</h4>
                </div>
            }
        </div>
    );
};

export default AppointmentByDate;