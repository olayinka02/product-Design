import React, { useState } from 'react';
import { Container, Offcanvas, Row, Col } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

import AnimatedCursor from "react-animated-cursor";

import '../styles/NavbarHeader.css';

function NavbarHeader() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>

            <Navbar fixed="top" className="nav">
                <AnimatedCursor
                    innerSize={5}
                    outerSize={36}
                    color='95,95,95'
                    outerAlpha={0.25}
                    innerScale={0.7}
                    outerScale={1.5}
                    outerStyle={{ border: '1.5px solid #4A4A4A' }}
                    innerStyle={{ border: '2px solid #4A4A4A' }}
                    trailingSpeed={10}
                    clickables={[
                        'a',
                        'input[type="text"]',
                        'input[type="email"]',
                        'input[type="number"]',
                        'input[type="submit"]',
                        'input[type="image"]',
                        'label[for]',
                        'select',
                        'textarea',
                        'button',
                        '.link'
                    ]}
                />
                <Container fluid  >
                    <Navbar.Brand href="#home">
                        <svg width="90" height="34" style={{ marginLeft: -18, }} viewBox="0 0 112 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M56.4118 19.5588V35.4118H62.3824L75.1471 13.3824L97.1765 50.6471H112L82.9706 0H67.9412L56.4118 19.5588Z" fill="#3A3A3C" />
                            <path d="M41.1765 23.0588L41.5882 50.4412H87.7059L75.3529 29.0294L70.8235 38.5H53.9412V23.4706C53.9412 10.5081 43.433 0 30.4706 0H25.1177C11.2456 0 0 11.2456 0 25.1177V28.8235C0 42.6956 11.2456 53.9412 25.1177 53.9412H38.9118V35.4118L32.2271 39.0112C31.3359 39.4911 30.3762 39.8311 29.3817 40.0192C22.2488 41.3687 15.6471 35.8988 15.6471 28.6394V22.8488C15.6471 17.6344 19.6836 13.3099 24.8857 12.9511L28.3171 12.7144C34.6464 12.2779 40.2467 16.783 41.1765 23.0588Z" fill="#3A3A3C" />
                            <ellipse cx="28" cy="26.1471" rx="9.47059" ry="9.67647" fill="#3A3A3C" />
                        </svg>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <svg onClick={handleShow} width="37" height="25" viewBox="0 0 40 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect className="harmburgerrect" x="0.925354" y="0.833252" width="38" height="3.5" rx="1.07801" />
                                <rect className="harmburgerrect" x="0.925354" y="11.0745" width="38.2695" height="3.5" rx="1.07801" />
                                <rect className="harmburgerrect" x="0.925354" y="21.3154" width="23.1773" height="3.5" rx="1.07801" />
                            </svg>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Offcanvas show={show} onHide={handleClose} className="offcanvas">
                <AnimatedCursor
                    innerSize={5}
                    outerSize={36}
                    color='95,95,95'
                    outerAlpha={0.25}
                    innerScale={0.7}
                    outerScale={1.5}
                    outerStyle={{ border: '1.5px solid #4A4A4A' }}
                    innerStyle={{ border: '2px solid #4A4A4A' }}
                    trailingSpeed={10}
                    clickables={[
                        'a',
                        'input[type="text"]',
                        'input[type="email"]',
                        'input[type="number"]',
                        'input[type="submit"]',
                        'input[type="image"]',
                        'label[for]',
                        'select',
                        'textarea',
                        'button',
                        '.link'
                    ]}
                />

                <Container fluid>
                    <Row>
                        <Col xs={2} md={2} lg={1}  >
                            <Row style={{ backgroundColor: 'white', height: 50 + 'vh', borderTop: '2.1px solid #1C1B1B', borderRight: '1.3px solid #FBFAFA', borderBottom: '1.3px solid #FBFAFA', paddingTop: 20 + '%' }}>
                                <svg width="67" height="140" viewBox="0 0 67 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.279 69.0035H43.9578V61.592L16.612 45.7468L62.8699 18.4009V-3.05176e-05L0 36.0352L0 54.6917L24.279 69.0035Z" fill="#1C1B1B" />
                                    <path d="M28.6237 87.9157L62.6143 87.4045L62.6143 30.1571L36.0352 45.4913L47.7914 51.1138L47.7914 72.0704H29.1348C13.0441 72.0704 0 85.1145 0 101.205L0 107.85C0 125.07 13.9595 139.029 31.1794 139.029H35.7796C52.9995 139.029 66.959 125.07 66.959 107.85V90.7269H43.9578L48.4259 99.0248C49.0216 100.131 49.4436 101.322 49.6772 102.557C51.3523 111.411 44.5624 119.606 35.5511 119.606H28.363C21.8902 119.606 16.522 114.595 16.0766 108.138L15.7829 103.879C15.241 96.0217 20.8333 89.0698 28.6237 87.9157Z" fill="#1C1B1B" />
                                    <ellipse cx="32.457" cy="104.272" rx="11.7562" ry="12.0117" transform="rotate(-90 32.457 104.272)" fill="#1C1B1B" />
                                </svg>
                            </Row>
                            <Row style={{ backgroundColor: '#1C1B1B', height: 50 + 'vh', borderRight: '1.3px solid #FBFAFA', paddingTop: 1.3 + 'rem' }}>
                                <svg width="15" height="140" viewBox="0 0 25 190" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.5 98.554L4.95455 102.588V100.28L16.2188 97.446V97.3111L4.95455 94.3636V92.0767L16.2259 89.1293V88.9943L4.95455 86.1676V83.8523L19.5 87.8935V90.1023L8.60511 93.1634V93.277L19.5 96.3381V98.554ZM19.5 81.8512H4.95455V72.7319H6.84375V79.6566H11.2756V73.2077H13.1577V79.6566H17.6108V72.6467H19.5V81.8512ZM19.5 69.8004H4.95455V67.6058H17.6108V61.0149H19.5V69.8004ZM9.68466 46.9968V49.2127C9.21117 49.2979 8.79451 49.4566 8.43466 49.6886C8.07481 49.9206 7.76941 50.2047 7.51847 50.5408C7.26752 50.877 7.07812 51.2534 6.95028 51.6701C6.82244 52.082 6.75852 52.52 6.75852 52.984C6.75852 53.8221 6.96922 54.5726 7.39062 55.2354C7.81203 55.8936 8.42992 56.4144 9.24432 56.7979C10.0587 57.1767 11.053 57.3661 12.2273 57.3661C13.411 57.3661 14.41 57.1767 15.2244 56.7979C16.0388 56.4144 16.6544 55.8912 17.071 55.2283C17.4877 54.5655 17.696 53.8197 17.696 52.9911C17.696 52.5318 17.6345 52.0962 17.5114 51.6843C17.3835 51.2676 17.1965 50.8912 16.9503 50.555C16.7041 50.2189 16.4034 49.9348 16.0483 49.7028C15.6884 49.466 15.2765 49.3027 14.8125 49.2127L14.8196 46.9968C15.5346 47.1152 16.1927 47.3448 16.794 47.6857C17.3906 48.0219 17.9067 48.4551 18.3423 48.9854C18.7732 49.511 19.107 50.1123 19.3438 50.7894C19.5805 51.4665 19.6989 52.2051 19.6989 53.0053C19.6989 54.2648 19.4006 55.387 18.804 56.3718C18.2027 57.3567 17.3433 58.1332 16.2259 58.7013C15.1084 59.2648 13.7756 59.5465 12.2273 59.5465C10.6742 59.5465 9.34138 59.2624 8.22869 58.6942C7.11127 58.1261 6.25426 57.3496 5.65767 56.3647C5.05634 55.3799 4.75568 54.2601 4.75568 53.0053C4.75568 52.2335 4.86695 51.5138 5.08949 50.8462C5.30729 50.1739 5.62926 49.5702 6.0554 49.0352C6.4768 48.5001 6.9929 48.0574 7.60369 47.707C8.20975 47.3567 8.90341 47.1199 9.68466 46.9968ZM12.2273 31.7358C13.7803 31.7358 15.1155 32.0199 16.233 32.5881C17.3456 33.1562 18.2027 33.9351 18.804 34.9247C19.4006 35.9096 19.6989 37.0294 19.6989 38.2841C19.6989 39.5436 19.4006 40.6681 18.804 41.6577C18.2027 42.6425 17.3433 43.419 16.2259 43.9872C15.1084 44.5554 13.7756 44.8395 12.2273 44.8395C10.6742 44.8395 9.34138 44.5554 8.22869 43.9872C7.11127 43.419 6.25426 42.6425 5.65767 41.6577C5.05634 40.6681 4.75568 39.5436 4.75568 38.2841C4.75568 37.0294 5.05634 35.9096 5.65767 34.9247C6.25426 33.9351 7.11127 33.1562 8.22869 32.5881C9.34138 32.0199 10.6742 31.7358 12.2273 31.7358ZM12.2273 33.9091C11.0436 33.9091 10.0469 34.1009 9.23722 34.4844C8.42282 34.8632 7.80729 35.384 7.39062 36.0469C6.96922 36.705 6.75852 37.4508 6.75852 38.2841C6.75852 39.1222 6.96922 39.8703 7.39062 40.5284C7.80729 41.1866 8.42282 41.7074 9.23722 42.0909C10.0469 42.4697 11.0436 42.6591 12.2273 42.6591C13.411 42.6591 14.41 42.4697 15.2244 42.0909C16.0341 41.7074 16.6496 41.1866 17.071 40.5284C17.4877 39.8703 17.696 39.1222 17.696 38.2841C17.696 37.4508 17.4877 36.705 17.071 36.0469C16.6496 35.384 16.0341 34.8632 15.2244 34.4844C14.41 34.1009 13.411 33.9091 12.2273 33.9091ZM4.95455 28.9996V26.3363L16.2614 21.7056V21.5352L4.95455 16.9045V14.2411H19.5V16.3292H8.97443V16.4641L19.4787 20.7539V22.4869L8.96733 26.7766V26.9116H19.5V28.9996H4.95455ZM19.5 11.0504H4.95455V1.93111H6.84375V8.85582H11.2756V2.40696H13.1577V8.85582H17.6108V1.84588H19.5V11.0504Z" fill="#FCFCFC" />
                                    <line x1="13.5" y1="120" x2="13.5" y2="150" stroke="#FCFCFC" stroke-width="2" />
                                </svg>
                            </Row>

                        </Col>
                        <Col xs={10} md={10} lg={11} className="offcanvasbody" >
                            <Offcanvas.Header closeButton closeVariant='white' style={{ color: 'white' }}>
                                <Offcanvas.Title style={{ fontSize: 0.7 + 'rem' }}>NAVIGATION</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body style={{ width: 100 + '%' }} >
                                <ul id="navigationnav">
                                    <li>
                                        <span>Home</span>
                                    </li>
                                    <li>
                                        <span>Skills</span>
                                    </li>
                                    <li>
                                        <span>Experience</span>
                                    </li>
                                    <li>
                                        <span>Products+</span>
                                    </li>
                                    <li>
                                        <span>Blog</span>
                                    </li>
                                </ul>
                            </Offcanvas.Body>
                        </Col>
                    </Row>
                </Container>
            </Offcanvas>
        </div>
    );
}

export default NavbarHeader;