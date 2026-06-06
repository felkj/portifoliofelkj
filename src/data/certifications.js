// Dados de certificações - adicione suas certificações aqui
// 
// IMPORTANTE: Para cada certificação, escolha uma opção:
// 1. credentialUrl: URL externa para verificação (ex: URL do Credly, EF SET, etc)
// 2. certificatePdfPath: Caminho para PDF local em public/certificates/ (ex: "certificate-aws.pdf")
//    - Para PDFs locais, coloque o arquivo em public/certificates/
//    - Será aberto no navegador em nova aba (não faz download)
//    - Use apenas o nome do arquivo, sem caminho completo

export const certificationsData = [
  {
    id: 1,
    title: "Cloud Practitioner",
    issuer: "AWS",
    date: "2025",
    credentialUrl: "https://cp.certmetrics.com/amazon/en/public/verify/credential/230285765b134f40ac5933c7ec100fea",
    certificatePdfPath: null,
    badgeUrl: "https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png", 
    description: "Certificação AWS Cloud Practitioner, demonstrando conhecimento fundamental dos serviços e conceitos de computação em nuvem da Amazon Web Services.",
  },
  {
    id: 2,
    title: "Ingles intermediário",
    issuer: "EF SET",
    date: "2025",
    credentialUrl: "https://cert.efset.org/y6nfmj",
    certificatePdfPath: null,
    badgeUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSOR4dthqoBpBogEkuIk672jrJj-BttJPwdQ&s",
    description: "Certificado de Inglês intermediário, demonstrando habilidades de comunicação e compreensão em inglês.",
  },
  {
    id: 3,
    title: "Java Fundamentos",
    issuer: "FIAP",
    date: "2025",
    credentialUrl: null,
    certificatePdfPath: "JavaDevelopment.pdf",
    badgeUrl: "https://play-lh.googleusercontent.com/S70rI7VrwLic7_p-ax7iAOOopQhcPCzmqyLe5RLJmApTpkgTRaCwWsTNN1Uv1t_t3Pp5",
    description: "Certificação em fundamentos de Java com boas práticas de programação orientada a objetos.",
  },
  {
    id: 4,
    title: "GFT Start #7 Java",
    issuer: "DIO",
    date: "2025",
    credentialUrl: "https://hermes.dio.me/certificates/KE8LJHGL.pdf",
    certificatePdfPath: null,
    badgeUrl: "https://yt3.googleusercontent.com/_HfgLNdU77la-nFe97KHYFdhfi1IH-1J0I9WUfC9vOeQZWXl53aPGiQG3y2MMwWz0wjgFN56Eiw=s900-c-k-c0x00ffffff-no-rj",
    description: "Bootcamp de Java, com foco em desenvolvimento back-end, APIs REST e boas práticas de programação.",
  },
  {
    id: 5,
    title: "GFT Start #7 .NET",
    issuer: "DIO",
    date: "2025",
    credentialUrl: "https://hermes.dio.me/certificates/6CKSRZ0P.pdf",
    certificatePdfPath: null,
    badgeUrl: "https://yt3.googleusercontent.com/_HfgLNdU77la-nFe97KHYFdhfi1IH-1J0I9WUfC9vOeQZWXl53aPGiQG3y2MMwWz0wjgFN56Eiw=s900-c-k-c0x00ffffff-no-rj",
    description: "Bootcamp de .NET, com foco em desenvolvimento back-end, APIs REST e boas práticas de programação.",
  }
];
