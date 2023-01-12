import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/AboutUs.css';

function AboutUs() {
    return (
        <Container fluid className="AboutUspage">
            <div className="aboutbody">
                <h1>About</h1>
                <p>
                    I'm a creative-minded and multi-faced product designer  driven to create awesome and
                    functional products with a great experiences. I have over 3 years of experience and
                    have been a part of bringing both enterprise and consumer-facing solutions to life,
                </p>
                <br/>
                <p>
                    I have a diverse design skillsets that spread across UI/UX design, wireframing, creating
                    user-flow, branding, motion design and illustration .I understand the importance of human
                    centered design and its impacts on how it will interact with product and services and
                    strive for that at all times
                </p>
            </div>
        </Container>

    );
}

export default AboutUs;
