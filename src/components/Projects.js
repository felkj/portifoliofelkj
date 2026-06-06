import { Col, Container, Row, Tab, Nav, Modal, Button } from 'react-bootstrap';
import { useState, useCallback } from "react";
import TrackVisibility from 'react-on-screen';
import { ProjectCard } from './ProjectCards';
import { projectsData } from '../data/projects';
import colorSharp2 from '../assets/img/backgrounds/color-sharp2.png';
import 'animate.css';

export const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Função para abrir modal
  const handleShowModal = useCallback((project) => {
    setSelectedProject(project);
    setShowModal(true);
  }, []);

  // Função para fechar modal
  const handleCloseModal = useCallback(() => {
    setShowModal(false);
    setSelectedProject(null);
  }, []);

  // Filtrar projetos por tag (otimizado com useMemo)
  const getProjectsByTag = useCallback((tag) => {
    return projectsData.filter((project) => project.tags.includes(tag));
  }, []);

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projetos</h2>
                  <p>
                    Aqui estão alguns dos projetos que desenvolvi, combinando tecnologia,
                    design e inovação. Cada um reflete minha paixão por programação e minha busca
                    por soluções funcionais e bem estruturadas. Confira! 🚀.
                  </p>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Front-End</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Back-End</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Full Stack</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content
                      id="slideInUp"
                      className={isVisible ? "animate__animated animate__slideInUp" : ""}
                    >
                      {/* Front-End Tab */}
                      <Tab.Pane eventKey="first">
                        <Row>
                          {getProjectsByTag("front-end").map((project) => (
                            <ProjectCard
                              key={project.id}
                              {...project}
                              onClick={() => handleShowModal(project)}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>

                      {/* Back-End Tab */}
                      <Tab.Pane eventKey="second">
                        <Row>
                          {getProjectsByTag("back-end").map((project) => (
                            <ProjectCard
                              key={project.id}
                              {...project}
                              onClick={() => handleShowModal(project)}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>

                      {/* Full Stack Tab */}
                      <Tab.Pane eventKey="third">
                        <Row>
                          {getProjectsByTag("full-stack").map((project) => (
                            <ProjectCard
                              key={project.id}
                              {...project}
                              onClick={() => handleShowModal(project)}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      <img className="background-image-right" src={colorSharp2} alt="background" />

      {/* Modal com Detalhes do Projeto */}
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        centered
        className="custom-project-modal"
      >
        <Modal.Header closeButton className="custom-project-modal-header">
          <Modal.Title>{selectedProject?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="custom-project-modal-body">
          <p className="project-modal-description">{selectedProject?.description}</p>
          {selectedProject?.technologies && selectedProject.technologies.length > 0 && (
            <div className="project-technologies">
              <strong>Tecnologias:</strong>
              <div className="tech-tags">
                {selectedProject.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
          <p className="project-modal-prompt">O que você gostaria de ver?</p>
        </Modal.Body>
        <Modal.Footer className="custom-project-modal-footer">
          {selectedProject?.liveUrl && (
            <Button
              variant="primary"
              onClick={() => window.open(selectedProject.liveUrl, '_blank')}
              className="custom-project-modal-button"
            >
              Ver Projeto Hospedado
            </Button>
          )}
          {selectedProject?.githubUrl && (
            <Button
              variant="secondary"
              onClick={() => window.open(selectedProject.githubUrl, '_blank')}
              className="custom-project-modal-button"
            >
              Ver no GitHub
            </Button>
          )}
          <Button
            variant="secondary"
            onClick={handleCloseModal}
            className="custom-project-modal-close-button"
          >
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};