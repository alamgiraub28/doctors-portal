import React from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root');

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentName, date }) => {
  const { register, handleSubmit, formState: { errors }, } = useForm();
  const onSubmit = (data) => {
    data.service = appointmentName;
    data.date = date;
    data.created = new Date();
    fetch('http://localhost:5000/addAppointment', {
      method: "POST",
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(dataInfo =>{
      if(dataInfo){
        closeModal();
        alert('Appointment Created successfully')
      }
      else{
        alert('operation fail')
      }
    })

    
  }

  return (
    <div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >

        <h2 className="text-center text-customColor fw-bold">{appointmentName}</h2>
        <p className="text-center">On {date.toDateString()}</p>
        <form className="p-5 text-center" onSubmit={handleSubmit(onSubmit)}>
          <input className="mb-3" {...register('firstName')} placeholder="First Name" /> {/* register an input */}
          <input className="mb-3" {...register('lastName', { required: true })} placeholder="Last Name" /> {/* register an input */}
          {errors.lastName && <p>Last name is required.</p>} <br></br>
          <input className="mb-3" type="age" {...register('age', { pattern: /\d+/ })} placeholder="Age" /> {/* register an input */}
          {errors.age && <p>Please enter number for age.</p>}
          <input className="mb-3" type="email" {...register('email')} placeholder="Email" />
          {errors.email && <p>Please enter write Email.</p>}<br></br>
          <input className="mb-3" type="number" {...register('number')} placeholder="Mobile Number" /> {/* register an input */}
          <input className="mb-3" type="text" {...register('date')} placeholder="Any Emargency Note" />{/* register an input */}
          <br />
          <input className="btn-custom btn mt-5 text-right" type="submit" value="Submit" />
        </form>
      </Modal>
    </div>
  );
};

export default AppointmentForm;