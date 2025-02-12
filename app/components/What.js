import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const What = () => {
    useEffect(() => {
        gsap.to('.whatBox', {
            width: '100%',
            duration: 1,
            scrollTrigger: {
                trigger: '.what',
                start: 'top 0%',
                end: 'top -20%',
                scrub: 3
            }
        });
    }, []);

    return (
        <section className='what h-[150vh] w-full flex relative'>
            {/* Left Section */}
            <div className="h-full w-[40%] flex flex-col gap-[4vw] justify-center pl-[9vw]">
                <p className='text-[1vw] font-SwitzerB'>SERVICES</p>
                <h1 className='text-[5vw] leading-none font-SoehneSD'>WHAT WE DO</h1>
                <p className='leading-none font-SwitzerR text-[1.1vw]'>
                    Our mission is to empower<br /> the brands we believe in with<br />
                    tailor-made approaches that<br /> ignite creativity and growth<br /> without limits.
                </p>
            </div>

            {/* Right Section - Background Image */}
            <div className="h-full w-[60%] flex justify-center items-center bg-[url(/img/8.jpg)] bg-cover bg-center"></div>

            {/* Scrolling Image Box */}
            <div className="h-[150vh] w-[10vw] bg-red absolute left-[40.5%] -translate-x-[60%] flex flex-col justify-evenly items-center">
                <h1 className='text-[3vw] text-[#F34848] font-CanelaC'>(02)</h1>
                <div className="h-[20vh] w-[15vw]">
                    <div className="whatBox h-full w-[0%] overflow-hidden">
                        <div className="h-full w-full">
                            <img className="h-full object-cover object-left" src="/img/9.avif" alt="Image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default What;