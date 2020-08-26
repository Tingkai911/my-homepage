import React from 'react';
import { Link } from 'react-router-dom';

function Project(props) {

    function handleClick() {
        var ele = document.getElementById("project-detail");
        if(ele != null) {
            ele.scrollIntoView();
        }    
    }

    return (
        <div>
            <div className="post">
                <img className="thumbnail" src={props.screenshot} alt="Project Screenshot" />

                <div className="post-preview">
                    <h6 className="post-title">{props.data.projectTitle}</h6>
                    <p className="post-intro">{props.data.projectIntro}</p>
                    <Link to={process.env.PUBLIC_URL + `/projectdetail/${props.id}`}>
                        <span onClick={handleClick} className="link">Read More</span>
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default Project;