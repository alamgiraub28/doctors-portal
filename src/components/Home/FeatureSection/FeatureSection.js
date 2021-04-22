import React from 'react';
import featureImg from '../../../img/detal-care-pic.png';

const FeatureSection = () => {
    return (
        <div class="container px-4 mt-5">
  <div class="row gx-3 d-flex justify-content-center align-items-center">
    <div class="col">
     <div class="p-3"><img className="w-100" src={featureImg} alt=""/></div>
    </div>
    <div class="col">
    <div class="p-3">
        <h2 className="fw-bold mb-3">Exceptional Dental <br/> Care, on your Terms</h2>
        <p className="lh-lg">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime delectus ratione et dolores quia numquam. Quis quaerat voluptatem fugiat veritatis at repudiandae dicta delectus, cum a ullam eius, ea aperiam quisquam minima eum aut placeat doloremque? Cumque perferendis autem repellat saepe, possimus sit culpa nobis odio excepturi ratione nemo ipsa. ea aperiam quisquam minima eum aut placeat doloremque? Cumque perferendis autem repellat saepe, possimus sit culpa nobis odio excepturi ratione nemo ipsa.
        </p>
        <button className="btn btn-custom">Learn More</button>
    </div>
    </div>
  </div>
</div>
    );
};

export default FeatureSection;