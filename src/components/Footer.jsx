import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <footer>
                <Container className="py-3">
                    <Row>
                        <Col sm={12} md={3}>
                            <h4>Contact us</h4>
                            <p>(+800) 123 456 7890</p>
                            <p>manager@shop.com</p>
                            <p>Location store</p>
                        </Col>
                        <Col sm={12} md={6}>
                            <div className="subscribe">
                                <h3>Subscribe now</h3>
                                <h5>
                                    Contrary to popular belief of lorem Ipsm
                                    Latin amet ltin from.
                                </h5>
                                <div className="input-field">
                                    <input
                                        type="text"
                                        placeholder="Your email address"
                                    />
                                    <button>Sent</button>
                                </div>
                            </div>
                        </Col>
                        <Col className="quick-link" sm={12} md={3}>
                            <h4>Quick Links</h4>
                            <Link to="/">Log in</Link>
                            <Link to="/">Sign up</Link>
                            <Link to="/">Contact</Link>
                            <Link to="/">Products</Link>
                        </Col>
                    </Row>
                </Container>
                <div className="copy-right">
                    <Container>
                        <p>Copyright © 2020 Convenience Store</p>
                        <div className="social-media">
                            <Link to="/">f</Link>
                            <Link to="/">I</Link>
                        </div>
                    </Container>
                </div>
            </footer>
        </>
    );
}

export default Footer;
