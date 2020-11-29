import React from "react";

function Footer(props) {
  function scrollTo(event) {
    document.getElementById(event.target.dataset.value).scrollIntoView(true);
  }

  return (
    <section className="s2">
      <div className="main-container footer">
        <div style={{ textAlign: "center" }}>
          <span onClick={scrollTo} data-value="top" className="link">
            Back To Top
          </span>
        </div>
        <p id="settings-note">
          This homepage is build using React by{" "}
          <a href={props.linkedin} target="_blank" rel="noopener noreferrer">
            {props.name}
          </a>
          . Project Repository can be found{" "}
          <a href={props.repository} target="_blank" rel="noopener noreferrer">
            here
          </a>
          .
        </p>
      </div>
    </section>
  );
}

export default Footer;
