import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

const BusinessInfoData = [
    {
        title: 'Opening Hours',
        description: 'We are open 7 days',
        icon: faClock,
        background: 'primary'
    },

    {
        title: 'Visit Our Location',
        description: 'Brooklyn, NY10036, United States',
        icon: faMapMarkerAlt,
        background: 'dark'
    },
    {
        title: 'Contact Us Now',
        description: '+8801795333022',
        icon: faPhoneAlt,
        background: 'primary'
    }
]
const BusinessInfo = () => {
    


  
    return (
        <section className="row w-75 m-auto text-center">
            {
                BusinessInfoData.map(info => <InfoCard info ={info}></InfoCard>)
            }
        </section>
    );
};

export default BusinessInfo;