import React from 'react'
import { Link } from 'react-router-dom'

export default function TopBar() {
  return (
    <div class="container-fluid py-2 border-bottom d-none d-lg-block">
    <div class="container">
        <div class="row">
            <div class="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
                <div class="d-inline-flex align-items-center">
                    <Link class="text-decoration-none text-body pe-3" to=""><i class="bi bi-telephone me-2"></i>+012 345 6789</Link>
                    <span class="text-body">|</span>
                    <Link class="text-decoration-none text-body px-3" to=""><i class="bi bi-envelope me-2"></i>info@example.com</Link>
                </div>
            </div>
            <div class="col-md-6 text-center text-lg-end">
                <div class="d-inline-flex align-items-center">
                    <Link class="text-body px-2" to="">
                        <i class="fab fa-facebook-f"></i>
                    </Link>
                    <Link class="text-body px-2" to="">
                        <i class="fab fa-twitter"></i>
                    </Link>
                    <Link class="text-body px-2" to="">
                        <i class="fab fa-linkedin-in"></i>
                    </Link>
                    <Link class="text-body px-2" to="">
                        <i class="fab fa-instagram"></i>
                    </Link>
                    <Link class="text-body ps-2" to="">
                        <i class="fab fa-youtube"></i>
                    </Link>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
