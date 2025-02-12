import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Clients = () => {
    useEffect(() => {
        gsap.to('.NwhatBox', {
            width: '100%',
            duration: 1,
            scrollTrigger: {
                trigger: '.Nwhat',
                start: 'top 0%',
                end: 'top -20%',
                scrub: 3
            }
        });
    }, []);

    return (
        <section className='Nwhat h-[150vh] w-full flex flex-row-reverse relative'>
            {/* Left Section */}
            <div className="h-full w-[40%] flex flex-col gap-[4vw] justify-center pl-[9vw]">
                <p className='text-[1vw] font-SwitzerB'>CLIENTS</p>
                <h1 className='text-[5vw] leading-[4vw] font-SoehneSD'>TELL<br/>YOUR STORY</h1>
                <p className='leading-none font-SwitzerR text-[1.1vw] w-[47%]'>
                We create and execute innovative communication strategies that shape the digital narratives of today, delivering measurable outcomes and lasting impact for our clients across North America.
                </p>
            </div>

            {/* Right Section - Background Image */}
            <div className="h-full w-[60%] flex justify-center items-center bg-[url(/img/10.jpg)] bg-cover bg-center"></div>

            {/* Scrolling Image Box */}
            <div className="h-[150vh] w-[10vw] bg-red absolute left-[60%] -translate-x-[50%] flex flex-col justify-evenly items-center">
                <h1 className='text-[3vw] text-[#F34848] font-CanelaC'>(03)</h1>
                <div className="h-[20vh] w-[15vw]">
                    <div className="NwhatBox h-full w-[0%] overflow-hidden">
                        <div className="h-full w-full">
                            <img className="h-full object-cover object-left" src="/img/9.avif" alt="Image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;