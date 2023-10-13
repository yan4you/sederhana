import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

const HeroComp = () => {
  return (
    <div className='hero min-vh-100 w-100'>
        <Container>
            <Row>
                <Col className='text-white text-center'>
                <h1>The Red</h1>
                    <p>Warnet untuk menghibur pikiran anda dari stres</p>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default HeroComp;        