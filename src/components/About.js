import React from 'react';
import resume from './../docs/resume.pdf'

function About(props) {

    const skills = props.data.upto10skills;

    return(
        <section className="s2">
            <div className="main-container">
                <div className="about-wrapper">
                    <div className="about-me">
                        <h4>More about me</h4>
                        <p>{props.data.moreaboutme1}</p>
                        <p>{props.data.moreaboutme1}</p>
                    
                        <hr/>

                        <h4>TOP EXPERTISE</h4>
                        <p>{props.data.topexpertise}: <a href={resume} target="_blank">Download Resume</a></p>

                        <div id="skills">
                            <ul>
                                <li>Python</li>
                                <li>Django</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>HTML/CSS</li>
                            </ul>
                            <ul>
                                <li>C/C#</li>
                                <li>ASP.NET</li>
                                <li>SQL</li>
                                <li>Java</li>
                                <li>Git</li>
                            </ul>
                        </div>
                    </div>

                    <div className="social-links">

                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;