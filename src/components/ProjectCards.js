import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, Url, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <a href={Url} target="_blank">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
        </a>
      </div>
    </Col>
  )
}