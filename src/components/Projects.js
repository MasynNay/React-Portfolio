import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.jpeg";
import project3 from "../assets/images/project3.jpeg";
import project4 from "../assets/images/project4.png";
import itproject1 from "../assets/images/itproject1.PNG";
import video from "../assets/images/video1.mp4";
import placeholder from "../assets/images/placeholder.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { Link } from "react-router-dom";
import gameIcon from "../assets/images/game-icon.svg"; // Import your SVG icon

export const Projects = () => {
  const projectsTab1 = [
    {
      title: "CompTIA A+ Certification",
      description:
        "I completed the CompTIA A+ certification in May, 2024. This certification is a great starting point for a career in IT and is a great way to learn the basics of computer hardware, software, and networking.",
      imgUrl: itproject1,
    },
    {
      title: "Custom Project 2",
      description: "Description for custom project 2.",
      imgUrl: placeholder, // Replace with actual image
    },
    // Add more custom projects here
  ];

  const projectsTab2 = [
    {
      title: "MGTumbling",
      description:
        "MGTumbling is a gymnastics club located in West Haven, Utah. I created this website for them to help them get more clients and to help them grow their business. This was the first website I have ever built and I used WIX to create this website.",
      imgUrl: project1,
      webLink: "https://www.mgtumbling.net",
    },
    {
      title: "MixStream",
      description:
        "MixStream was my first group project in the coding boot camp at the University of Utah. With this application, you can search for any movie or show you would like and see available streaming services for it. This was created with Utelly Api and IMDB Api.",
      imgUrl: project2,
      webLink: "https://masynnay.github.io/MixStream/",
      gitLink: "https://github.com/MasynNay/MixStream",
    },
    {
      title: "TypeNinja",
      description:
        "TypeNinja was my second group project in the coding boot camp at the University of Utah. This application is a WPM typing game where developers can practice their typing accuracy and speed with words that are all generated at random.",
      imgUrl: project3,
      gitLink: "https://github.com/MasynNay/TypeNinja",
    },
    {
      title: "SemiSnitch",
      description:
        "SemiSnitch was my third and final group project in the coding boot camp at the University of Utah. This application is an all-in-one solution for optimizing semi-truck operations.",
      imgUrl: project4,
      gitLink: "https://github.com/greg4949/Semi-Snitch",
    },
    {
      title: "Placeholder #5",
      description: "Placeholder #5",
      imgUrl: placeholder,
      // No links
    },
    {
      title: "Placeholder #6",
      description: "Placeholder #6",
      imgUrl: placeholder,
      // No links
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Portfolio</h2>
                  <p>
                    Here’s a glimpse into my portfolio, highlighting some
                    accomplishments from working in IT and from coding. This
                    section showcases some of my IT experience and coding skills
                    coming together to drive creative results.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">IT</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Coding</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">First Project</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projectsTab1.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projectsTab2.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          This was my very first coding project. I wanted to be
                          able to have my betta fish, Vendetta, play a Pokemon
                          game. I got my inspiration from "FishPlaysPokemon"
                          that was on Twitch.tv in 2014. This was a very fun
                          project to work on and a great starting point for a
                          coder's journey! The video provided were the only
                          remaining clips I could find of this project. I hope
                          you enjoy.
                        </p>
                        <video src={video} controls></video>
                        {/* Button to navigate to the new page */}
                        <Link to="/game" className="icon-link">
                          <img src={gameIcon} alt="Game" />
                        </Link>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
