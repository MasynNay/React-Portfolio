import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.jpeg";
import project3 from "../assets/images/project3.jpeg";
import project4 from "../assets/images/project4.png";
import video from "../assets/images/video1.mp4";
import placeholder from "../assets/images/placeholder.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "MGTumbling",
      description:
        "MGTumbling is a gymnastics club located in West Haven, Utah. I created this website for them to help them get more clients and to help them grow their business. This was the first website I have ever built and I used WIX to create this website.",
      imgUrl: project1,
      webLink: "https://www.mgtumbling.net"
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
      webLink: "https://typeninja.herokuapp.com",
      gitLink: "https://github.com/MasynNay/TypeNinja",
    },
    {
      title: "SemiSnitch",
      description: "SemiSnitch was my third and final group project in the coding boot camp at the University of Utah. This application is an all-in-one solution for optimizing semi-truck operations.",
      imgUrl: project4,
      webLink: "https://infinite-meadow-71565.herokuapp.com",
      gitLink: "https://github.com/greg4949/Semi-Snitch",
    },
    {
      title: "Placeholder #5",
      description: "Placeholder #5",
      imgUrl: placeholder,
    },
    {
      title: "Placeholder #6",
      description: "Placeholder #6",
      imgUrl: placeholder,
    },
  ];

  return (
    <section className="project" id="project">
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
                    This is a quick glance of my portfolio and the work that I
                    have done this far.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
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
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          This was my very first coding project. I wanted to be
                          able have my betta fish, Vendetta, play a Pokemon
                          game. I got my inspiration from "FishPlaysPokemon"
                          that was on Twitch.tv in 2014. This was a very fun
                          project to work on and a great starting point for a
                          coders journey! The video provided were the only
                          remaining clips I could find of this project. I hope
                          you enjoy.
                        </p>
                        <video src={video} controls></video>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          I don't really have anything else to put here. For a
                          little entertainment, here is a game of Pokemon Ruby.
                          Enjoy! (Mobile is only available in landscape mode)
                        </p>
                        <div className="game col-12">
                          <iframe
                            src="https://www.retrogames.cc/embed/26523-pokemon-ruby-e-independent.html"
                            title="game"
                            className="game-iframe"
                            width="600"
                            height="450"
                            frameborder="no"
                            allowfullscreen="true"
                            webkitallowfullscreen="true"
                            mozallowfullscreen="true"
                          ></iframe>
                          <div class="gametext">
                            <h1 class="gametext">Controls</h1>
                            <h1 class="gametext">A Button = Z</h1>
                            <h1 class="gametext">B Button = X</h1>
                            <h1 class="gametext">Select = Shift</h1>
                            <h1 class="gametext">Start = Enter</h1>
                          </div>
                        </div>
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
