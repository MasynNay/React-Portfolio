import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/images/header.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 200);
  const [, setIndex] = useState(1);
  const toRotate = [
    "Masyn Nay",
    "A Web Developer",
    "A UI/UX Designer",
    "A Graphic Designer",
    "An IT Technician",
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  });

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h1>
                    {`I'm`}{" "}
                    <span
                      className="txt-rotate"
                      dataperiod="1000"
                      data-rotate='[ "Masyn Nay", "A Web Developer", "A UI/UX Designer", "A Graphic Designer", "An IT Technician" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    Welcome to my portfolio! I am an experienced IT professional
                    with over 7 years in the field. I graduated from a
                    full-stack coding boot camp at the University of Utah in May
                    2023. My goal now is to increase my knowledge in either the
                    IT or coding field to further my career. In addition to my
                    technical expertise, I have a strong passion for coding,
                    graphic design, and technology. In my spare time, I enjoy
                    spending quality moments with my family, building computers,
                    playing video games, snowboarding, and watching television
                    shows. My diverse background in IT and enthusiasm for
                    continuous learning drive me to expand my knowledge and
                    embrace new challenges. As long as I can use a computer, I’m
                    thrilled!
                    <br></br>
                    <br></br>
                    Thank you for looking at my portfolio. I hope we get an
                    opportunity to work together. This portfolio was created
                    using React.js, Bootstrap, and CSS.
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
