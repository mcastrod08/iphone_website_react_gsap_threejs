import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Hero = () => {

  useGSAP(() => {
    gsap.to('#hero', {opacity: 1, delay: 2})
  }, [])

  return (
    <section className="w-full nav-height relative">
      <div className="h-5/6 flex-center flex-col">
        <p id="hero" className="hero-title">iPhone 15 Pro</p>
      </div>

    </section>
  )
}

export default Hero