import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import StockCard from "../components/stock-card/stockCard";

function Home() {
  return (
    <Container fluid>
      Stock Visualizer
      <Row>
        <Col md={{ span: 4, offset: 7 }}>
          <Button>
            <img
              src=".\Add_Button.png"
              alt="Add Portfolio IMG"
              width="75"
              height="75"
            />
            <div>Add Portfolio</div>
          </Button>
        </Col>
      </Row>
      <Row className="justify-content-md-center" xs={2} md={4} lg={6}>
        <StockCard />
      </Row>
    </Container>
  );
}

export default Home;
