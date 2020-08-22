import React from 'react';
import './App.css';
import Heading from './components/Heading';
import About from './components/About';
import Portfoilo from './components/Portfolio';
import Contact from './components/Contact';
import './css/default.css';

// Change text in homepage.json to change the contents displayed in the homepage
import data from './homepageData.json';

function App () {
  return (
    <div>
      <Heading data={data.heading}/>
      <About data={data.about}/>
      <Portfoilo />
      <Contact />
    </div>
  );
}

export default App;