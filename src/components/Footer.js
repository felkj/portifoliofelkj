import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon4.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center ajust"></Row>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/felipe-silva-9a5950242/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/felkj"><img src={navIcon2} alt="Icon" /></a>
              <a href="mailto:felipep1424@gmail.com"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright {year}. Todos os Direitos Reservados</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}