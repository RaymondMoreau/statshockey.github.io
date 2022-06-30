import React from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Card, Container, Accordion, ListGroup } from "react-bootstrap";

function Home() {
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
        <Container>
            <Row>
            <Col xxl={8} className="py-3 px-2">
                <Card>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Text>
                            <b>Avalanche use OT to defeat your mom in Game 1 of Stanley Cup Final</b><br></br>
                            <p>Colorado's players were extremely conditioned during this long game.</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Text>
                            <b>Avalanche use OT to defeat your mom in Game 1 of Stanley Cup Final</b><br></br>
                            <p>Colorado's players were extremely conditioned during this long game.</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Text>
                            <b>Avalanche use OT to defeat your mom in Game 1 of Stanley Cup Final</b><br></br>
                            <p>Colorado's players were extremely conditioned during this long game.</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xxl={4}>
            <h1 className="top-headlines">Top Headlines</h1>
            <Accordion className="py-2">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Article #1</Accordion.Header>
                    <Accordion.Body>
                    wenomecha insama tumajar bisaun wifen looof eselifter braun
                    wenomecha insama tumajar bisaun wifen looof eselifter braun
                    wenomecha insama tumajar bisaun wifen looof eselifter braun
                    wenomecha insama tumajar bisaun wifen looof eselifter braun
                    wenomecha insama tumajar bisaun wifen looof eselifter braun
                    wenomecha insama tumajar bisaun wifen looof eselifter braun
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Article #2</Accordion.Header>
                    <Accordion.Body>
                    Turi ip ip ip ip ip ip ip tsha ik ip tura ip ik eugh eugh isha ik turisha
                    Turi ip ip ip ip ip ip ip tsha ik ip tura ip ik eugh eugh isha ik turisha
                    Turi ip ip ip ip ip ip ip tsha ik ip tura ip ik eugh eugh isha ik turisha
                    Turi ip ip ip ip ip ip ip tsha ik ip tura ip ik eugh eugh isha ik turisha
                    Turi ip ip ip ip ip ip ip tsha ik ip tura ip ik eugh eugh isha ik turisha
                    Turi ip ip ip ip ip ip ip tsha ik ip tura ip ik eugh eugh isha ik turisha
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Article #3</Accordion.Header>
                    <Accordion.Body>
                    Get on your knees and lick the cheese
                    I'm finna get on your case
                    You could call me pair of jeans
                    That girl she showed up and drank tea
                    And she did it quite mean
                    Yeah, they call me Quandale
                    Got to get to the green
                    I'm not talking 'bout no Kale
                    Had to kick a female dog out
                    'Cause she was reproducing like a snail

                    She said pass the Marijuana (legal)
                    Female dog, I don't like to pass the gas
                    Blowing bubbles, blowing Zaza
                    She got big all bunnies
                    I said goo, goo, goo, gah, gah
                    In the zoo, monkey looking fellas
                    Ooh, ooh, ooh, ah, ah
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <br></br><br></br>
            <h1 className="top-headlines">Roster Changes</h1>
            <ListGroup variant="flush">
            <ListGroup.Item>bozo [pittsburgh] TO [carolina]</ListGroup.Item>
            <ListGroup.Item>pablo [mexico] TO [canada]</ListGroup.Item>
            <ListGroup.Item>your mother [your house] TO [my house]</ListGroup.Item>
            <ListGroup.Item>linear algebra [course] TO [hell]</ListGroup.Item>
            </ListGroup>
            </Col>
            </Row>
        </Container>
        </div>
        /* <div>
            code graveyard

            <p>Home</p>
            <button onClick={() => {navigate("/Divisions")}}>Divisions</button>
            <button onClick={() => {navigate("/Graphs")}}>Graphs</button>
            <button onClick={() => {navigate("/Offers")}}>Offers</button>
            <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Divisions</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Graphs</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Offers</a></li>
            <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>

        </div> */
    );
  }
  
  export default Home;