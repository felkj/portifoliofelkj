import { useState } from "react";
import { Col, Container, Row } from 'react-bootstrap';
import contactImg from "../assets/img/contact-img.svg"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {

    const formInitialDetails ={
        firstName: '',
        email: '',
        phone:'',
        message: ''        
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const[buttonText, setButtonText] = useState('Enviar');
    const[status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Enviando...');
        try {
            let response = await fetch("https://portifoliofelkjemail.onrender.com/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "Application/json;charset=utf-8",
                },
                body: JSON.stringify(formDetails),
            });
    
            // Verifique o status HTTP da resposta
            if (!response.ok) {
                // Se o código de status não for 2xx, trata como erro
                throw new Error('Erro na comunicação com o servidor');
            }
    
            let result = await response.json();
            setButtonText("Enviar");
            setFormDetails(formInitialDetails);
    
            // Verifique a resposta com base na estrutura do servidor (por exemplo, result.message ou result.code)
            if (result.success) {
                setStatus({ success: true, message: 'Mensagem enviada com sucesso!' });
            } else {
                setStatus({ success: false, message: 'Ocorreu um erro ao enviar a mensagem!' });
            }
        } catch (error) {
            setButtonText("Enviar");
            setStatus({ success: false, message: error.message || 'Erro na comunicação com o servidor.' });
            console.error("Erro:", error);
        }
    };
    

    return(
        <section className="contact" id="contact">
           <Container>
            <Row className="align-items-center">
                <Col size={12} md={6}>
                <TrackVisibility>
                    {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contate me"/>
              }
            </TrackVisibility>
                </Col>
                <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <h2>Entre em contato</h2>
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col sm={12} className="px-1">
                            <input type="text" value={formDetails.firstName} placeholder="Nome" onChange={(e) => onFormUpdate('firstName', e.target.value)}/>
                            </Col>
                            <Col sm={6} className="px-1">
                            <input type="email" value={formDetails.email} placeholder="E-mail" onChange={(e) => onFormUpdate('email', e.target.value)}/>
                            </Col>
                            <Col sm={6} className="px-1">
                            <input type="tel" value={formDetails.phone} placeholder="Telefone" onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                            </Col>
                            <Col>
                                <textarea rows="6" value={formDetails.message} placeholder="Mensagem" onChange={(e) => onFormUpdate('message', e.target.value)}/>
                                <button type="submit"><span>{buttonText}</span></button>
                            </Col>
                                
                        </Row>
                                {
                                    status.message &&
                                    <Col>
                                     <p className={status.success === false ? "Erro" : "Sucesso"}>{status.message}</p>
                                    </Col>
                                }
                    </form>
                    </div>}
                    </TrackVisibility>
                </Col>
            </Row>
            </Container> 
        </section>
    )
}