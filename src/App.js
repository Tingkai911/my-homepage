import React from 'react';
import './App.css';
import Heading from './components/Heading';
import About from './components/About';
import Portfoilo from './components/Portfolio';
import ContactForm from './components/ContactForm';
import './css/default.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProjectDetail from './components/ProjectDetail';

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
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={() =>
          <div>
            <Heading profilepic={profilepic} data={data.heading}/>
            <About resume={resume} image={follow} data={data.about}/>
            <Portfoilo screenshots={screenshots} data={data.project}/>
            <ContactForm />
          </div>
        } />
        <Route path="/post/:id" component={ProjectDetail} />
      </Switch>
    </Router>
  );
}

export default App;