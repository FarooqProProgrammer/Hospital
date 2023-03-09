import React from 'react'
import { Link } from 'react-router-dom'
import Slider from "react-slick";

// ============= Images ================
import PriceOne from "../../assets/price-1.jpg"
import PriceTwo from "../../assets/price-2.jpg"
import PriceThree from "../../assets/price-3.jpg"
import PriceFour from "../../assets/price-4.jpg"

import Carousel from 'react-bootstrap/Carousel';


export default function Pricing() {
    return (
        <div class="container-fluid py-5">
            <div class="container">
                <div class="text-center mx-auto mb-5" style={{ maxWidth: "500px" }}>
                    <h5 class="d-inline-block text-primary text-uppercase border-bottom border-5">Medical Packages</h5>
                    <h1 class="display-4">Awesome Medical Programs</h1>
                </div>
                    
            </div>
        </div>
    )
}
