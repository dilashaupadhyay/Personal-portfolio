import React from "react";
import image from "../images/hello.jpg";

const Portfolio = () => {
  const imageAltText = "a girl working";

  const projectList = [
    {
      title: "E-Matadaan",
      description: "An online voting platform for the class representative.",
      url: "https://github.com/dilashaupadhyay/E-matadaan",
    },
    {
      title: "BizzBuzz",
      description:
        "An e-commerce site for the business owners to track their sales and manage their products.",
      url: "https://github.com/xdGTH/Bizz-Buzz-Beta",
    },
    {
      title: "GestureSync",
      description: "Sign language detection.",
      url: "https://github.com/dilashaupadhyay/GestureSync",
    },
    {
      title: "ScoreGreen",
      description: "An ecothon project.",
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
