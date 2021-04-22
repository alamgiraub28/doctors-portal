import React from 'react';
import fluorideImg from '../../../img/fluoride treatment.png'
import cavityImg from '../../../img/cavity-filling.png'
import teethwhiteningImg from '../../../img/teath whitening.png'
import ServiceCard from '../ServiceCard/ServiceCard';


const ourServicesDetails = [
    {
        icon: fluorideImg,
        title: "Fluoride Treatment",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi quidem, repudiandae incidunt et consequuntur"
    },
    {
        icon: cavityImg,
        title: "Cavity Filling",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi quidem, repudiandae incidunt et consequuntur"
    },
    {
        icon: teethwhiteningImg,
        title: "Teath Whiteining",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi quidem, repudiandae incidunt et consequuntur"
    },

]

const OurServices = () => {

    return (

        <section className="row container m-auto">
            <h5 className="text-center mt-5 text-customColor">OUR SERVICES</h5>
            <h2 className="text-center fw-bold">Services We Provide</h2>
            {
            ourServicesDetails.map(service => <ServiceCard serviceName ={service}></ServiceCard>)
            }
        </section>
    );
};

export default OurServices;