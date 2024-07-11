import { Container } from "react-bootstrap";
import { skills } from "../../utils/datas";
export default function Skill() {
  return (
    <section id="skills" className="py-md-5 py-3">
      <Container className="px-3 mb-3">
        <div
          className="d-flex justify-content-center align-items-center mb-4 mb-md-5"
          data-aos="fade-up"
        >
          <div className="mt-1 divider ml-4 h-1 bg-dark"></div>
          <h2 className=" fw-bolder mb-0">
            <span className="text-gradient d-inline px-4">SKILLS</span>
          </h2>
          <div className="mt-1 divider ml-4 h-1 bg-dark"></div>
        </div>

        <div
          className="card shadow-lg border-0 rounded-4 mb-5"
          data-aos="fade-up"
        >
          <div className="card-body p-5">
            <div className="mb-0">
              <div className="d-flex align-items-center mb-4">
                <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                  <i className="bi bi-code-slash"></i>
                </div>
                <h3 className="fw-bolder mb-0">
                  <span className="text-gradient d-inline">Languages</span>
                </h3>
              </div>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                {skills.map((skill) => (
                  <div className="col px-1 mb-4" key={skill.id}>
                    <div className="text-center bg-light rounded-4 p-3 h-100">
                      {skill.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
