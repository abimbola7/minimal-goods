"use client"
import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Parallax } from './parallax'

gsap.registerPlugin(ScrollTrigger);


const ImageGrid = () => {
  const image1 = gsap.utils.toArray(".img1")
  const image2 = gsap.utils.toArray(".img2")
  const image3 = gsap.utils.toArray(".img3")

  // useGSAP(()=>{
  //   image1.forEach(img=>{
  //     gsap.to(img, {
  //       yPercent : -700,
  //       scrollTrigger : {
  //         trigger : img,
  //         start : "top bottom",
  //         scrub : 6,
  //         markers : true
  //       }
  //     })
  //   })
  //   image2.forEach(img=>{
  //     gsap.to(img, {
  //       yPercent : -900,
  //       scrollTrigger : {
  //         trigger : img,
  //         start : "top bottom",
  //         scrub : 6,
  //         markers : true
  //       }
  //     })
  //   })
  //   image3.forEach(img=>{
  //     gsap.to(img, {
  //       yPercent : -1000,
  //       scrollTrigger : {
  //         trigger : img,
  //         start : "top bottom",
  //         scrub : 6,
  //         markers : true
  //       }
  //     })
  //   })
  // })

  return (
    <div className='flex flex-row h-full gridd'>
      <div className='w-[30%] h-full px-5 pt-32'>
        <Parallax
        speed={-3}
        >
          <img src="/images/img1.jpeg" alt="" className="object-cover object-center img1" />
        </Parallax>
      </div>
      <div className='w-[25%] h-full px-5 pt-48'>
        <Parallax
        speed={-2}
        >
          <img src="/images/img2.jpeg" alt="" className="object-cover object-center img2" />
        </Parallax>
      </div>
      <div className='w-[15%] h-full px-5 pt-[6rem]'>
        <Parallax
        speed={-2.1}
        >
          <img src="/images/img3.jpeg" alt="" className="object-cover object-center img3" /> 
        </Parallax>
      </div>
      <div className='w-[30%] h-full px-5 pt-32'>
        <Parallax
        speed={-3}
        >
          <img src="/images/img4.jpeg" alt="" className="object-cover object-center img1" />
        </Parallax>
      </div>
    </div>
  )
}

export default ImageGrid
