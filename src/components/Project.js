import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Project(props) {
  function handleClick() {
    var ele = document.getElementById("project-detail");
    if (ele != null) {
      ele.scrollIntoView();
    }
  }

  return (
    <div>
      <div className="post">
        {/* <img
          className="thumbnail"
          src={props.screenshot}
          alt="Project Screenshot"
        /> */}
        <div className="thumbnail">
          <LazyLoadImage
            className="thumbnail"
            src={props.screenshot}
            alt="Project Screenshot"
            effect="blur"
          />
        </div>
        <div className="post-preview">
          <h6 className="post-title">{props.data.projectTitle}</h6>
          <p className="post-intro">{props.data.projectIntro}</p>
          <Link to={`/projectdetail/${props.id}`}>
            <span onClick={handleClick} className="link">
              Read More
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Project;
