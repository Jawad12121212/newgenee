import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Founder = () => {
    useGSAP(() => {
        gsap.from('.Felem h1', {
            transformOrigin: 'left',
            y: '-100%',
            rotate: -10,
            duration: 3,
            scrollTrigger: {
                trigger: '.founder',
                start: 'top 50%',
                end: 'top 0%',
            }
        })
    })
    const data = [
        { para: '“Sundae Creative is a trailblazer in <br/> influencer marketing, connecting <br/> brands with influential voices <br/> across social media to build <br/> impactful messages.”' }
    ]
    return (
        <section className='founder h-[140vh] w-full flex items-center'>
            <div className='h-screen w-full px-[1.5vw] flex gap-[8vw]'>
                <img className='h-[43vh] w-[17%] object-cover object-center' src="https://sundaecreative.com/uploads/pages/home/13_450_Small_image-450w.jpg" alt="" />
                <div className="border-l-[1px] border-black h-screen w-[83%] px-[1vw] flex flex-col justify-between">
                    {data.map((item, index) => (
                        <div key={index} className="">
                            {item.para.split('<br/>').map((each, i) => (
                                <div key={i} className="Felem overflow-hidden">
                                    <h1 className='text-[5vw] leading-[4.5vw] font-SoehneSD uppercase'>{each}</h1>
                                </div>
                            ))}
                        </div>
                    ))}
                    <div className="flex flex-col gap-[2vw]">
                        <img className='h-[20vh] w-[8vw] object-cover object-center' src="https://sundaecreative.com/uploads/attachments/quote/16_Quote_Kristina_450_Small_image-450w.jpg" />
                        <p className='text-[1vw] leading-[1vw] font-SwitzerB uppercase'>Kristina Argento<br /><span className='text-[.8vw] font-SwitzerR'>Co-founder</span></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Founder