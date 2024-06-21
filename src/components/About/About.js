import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub, FaLinkedin } from "react-icons/fa";
export default function About() {
  return (
    <>
      <section className="bg-light py-5">
        <Container className="px-5">
          <Row className="gx-5 justify-content-center">
            <Col className="col-md-8">
              <div className="text-center my-4">
                <h2 className="display-7 fw-bolder mb-3">
                  <span className="text-gradient d-inline">FIND ME ON</span>
                </h2>
                <div className="soc-media__about d-flex justify-content-center fs-1 gap-4">
                  <a className="text-gradient" target="_blank" href="https://www.instagram.com/mustofaadnan_03/" rel="noopener noreferrer">
                    <RiInstagramFill className="text-gradient" />
                  </a>
                  <a className="text-gradient" target="_blank" href="https://www.linkedin.com/in/mustco/" rel="noopener noreferrer">
                    <FaLinkedin className="text-gradient" />
                  </a>
                  <a className="text-gradient" target="_blank" href="https://github.com/mustco/" rel="noopener noreferrer">
                    <FaGithub className="text-gradient" />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
