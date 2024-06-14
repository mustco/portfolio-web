import React from "react";
import { Container, Row, Col, Badge, Button, Image  } from "react-bootstrap";

export default function About() {
    return(
        <>
          <section className="bg-light py-5">
                <Container className="px-5">
                    <Row className="gx-5 justify-content-center">
                        <Col className="col-md-8">
                            <div className="text-center my-5">
                                <h2 className="display-5 fw-bolder"><span className="text-gradient d-inline">About Me</span></h2>
                                <p className="lead fw-light mb-4">My name is Mustofa Adnan</p>
                                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dolorum itaque qui unde quisquam consequatur autem. Eveniet quasi nobis aliquid cumque officiis sed rem iure ipsa! Praesentium ratione atque dolorem?</p>
                                <div className="d-flex justify-content-center fs-2 gap-4">
                                  
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}