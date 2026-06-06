import { useState, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { certificationsData } from "../data/certifications";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from "react-on-screen";
import "animate.css";
import "./Certifications.css";

export const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentCert = certificationsData[currentIndex];

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? certificationsData.length - 1 : prev - 1
    );
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === certificationsData.length - 1 ? 0 : prev + 1
    );
  }, []);

  const goToCertification = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  // Função para obter a URL do certificado (externa ou local)
  const getCertificateUrl = useCallback(() => {
    if (currentCert?.credentialUrl) {
      return currentCert.credentialUrl;
    }
    if (currentCert?.certificatePdfPath) {
      // Caminho público para o PDF local
      return `/certificates/${currentCert.certificatePdfPath}`;
    }
    return null;
  }, [currentCert]);

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
                  <h2 className="certifications__title">Certificações Relevantes</h2>
                  <p className="certifications__subtitle">
                    Formações e certificados que conquistei ao longo da carreira
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>

        {/* Carrossel Estilo Stories */}
        <Row className="certifications__carousel">
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={`carousel-container ${
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }`}
                >
                  {/* Botão Anterior */}
                  <button
                    className="carousel-button carousel-button-prev"
                    onClick={handlePrev}
                    aria-label="Certificação anterior"
                  >
                    <ChevronLeft size={32} />
                  </button>

                  {/* Card Principal */}
                  <div className="carousel-card">
                    <div className="card-image">
                      <img
                        src={currentCert?.badgeUrl}
                        alt={currentCert?.issuer}
                        loading="lazy"
                        className="cert-image"
                      />
                    </div>
                    <div className="card-content">
                      <h3 className="card-title">{currentCert?.title}</h3>
                      <p className="card-issuer">{currentCert?.issuer}</p>
                      <p className="card-date">
                        <span className="label">Obtida em:</span> {currentCert?.date}
                      </p>
                      <p className="card-description">{currentCert?.description}</p>
                      {getCertificateUrl() && (
                        <a
                          href={getCertificateUrl()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cert-link"
                        >
                          Ver Comprovante →
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Botão Próximo */}
                  <button
                    className="carousel-button carousel-button-next"
                    onClick={handleNext}
                    aria-label="Próxima certificação"
                  >
                    <ChevronRight size={32} />
                  </button>
                </div>
              )}
            </TrackVisibility>

            {/* Dots Indicadores (Bolinhas) */}
            <div className="carousel-dots">
              {certificationsData.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentIndex ? "active" : ""}`}
                  onClick={() => goToCertification(index)}
                  aria-label={`Ir para certificação ${index + 1}`}
                />
              ))}
            </div>

            {/* Contador */}
            <div className="carousel-counter">
              {currentIndex + 1} / {certificationsData.length}
            </div>
          </Col>
        </Row>
      </Container>

      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      />
    </section>
  );
};
