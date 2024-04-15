"use client"

import React, { useRef } from 'react'
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import "./fixedcontainer.css"


gsap.registerPlugin(ScrollTrigger)


const FixedContainer = () => {
  const container = React.useRef()
  const gridContainerRef = React.useRef()
  const timeline = React.useRef()
  timeline.current = useGSAP(()=>{
    // gsap.to(".text", {
    //   y : "2000px",
    //   duration : 3,
    //   scrollTrigger : {
    //     trigger : ".container1",
    //     start : "top top",
    //     scrub : 2,
    //   }
    // })
    const sections = gsap.utils.toArray("section")
    let currentSection = sections[0]
    console.log(sections)
    gsap.set("section", {
      zIndex : (i, target, targets) => targets.length - i
    })
    gsap.timeline({
      defaults : {
        // duration : 3
      },
      scrollTrigger : {
        trigger : container.current,
        start : "top top",
        end : `+=${sections.length * 110}%`,
        pin : true,
        scrub : true
      }
    })
    .to(".second", {
      opacity : 0,
      delay : 20,
      duration : 5,
      autoAlpha : 0
    })
    .to(".third", {
      opacity : 0,
      delay : 20,
      duration : 5,
      autoAlpha : 0
    })
    .to(".fourth", {
      opacity : 0,
      delay : 20,
      duration : 5,
      autoAlpha : 0
    })
    .to(".fifth", {
      opacity : 0,
      delay : 20,
      duration : 5,
      autoAlpha : 0
    })

    // ScrollTrigger.create({
    //   trigger : container.current,
    //   start : "top top",
    //   end : `+=${sections.length * 200}%`,
    //   pin : true,
    //   scrub : true
    // })
    

    gsap.fromTo(".gridd",{
      yPercent : 100
    }, {
      yPercent : -sections.length * 200,
      scrollTrigger : {
        trigger : gridContainerRef.current,
        start : "top top",
        end : `+=${sections.length * 200}%`,
        scrub : 2,
        pin : false
      }
    })

    // ScrollTrigger.create({
    // })

    const setSection = (section) => {
      if (section !== currentSection) {
        gsap.to(currentSection, { scale : .8, autoAlpha : 0 });
        gsap.to(section, { scale : 1, autoAlpha : 1 });
        currentSection = section;
      }
    }
  }, {
    scope : container
  })
  return (
    <>
      <div className='relative mt-[700px] bg-transparent text-[17vw] leading-tight tracking-tighter font-bold mx-auto' ref={container}>
        <div className='absolute w-full min-h-[200vh] grid-y-20 top-0 left-0 grid1 z-[1000] container1 text-xl leading-normal tracking-normal' ref={gridContainerRef}>
          <div className='flex flex-row h-full gridd'>
            <div className='w-[30%] h-full px-5 pt-32'>
              <img src="/images/img1.jpeg" alt="" className="object-cover object-center" />
            </div>
            <div className='w-[25%] h-full px-5 pt-48'>
              <img src="/images/img2.jpeg" alt="" className="object-cover object-center" />
            </div>
            <div className='w-[15%] h-full px-5 pt-20'>
              <img src="/images/img3.jpeg" alt="" className="object-cover object-center" /> 
            </div>
            <div className='w-[30%] h-full px-5 pt-32'>
              <img src="/images/img4.jpeg" alt="" className="object-cover object-center" />
            </div>
          </div>
          <div className='flex flex-row h-full gridd'>
            <div className='w-[30%] h-full px-5 pt-32'>
              <img src="/images/img1.jpeg" alt="" className="object-cover object-center" />
            </div>
            <div className='w-[25%] h-full px-5 pt-48'>
              <img src="/images/img2.jpeg" alt="" className="object-cover object-center" />
            </div>
            <div className='w-[15%] h-full px-5 pt-20'>
              <img src="/images/img3.jpeg" alt="" className="object-cover object-center" /> 
            </div>
            <div className='w-[30%] h-full px-5 pt-32'>
              <img src="/images/img4.jpeg" alt="" className="object-cover object-center" />
            </div>
          </div>
          <div className='flex flex-row h-full gridd'>
            <div className='w-[30%] h-full px-5 pt-32'>
              <img src="/images/img1.jpeg" alt="" className="object-cover object-center" />
            </div>
            <div className='w-[25%] h-full px-5 pt-48'>
              <img src="/images/img2.jpeg" alt="" className="object-cover object-center" />
            </div>
            <div className='w-[15%] h-full px-5 pt-20'>
              <img src="/images/img3.jpeg" alt="" className="object-cover object-center" /> 
            </div>
            <div className='w-[30%] h-full px-5 pt-32'>
              <img src="/images/img4.jpeg" alt="" className="object-cover object-center" />
            </div>
          </div>
          <div className='flex flex-row h-full gridd'>
            <div className='w-[30%] h-full px-5 pt-32'>
              <img src="/images/img1.jpeg" alt="" className="object-cover object-center" />
            </div>
            <div className='w-[25%] h-full px-5 pt-48'>
              <img src="/images/img2.jpeg" alt="" className="object-cover object-center" />
            </div>
            <div className='w-[15%] h-full px-5 pt-20'>
              <img src="/images/img3.jpeg" alt="" className="object-cover object-center" /> 
            </div>
            <div className='w-[30%] h-full px-5 pt-32'>
              <img src="/images/img4.jpeg" alt="" className="object-cover object-center" />
            </div>
          </div>
          <div className='flex flex-row h-full gridd'>
            <div className='w-[30%] h-full px-5 pt-32'>
              <img src="/images/img1.jpeg" alt="" className="object-cover object-center" />
            </div>
            <div className='w-[25%] h-full px-5 pt-48'>
              <img src="/images/img2.jpeg" alt="" className="object-cover object-center" />
            </div>
            <div className='w-[15%] h-full px-5 pt-20'>
              <img src="/images/img3.jpeg" alt="" className="object-cover object-center" /> 
            </div>
            <div className='w-[30%] h-full px-5 pt-32'>
              <img src="/images/img4.jpeg" alt="" className="object-cover object-center" />
            </div>
          </div>
        </div>
        <section class="second panel absolute z-[1000] flex items-end justify-start text-customWhite h-[100vh] w-full red bg-customGray max-w-[90%] top-0 left-1/2 -translate-x-1/2">
          <h1 className=''>Furniture</h1>
        </section>
        <section class="third panel absolute z-[1000] flex items-end justify-start text-customWhite h-[100vh] w-full orange bg-customGray max-w-[90%] top-0 left-1/2 -translate-x-1/2">
          <h1>Decor</h1>
        </section>
        <section class="fourth panel absolute z-[1000] flex items-end justify-start text-customWhite h-[100vh] w-full purple bg-customGray max-w-[90%] top-0 left-1/2 -translate-x-1/2">
          <h1>Office</h1>
        </section>
        <section class="fifth panel absolute z-[1000] flex items-end justify-start text-customWhite h-[100vh] w-full green bg-customGray max-w-[90%] top-0 left-1/2 -translate-x-1/2">
          <h1>Tech</h1>
        </section>
      </div>
    </>
  )
}

export default FixedContainer
