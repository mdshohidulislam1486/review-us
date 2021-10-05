import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './WhyChooseUs.css'

const WhyChooseUs = (props) => {
    const {reson,description } = props.whyUs
    return (
        <div className='my-grid mx-4'>
            <h2 className='text-light'>{reson}</h2>
            <p className='text-warning'>{description}</p>
            <Button variant='warning'><Link className='about-btn' to='/about'>Contact us</Link></Button>
        </div>
    );
};

export default WhyChooseUs;