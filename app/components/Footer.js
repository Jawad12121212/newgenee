import React from 'react'
import '../globals.css'

const Footer = () => {
  return (
    <footer className='h-screen w-full flex flex-col justify-center items-center bg-black text-white gap-[4vw]'>
      <h1 className='text-[5vw] font-SoehneSD'>SAY HI OR BONJOUR</h1>
      <p className='font-SwitzerR text-center leading-none uppercase text-[.9vw]'>Which topic do you want to<br />discuss with us?</p>
      <div className="h-[35vh] w-[60%] border-[1px] border-white flex">
        <div className="h-full w-[33.33%] bg-black flex justify-center items-center relative group overflow-hidden">
          <p className='text-[3vw] font-CanelaC'>NEW BUSINESS</p>
          <div className="group-hover:h-[135%] absolute top-[-20%] rotate-[-6deg] h-[0%] duration-500 w-[120%] bg-white left-[-10%] flex justify-center items-center">
            <p className='text-[2vw] font-bold font-CanelaC rotate-[6deg] text-black'>LET'S START A PROJECT</p>
          </div>
        </div>
        <div className="h-full w-[33.33%] bg-white relative group overflow-hidden">
          <div className="h-full w-full rounded-[10%] bg-black flex justify-center items-center">
          <p className='text-[3vw] leading-[2.5vw] text-center font-CanelaC'>INFLUENCER<br/>COLLUBURATIONS</p>
          <div className="group-hover:h-[135%] absolute top-[-20%] rotate-[-6deg] h-[0%] duration-500 w-[120%] bg-white left-[-10%] flex justify-center items-center">
            <p className='text-[2vw] font-bold font-CanelaC rotate-[6deg] text-black'>DROP US A LINE</p>
          </div>
          </div>
        </div>
        <div className="h-full w-[33.33%] bg-black flex justify-center items-center relative group overflow-hidden">
          <p className='text-[2vw] font-CanelaC'>JOIN OUR #TEAM</p>
          <div className="group-hover:h-[135%] absolute top-[-20%] rotate-[-6deg] h-[0%] duration-500 w-[120%] bg-white left-[-10%] flex justify-center items-center">
            <p className='text-[2vw] font-bold font-CanelaC rotate-[6deg] text-black'>APPLY NOW</p>
          </div>
        </div>
      </div>
      <p className='font-SwitzerM text-[1.5vw] underline'>info@sundaecreative.com</p>
    </footer>
  )
}

export default Footer