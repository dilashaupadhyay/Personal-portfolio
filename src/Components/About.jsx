import React from "react";
import image from "../images/work.jpg";

const imageAltText = "purple and blue abstract background";

const description =
  "Final-year Computer Science student at Kathmandu University with hands-on experience in leading student clubs, contributing to open-source communities, and participating in hackathons. Skilled in software quality assurance and design, with a passion for quality and creativity in technology. Eager to collaborate on impactful projects and drive meaningful contributions to open-source initiatives.";

const skillsList = [
  "Quality Assurance",
  "Technical Writing",
  "User Interface (UI)",
  "User Experience (UX)",
];

const detailOrQuote = "Striving for quality and innovation in technology.";

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
          {skillsList.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
