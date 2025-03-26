import { useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { ArrowRightCircle} from 'react-bootstrap-icons';
import headerImg from "../assets/img/header-img3.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const[loopNum, setLoopNum] = useState(0)
    const[isDeleting, setIsDeleting]= useState(false)

    const toRotate = ["código", "soluções", "experiências"]
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
          tick();
        }, delta);
    
        return () => { clearInterval(ticker) };
      }, [text])

    const tick = ()=> {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if(isDeleting){
            setDelta(prevDelta => prevDelta/ 2)
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true)
            setDelta(period)
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="aling-item-center">
                    <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                    {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <span className="tagline">Seja Bem vindo(a)</span>
                        <h1>{`Transformando ideias em `}<span className="wrap">{text}</span></h1>
                        <p>Olá! Sou Felipe, desenvolvedor de software apaixonado por 
                            tecnologia e inovação. Combinando criatividade e código, construo soluções 
                            eficientes e designs envolventes. Seja no desenvolvimento web, design gráfico ou no universo
                             dos games e cultura pop, estou sempre explorando 
                            novas formas de criar e impactar. Bem-vindo ao meu portfólio!</p>
                            <button onClick={() => console.log('connect')}>Conecte-se<ArrowRightCircle size={25}/></button>
                     </div>}       
                    </TrackVisibility>  
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                <img src={headerImg} alt="Header Img"/>
                        </div>}
                    </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}