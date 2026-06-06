import { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { certificationsData } from "../data/certifications";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from "react-on-screen";
import "animate.css";
import "./Certifications.css";

export const Certifications = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const handleShowModal = (cert) => {
    setSelectedCert(cert);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCert(null);
  };

  return (
    <section className="certifications" id="certifications">
      <Container>
        <Row className="align-items-center">
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={isVisible ? "animate__animated animate__fadeIn" : ""}
                >
                  <h2 className="certifications__title">Certificações</h2>
                  <p className="certifications__subtitle">
                    Formações e certificações obtidas ao longo da carreira
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>

        <Row className="certifications__grid">
          {certificationsData.map((cert, index) => (
            <Col key={cert.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={`certification-card ${
                      isVisible ? "animate__animated animate__zoomIn" : ""
                    }`}
                    onClick={() => handleShowModal(cert)}
                    style={{
                      animationDelay: `${index * 0.1}s`,
                    }}
                  >
                    <div className="cert-badge">
                      <img
                        src={cert.badgeUrl}
                        alt={cert.issuer}
                        loading="lazy"
                      />
                    </div>
                    <div className="cert-content">
                      <h5 className="cert-title">{cert.title}</h5>
                      <p className="cert-issuer">{cert.issuer}</p>
                      <span className="cert-date">{cert.date}</span>
                    </div>
                    <div className="cert-hover">
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleShowModal(cert);
                        }}
                      >
                        Ver Detalhes
                      </Button>
                    </div>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Modal */}
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        centered
        className="cert-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">
            {selectedCert?.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-content-wrapper">
            <div className="modal-badge">
              <img
                src={selectedCert?.badgeUrl}
                alt={selectedCert?.issuer}
                loading="lazy"
              />
            </div>
            <div className="modal-info">
              <p className="info-label">
                <strong>Emissor:</strong> {selectedCert?.issuer}
              </p>
              <p className="info-label">
                <strong>Data:</strong> {selectedCert?.date}
              </p>
              <p className="info-description">{selectedCert?.description}</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleCloseModal}
          >
            Fechar
          </Button>
          <Button
            variant="primary"
            href={selectedCert?.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver Comprovante
          </Button>
        </Modal.Footer>
      </Modal>

      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      />
    </section>
  );
};
