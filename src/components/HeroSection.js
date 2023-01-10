import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Parallax } from 'react-scroll-parallax';

import '../styles/HeroSection.css';
import NavbarHeader from './NavbarHeader';

import Maimage from '../assets/Maimage.svg';


function HeroSection() {
    return (
        <Container fluid className="herosection">
            <NavbarHeader />

            <Row>
                <Col xs={12} md={6} lg={6}>
                <Parallax speed={0}>
                    <div className="HerosectionText" >
                        <h1><strong>Yinka Oluwasegun</strong></h1>
                        <p style={{ lineHeight: 30 + 'PX', fontSize: 0.9 + 'rem',marginTop:1+'rem', }}>I'm a  <span style={{ background: '#1C1B1B', color: 'white', fontWeight: 'bolder', padding: 4, margin: 2, }}> Product Designer </span>  who focus on turning a complex
                            problems into reasonable Products interface, I design things
                            blending my vast design skill set and perspectives to create user-centered designed
                        </p>
                        <Button  variant="outline-dark contactbtn">CONTACT ME</Button>
                    </div>
                    </Parallax>
                </Col>
                <Col xs={12}  md={6} lg={6}>
                    <center>
                        <img style={{ marginLeft: -15 }}
                            className="img-fluid abouturbanImage"
                            src={Maimage}
                            alt="abouturbanImage"
                        />
                    </center>
                </Col>
            </Row>
        </Container>

    );
}

export default HeroSection;
