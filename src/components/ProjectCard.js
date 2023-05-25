import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, webLink, gitLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <a href={webLink} target="_blank" rel="noopener noreferrer"> 
          <img src={imgUrl} alt={title} />
        </a>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br></br><br></br>
          <a href={webLink} target="_blank" rel="noopener noreferrer">
            <button class="projectbtn">View Website</button>
          </a>
          <a href={gitLink} target="_blank" rel="noopener noreferrer">
            <button class="projectbtn">View Github Repo</button>
          </a>
        </div>
      </div>
    </Col>
  )
}
