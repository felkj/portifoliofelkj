import { Col, Container, Row, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCards';
import colorSharp2 from '../assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import projImg1 from '../assets/img/projImg1.png';
import projImg2 from '../assets/img/projImg2.png';
import projImg3 from '../assets/img/projImg3.png';
import projImg4 from '../assets/img/projImg4.png';
import projImg5 from '../assets/img/projImg5.png';
import projImg6 from '../assets/img/projImg6.png';

export const Projects = () => {
    const projects = [
        {
            title: "Site com tema de Cyberpunk 2077",
            description: "Página temática sobre o jogo, criada para aprimorar habilidades em HTML, CSS e JavaScript.",
            Url: 'https://fascinating-bienenstitch-bfee27.netlify.app',
            imgUrl: projImg1,
            tags: ["front-end"]
        },
        {
            title: "Blog com noticias de jogos",
            description: "Blog desenvolvido em Angular 19, trazendo notícias do mundo dos games.",
            Url: 'https://taupe-alpaca-4046f6.netlify.app',
            imgUrl: projImg2,
            tags: ["front-end"]
        },
        {
            title: "Quiz Invencivel",
            description: "Quiz interativo em Angular 19 para descobrir qual personagem da animação 'Invencível' você seria.",
            Url: 'https://quizinvencivel.netlify.app',
            imgUrl: projImg3,
            tags: ["front-end"]
        },
        {
            title: "MyMoovies",
            description: "Aplicação em React que exibe os filmes mais bem avaliados da base de dados TMDB.",
            Url: 'https://main--fancy-crumble-54c468.netlify.app',
            imgUrl: projImg4,
            tags: ["full-stack"]
        },
        {
            title: "Site fictício de vendas",
            description: "Projeto desenvolvido no ensino médio técnico, simulando uma loja virtual.",
            Url: 'http://importssite.great-site.net/?i=1#',
            imgUrl: projImg5,
            tags: ["full-stack"]
        }, 
        {
          title: "API REST na Nuvem Usando Spring Boot 3, Java 17 e Railway",
            description: "Criação de uma api rest com springboot no Java.",
            Url: 'https://restful-api-java-production-5ea6.up.railway.app/swagger-ui/index.html',
            imgUrl: projImg6,
            tags: ["back-end"]
        }
    ];

    const filterProjects = (tag) => projects.filter(project => project.tags.includes(tag));

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projetos</h2>
                                    <p>Aqui estão alguns dos projetos que desenvolvi, combinando tecnologia, 
                                        design e inovação. Cada um reflete minha paixão por programação e minha busca
                                        por soluções funcionais e bem estruturadas. Confira! 🚀.</p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
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
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {filterProjects("front-end").map((project, index) => (
                                                        <ProjectCard key={index} {...project} />
                                                    ))}
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <Row>
                                                    {filterProjects("back-end").map((project, index) => (
                                                        <ProjectCard key={index} {...project} />
                                                    ))}
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <Row>
                                                    {filterProjects("full-stack").map((project, index) => (
                                                        <ProjectCard key={index} {...project} />
                                                    ))}
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="background" />
        </section>
    );
}
