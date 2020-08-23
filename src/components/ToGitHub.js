import React from 'react';
import githubIcon from './../images/githubicon.png'

function ToGitHub(props) {
    return (
        <div>
            <div style={{backgroundColor: "white"}}className="post">
                <img 
                    style={{
                        display: "block",
                        width: "85%",
                        height: "85%",
                        margin: 'auto',
                        marginTop: 3,
                        marginBottom: 3,
                        objectFit: "contain"
                    }}
                    src={githubIcon} 
                    alt="GitHub Icon" 
                />
                <div className="post-preview">
                    <h6 className="post-title">View my other projects at GitHub</h6>
                    <p className="post-intro"></p>
                    <a href={props.link} target="_blank">
                        <span className="link">To GitHub</span>
                    </a>
                </div>

            </div>
        </div>
    );
}

export default ToGitHub;