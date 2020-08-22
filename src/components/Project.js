import React from 'react';
import { Link } from 'react-router-dom';

function Project(props) {
    return (
        <div>
            <div className="post">
                <img className="thumbnail" src={props.screenshot} alt="Project Screenshot" />

                <div className="post-preview">
                    <h6 className="post-title">{props.data.projecttitle}</h6>
                    <p className="post-intro">{props.data.projectintro}</p>
                    <Link to={`/post/${props.id}`}>
                        <span className="link">Read More</span>
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default Project;