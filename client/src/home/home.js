import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import StockCard from "../components/stock-card/stockCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
  return (
    <Container fluid>
      Stock Visualizer
      <Row>
        <Col md={{ span: 4, offset: 7 }}>
          <FontAwesomeIcon icon="plus-circle">Hello</FontAwesomeIcon>
        </Col>
      </Row>
      <Row className="justify-content-md-center" xs={2} md={4} lg={6}>
        <StockCard />
      </Row>
    </Container>
  );
}

export default Home;
