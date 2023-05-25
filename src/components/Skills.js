import gauge1 from "../assets/images/gauge1.svg";
import gauge2 from "../assets/images/gauge2.svg";
import gauge3 from "../assets/images/gauge3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/images/color1.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx zoom">
              <h2>Skills</h2>
              <p>
                One of my biggest passions is learning new things. Some of my
                following skills are as follows:<br></br>
                <br></br> HTML5, CSS, JavaScript, Node, Express, MVC, ORM LAN,
                Help Desk, VMWare, Operating Systems, Active Directory, Network
                Support, Software Troubleshooting, Microsoft Windows, Linux,
                MacOS, Technical Support, Software Testing, Disaster Recovery,
                Citrix, Computer Hardware, TCP/IP, Information Security,
                Microsoft Windows Server, DNS, WAN, VPN, Shell Scripting, VoIP,
                Network Firewalls, SQL, iOS, Android, Adobe Photoshop, Adobe
                After Effects, Adobe Illustrator, Desktop support, Customer
                support, Graphic design, SharePoint, Ethernet,
                Telecommunication, IT support, Google Suite, Google Docs, SCCM.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={gauge1} alt="" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={gauge2} alt="" />
                  <h5>App Development</h5>
                </div>
                <div className="item">
                  <img src={gauge3} alt="" />
                  <h5>Graphic Design</h5>
                </div>
                <div className="item">
                  <img src={gauge1} alt="" />
                  <h5>UI/UX Design</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};
