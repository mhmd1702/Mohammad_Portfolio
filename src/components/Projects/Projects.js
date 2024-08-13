import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Snake from "../../Assets/Projects/Snake.jpg";
import face from "../../Assets/Projects/face.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Snake}
              isBlog={false}
              title="Blockade Game"
              description="Developed a Python-based Blocked Game using advanced algorithms. Simplified gameplay through an intuitive interface. Automated game logic with accurate event handling. Implemented real-time notifications for achievements for improved engagement."
              ghLink="https://github.com/mhmd1702/Blockade"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={face}
              isBlog={false}
              title="Face Recognition Attendance System"
              description="Developed a Python Face Recognition Attendance System using advanced computer vision technology. Simplified attendance tracking for students through an intuitive interface. Automated attendance management with accurate individual identification. Implemented absentee notifications via email for improved efficiency."
              ghLink="https://github.com/mhmd1702/Face"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
