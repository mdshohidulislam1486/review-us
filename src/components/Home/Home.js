import React, { useEffect, useState } from 'react';
import './Home.css'
import logo from '../../images/favicon.png'
import gre from '../../images/gre.jpg'
import gmat from '../../images/gmat.jpg'
import toefl from '../../images/toefl.png'
import ielts from '../../images/ielts.png'
import sat from '../../images/sat.png'
import spoken from '../../images/spoken.png'
import { Button, Card, Col, Row } from 'react-bootstrap';
import HomeCard from '../HomeCard/HomeCard';



const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch('./courses.JSON')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])
    return (
    <>
        <div className ='home-bg' >
            <div className='home-logo'><img src={logo} alt="" /><p>PIE Education</p></div>
            <div className='text-center'>
                <h1 className='text-light'>Highly organized <span className='text-warning'> with excellent course materials</span></h1>
                <h1 className='text-light'>-- For students to reach their higher education goal</h1>

                <div className='d-flex course-img justify-content-center m-5'>
                    <img src={gre} alt="" />
                    <img src={gmat} alt="" />
                    <img src={ielts} alt="" />
                    <img src={spoken} alt="" />
                    <img src={sat} alt="" />
                    <img src={toefl} alt="" />
                </div>
                <div>
                    <Button className='mb-5 p-3 btn-rounded fs-4 ' variant='warning'>Enroll Now</Button>
                </div>
            </div>
        </div>
      <div className='container m-5 justify-content-center align-items-center'>
          <h1 className='text-warning text-center text-uppercase mb-5'>Our Features courses </h1>
        <Row xs={1} md={4} className="g-4 ">
                {
                    courses.map(course =><HomeCard 
                        key={course.key}
                        course={course}></HomeCard>).slice(0, 4)
                }
            </Row>
      </div>
     </>   
    );
};

export default Home;
