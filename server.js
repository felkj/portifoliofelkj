require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

app.listen(5000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Preparado para enviar");
  }
});

app.post("/contact", (req, res) => {
  const { firstName, email, message, phone } = req.body;
  const name = `${firstName}`;

  const mail = {
    from: name,
    to: "felipep1424@gmail.com",
    subject: "Formulário de Contato - Portfolio",
    html: `<p>Nome: ${name}</p>
           <p>Email: ${email}</p>
           <p>Telefone: ${phone}</p>
           <p>Mensagem: ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ success: false, message: "Erro ao enviar mensagem!" });
    } else {
      res.json({ success: true, message: "Mensagem enviada com sucesso!" });
    }
  });
});
