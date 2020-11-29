import React from "react";
import Project from "./Project";
import ToGitHub from "./ToGitHub";

function Portfolio(props) {
  const projects = props.data.map((project, index) => (
    <Project
      key={index}
      id={index}
      data={project}
      screenshot={props.screenshots[index]}
    />
  ));
  return (
    <section id="portfolio" className="s1">
      <div className="main-container">
        <h3 style={{ textAlign: "center" }}>Some of my past projects</h3>
        <div className="post-wrapper">
          {projects}
          <ToGitHub link={props.github} />
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
