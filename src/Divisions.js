import React from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Button, Card } from "react-bootstrap";

function Divisions() {
    let navigate = useNavigate();
    return (
        <div>
        <div class="container">
            <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <span class="fs-4">statsHOCKEY</span>
                </a>

                <ul class="nav nav-pills">
                    <li class="nav-item"><button onClick={() => {navigate("/statsHOCKEY")}}>Home</button></li>
                    <li class="nav-item"><button onClick={() => {navigate("/Divisions")}}>Divisions</button></li>
                    <li class="nav-item"><button onClick={() => {navigate("/Graphs")}}>Graphs</button></li>
                    <li class="nav-item"><button onClick={() => {navigate("/Offers")}}>Offers</button></li>
                </ul>
            </header>
        </div>
        <Row className="px-5 py-3" xxl={2}>
            <Col className="px-2">
            <Card>
                <Card.Title className="px-2 py-2">Atlantic</Card.Title>
                <Card.Subtitle className="mb-2 px-2 text-muted">  Below is a list of teams from this division.</Card.Subtitle>
                <Button variant="primary">Columbus Blue Jackets</Button>
                <Button variant="secondary">Washington Capitals</Button>
                <Button variant="success">New Jersey Devils</Button>
                <Button variant="danger">Philadelphia Flyers</Button>
                <Button variant="warning">Caroline Hurricanes</Button>
                <Button variant="info">New York Islanders</Button>
                <Button variant="light">Pittsburgh Penguins</Button>
                <Button variant="dark">New York Rangers</Button>
            </Card>
            </Col>
            <Col className="px-2">
            <Card>
                <Card.Title className="px-2 py-2">Pacific</Card.Title>
                <Card.Subtitle className="mb-2 px-2 text-muted">  Below is a list of teams from this division.</Card.Subtitle>
                <Button variant="primary">Columbus Blue Jackets</Button>
                <Button variant="secondary">Washington Capitals</Button>
                <Button variant="success">New Jersey Devils</Button>
                <Button variant="danger">Philadelphia Flyers</Button>
                <Button variant="warning">Caroline Hurricanes</Button>
                <Button variant="info">New York Islanders</Button>
                <Button variant="light">Pittsburgh Penguins</Button>
                <Button variant="dark">New York Rangers</Button>
            </Card>
            </Col>
        </Row>
        <Row className="px-5 py-3" xxl={2}>
            <Col className="px-2">
            <Card>
                <Card.Title className="px-2 py-2">Central</Card.Title>
                <Card.Subtitle className="mb-2 px-2 text-muted">  Below is a list of teams from this division.</Card.Subtitle>
                <Button variant="primary">Columbus Blue Jackets</Button>
                <Button variant="secondary">Washington Capitals</Button>
                <Button variant="success">New Jersey Devils</Button>
                <Button variant="danger">Philadelphia Flyers</Button>
                <Button variant="warning">Caroline Hurricanes</Button>
                <Button variant="info">New York Islanders</Button>
                <Button variant="light">Pittsburgh Penguins</Button>
                <Button variant="dark">New York Rangers</Button>
            </Card>
            </Col>
            <Col className="px-2">
            <Card>
                <Card.Title className="px-2 py-2">Metropolitan</Card.Title>
                <Card.Subtitle className="mb-2 px-2 text-muted">  Below is a list of teams from this division.</Card.Subtitle>
                <Button variant="primary">Columbus Blue Jackets</Button>
                <Button variant="secondary">Washington Capitals</Button>
                <Button variant="success">New Jersey Devils</Button>
                <Button variant="danger">Philadelphia Flyers</Button>
                <Button variant="warning">Caroline Hurricanes</Button>
                <Button variant="info">New York Islanders</Button>
                <Button variant="light">Pittsburgh Penguins</Button>
                <Button variant="dark">New York Rangers</Button>
            </Card>
            </Col>
        </Row>
        </div>
    );
  }
  
  export default Divisions;