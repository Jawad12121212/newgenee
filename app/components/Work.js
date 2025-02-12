import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from './Button';

gsap.registerPlugin(ScrollTrigger);

const Work = ({val}) => {
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
        <section className='h-[180vh] flex items-center w-full'>
        <div className='Nwhat h-[150vh] w-full flex relative'>
            {/* Left Section */}
            <div className="h-full w-[50%] flex flex-col gap-[4vw] justify-center items-start pl-[9vw]">
                <p className='text-[1vw] font-SwitzerB'>WORK</p>
                <h1 className='text-[6vw] leading-[5vw] font-SoehneSD uppercase w-[50%]'>Where PR, Influencer  Marketing and Digital Strategy Converge</h1>
                <p className='font-SwitzerR text-[1.1vw] w-[36.5%]'>
                Our agency is dedicated to delivering tangible and measurable results. Being results-driven means setting clear objectives, continuously analyzing data, and adapting strategies to achieve success. We prioritize outcomes that align with our clients' goals, ensuring that our PR efforts contribute directly to their overall success.
                </p>
                <Button val='DISCOVER ALL CASE STUDIES'/>
            </div>

            {/* Right Section - Background Image */}
            <div className="h-full w-[50%] flex justify-center items-center bg-[url(/img/11.jpg)] bg-cover bg-center">
            </div>

            {/* Scrolling Image Box */}
            <div className="h-[150vh] w-[10vw] bg-red absolute left-[50%] -translate-x-[50%] flex flex-col justify-evenly items-center">
                <h1 className='text-[3vw] text-[#F34848] font-CanelaC'>(04)</h1>
            </div>
        </div>
        </section>
    );
};

export default Work;