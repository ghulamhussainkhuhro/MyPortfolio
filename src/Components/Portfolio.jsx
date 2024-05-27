/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/third.jpeg";

const imageAltText = "Ghulam Hussain Khuhro Data and BI Analyst. This is a backgound image of my portfolio";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Microsoft Learn Student Ambassador (MLSA) 🎉",
    description:
      "Helping fellow students learn and grow in tech. Promote Microsoft tools and resources to build a future-ready tech community.",
    url: "https://mvp.microsoft.com/en-US/studentambassadors/profile/132dd507-daf7-4aeb-9727-c75dca8fcfa4",
  },
  {
    title: "Competition Contributer at Kaggle",
    description:
      "Active Kaggle Contributor | Pushing the boundaries of data science with competition entries and shared solutions.",
    url: "https://www.kaggle.com/ghulamhussainkhuhro",
  },
  {
    title: "My Contributions",
    description:
      "I have coding experience in C++, Java, Python and Kotlin. Check out my profile for a glimpse of my coding style and ongoing projects!",
    url: "https://github.com/ghulamhussainkhuhro",
  },
  {
    title: "Content Writer",
    description:
      "I'm a content writer with a knack for turning ideas into engaging copy. I break down complex topics into clear, easy-to-understand pieces that resonate with readers.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
];

const Portfolio = () => {
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
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
