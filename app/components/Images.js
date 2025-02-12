import React from 'react'
import "../globals.css"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const Images = () => {
  useGSAP(()=>{
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.imagess', 
        start: 'top 50%',
        end: '0%',
         scrub: 3,
      }
    })
    tl.to('.left', {
      x: '-100%'
    }, 'b')
    tl.to('.right', {
      x: '100%'
    }, 'b')
  })
  return (
    <section className='imagess h-[100vh] w-full relative grid grid-rows-5 grid-cols-7 overflow-hidden'>
        <div style={{"--r": 1, "--c": 2}} className="left img overflow-hidden">
          <img className='object-cover object-center' src="/img/2.jpg" />
        </div>
        <div style={{"--r": 1, "--c": 6}} className="right img">
          <img className='object-cover object-center' src="/img/3.jpg" />
        </div>
        <div style={{"--r": 3, "--c": 4}} className="img">
          <img className='object-cover object-center' src="/img/6.jpg" />
        </div>
        <div style={{"--r": 4, "--c": 2}} className="left img">
          <img className='object-cover object-center' src="/img/4.jpg" />
        </div>
        <div style={{"--r": 4, "--c": 6}} className="img">
          <img className='object-cover object-center' src="/img/5.jpg" />
        </div>
        <div style={{"--r": 5, "--c": 4}} className="img flex flex-col items-center justify-end">
          <h1 className='text-[#F34848] text-[2.5vw] font-CanelaC'>(01)</h1>
          <p className='text-center text-[.9vw] font-Switzer uppercase'>Disclaimer: May Cause Brand <br/> Awareness</p>
        </div>
    </section>
  )
}

export default Images