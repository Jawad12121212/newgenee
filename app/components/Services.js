import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Services = () => {
    useGSAP(()=>{
        gsap.from('.service h1', {
            y: '-100%',
            rotate: '-10deg',
            // stagger: .5,
            duration: 2,
            scrollTrigger: {
                trigger: '.services',
                start: 'top 80%',
                end: 'top 0%',
            }
        })
    })
    const data = [
        { p1: 'SERVICE/001', h1: 'INTEGRATED<br/>COMMUNICATIONS' },
        { p1: 'SERVICE/002', h1: 'INFLUENCER<br/>MARKETING' },
        { p1: 'SERVICE/003', h1: 'PUBLIC<br/>RELATIONS' },
        { p1: 'SERVICE/004', h1: 'SOCIAL<br/>MEDIA' }
    ]
    return (
        <section className='h-[250vh] w-full flex items-center'>
            <div className="services h-[200vh] w-full bg-black">
            {data.map((item, i) => (
                <div key={i} className="elem bg-white border-t-[1px] border-b-[1px] border-black flex gap-[6vw] justify-center py-[2vw] hover:rounded-[90px] hover:duration-500 duration-500 h-[50vh]">
                    <p className='text-[.9vw] text-[#F34848] font-SwitzerM'>{item.p1}</p>
                    <div className="">
                        {item.h1.split('<br/>').map((item, i) => (
                            <div key={i} className="service flex flex-col items-center overflow-hidden">
                                <h1 key={i} className='origin-left text-[9vw] leading-[8vw] font-CanelaC text-center flex'>{item}</h1>
                            </div>
                        ))}
                    </div>
                    <p className='text-[.9vw] text-[#F34848] font-SwitzerM'>LEARN MORE</p>
                </div>
            ))}
            </div>
        </section>
    )
}

export default Services