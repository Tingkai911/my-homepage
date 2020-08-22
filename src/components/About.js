import React from 'react';

function About(props) {

    const skillsLeft = [...props.data.upto10skills];
    const skillsRight = skillsLeft.splice(skillsLeft.length/2, skillsLeft.length/2);
    const skillsLeftHalf = skillsLeft.map((skill, index) => <li key={index}>{skill}</li>);
    const skillsRightHalf = skillsRight.map((skill, index) => <li key={index}>{skill}</li>);

    return(
        <section className="s2">
            <div className="main-container">
                <div className="about-wrapper">
                    <div id="about" className="about-me">
                        <h4>More about me</h4>
                        <p>{props.data.moreaboutme1}</p>
                        <p>{props.data.moreaboutme2}</p>
                    
                        <hr/>

                        <h4>TOP EXPERTISE</h4>
                        <p>{props.data.topexpertise}: <a href={props.resume} target="_blank" rel="noopener noreferrer">Download Resume</a></p>

                        <div id="skills">
                            <ul>
                                {skillsLeftHalf}
                            </ul>
                            <ul>
                                {skillsRightHalf}
                            </ul>
                        </div>
                    </div>

                    <div id="contact" className="social-links">
                        <img id="social-img" src={props.image} alt="My Social Page"/>
                        <h3>Contact Me</h3>
                        <a href={props.data.contactme.linkedin} target="_blank" rel="noopener noreferrer">Linkedin</a>
                        <br/>
                        <a href={props.data.contactme.github} target="_blank" rel="noopener noreferrer">Github</a>
                        <br/>
                        <span>Email: {props.data.contactme.email} </span>
                        <br/>
                        <span>Mobile: {props.data.contactme.mobile}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;