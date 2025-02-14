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
        <section className='what h-[150vh] max-sm:h-[110vh] w-full flex relative max-sm:flex-col-reverse'>
            {/* Left Section */}
            <div className="h-full max-sm:h-[50%] w-[40%] max-sm:w-full flex flex-col gap-[4vw] justify-center pl-[9vw]">
                <p className='text-[1vw] font-SwitzerB max-sm:text-[6vw]'>SERVICES</p>
                <h1 className='text-[5vw] leading-none font-SoehneSD max-sm:text-[20vw]'>WHAT WE DO</h1>
                <p className='leading-none font-SwitzerR text-[1.1vw] max-sm:text-[4vw] max-sm:w-[80%] w-[40%]'>
                    Our mission is to empower the brands we believe in with tailor-made approaches that ignite creativity and growth without limits.
                </p>
            </div>

            {/* Right Section - Background Image */}
            <div className="h-full w-[60%] max-sm:h-[50%] max-sm:w-full flex justify-center items-center bg-[url(/img/8.jpg)] bg-cover bg-center"></div>

            {/* Scrolling Image Box */}
            <div className="h-[150vh] max-sm:h-[15vh] w-[10vw] bg-red absolute left-[40.5%] -translate-x-[60%] max-sm:top-[50%] max-sm:-translate-y-[50%] max-sm:left-[50%] max-sm:-translate-x-[50%] flex flex-col justify-evenly items-center max-sm:flex-col-reverse">
                <h1 className='text-[3vw] max-sm:text-[10vw] text-[#F34848] font-CanelaC'>(02)</h1>
                <div className="h-[20vh] w-[15vw] max-sm:h-[8vh] max-sm:w-[30vw]">
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