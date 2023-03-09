import React from 'react'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Services from '../components/Services'
import Apointment from '../components/Apointment'
import Pricing from '../components/Pricing/Pricing'
import Team from '../components/Team/Team'
import Search from '../components/Search/Search'
import Testimonial from '../components/Testimonial/Testimonial'
import Blog from '../components/Blog/Blog'

export default function Home() {
  return (
    <div>
        <Hero />
        <About/>
        <Services />
        <Apointment />
        <Pricing />
        <Team />
        <Search />
        <Testimonial />
        <Blog />
    </div>
  )
}
