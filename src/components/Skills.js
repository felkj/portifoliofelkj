import { Col, Container, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel"
import { skillsData } from '../data/skills';
import Angular from '../assets/img/skills/Angular.svg';
import BDDados from '../assets/img/skills/BancoDeDados.svg';
import CSS from '../assets/img/skills/CSS.svg';
import HTML from '../assets/img/skills/HTML.svg';
import Java from '../assets/img/skills/Java.svg';
import nodeJS from '../assets/img/skills/nodejs.svg';
import Git from '../assets/img/skills/Git.svg';
import React from '../assets/img/skills/react.svg';
import spring from '../assets/img/skills/spring.svg';
import TypeScript from '../assets/img/skills/typescript.svg';
import Azure from '../assets/img/skills/azure.svg';
import AWS from '../assets/img/skills/aws.svg';
import Redis from '../assets/img/skills/redis.svg';
import Prometheus from '../assets/img/skills/prometheus.svg';
import Grafana from '../assets/img/skills/grafana.svg';
import Docker from '../assets/img/skills/docker.svg';
import RabbitMQ from '../assets/img/skills/rabbitmq.svg';
import Kafka from '../assets/img/skills/kafka.svg';
import ApiRest from '../assets/img/skills/apirest.svg';
import colorSharp from '../assets/img/backgrounds/color-sharp.png'

// Mapeamento de imagens
const skillImages = {
  'Java.svg': Java,
  'HTML.svg': HTML,
  'CSS.svg': CSS,
  'apirest.svg': ApiRest,
  'spring.svg': spring,
  'Angular.svg': Angular,
  'react.svg': React,
  'typescript.svg': TypeScript,
  'BancoDeDados.svg': BDDados,
  'Git.svg': Git,
  'nodejs.svg': nodeJS,
  'html.svg': HTML,
  'css.svg': CSS,
  'azure.svg': Azure,
  'aws.svg': AWS,
  'redis.svg': Redis,
  'prometheus.svg': Prometheus,
  'grafana.svg': Grafana,
  'docker.svg': Docker,
  'rabbitmq.svg': RabbitMQ,
  'kafka.svg': Kafka
};

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
                            <p>Desenvolvedor Back-end com experiência em APIs REST, Microsserviços e Arquiteturas Distribuídas. Proficiente em Java, Spring Boot, RabbitMQ, Kafka, Redis, Prometheus e Grafana. Certificado AWS Cloud Practitioner com sólida experiência em Azure DevOps e metodologias ágeis.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                               {skillsData.map((skill) => (
                                 <div key={skill.id} className="item">
                                    <img 
                                      src={skillImages[skill.image] || BDDados} 
                                      alt={skill.name}
                                    />
                                    <h5>{skill.name}</h5>
                                 </div>
                               ))}
                            </Carousel>
                            <p>Sempre buscando desafios técnicos reais e em constante evolução como desenvolvedor de software! 🚀</p>   
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt=""/>
        </section>
      )
}