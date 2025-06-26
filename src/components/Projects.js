import { Col, Container, Row, Tab, Nav, Modal, Button } from 'react-bootstrap'; // <-- Adicione Modal e Button
import { ProjectCard } from './ProjectCards';
import colorSharp2 from '../assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useState } from "react";
// ... (importações das imagens) ...
import projImg1 from '../assets/img/projImg1.png';
import projImg2 from '../assets/img/projImg2.png';
import projImg3 from '../assets/img/projImg3.png';
import projImg4 from '../assets/img/projImg4.png';
import projImg5 from '../assets/img/projImg5.png';
import projImg6 from '../assets/img/projImg6.png';
import projImg7 from '../assets/img/projImg7.png';
import projImg8 from '../assets/img/projImg8.png';

export const Projects = () => {
    const projects = [
        {
            title: "Site com tema de Cyberpunk 2077",
            description: "Página temática sobre o jogo, criada para aprimorar habilidades em HTML, CSS e JavaScript.",
            Url: 'https://fascinating-bienenstitch-bfee27.netlify.app',
            githubUrl: 'https://github.com/felkj/Cyberpunk',
            imgUrl: projImg1,
            tags: ["front-end"]
        },
        {
            title: "Blog com noticias de jogos",
            description: "Blog desenvolvido em Angular 19, trazendo notícias do mundo dos games.",
            Url: 'https://taupe-alpaca-4046f6.netlify.app',
            githubUrl: 'https://github.com/felkj/BlogAngular',
            imgUrl: projImg2,
            tags: ["front-end"]
        },
        {
            title: "Quiz Invencivel",
            description: "Quiz interativo em Angular 19 para descobrir qual personagem da animação 'Invencível' você seria.",
            Url: 'https://quizinvencivel.netlify.app',
            githubUrl: 'https://github.com/felkj/QuizZInvencivel',
            imgUrl: projImg3,
            tags: ["front-end"]
        },
        {
            title: "MyMoovies",
            description: "Aplicação em React que exibe os filmes mais bem avaliados da base de dados TMDB.",
            Url: 'https://main--fancy-crumble-54c468.netlify.app',
            githubUrl: 'https://github.com/felkj/Mymoovies',
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
            githubUrl: 'https://github.com/felkj/restful-api-java',
            imgUrl: projImg6,
            tags: ["back-end"]
        },
        {
          title: "Aplicativo de Agendamentos para barbearia",
            description: "Criação de um aplicativo feito em Angular 19 e Java com springboot, com conexão com banco de dados",
            Url: 'https://barbershopangularwithjavaapi.netlify.app/schedules/month',
            githubUrl: 'https://github.com/felkj/Api-agendamentos',
            imgUrl: projImg7,
            tags: ["full-stack"]
        },
        {
          title: "CRUD de Veiculos",
            description: "Aplicativo CRUD de veículos, desenvolvido com Angular 19 e Java com Spring Boot e JWT para segurança.",
            Url: 'https://crudveiculosfelkj.netlify.app',
            githubUrl: 'https://github.com/felkj/crud-veiculos',
            imgUrl: projImg8,
            tags: ["full-stack"]
        }
    ];

    // Estados para o modal
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedProject(null); // Limpa o projeto selecionado ao fechar
    };

    const handleShowModal = (project) => {
        setSelectedProject(project);
        setShowModal(true);
    };

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
                                                        <ProjectCard 
                                                            key={index} 
                                                            {...project} 
                                                            onClick={() => handleShowModal(project)} // <-- Passa a função para abrir o modal
                                                        />
                                                    ))}
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <Row>
                                                    {filterProjects("back-end").map((project, index) => (
                                                        <ProjectCard 
                                                            key={index} 
                                                            {...project} 
                                                            onClick={() => handleShowModal(project)} // <-- Passa a função para abrir o modal
                                                        />
                                                    ))}
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <Row>
                                                    {filterProjects("full-stack").map((project, index) => (
                                                        <ProjectCard 
                                                            key={index} 
                                                            {...project} 
                                                            onClick={() => handleShowModal(project)} // <-- Passa a função para abrir o modal
                                                        />
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

            <Modal show={showModal} onHide={handleCloseModal} centered className="custom-project-modal"> {/* Adicione esta classe aqui */}
                <Modal.Header closeButton className="custom-project-modal-header"> {/* Adicione esta classe aqui */}
                    <Modal.Title>{selectedProject?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="custom-project-modal-body"> {/* Adicione esta classe aqui */}
                    O que você gostaria de ver?
                </Modal.Body>
                <Modal.Footer className="custom-project-modal-footer"> {/* Adicione esta classe aqui */}
                    {selectedProject?.Url && (
                        <Button
                            variant="primary"
                            onClick={() => window.open(selectedProject.Url, '_blank')}
                            className="custom-project-modal-button" // Adicione esta classe
                        >
                            Ver Projeto Hospedado
                        </Button>
                    )}
                    {selectedProject?.githubUrl && (
                        <Button
                            variant="secondary"
                            onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                            className="custom-project-modal-button" // Adicione esta classe
                        >
                            Ver no GitHub
                        </Button>
                    )}
                     <Button
                        variant="secondary"
                        onClick={handleCloseModal}
                        className="custom-project-modal-close-button" // Adicione esta classe
                    >
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>
        </section>
    );
}