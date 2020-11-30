import React from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

function StockCard(props) {

    return (
        <Card style={{ width: '18rem' }}>
            content here
            <Card.Body>
                <Card.Title>Name of Portfolio</Card.Title>
                <Card.Text>
                    <Container>
                        <Row>
                            <Col>Daily</Col>
                            <Col>Monthly</Col>
                            <Col>Yearly</Col>
                        </Row>
                        <Row>
                            <Col>{ }</Col>
                            <Col>{ }</Col>
                            <Col>{ }</Col>
                        </Row>
                        <Row>
                            <Col>Total Value</Col>
                            <Col>Total Gain</Col>
                        </Row>
                        <Row>
                            <Col>{ }</Col>
                            <Col>{ }</Col>
                        </Row>
                    </Container>
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default StockCard;
