import React from 'react';
import './About.css';
import img from '../../images/aboutPicture.jpg'

const About = () => {
   
    return (
        <div>
           <div className ='body'>
            <h1 className='text-center'>WELCOME TO <span className='text-danger'>PIE INTERNATIONAL</span></h1>
            <div className='container'>
            <div className='row align-items-center mb-5'>
                <div className='col col-12 col-md-6'> 
                    <h3 className='text-danger'>Our Company</h3>
                    <p>
                    Based in Nairobi and supporting clients in Eastern and Western Africa, we have launched the careers of thousands of students in various fields across the globe.  
                    </p>
                    <p>PIE International Education Services places prospective students in the best training institutions across the globe. With PIE, you take the first step to becoming a global citizen. We help you achieve your goals and aspirations and become a global leader in your respective field. </p>
                    <p>Our passion to see a PIE family of global leaders makes us your best bet for a successful and fruitful career overseas. At PIE International, we go the extra mile to ensure that you have all the necessary information regarding Overseas education. </p>
                    <p>With a very professional and highly experienced team of counselors, we ensure you make an informed choice that suits best your educational and career goals. We take with you through the journey of identifying and choosing the best institution and the best course for you. In addition, PIE International helps you in your placement in your institution of choice.</p>
                </div>
                <div className='col col-12 col-md-6'> 
                    <img className='img-fluid' src={img} alt="" />
                </div>
            </div>
            </div>
                <div class="main mb-5">
                    <div class="registation">
                    <h1>Contact us</h1>
                    <div action="">
                        <p><label for="fname">First name:</label><br/><input type="text" name="info" id="name" placeholder="Enter first name"/></p>
                        <p><label for="lname">Last name:</label><br/><input type="text" name="info" id="lname" placeholder="Enter last name"/></p>
                        <p><label for="age">Phone number:</label><br/><input type="number" name="info" id="age" placeholder="Enter phone number"/></p>
                        <p><label for="email">Your email:</label><br/><input type="text" name="info" id="email"placeholder="Enter your email"/></p>
                        <div class="lan-gen">
                        <p>
                        Found us on:
                        <br/>
                        <span><label for="male"><input type="radio" name="gender" id="male"/>Online</label></span>
                        <span><label for="female"><input type="radio" name="gender" id="female"/>Reference</label></span>
                        <span><label for="none"><input type="radio" name="gender" id="none"/>Others</label></span>
                        </p>
                        <p>
                        Is ther any below course you are interested in?
                        <br/>
                        <span><label for="english"><input type="checkbox" name="language" id="english"/>IELTS</label></span>
                        <span><label for="bangla"><input type="checkbox" name="language" id="bangla"/></label>SAT</span>
                        <span><label for="hindi"><input type="checkbox" name="language" id="hindi"/></label>GRE</span>
                        </p>
                        </div>
                        <div class="footer">
                        <input type="submit" value="Submit"/>
                        <input type="reset" value="Reset"/>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;