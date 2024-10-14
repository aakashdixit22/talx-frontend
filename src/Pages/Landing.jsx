import React from 'react'
import Hero from '../components/Hero';
import { BentoGridDemo } from '../components/Features';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


const Landing = () => {
  return (
    <>
    <Hero />
    <BentoGridDemo />
    <Testimonials />
    <div className='bg-zinc-900'>
      <Contact />
    </div>
    <Footer />
    
    </>
  )
}

export default Landing