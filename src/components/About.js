import React from 'react';

function About(props) {

    const skillsLeft = [...props.data.upTo10Skills];
    const skillsRight = skillsLeft.splice(skillsLeft.length/2, skillsLeft.length/2);
    const skillsLeftHalf = skillsLeft.map((skill, index) => <li key={index}>{skill}</li>);
    const skillsRightHalf = skillsRight.map((skill, index) => <li key={index}>{skill}</li>);

    return(
        <section className="s2">
            <div className="main-container">
                <div className="about-wrapper">
                    <div id="about" className="about-me">
                        <h4>More about me</h4>
                        <p>{props.data.moreAboutMe1}</p>
                        <p>{props.data.moreAboutMe2}</p>
                    
                        <hr/>

                        <h4>TOP EXPERTISE</h4>
                        <p>{props.data.topExpertise}: <a href={props.resume} target="_blank" rel="noopener noreferrer">Download Resume</a></p>

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
                        <span>
                            <a href={props.data.contactMe.linkedin} target="_blank" rel="noopener noreferrer">Linkedin: @{props.data.contactMe.linkedinUsername}</a>
                        </span>
                        <br />
                        <span>
                            <a href={props.data.contactMe.twitter} target="_blank" rel="noopener noreferrer">Twitter: @{props.data.contactMe.twitterUsername}</a>
                        </span>
                        <br />
                        <span>Email: {props.data.contactMe.email} </span>
                        <br />
                        <span>Mobile: {props.data.contactMe.mobile}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;