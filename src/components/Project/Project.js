import React from "react";
import { Container, Row, Col, Badge, Button, Image, Card  } from "react-bootstrap";
import { projects } from "./data";


export default function Project() {
    return(
        <>
               <section id="projects" className="py-md-5 py-3 bg-gradient__white-to-pink">
                <Container className="px-5 mb-3">
                    <div className="d-flex flex-row align-items-center text-center mb-5">
                        <div className="mt-1 divider ml-4 h-1 bg-dark"></div>
                        <h2 className=" fw-bolder mb-0"><span className="text-gradient d-inline px-4">PROJECTS</span></h2>
                        <div className="mt-1 divider ml-4 h-1 bg-dark"></div>
                    </div>
                    
                    <Row className=" gx-3 justify-content-center">
                        {projects.map((project)=> (
                            
                             <Col xs={12} sm={10} md={6} lg={4} key={project.id} >
                       <Card className="overflow-hidden shadow-sm border-0 rounded-4  mb-4">
                                <div className="card-body p-0">
                                    <div className="d-flex align-items-center">
                                        <div className="p-2">
                                        <div className="project__image rounded-4 w-100 h-100 skeleton"/>
                                        <div className="p-2">

                                            <h5 className="fw-bolder">{project.title}</h5>
                                            <p>{project.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                       </Col>
                            
                        ))}
                      
               </Row>
                </Container>
            </section>
    
        </>
    )
}