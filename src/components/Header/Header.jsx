import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div class="container-fluid sticky-top bg-white shadow-sm">
        <div class="container">
            <nav class="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
                <a href="index.html" class="navbar-brand">
                    <h1 class="m-0 text-uppercase text-primary"><i class="fa fa-clinic-medical me-2"></i>Medinova</h1>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto py-0">
                        <Link to="index.html" class="nav-item nav-link active">Home</Link>
                        <Link to="/About" class="nav-item nav-link">About</Link>
                        <Link to="service.html" class="nav-item nav-link">Service</Link>
                        <Link to="price.html" class="nav-item nav-link">Pricing</Link>
                        <div class="nav-item dropdown">
                            <Link to="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                            <div class="dropdown-menu m-0">
                                <Link to="blog.html" class="dropdown-item">Blog Grid</Link>
                                <Link to="detail.html" class="dropdown-item">Blog Detail</Link>
                                <Link to="team.html" class="dropdown-item">The Team</Link>
                                <Link to="testimonial.html" class="dropdown-item">Testimonial</Link>
                                <Link to="appointment.html" class="dropdown-item">Appointment</Link>
                                <Link to="search.html" class="dropdown-item">Search</Link>
                            </div>
                        </div>
                        <Link to="contact.html" class="nav-item nav-link">Contact</Link>
                    </div>
                </div>
            </nav>
        </div>
    </div>
  )
}
