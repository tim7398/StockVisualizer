import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { LineChart, Line } from 'recharts';
import { getPortfolio } from '../../client/api'

function StockCard(props) {
    const [profile, setProfile] = useState([]);
    const [isLoading, setIsLoading] = useState([true])

    useEffect(() => {
        // todo this needs to be in a saga. 
        getPortfolio().then(profile => {
            setProfile(profile);
            setIsLoading(false);
        })


    }, []);

    const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Page b', uv: 600, pv: 2400, amt: 2400 },
    { name: 'Page c', uv: 200, pv: 2400, amt: 2400 },
    { name: 'Page d', uv: 300, pv: 2400, amt: 2400 },
    { name: 'Page e', uv: 100, pv: 2400, amt: 2400 }];

    const renderLineChart = (
        <LineChart width={300} height={300} data={data}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        </LineChart>
    );

    if (isLoading) {
        return <div>is loading</div>
    }

    return (
        <Container>
            <Row xs={1} md={2} lg={3}>
                {profile.Item.portfolios.map(portfolio => {
                    return (
                        <Col>
                            <Card style={{ width: '18rem', marginBottom:'2em' }}>
                                {renderLineChart}
                                <Card.Body>
                                    <Card.Title>{portfolio.name}</Card.Title>
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
                        </Col>
                    )
                })}

            </Row>
        </Container>
    );
}

export default StockCard;
