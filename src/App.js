import React, { useState, useEffect, Profiler } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Heading from './components/Heading';
import About from './components/About';
import Portfoilo from './components/Portfolio';
import ContactForm from './components/ContactForm';
import ProjectDetail from './components/ProjectDetail';
import './css/default.css';

// Change text in homepage.json to change the contents displayed in the homepage
import data from './homepageData.json';

// Import your profie picture here
import profilepic from './images/profilepic.png';

// Import your resume here
import resume from './docs/resume.pdf'

// Import image to be displayed in About page here
// 

// Import Portfolio image here and add it to the array
import screenshot from './images/cs50blog.jpg';
import profileimg from './images/profilepic.png';
import follow from './images/follow.jpg';
const screenshots = [screenshot, profileimg, follow];


function App () {
  const [theme, setTheme] = React.useState('default');

  function changeTheme(currentTheme) {
    setTheme(currentTheme);
    localStorage.setItem("theme", currentTheme);
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if(theme == null) {
      changeTheme("default");
    } else {
      changeTheme(savedTheme);
    } 
  }, []);

  return (
    <div className={theme}>
      <Router>
        <Switch>
          <Route path="/" render={() =>
            <div>
              <Heading setTheme={changeTheme} profilepic={profilepic} data={data.heading}/>
              <About resume={resume} image={follow} data={data.about}/>
              <Portfoilo screenshots={screenshots} data={data.project}/>

              <Route path="/projectdetail/:id" render={()=>
                <ProjectDetail />
              } />

              <ContactForm />
            </div>
          } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;