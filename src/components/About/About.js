import React from 'react';
import './About.css';

const About = () => {
   
    return (
        <div>
           <body>
                <div class="main">
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
                        Is ther any below course you are interested in
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
            </body>
        </div>
    );
};

export default About;