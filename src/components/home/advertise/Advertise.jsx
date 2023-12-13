/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Advertise = () => {
  return (
    <div className="mb-4">
      <Container>
        <Row>
          <Col md={3}>
            <a href="">
              <img src="/count.jpg" alt="" className="img-fluid" style={{width: '350px', height: '250px'}} />
            </a>
          </Col>
          <Col md={3}>
            <a href="">
              <img src="/count.jpg" alt="" className="img-fluid" style={{width: '350px', height: '250px'}} />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Advertise;
