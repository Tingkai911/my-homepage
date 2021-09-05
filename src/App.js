import React, { useState, useEffect } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Heading from "./components/Heading";
import About from "./components/About";
import Portfoilo from "./components/Portfolio";
import ProjectDetail from "./components/ProjectDetail";
import Footer from "./components/Footer";

import "./css/default.css";

// Change text in homepage.json to change the contents displayed in the homepage
// DO NOT change the keys, only change the values
import data from "./homepageData.json";

// Import background images in Heading.js here and add it to the array -> backgroundImg
import defaultBackground from "./images/white-header-background.jpg";
import darkBackground from "./images/black-header-background.jpg";
import blueBackground from "./images/blue-header-background.jpg";
import purpleBackground from "./images/purple-header-background.jpg";

// Import your profie picture here
import profilepic from "./images/profilepic.png";

// Import About.js image here
import follow from "./images/follow.jpg";

// Import Portfolio.js image here and add it to the array -> portfolioImg
import cs50blog from "./images/cs50blog.jpg";
import proshop from "./images/proshop.png";
import cims from "./images/cims.jpg";

// Import ProjectDetail,js image here and add it to the array -> projectDetailImg
import cs50blog2 from "./images/cs50blog2.jpg";

// One image allowed for eact Portfolio post
const portfolioImg = [cs50blog, proshop, cims];

// One image allowed for each ProjectDetail page, able to adjust image size with maxWidth and maxHeight
const projectDetailImg = [
  {
    image: cs50blog2,
    maxWidth: 1100,
    maxHeight: 1000,
  },
  {
    image: proshop,
    maxWidth: 1000,
    maxHeight: 1000,
  },
  {
    image: cims,
    maxWidth: 1000,
    maxHeight: 1000,
  },
];

// One background image for each of the 4 different color themes
const backgroundImage = [
  defaultBackground,
  darkBackground,
  blueBackground,
  purpleBackground,
];

function App() {
  const [theme, setTheme] = useState("default");

  function changeTheme(currentTheme) {
    setTheme(currentTheme);
    localStorage.setItem("theme", currentTheme);
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme == null) {
      changeTheme("default");
    } else {
      changeTheme(savedTheme);
    }
  }, []);

  return (
    <div className={theme}>
      <Router basename="/">
        <Switch>
          <Route
            path="/"
            render={() => (
              <div>
                <Heading
                  setTheme={changeTheme}
                  backgroundImage={backgroundImage}
                  profilepic={profilepic}
                  data={data.heading}
                />
                <About image={follow} data={data.about} />
                <Portfoilo
                  screenshots={portfolioImg}
                  data={data.project}
                  github={data.about.github}
                />

                <Route
                  path="/projectdetail/:id"
                  render={(props) => (
                    <ProjectDetail
                      screenshots={projectDetailImg[props.match.params.id]}
                      data={data.project[props.match.params.id]}
                      key={props.match.params.id}
                      id={props.match.params.id}
                    />
                  )}
                />

                <Footer
                  name={data.heading.name}
                  linkedin={data.about.contactMe.linkedin}
                  repository={data.homepageRepository}
                />
              </div>
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
