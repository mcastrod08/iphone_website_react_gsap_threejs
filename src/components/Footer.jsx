import React from 'react'
import { signatureImg } from '../utils'

const Footer = () => {
  return (
    <section className="w-full flex flex-center gap-3 bg-neutral-950" style={{padding: "20px 0px"}}>
      <p>Frontend Developer - María Castro - 2025 </p>
      <img src={signatureImg} alt="signature" width={100} style={{marginBottom: '15px'}}/>
    </section>
  )
}

export default Footer