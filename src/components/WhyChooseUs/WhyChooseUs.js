import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './WhyChooseUs.css'

const WhyChooseUs = (props) => {
    const {reson,description } = props.whyUs
    return (
        <div className='my-grid mx-4 mb-5'>
            <h5 className='text-light'>{reson}</h5>
            <p className='text-warning'>{description}</p>
            <Button variant='warning'><Link className='about-btn' to='/about'>Contact us</Link></Button>
        </div>
    );
};

export default WhyChooseUs;