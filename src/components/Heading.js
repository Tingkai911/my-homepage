import React from 'react';

function Heading(props) {

    function handleClick(event) {
        const style = event.target.dataset.value;
        console.log(style);
        props.setTheme(style);
    }

    return (
        <section className="s1">
            <div className="main-container">

                <div className="greeting-wrapper">
                    <h1>Hi, I'm {props.data.name}</h1>
                </div>

                <div className="intro-wrapper">

                    <div className="nav-wrapper">
                        <div className="dots-wrapper">
                            <div id="dot-1" className="browser-dot"></div>
                            <div id="dot-2" className="browser-dot"></div>
                            <div id="dot-3" className="browser-dot"></div>
                        </div>
                        <ul id="navigation">
                            <li><a style={{marginRight: 20}} href={"#about"}>About/Contact</a></li>
                            <li><a href={"#portfolio"}>Projects</a></li>
                        </ul>
                    </div>

                    <div className="left-column">
                        <img id="profile-pic" src={props.profilepic} alt="My Profile"/>
                        <h5 style={{textAlign: "center", lineHeight: 0}}>Personalize Theme</h5>
                        <div id="theme-options-wrapper">
                            <div onClick={handleClick} data-value="default" id="light-mode" className="theme-dot"></div>
                            <div onClick={handleClick} data-value="blue" id="blue-mode" className="theme-dot"></div>
                            <div onClick={handleClick} data-value="green" id="green-mode" className="theme-dot"></div>
                            <div onClick={handleClick} data-value="purple" id="purple-mode" className="theme-dot"></div>
                        </div>
                        <p id="settings-note">*Theme settings will be saved for <br></br> your next vist</p>
                    </div>
                    
                    <div className="right-column">
                        <div id="preview-shadow">
                            <div id="preview">
                                <div id="corner-tl" className="corner"></div>
                                <div id="corner-tr" className="corner"></div>
                                <h3>What I Do</h3>
                                <p>{props.data.whatido}</p>
                                <div id="corner-br" className="corner"></div>
                                <div id="corner-bl" className="corner"></div>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>
        </section>
    );
}

export default Heading;