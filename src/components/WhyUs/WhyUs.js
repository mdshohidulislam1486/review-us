import React from 'react';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import './WhyUs.css'

const WhyUs = () => {
    const whyChooseUs= [
        {reson:'Save money ', description:'We give the highest quality at a competitive price in the market.'}, 
        {reson:' Special care ', description:'We have a care center where weak students will be supervised by our care teacher'}, 
        {reson:'Experienced teacher ', description:'Most of our teachers are highly experienced and practice with the most recent materials from the previous exam'}, 
        {reson:' Free registration', description:'We help our students to register for all the courses we offer such as IELTS, GRE, GMAT, etc.'}, 
        {reson:'Lifetime discount ', description:'If you enroll in any of our courses, we will provide you with a lifetime 40% discount for our all other courses.'}, 
        {reson:'No hidden cost ', description:'We don’t charge you anything except our course. Fee, once you enroll in a course you will get all the relevant notes and materials for free. '}, 
        {reson:'Free Mock test  ', description:'We have 10, 5,  5 free mock tests for, IELTS, GRE, and GMAT consecutively, in a real test environment.'}, 
        {reson:' Library facilities ', description:'We have a big library with 40-50 students sitting facilities. Our library is open from 10:00 am to 6:00 pm '}, 
        {reson:'Free registration', description:'We help our students to register for all the courses we offer such as IELTS, GRE, GMAT, etc.'}
    ]
    return (
        <div className='bg-image'>
            <div className='d-flex flex-wrap container align-items-center justify-content-center text-center '>
            {
               whyChooseUs.map(whyUs=> <WhyChooseUs whyUs={whyUs}></WhyChooseUs>) 
            }
        </div>
        </div>
    );
};

export default WhyUs;