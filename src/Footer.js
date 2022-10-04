import React from 'react';
import {Row, Container, Col} from 'react-bootstrap';

function Footer() {
    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        Jakob Ripley
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={4}>
                        This site was made by Jakob Ripley
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;