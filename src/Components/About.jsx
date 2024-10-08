

import React from "react";


import image from "../images/work.jpg";

const imageAltText = "purple and blue abstract background";

const description =
  "Final-year Computer Science student at Kathmandu University with practical experience in leading student clubs, contributing to open-source projects, and participating in hackathons. Proficient in design and software development, with a passion for solving complex problems through innovation. Seeking opportunities to collaborate on impactful projects and drive open-source initiatives.";

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
