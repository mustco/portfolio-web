import React from "react";
import { Container, Row, Col, Badge, Image } from "react-bootstrap";
import Avatar from "../../Assets/avatar.png";
import Tilt from "react-next-tilt";

const Home = () => {
  return (
    <>
      <section id="header" className="py-md-5 py-3 home plus-jakarta-sans">
        <Container className="px-5 pb-5 pt-5" data-aos="fade-up">
          <Row className="pt-5 gx-5 align-items-center">
            <Col xs={12} md={5} lg={5}>
              <div className="text-center text-md-start">
                <Badge
                  text="white"
                  className="mb-4 bg-gradient-primary-to-secondary"
                >
                  <div className="text-uppercase">
                    Design &middot; Web Development 
                  </div>
                </Badge>
                <div className="fs-3 black-style">
                  Hi There!
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </div>
                <h1 className="display-3 fw-bolder mb-5  black-style">
                  <span className="text-gradient d-inline ">I'M ADNAN</span>
                </h1>
                <span className=" black-style">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  at enim eum illum aperiam placeat esse? Mollitia omnis minima
                  saepe recusandae libero, iste ad asperiores! Explicabo commodi
                  quo itaque! Ipsam!
                </span>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-md-start mb-3"></div>
              </div>
            </Col>
            <Col xs={12} md={7} lg={7} data-aos="fade-up">
              <div className="d-flex justify-content-center">
                <div className="text-center profile">
                  <Tilt>
                    <Image src={Avatar} alt="avatar" className="img-fluid" />
                  </Tilt>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
