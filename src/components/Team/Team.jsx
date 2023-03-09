import React from 'react'
import { Link } from 'react-router-dom'
import TeamOne from "../../assets/team-1.jpg"
import TeamTwo from "../../assets/team-2.jpg"
import TeamThree from "../../assets/team-3.jpg"


export default function Team() {
    return (
        <div class="container-fluid py-5">
            <div class="container">
                <div class="text-center mx-auto mb-5" style={{ maxWidth: "500px" }}>
                    <h5 class="d-inline-block text-primary text-uppercase border-bottom border-5">Our Doctors</h5>
                    <h1 class="display-4">Qualified Healthcare Professionals</h1>
                </div>
                <div class="owl-carousel team-carousel position-relative">
                    <div class="team-item">
                        <div class="row g-0 bg-light rounded overflow-hidden">
                            <div class="col-12 col-sm-5 h-100">
                                <img class="img-fluid h-100" src={TeamOne} style={{ objectFit: "cover" }} />
                            </div>
                            <div class="col-12 col-sm-7 h-100 d-flex flex-column">
                                <div class="mt-auto p-4">
                                    <h3>Doctor Name</h3>
                                    <h6 class="fw-normal fst-italic text-primary mb-4">Cardiology Specialist</h6>
                                    <p class="m-0">Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor</p>
                                </div>
                                <div class="d-flex mt-auto border-top p-4">
                                    <Link class="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" to="#"><i class="fab fa-twitter"></i></Link>
                                    <Link class="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" to="#"><i class="fab fa-facebook-f"></i></Link>
                                    <Link class="btn btn-lg btn-primary btn-lg-square rounded-circle" to="#"><i class="fab fa-linkedin-in"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="team-item">
                        <div class="row g-0 bg-light rounded overflow-hidden">
                            <div class="col-12 col-sm-5 h-100">
                                <img class="img-fluid h-100" src={TeamTwo} style={{ objectFit: "cover" }} />
                            </div>
                            <div class="col-12 col-sm-7 h-100 d-flex flex-column">
                                <div class="mt-auto p-4">
                                    <h3>Doctor Name</h3>
                                    <h6 class="fw-normal fst-italic text-primary mb-4">Cardiology Specialist</h6>
                                    <p class="m-0">Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor</p>
                                </div>
                                <div class="d-flex mt-auto border-top p-4">
                                    <Link class="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" to="#"><i class="fab fa-twitter"></i></Link>
                                    <Link class="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" to="#"><i class="fab fa-facebook-f"></i></Link>
                                    <Link class="btn btn-lg btn-primary btn-lg-square rounded-circle" to="#"><i class="fab fa-linkedin-in"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="team-item">
                        <div class="row g-0 bg-light rounded overflow-hidden">
                            <div class="col-12 col-sm-5 h-100">
                                <img class="img-fluid h-100" src={TeamThree} style={{ objectFit: "cover" }} />
                            </div>
                            <div class="col-12 col-sm-7 h-100 d-flex flex-column">
                                <div class="mt-auto p-4">
                                    <h3>Doctor Name</h3>
                                    <h6 class="fw-normal fst-italic text-primary mb-4">Cardiology Specialist</h6>
                                    <p class="m-0">Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor</p>
                                </div>
                                <div class="d-flex mt-auto border-top p-4">
                                    <Link class="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" to="#"><i class="fab fa-twitter"></i></Link>
                                    <Link class="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" to="#"><i class="fab fa-facebook-f"></i></Link>
                                    <Link class="btn btn-lg btn-primary btn-lg-square rounded-circle" to="#"><i class="fab fa-linkedin-in"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
