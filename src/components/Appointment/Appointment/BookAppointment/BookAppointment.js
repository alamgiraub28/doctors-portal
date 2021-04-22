import React from 'react';
import BookingCard from '../BookingCard/BookingCard';
const bookingData = [
    {
        "_id": "6080094cb079e019cee6d690",
        "id": 1,
        "subject": "Teeth orthodontics",
        "visitionHour": "3.00PM-10.00PM",
        "totalSpace": 10
      },
      {
        "_id": "6080094c47fa9be82faceee5",
        "id": 2,
        "subject": "Cosmetic Dentistry",
        "visitionHour": "3.00PM-10.00PM",
        "totalSpace": 10
      },
      {
        "_id": "6080094c21f675cecee91bd8",
        "id": 3,
        "subject": "Teeth Cleaning",
        "visitionHour": "3.00PM-10.00PM",
        "totalSpace": 10
      },
      {
        "_id": "6080094c64f0cb64b792df99",
        "id": 4,
        "subject": "Cavity Protection",
        "visitionHour": "3.00PM-10.00PM",
        "totalSpace": 10
      },
      {
        "_id": "6080094cbae5a251f513f1fd",
        "id": 5,
        "subject": "Teeth Whitening",
        "visitionHour": "3.00PM-10.00PM",
        "totalSpace": 10
      },
      {
        "_id": "6080094c24758bdbc1ec0a81",
        "id": 6,
        "subject": "Route Canel",
        "visitionHour": "3.00PM-10.00PM",
        "totalSpace": 10
      }
]

const BookAppointment = ({selectedDate}) => {
    return (
        <section>
            <h2 className ="text-center text-customColor">Available Appointments on {selectedDate.toDateString()}</h2>
            <div className="row">
                {
                    bookingData.map(booking => <BookingCard booking={booking} date={selectedDate} key={booking.id}></BookingCard>)
                }
            </div>
        </section>
    );
};

export default BookAppointment;