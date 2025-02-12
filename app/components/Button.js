import React, { useEffect, useState } from 'react'
import '../globals.css'

const Button = ({val}) => {
  useEffect(() => {
    let button = document.querySelectorAll('.btn')
    button.forEach((btn)=>{
      btn.addEventListener('mouseenter', (e) => {
        btn.style.cursor = 'pointer';
        let ripple = document.createElement('span')
        btn.appendChild(ripple)
        let x = e.clientX - e.target.offsetLeft
        let y = e.clientY - btn.getBoundingClientRect().top
        ripple.style.left = `${x}px`
        ripple.style.top = `${y}px`
  
        setTimeout(() => {
          ripple.remove()
        }, 1000);
      })
    })
  }, []);
  return (
    <a href="#" className='relative btn px-[2vw] py-[1vw] bg-black text-white inline-block overflow-hidden font-SwitzerM text-[.8vw]'>
      {val}
    </a>

  )
}

export default Button