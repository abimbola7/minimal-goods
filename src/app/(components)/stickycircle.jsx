"use client"
import React, { useRef } from 'react'
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)


const StickyCircle = () => {
  const container = useRef();
  const timeline = useRef()
  useGSAP(()=>{
    gsap.to(".circle", {
      borderRadius : 0,
      ease : "none",
      width : "100%",
      height : "100%",
      duration : .5,
      scrollTrigger : {
        trigger : container.current,
        start : "top top",
        end : () => `+=${container.current.clientHeight}`,
        scrub : 1,
        pin : true
      }
    })
  }, {
    scope : container
  })
  return (
    <div className='h-screen w-full bg-customGray flex items-center justify-center' ref={container}>
      <div className='rounded-full w-[30rem] h-[30rem] bg-center bg-[url(/images/chair.jpg)] bg-no-repeat circle'>

      </div>
    </div>
  )
}

export default StickyCircle
