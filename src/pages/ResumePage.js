import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../ResumePage.css";

const ResumePage = () => {
  return (
    <section className="resume" id="resume">
      <Container>
        {/* Header Section */}
        <Row className="header-section mb-4">
          <Col>
            <h1>Masyn Nay</h1>
            <h3>Full-Stack Developer / IT Technician</h3>
            <p>
              <b>Location:</b> Roy, Utah 84067
              <br />
              <b>Phone:</b> Available Upon Request
              <br />
              <b>Email:</b> MasynNay33@gmail.com
              <br />
              <b>Website:</b>{" "}
              <a
                href="https://masynnay.github.io/React-Portfolio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                masynnay.github.io/React-Portfolio
              </a>
              <br />
              <b>LinkedIn:</b>{" "}
              <a
                href="https://www.linkedin.com/in/masynnay/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/masynnay
              </a>
              <br />
              <b>Github:</b>{" "}
              <a
                href="https://github.com/MasynNay"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/MasynNay
              </a>
            </p>
          </Col>
        </Row>

        {/* Professional Experience Section */}
        <Row className="mb-4">
          <Col>
            <h2>Professional Experience</h2>

            <div className="experience-entry">
              <h4>Syracuse City</h4>
              <p>
                <strong>IT Technician</strong>
              </p>
              <p>Syracuse, Utah</p>
              <p>SEPTEMBER, 2023 - CURRENT</p>
              <ul>
                <li>
                  Oversaw the IT service desk, ensuring prompt and efficient
                  handling of user requests and incidents, following Service
                  Level Agreements to improve response times and resolution
                  rates.
                </li>
                <li>
                  Managed and administered user accounts, access rights, and
                  permissions across multiple city departments using Active
                  Directory and other user management systems, ensuring secure
                  and controlled access to municipal IT resources.
                </li>
                <li>
                  Supported the deployment and configuration of software
                  applications and network setups across various municipal
                  facilities, ensuring secure and efficient operations.
                  Collaborated with other IT staff to manage local area networks
                  (LANs) and citywide network infrastructure, optimizing
                  performance and connectivity.
                </li>
                <li>
                  Actively participated in regular meetings to provide updates
                  on IT projects, discuss operational challenges, and coordinate
                  efforts with other departments to optimize resources and
                  improve service delivery.
                </li>
                <li>
                  Developed and maintained detailed documentation of IT systems,
                  processes, and procedures, ensuring consistent team efficiency
                  and facilitating knowledge transfer across departments.
                </li>
              </ul>
            </div>
            <br></br>
            <div className="experience-entry">
              <h4>PEAK HOMES</h4>
              <p>
                <strong>Information Technology Specialist</strong>
              </p>
              <p>Ogden, Utah</p>
              <p>SEPTEMBER, 2022 - SEPTEMBER, 2023</p>
              <ul>
                <li>
                  Created and maintained comprehensive documentation of systems,
                  processes, and procedures for enhanced team efficiency.
                </li>
                <li>
                  Assisted in maintaining and managing inventory levels to
                  ensure accurate tracking of the locations and status of
                  corporate devices.
                </li>
                <li>
                  Diagnosed and resolved hardware peripheral issues, ensuring
                  full functionality of desktops, laptops, printers, scanners,
                  and other devices.
                </li>
                <li>
                  Created and managed user accounts, access rights, and
                  permissions in Active Directory and other user management
                  systems.
                </li>
                <li>
                  Provided technical assistance and support for mobile devices
                  (smartphones and tablets) and their integration with corporate
                  systems.
                </li>
              </ul>
            </div>
            <br></br>
            <div className="experience-entry">
              <h4>STEWARD HEALTH CARE</h4>
              <p>
                <strong>Information Systems Specialist</strong>
              </p>
              <p>Layton, Utah</p>
              <p>NOVEMBER, 2021 - JULY, 2022</p>
              <ul>
                <li>
                  Oversaw the IT service desk, ensuring prompt and efficient
                  handling of user requests and incidents. Following Service
                  Level Agreements to improve response times and resolution
                  rates.
                </li>
                <li>
                  Supported deployment, software installation and testing of
                  network connections for 4 separate Multi-Specialty Physician
                  Clinics as well as a Satellite ER Facility.
                </li>
                <li>
                  Provided comprehensive remote desktop support to end-users,
                  addressing technical issues and inquiries promptly and
                  effectively.
                </li>
                <li>
                  Regular participation in weekly meetings used to provide
                  updates on IT projects, discuss operational challenges and
                  down times, and coordinate efforts with other departments to
                  maximize our own department’s resources.
                </li>
                <li>
                  Participated in the successful deployment of iOS and Android
                  mobile operating systems to all hospital personnel.
                </li>
              </ul>
            </div>
            <br></br>
            <div className="experience-entry">
              <h4>PLEASANT VIEW CITY</h4>
              <p>
                <strong>Operations and Maintenance II</strong>
              </p>
              <p>Pleasant View, Utah</p>
              <p>May, 2016 - November, 2021</p>
              <ul>
                <li>
                  Led the maintenance of the Pleasant View City website,
                  ensuring all information was accurate, consistent, and aligned
                  with the city’s branding and communication standards while
                  also remaining time efficient.
                </li>
                <li>
                  Collaborated with various departments to gather and verify
                  information for web publication.
                </li>
                <li>
                  Managed IT inventory and expenses, tracking costs and
                  optimizing spending to meet financial goals. Implemented
                  cost-saving initiatives, resulting in a large reduction in IT
                  expenditures meanwhile improving quality.
                </li>
                <li>
                  Provided technical support, diagnosing and resolving hardware,
                  software, and network issues for end-users, ensuring smooth
                  operations and user satisfaction.
                </li>
                <li>
                  Implemented reliable data backup solutions and conducted
                  regular recovery tests to ensure data integrity and business
                  continuity.
                </li>
              </ul>
            </div>
          </Col>
        </Row>

        {/* Education Section */}
        <Row className="mb-4">
          <Col>
            <h2>Education</h2>

            <div className="education-entry">
              <h4>EDX BOOT CAMPS LLC | UNIVERSITY OF UTAH</h4>
              <p>
                <strong>Full-Stack Coding Boot Camp</strong>
              </p>
              <p>Salt Lake City, Utah</p>
              <p>2022 - 2023</p>
              <ul>
                <li>Accomplishments: Graduated with a 4.0 GPA</li>
                <li>
                  Projects:
                  <ul>
                    <li>
                      <strong>MixStream:</strong> An all-in-one solution to find
                      any movie or television show and display IMDB information
                      and where the media is being streamed. (Developed with CSS
                      and JavaScript. Utilizes the Utelly and IMDB API)
                    </li>
                    <li>
                      <strong>TypeNinja:</strong> A WPM typing game to showcase
                      your typing speed (Developed with CSS, JavaScript,
                      Node.js, Express, and a random word NPM)
                    </li>
                    <li>
                      <strong>SemiSnitch:</strong> An all-in-one solution for
                      optimizing semi-truck operations. (Developed using
                      Tailwind CSS, JavaScript, Node.js, Express.js, React,
                      GraphQL Apollo, Mongoose, and the OpenWeather API)
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <br></br>
            <div className="education-entry">
              <h4>ROY HIGH SCHOOL</h4>
              <p>Roy, Utah</p>
              <p>High School Diploma</p>
              <p>2012 - 2015</p>
              <p>Accomplishments: Graduated High Honors with a 3.9 GPA</p>
            </div>
          </Col>
        </Row>

        {/* Additional Information Section */}
        <Row className="mb-4">
          <Col>
            <h2>Additional Information</h2>
            <ul>
              <li>
                <strong>Technical Skills (Web Development):</strong> HTML5,
                HTML, CSS, JavaScript, JQuery, Git, GitHub, Agile Methodologies,
                API/JSON, Bootstrap, Command Line, Database Theory, Express.js,
                Heroku, MongoDB, MySQL, Node.js, Postman, Quality Assurance
                Testing, React, Responsive Design, RESTful API, SEO, State
                Management, Adobe Photoshop.
              </li>
              <li>
                <strong>Technical Skills (Information Technology):</strong>{" "}
                Microsoft Windows, Linux (Mint and Ubuntu), MacOS, Help Desk,
                VMWare, Operating Systems, Active Directory, Network Support,
                Software Troubleshooting, PowerShell Shell Scripting, Computer
                Hardware, TCP/IP, Information Security, DNS, WAN, VPN, VoIP,
                Network Firewalls, SharePoint, Telecommunication, IT Support,
                Google Suite, Microsoft Office.
              </li>
            </ul>
          </Col>
        </Row>

        {/* References Section */}
        <Row>
          <Col>
            <h2>References</h2>
            <p>Available Upon Request.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ResumePage;
