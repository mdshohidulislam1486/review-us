import React from 'react';
import img from '../../images/coursesBanner.jpg'
import Course from '../CourseCard/Course';
import useProducts from '../Hooks/CoursesH';
import './Course.css'

const Courses = () => {
    const [courses] = useProducts();
    
    console.log(courses)
    return (
        <>
        <div className='course-banner'>
                <div  className='mx-100'><img src={img} alt="" /></div>
        </div>
        <div className='row justify-content-center align-items-center mx-auto text-center bg-light'>
            <div className='col col-6 col-md-6'>
            <div class="card text-white bg-dark mb-3" >
                <div class="card-header">Header</div>
                <div class="card-body">
                    <h5 class="card-title">Dark card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
                <div class="card text-white bg-dark mb-3" >
                <div class="card-header">Header</div>
                <div class="card-body">
                    <h5 class="card-title">Dark card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
                <div class="card text-white bg-dark mb-3" >
                <div class="card-header">Header</div>
                <div class="card-body">
                    <h5 class="card-title">Dark card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
                <div class="card text-white bg-dark mb-3" >
                <div class="card-header">Header</div>
                <div class="card-body">
                    <h5 class="card-title">Dark card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
                <div class="card text-white bg-dark mb-3" >
                <div class="card-header">Header</div>
                <div class="card-body">
                    <h5 class="card-title">Dark card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
                <div class="card text-white bg-dark mb-3" >
                <div class="card-header">Header</div>
                <div class="card-body">
                    <h5 class="card-title">Dark card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
                <div class="card text-white bg-dark mb-3" >
                <div class="card-header">Header</div>
                <div class="card-body">
                    <h5 class="card-title">Dark card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
                
            </div>
            <div className='col col-12 col-md-6'>
               <div className='row' >
                {
                        courses.map(course=><Course
                        key={course.key}
                        course={course}
                        ></Course> )
                    }
               </div>
            </div>
        </div>
        </>
    );
};

export default Courses;