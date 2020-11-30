import React from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { LineChart, Line } from 'recharts';

function StockCard(props) {

    const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},
    {name: 'Page b', uv: 600, pv: 2400, amt: 2400},
    {name: 'Page c', uv: 200, pv: 2400, amt: 2400},
    {name: 'Page d', uv: 300, pv: 2400, amt: 2400},
    {name: 'Page e', uv: 100, pv: 2400, amt: 2400}];

const renderLineChart = (
  <LineChart width={300} height={300} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  </LineChart>
);

    return (
        <Card style={{ width: '18rem' }}>
            {renderLineChart}
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
                            <Col>{'10%'}</Col>
                            <Col>{'20%'}</Col>
                            <Col>{'30%'}</Col>
                        </Row>
                        <Row>
                            <Col>Total Value</Col>
                            <Col>Total Gain</Col>
                        </Row>
                        <Row>
                            <Col>{'30%'}</Col>
                            <Col>{'30%'}</Col>
                        </Row>
                    </Container>
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default StockCard;
