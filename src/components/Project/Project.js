import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { projects } from "./data";
import { FiExternalLink } from "react-icons/fi";
import { FaCode } from "react-icons/fa6";

export default function Project() {
  return (
    <>
      <section
        id="projects"
        className="py-md-5 py-3 bg-gradient__white-to-pink"
      >
        <Container className="px-3">
          <div
            className="d-flex flex-row justify-content-center align-items-center mb-4 mb-md-5"
            data-aos="fade-up"
          >
            <div className="mt-1 divider ml-4 h-1"></div>
            <h2 className=" fw-bolder mb-0">
              <span className="text-gradient d-inline px-4">PROJECTS</span>
            </h2>
            <div className="mt-1 divider ml-4 h-1"></div>
          </div>

          <Row className=" gx-3 justify-content-center">
            {projects.map((project) => (
              <Col
                xs={12}
                sm={10}
                md={6}
                lg={4}
                key={project.id}
                data-aos="fade-up"
              >
                <Card className="project-card overflow-hidden border-0 rounded-4  mb-3 mb-md-4">
                  <div className="card-body p-0">
                    <div className="d-flex align-items-center">
                      <div className="w-100 p-2">
                            {project.image?(
                              <img
                                src={project.image}
                                alt={project.title}
                                className="project__image rounded-4 w-100 h-100"
                              />
                            ):(
                        <div className="project__image rounded-4 w-100 h-100 skeleton" />
                            )}
                        <div className="d-flex justify-content-between">
                          <div className="p-2 mt-2">
                            {project.language?.map((lang, index) => (
                              <Button
                                key={index}
                                variant="outline-primary"
                                className="me-2 mb-2"
                              >
                                {lang}
                              </Button>
                            ))}
                            <h5 className="mt-1 fw-bolder">{project.title}</h5>

                          </div>
                          <div className="d-flex flex-column mt-3 pe-4 mb-0 fs-5">
                            {project.url?(
                                 <a className="text-gradient" target="_blank" href={project.url} rel="noopener noreferrer">
                                 <FiExternalLink />
                               </a>
                            ):null}
                            {project.code?(

                            <a className="text-gradient" target="_blank" href={project.code} rel="noopener noreferrer">
                              <FaCode />
                            </a>
                            ):null}
                          </div>
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
  );
}
