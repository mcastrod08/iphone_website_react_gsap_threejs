import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { chipImg, frameImg, frameVideo } from '../utils'
import { animateWithGsap } from '../utils/animations'

const HowItWorks = () => {

  useGSAP(() => {
    gsap.to('#heading', { opacity: 1, y:0 })
    gsap.to('#g_p_text', { opacity: 1, y:0 })
    gsap.to('.g_fadeIn', { opacity: 1, y:0 })
    gsap.from('#chip', {
      scrollTrigger: {
        trigger:'#chip',
        start: '20% bottom'
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: 'power2.inOut'
    })
    
  }, []) 

    const videoRef = useRef();

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          How it works.
        </h1>
        <div className="flex flex-col items-center" style={{marginTop: "40px"}}>
          <img src={chipImg} alt="chip" id="chip" width={300} height={300}/>
          <div style={{margin: "40px 0 24px 0", paddingLeft: "24px"}}>
            <h2 className="text-5xl lg:text-7xl font-semibold" >
              A17 Pro Chip.
            </h2>
            <h2 className="text-5xl lg:text-7xl font-semibold">
              A Monster.
            </h2>
          </div>
          <div className="howitworks-text" id="g_p_text" style={{margin: "30px 0 24px 0", paddingLeft: "24px"}}>
            <p>Titanium has one of the best strength-to-weight ratios of any metal, making these our {' '}</p>
          </div>

          <div style={{marginTop: "50px"}}>
            <div className="relative h-full flex-center">
              <div className="overflow-hidden">
                <img
                  src={frameImg}
                  alt="frame"
                  className="bg-transparent relative z-10"
                />
                
              </div>

              <div className="how-video">
                <video 
                  playsInline 
                  id="howVideo" 
                  className="pointer-events-none"
                  preload='none' muted autoPlay ref={videoRef}
                >
                  <source src={frameVideo} type="video/mp4"/>
                </video>
              </div>

            </div>
          </div>
          <div className="howitworks-text" id="g_p_text" style={{paddingLeft: "24px"}}>
            <p >Video Game</p>
          </div>
          <div className="how-text-container g_fadeIn" style={{marginTop: "30px"}}>
            <div className="flex-1 flex-center">
              <p className="how-text">A17 Pro, is an entirely new class of iPhone {' '}
                <span className="text-white">
                  the best graphic performance by far.
                </span>
  
                Mobile {' '}
                <span className="text-white">
                  games will look and feel so immersive, {' '}
                </span>
                
              </p>
            </div>
            <div className="flex-1 flex justify-center flex-col">
              <p className="how-text">New</p>
              <p className="how-bigtext">Pro-class GPU</p>
              <p className="how-text">with 6 cores</p>
            </div>  
          </div>
          
        </div> 
         
      </div>
        
    </section>  
  )
}

export default HowItWorks