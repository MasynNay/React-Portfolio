import { Col } from "react-bootstrap";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  webLink,
  gitLink,
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        {imgUrl ? (
          <a href={webLink || "#"} target="_blank" rel="noopener noreferrer">
            <img src={imgUrl} alt={title} />
          </a>
        ) : (
          <div className="placeholder-image">No Image Available</div>
        )}
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          <br />
          {webLink && (
            <a href={webLink} target="_blank" rel="noopener noreferrer">
              <button className="projectbtn">View Website</button>
            </a>
          )}
          {gitLink && (
            <a href={gitLink} target="_blank" rel="noopener noreferrer">
              <button className="projectbtn">View GitHub Repo</button>
            </a>
          )}
        </div>
      </div>
    </Col>
  );
};
