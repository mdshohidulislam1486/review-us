import React from 'react';
import img from '../../images/coursesBanner.jpg'
import Course from '../CourseCard/Course';
import useProducts from '../Hooks/CoursesH';
import './Course.css'

const Courses = () => {
    const [courses] = useProducts();
    return (
        <>
        <div className='course-banner'>
                <div  className='mx-100'><img src={img} alt="" /></div>
        </div>
        <div className='row justify-content-center align-items-center mx-auto text-center bg-light'>
            <div className='col col-6 col-md-6'>
            <div className="card text-white bg-dark mb-3" >
                <div className="card-header text-warning"> IELTS Regular </div>
                <div className="card-body">
                    <h5 className="card-title">15% discount for first 20 Students </h5>
                    <p className="card-text">New regular batch enrollment will start from 15 October 2021. Last date for enrollment 30 October 2021 </p>
                </div>
                </div>
                <div className="card text-white bg-dark mb-3" >
                <div className="card-header  text-warning ">IELTS crash course </div>
                <div className="card-body">
                    <h5 className="card-title">10% flat discount for all new students</h5>
                    <p className="card-text">The crash course will start on 10 October 2021. The last date for enrollment is 20 October 2021. </p>
                </div>
                </div>
                <div className="card text-white bg-dark mb-3" >
                <div className="card-header  text-warning">GMAT</div>
                <div className="card-body">
                    <h5 className="card-title">50% off for the previous student</h5>
                    <p className="card-text">Our upcoming GMAT className will start on 7 October 2021. </p>
                </div>
                </div>
                <div className="card text-white bg-dark mb-3" >
                <div className="card-header  text-warning">GRE </div>
                <div className="card-body">
                    <h5 className="card-title">10% flat discount for all regular students</h5>
                    <p className="card-text">The next GRE regular base will start from 15 October, Last date of enrollment is 14 October 2021. </p>
                </div>
                </div>
                <div className="card text-white bg-dark mb-3" >
                <div className="card-header  text-warning"> TOEFL </div>
                <div className="card-body">
                    <h5 className="card-title">5% discount for all HSC candidates </h5>
                    <p className="card-text">Regular TOEFL  className will start from 10 October, we have 9 seats available for our next batch </p>
                </div>
                </div>
                <div className="card text-white bg-dark mb-3" >
                <div className="card-header  text-warning">Spoken English </div>
                <div className="card-body">
                    <h5 className="card-title">No discount except previous students </h5>
                    <p className="card-text  ">Every month we have two spoken courses available, First and Fifteen of the month's new courses start </p>
                </div>
                </div>
                <div className="card text-white bg-dark mb-3" >
                <div className="card-header  text-warning"> English writing </div>
                <div className="card-body">
                    <h5 className="card-title">10% discount for spoken and writing together</h5>
                    <p className="card-text  ">Our writing and spoken course start together, you can enroll in both calls together. </p>
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