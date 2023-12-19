import useFetch from "@/hooks/useFetch";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const HomeWelcomeMessage = ({ welcomeMessage }) => {
  return (
    <div>
      <Container>
        <Row className="mb-5">
          <Col md={9} className="mx-auto shadow border p-4">
            <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#009cff" }}>
              Welcome Message from University Student&apos;s Association
            </h2>
            <p>{welcomeMessage?.data[0]?.dureg}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeWelcomeMessage;
