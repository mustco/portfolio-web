import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
export default function Experience() {
  return (
    <section id="experiences" className="py-md-5 py-3">
      <Container className="px-5 mb-3">
        <div
          className="d-flex flex-row align-items-center text-center mb-5"
          data-aos="fade-up"
        >
          <div className="mt-1 divider ml-4 h-1 bg-dark"></div>
          <h2 className=" fw-bolder mb-0">
            <span className="text-gradient d-inline px-4">EXPERIENCE</span>
          </h2>
          <div className="mt-1 divider ml-4 h-1 bg-dark"></div>
        </div>

        <Card className="shadow-lg border-0 rounded-4 mb-5" data-aos="fade-up">
          <div className="card-body p-5">
            <Row className="align-items-center gx-5">
              <Col className=" text-center text-lg-start mb-4 mb-lg-0">
                <div className="bg-light p-4 rounded-4">
                  <div className="text-primary fw-bolder mb-2">
                    Apr 2021 - Sep 2021
                  </div>
                  <div className="small fw-bolder">Software Tester</div>
                  <div className="small text-muted">
                    PT Bahasa Kinerja Utama
                  </div>
                  <div className="small text-muted">Jakarta, Indonesia</div>
                </div>
              </Col>
              <div className="col-lg-8">
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus laudantium, voluptatem quis repellendus eaque sit
                  animi illo ipsam amet officiis corporis sed aliquam non
                  voluptate corrupti excepturi maxime porro fuga.
                </div>
              </div>
            </Row>
          </div>
        </Card>
      </Container>
    </section>
  );
}
