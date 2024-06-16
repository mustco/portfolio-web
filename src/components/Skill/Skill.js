import { Container } from "react-bootstrap"
export default function Skill() {
    return (
        <section id="skills" className="py-md-5 py-3">
        <Container className="px-5 mb-3">
            <div className="d-flex flex-row align-items-center text-center mb-5" data-aos="fade-up">
                <div className="mt-1 divider ml-4 h-1 bg-dark"></div>
                <h2 className=" fw-bolder mb-0"><span className="text-gradient d-inline px-4">SKILLS</span></h2>
                <div className="mt-1 divider ml-4 h-1 bg-dark"></div>
            </div>

            <div className="card shadow-lg border-0 rounded-4 mb-5" data-aos="fade-up">
                                <div className="card-body p-5">
                                    <div className="mb-0">
                                        <div className="d-flex align-items-center mb-4">
                                            <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i className="bi bi-code-slash"></i></div>
                                            <h3 className="fw-bolder mb-0"><span className="text-gradient d-inline">Languages</span></h3>
                                        </div>
                                        <div className="row row-cols-1 row-cols-md-3 mb-4">
                                            <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">HTML</div></div>
                                            <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">CSS</div></div>
                                            <div className="col"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">JavaScript</div></div>
                                        </div>
                                        <div className="row row-cols-1 row-cols-md-3">
                                            <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Python</div></div>
                                            <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Ruby</div></div>
                                            <div className="col"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Node.js</div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
            </Container>
            </section> 
    )
}