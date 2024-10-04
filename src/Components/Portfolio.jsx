import React from "react";
import image from "../images/hello.jpg";

const Portfolio = () => {
  const imageAltText = "a girl working";

  const projectList = [
    {
      title: "BizzBuzz",
      description:
        "BizzBuzz is an eCommerce platform designed to help business owners effortlessly track and manage their expenses.",
      url: "https://github.com/xdGTH/Bizz-Buzz-Beta",
    },
    {
     title: "RentEase",
      description: "RentEase is a comprehensive property rental management system designed to simplify the process for both landlords and tenants.",
      url: "https://github.com/dilashaupadhyay/RentEase",
    },
    {
      title: "GestureSync",
      description: "GestureSync is a sign detection model designed to interpret and translate human gestures into meaningful actions or commands.",
      url: "https://github.com/dilashaupadhyay/GestureSync",
    },
    {
      title: "ScoreGreen",
      description: "ScoreGreen is an innovative platform that promotes eco-friendly behavior by rewarding individuals for their environmentally conscious actions. ",
      url: "https://github.com/dilashaupadhyay/ScoreGreen",
    },
  ];
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map(({ title, description, url }) => (
            <div className="box" key={title}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                <h3>{title}</h3>
              </a>
              <p className="small">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
