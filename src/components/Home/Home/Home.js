import React from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import FeatureSection from '../FeatureSection/FeatureSection';
import Header from '../Header/Header';
import OurServices from '../OurServices/OurServices';


const Home = () => {
    return (
        <div>
             <Header></Header>
             <BusinessInfo></BusinessInfo>
             <OurServices></OurServices>
             <FeatureSection></FeatureSection>
             <AppointmentBanner></AppointmentBanner>
        </div>
    );
};

export default Home;