import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import StockCard from "../components/stock-card/stockCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./home.css"

function Home() {

  function usePointer(e){
    e.target.style.cursor = "pointer";
  }

  function addPortfolio(){
    console.log("inside add portfolio")
  }

  return (
    <Container fluid>
      Stock Visualizer
      <Row>
        <Col  xs={{  offset: 6 }} lg={{  offset: 8 }} >
          <FontAwesomeIcon icon="plus-circle" size="3x" onMouseOver={usePointer} onClick={addPortfolio}></FontAwesomeIcon>
        </Col>
      </Row>
      <StockCard />
    </Container>
  );
}

export default Home;
