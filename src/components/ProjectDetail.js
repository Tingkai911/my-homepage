import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function ProjectDetail(props) {
  const mainRef = useRef(null);
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

  useEffect(() => {
    scrollToRef(mainRef);
  }, []);

  const technologies = props.data.technologiesUsed.map((ele, index) => (
    <li key={index}>- {ele}</li>
  ));

  var disclaimer = "";
  if (props.data.disclaimer) {
    disclaimer = `*${props.data.disclaimer}`;
  }

  function scrollTo(event) {
    document.getElementById(event.target.dataset.value).scrollIntoView(true);
  }

  return (
    <section className="s2">
      <div className="postdetail-wrapper">
        <div
          ref={mainRef}
          id="project-detail"
          tabIndex="0"
          className="nav-wrapper"
        >
          <Link to="/">
            <div className="dots-wrapper">
              <div id="dot-1" className="browser-dot"></div>
              <div id="dot-2" className="browser-dot"></div>
              <div id="dot-3" className="browser-dot"></div>
            </div>
          </Link>

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
              <span onClick={scrollTo} data-value="portfolio" className="link">
                Projects
              </span>
            </li>
          </ul>
        </div>

        <div className="main-container">
          <br />

          <div className="img-container">
            {/* <img
              className="project-screenshot"
              alt="Project Screenshots"
              src={props.screenshots.image}
              style={{
                maxWidth: props.screenshots.maxWidth,
                maxHeight: props.screenshots.maxHeight,
              }}
            /> */}
            <div className="project-screenshot">
              <LazyLoadImage
                className="project-screenshot"
                alt="Project Screenshots"
                src={props.screenshots.image}
                style={{
                  maxWidth: props.screenshots.maxWidth,
                  maxHeight: props.screenshots.maxHeight,
                }}
                effect="blur"
              />
            </div>
          </div>

          <h3>{props.data.projectTitle}</h3>

          <p>{props.data.paragraph1}</p>
          <p>{props.data.paragraph2}</p>
          <p>{props.data.paragraph3}</p>

          <h5>Technologies:</h5>
          <ul>{technologies}</ul>

          <br />
          <a
            href={props.data.githubLink}
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link to GitHub Repository
          </a>

          <br />
          <br />
          <a
            href={props.data.hostLink}
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Try it out here
          </a>
          <p className="project-disclaimer">{disclaimer}</p>
        </div>
        <br />

        <div className="nav-wrapper">
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
                style={{ marginRight: 20 }}
              >
                Projects
              </span>
            </li>
            <li>
              <span onClick={scrollTo} data-value="top" className="link">
                Back To Top
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetail;
