import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Appointment from './pages/Appointment'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Detail from './pages/Detail'
import Price from './pages/Price'
import Search from './pages/Search'
import Service from './pages/Service'
import Team from './pages/Team'
import Testimonial from './pages/Testimonial'
import Header from './components/Header/Header'
import Footer from './components/Footer'
import TopBar from './components/TopBar'


export default function App() {
  return (
    <BrowserRouter>
    <TopBar />
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Apointment' element={<Appointment/>} />
        <Route path='/Blog' element={<Blog />}/>
        <Route path='/Contact' element={<Contact />}/>
        <Route path='/Detail' element={<Detail/>}/>
        <Route path='/Price' element={<Price/>}/>
        <Route path='/Search' element={<Search/>}/>
        <Route path='/Service' element={<Service/>}/>
        <Route path='/Team' element={<Team/>}/>
        <Route path='/Testimonial' element={<Testimonial/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
