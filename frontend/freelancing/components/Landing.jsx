import React from 'react'
import Navbar from './navbar'
import heroImg from '../src/assets/GoiJuly6.jpg'

function Landing(){
  return (
    <div className="landing">
      <Navbar />

      <main className="hero">
        <div className="hero-content">
          <h1 className="hero-tag">Build Confidence</h1>
          <h1 className="hero-tag">Build Skills</h1>
          <h1 className="hero-tag">Get paid</h1>
          <p className="hero-sub">Freelance smarter — find clients, get paid, and grow your skillset.</p>
          <div className="hero-cta">
            <button className="primary">Get Started</button>
            <button className="secondary">Learn More</button>
          </div>
        </div>

        <div className="hero-image">
          <img src={heroImg} alt="hero" />
        </div>
      </main>
    </div>
  )
}

export default Landing
