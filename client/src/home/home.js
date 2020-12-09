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
        <Col  xs={{  offset: 6 }} lg={{  offset: 8 }} >
          <FontAwesomeIcon icon="plus-circle" size="3x"></FontAwesomeIcon>
        </Col>
      </Row>
      <StockCard />
    </Container>
  );
}

export default Home;
