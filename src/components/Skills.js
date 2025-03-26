import { Col, Container, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import  Carousel  from "react-multi-carousel"
import Angular from '../assets/img/Angular.svg';
import BDDados from '../assets/img/BancoDeDados.svg';
import CSS from '../assets/img/css.svg';
import HTML from '../assets/img/html.svg';
import Java from '../assets/img/java.svg';
import nodeJS from '../assets/img/nodejs.svg';
import Git from '../assets/img/Git.svg';
import Photoshop from '../assets/img/Photoshop.svg';
import Illustrator from '../assets/img/Illustrator.svg';
import React from '../assets/img/react.svg';
import spring from '../assets/img/spring.svg';
import TypeScript from '../assets/img/typescript.svg';
import colorSharp from '../assets/img/color-sharp.png'

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
         
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Habilidades e Ferramentas
                            </h2>
                            <p>Tenho experiência em desenvolvimento Front-end e Back-end, trabalhando com tecnologias como:</p>
                            <Carousel responsive={responsive}   infinite={true} className="skill-slider">
                               <div className="item">
                                <img src={HTML} alt="Imagem da ferramenta utilizada"/>
                                <h5>HTML</h5>
                                </div>     
                               <div className="item">
                                <img src={CSS} alt="Imagem da ferramenta utilizada"/>
                                <h5>CSS</h5>
                                </div>     
                               <div className="item">
                                <img src={Angular} alt="Imagem da ferramenta utilizada"/>
                                <h5>Angular</h5>
                                </div>     
                               <div className="item">
                                <img src={BDDados} alt="Imagem da ferramenta utilizada"/>
                                <h5>SQL & Banco de Dados</h5>
                                </div>     
                               <div className="item">
                                <img src={TypeScript} alt="Imagem da ferramenta utilizada"/>
                                <h5>TypeScript</h5>
                                </div>     
                               <div className="item">
                                <img src={Git} alt="Imagem da ferramenta utilizada"/>
                                <h5>Git/GitHub</h5>
                                </div>     
                               <div className="item">
                                <img src={Photoshop} alt="Imagem da ferramenta utilizada"/>
                                <h5>Photoshop</h5>
                                </div>     
                               <div className="item">
                                <img src={Illustrator} alt="Imagem da ferramenta utilizada"/>
                                <h5>Illustrator</h5>
                                </div>     
                               <div className="item">
                                <img src={Java} alt="Imagem da ferramenta utilizada"/>
                                <h5>Java</h5>
                                </div>
                               <div className="item">
                                <img src={spring} alt="Imagem da ferramenta utilizada"/>
                                <h5>Spring Framework</h5>
                                </div>     
                               <div className="item">
                                <img src={React} alt="Imagem da ferramenta utilizada"/>
                                <h5>ReactJS</h5>
                                </div>     
                               <div className="item">
                                <img src={nodeJS} alt="Imagem da ferramenta utilizada"/>
                                <h5>NodeJS</h5>
                                </div>
                                    
                            </Carousel>
                            <p> Sempre busco aprimorar minhas habilidades para entregar soluções eficientes e inovadoras! 🚀</p>   
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt=""/>
        </section>
      )
}