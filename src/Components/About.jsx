

import React from "react";


import image from "../images/work.jpg";

const imageAltText = "purple and blue abstract background";

const description =
  "I am a third-year computer science student at Kathmandu University. My passion for technology and innovation drives me to actively engage in student clubs, open-source communities, and collaborative projects. I thrive at the intersection of design, data, and development, seeing boundless opportunities for exploration and creation. Serving as a Student Ambassador for Microsoft, I'm dedicated to fostering a dynamic tech community. I am deeply passionate about exploring and experimenting within the dynamic realm of technology.";

const skillsList = [
  "User Interface (UI)",
  "User experience (UX)",
  "Technical Writing",
  "Front-end development",
  ,
];


const detailOrQuote = " ";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
