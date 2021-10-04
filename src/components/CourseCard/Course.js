import React from 'react';
import { Button } from 'react-bootstrap';

const Course = (props) => {
    const {img, description, name, price} =props.course 
    return (
        
        <div className='col col-12 col-md-6 course-img'>
            <img src={img} alt="" />
            <h3 className='text-dark'>{name}</h3>
            <div><small className='text-warning'>Course fee: {price} BDT</small></div>
            <div><p className='text-light'>{description}</p></div>
            <Button variant='warning'><small>Book Now</small></Button>
        </div>
      
    );
};
export default Course;