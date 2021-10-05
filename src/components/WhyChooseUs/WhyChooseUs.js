import React from 'react';
import './WhyChooseUs.css'

const WhyChooseUs = (props) => {
    const {reson,description } = props.whyUs
    return (
        <div className='my-grid mx-4'>
            <h2 className='text-light'>{reson}</h2>
            <p className='text-warning'>{description}</p>
        </div>
    );
};

export default WhyChooseUs;