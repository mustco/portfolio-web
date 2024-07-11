import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

export default function Education() {
  return (
    <section
      id="educations"
      className="py-md-5 py-3 bg-gradient__white-to-pink"
    >
      <Container className="px-3 mb-3">
        <div
          className="d-flex justify-content-center align-items-center mb-4 mb-md-5"
          data-aos="fade-up"
        >
          <div className="mt-1 divider ml-4 h-1 bg-dark"></div>
          <h2 className=" fw-bolder mb-0">
            <span className="text-gradient d-inline px-4">EDUCATION</span>
          </h2>
          <div className="mt-1 divider ml-4 h-1 bg-dark"></div>
        </div>
        <Card className=" shadow border-0 rounded-4 mb-3 mb-md-5" data-aos="fade-up">
          <div className="card-body p-5">
            <Row className="align-items-center gx-5">
              <Col className=" text-center text-lg-start mb-4 mb-lg-0">
                <div className="bg-light p-4 rounded-4">
                  <div className="text-secondary fw-bolder mb-2">
                    2022 - Present
                  </div>
                  <div className="mb-2">
                    <div className="small fw-bolder">
                      Universitas Indraprasta PGRI
                    </div>
                    <div className="small text-muted">Jakarta, Indonesia</div>
                  </div>
                  <div className="fst-italic">
                    <div className="small text-muted">
                      S1 Teknik Informatika
                    </div>
                  </div>
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
        <Card className=" shadow border-0 rounded-4 mb-3 mb-md-5" data-aos="fade-up">
          <div className="card-body p-5">
            <Row className=" align-items-center gx-5">
              <Col className=" text-center text-lg-start mb-4 mb-lg-0">
                <div className="bg-light p-4 rounded-4">
                  <div className="text-secondary fw-bolder mb-2">
                    2019 - 2022
                  </div>
                  <div className="mb-2">
                    <div className="small fw-bolder">SMKN 10 Jakarta</div>
                    <div className="small text-muted">Jakarta, Indonesia</div>
                  </div>
                  <div className="fst-italic">
                    <div className="small text-muted">
                      Rekayasa Perangkat Lunak
                    </div>
                  </div>
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
