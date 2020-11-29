/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Heading(props) {
  const backgroundImage = [...props.backgroundImage];

  const [currentBackground, setBackground] = useState({
    backgroundImage: `url(${backgroundImage[0]})`,
  });

  function handleClick(event) {
    const style = event.target.dataset.value;
    props.setTheme(style);
    changeBackground(style);
  }

  function changeBackground(style) {
    if (style == "dark")
      setBackground({ backgroundImage: `url(${backgroundImage[1]})` });
    else if (style == "blue")
      setBackground({ backgroundImage: `url(${backgroundImage[2]})` });
    else if (style == "purple")
      setBackground({ backgroundImage: `url(${backgroundImage[3]})` });
    else setBackground({ backgroundImage: `url(${backgroundImage[0]})` });
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    changeBackground(savedTheme);
  }, []); // sets the team based on localStorage on mount

  function scrollTo(event) {
    document.getElementById(event.target.dataset.value).scrollIntoView(true);
  }

  return (
    <section id="top" style={currentBackground} className="s1">
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
              <li>
                <span
                  onClick={scrollTo}
                  data-value="about"
                  className="link"
                  style={{ marginRight: 20 }}
                >
                  About
                </span>
              </li>
              <li>
                <span
                  onClick={scrollTo}
                  data-value="contact"
                  className="link"
                  style={{ marginRight: 20 }}
                >
                  Contact
                </span>
              </li>
              <li>
                <span
                  onClick={scrollTo}
                  data-value="portfolio"
                  className="link"
                >
                  Projects
                </span>
              </li>
            </ul>
          </div>

          <div className="left-column">
            {/* <img id="profile-pic" src={props.profilepic} alt="My Profile" /> */}
            <div className="profile-pic">
              <LazyLoadImage
                className="profile-pic"
                src={props.profilepic}
                alt="My Profile"
                effect="blur"
              />
            </div>
            <h5 style={{ textAlign: "center", lineHeight: 0 }}>
              Personalize Theme
            </h5>
            <div id="theme-options-wrapper">
              <div
                onClick={handleClick}
                data-value="default"
                id="light-mode"
                className="theme-dot"
              ></div>
              <div
                onClick={handleClick}
                data-value="dark"
                id="dark-mode"
                className="theme-dot"
              ></div>
              <div
                onClick={handleClick}
                data-value="blue"
                id="blue-mode"
                className="theme-dot"
              ></div>
              <div
                onClick={handleClick}
                data-value="purple"
                id="purple-mode"
                className="theme-dot"
              ></div>
            </div>
            <p id="settings-note">
              *Theme settings will be saved for <br></br> your next visit
            </p>
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
