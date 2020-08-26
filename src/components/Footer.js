import React from 'react';

function Footer(props) {
    return (
        <section className="s2">
            <div className="main-container footer">
                <div style={{textAlign: "center"}}><span><a href={"#top"}>Back to Top</a></span></div>
                <p id="settings-note">
                    This homepage is build using React by <a href={props.linkedin} target="_blank" rel="noopener noreferrer">{props.name}</a>. 
                    Project Repository can be found <a href={props.repository} target="_blank" rel="noopener noreferrer">here</a>.
                </p>
            </div>
        </section>
    );
}

export default Footer;