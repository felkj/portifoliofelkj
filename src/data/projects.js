import projImg1 from '../assets/img/projects/projImg1.png';
import projImg2 from '../assets/img/projects/projImg2.png';
import projImg3 from '../assets/img/projects/projImg3.png';
import projImg4 from '../assets/img/projects/projImg4.png';
import projImg5 from '../assets/img/projects/projImg5.png';
import projImg6 from '../assets/img/projects/projImg6.png';
import projImg7 from '../assets/img/projects/projImg7.png';
import projImg8 from '../assets/img/projects/projImg8.png';
import projImg9 from '../assets/img/projects/projImg9.png';

export const projectsData = [
  {
    id: 1,
    title: "Site com tema de Cyberpunk 2077",
    description: "Página temática sobre o jogo, criada para aprimorar habilidades em HTML, CSS e JavaScript.",
    liveUrl: 'https://fascinating-bienenstitch-bfee27.netlify.app',
    githubUrl: 'https://github.com/felkj/Cyberpunk',
    imgUrl: projImg1,
    tags: ["front-end"],
    technologies: ["HTML5", "CSS3", "JavaScript"]
  },
  {
    id: 2,
    title: "Blog com noticias de jogos",
    description: "Blog desenvolvido em Angular 19, trazendo notícias do mundo dos games.",
    liveUrl: 'https://taupe-alpaca-4046f6.netlify.app',
    githubUrl: 'https://github.com/felkj/BlogAngular',
    imgUrl: projImg2,
    tags: ["front-end"],
    technologies: ["Angular 19", "TypeScript", "CSS"]
  },
  {
    id: 3,
    title: "Quiz Invencivel",
    description: "Quiz interativo em Angular 19 para descobrir qual personagem da animação 'Invencível' você seria.",
    liveUrl: 'https://quizinvencivel.netlify.app',
    githubUrl: 'https://github.com/felkj/QuizZInvencivel',
    imgUrl: projImg3,
    tags: ["front-end"],
    technologies: ["Angular 19", "TypeScript", "RxJS"]
  },
  {
    id: 4,
    title: "MyMoovies",
    description: "Aplicação em React que exibe os filmes mais bem avaliados da base de dados TMDB.",
    liveUrl: 'https://main--fancy-crumble-54c468.netlify.app',
    githubUrl: 'https://github.com/felkj/Mymoovies',
    imgUrl: projImg4,
    tags: ["full-stack"],
    technologies: ["React", "JavaScript", "API REST"]
  },
  {
    id: 5,
    title: "Site fictício de vendas",
    description: "Projeto desenvolvido no ensino médio técnico, simulando uma loja virtual.",
    liveUrl: 'http://importssite.great-site.net/?i=1#',
    githubUrl: null,
    imgUrl: projImg5,
    tags: ["full-stack"],
    technologies: ["HTML", "CSS", "JavaScript", "PHP"]
  },
  {
    id: 6,
    title: "API REST na Nuvem Usando Spring Boot 3, Java 17 e Railway",
    description: "Criação de uma api rest com springboot no Java.",
    liveUrl: null,
    githubUrl: 'https://github.com/felkj/restful-api-java',
    imgUrl: projImg6,
    tags: ["back-end"],
    technologies: ["Java 17", "Spring Boot 3", "Railway"]
  },
  {
    id: 7,
    title: "Aplicativo de Agendamentos para barbearia",
    description: "Criação de um aplicativo feito em Angular 19 e Java com springboot, com conexão com banco de dados",
    liveUrl: 'https://barbershopangularwithjavaapi.netlify.app/schedules/month',
    githubUrl: 'https://github.com/felkj/Api-agendamentos',
    imgUrl: projImg7,
    tags: ["full-stack"],
    technologies: ["Angular 19", "Java", "Spring Boot", "PostgreSQL"]
  },
  {
    id: 8,
    title: "CRUD de Veiculos",
    description: "Aplicativo CRUD de veículos, desenvolvido com Angular 19 e Java com Spring Boot e JWT para segurança.",
    liveUrl: 'https://crudveiculosfelkj.netlify.app',
    githubUrl: 'https://github.com/felkj/crud-veiculos',
    imgUrl: projImg8,
    tags: ["full-stack"],
    technologies: ["Angular 19", "Java", "Spring Boot", "JWT", "MySQL"]
  },
  {
    id: 9,
    title: "Microserviço de Agendamento de Exames e Consultas",
    description: "Aplicação distribuida utilizando RabbitMQ, Keycloak, Spring Boot Java, Grafana e Prometheus para observabilidade, e Docker para containerização.",
    liveUrl: null,
    githubUrl: 'https://github.com/felkj/microservice-hospital',
    imgUrl: projImg9,
    tags: ["back-end"],
    technologies: ["Java", "Spring Boot", "Docker", "RabbitMQ", "Keycloak", "Prometheus", "Grafana"]
  }
];
