import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from './Button';

gsap.registerPlugin(ScrollTrigger);

const Hero = ({val}) => {
    const [para] = useState([
        "We narrate the distinctive and captivating stories of some of",
        "the world's most desirable brands. Our specialties include",
        "public relations, social media management, content creation,",
        "and brand partnerships, enabling us to link our clients with",
        "leading influencers, media outlets and their target audiences."
    ]);

    useGSAP(() => {
        let tl = gsap.timeline();
        tl.from('#head0, #head1', {
            transformOrigin: 'left',
            y: '100%',
            rotate: '10deg',
            duration: 2,
        }, 'i');
        tl.from('#head2, #head3', {
            transformOrigin: 'right',
            y: '-100%',
            rotate: '10deg',
            duration: 2,
        }, 'i');
        tl.to('.anime', {
            width: '100%',
            duration: 1,
        }, 'i');
        let tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: '.pare',
                start: 'top 0%',
                end: 'top -50%',
                scrub: 1,
                pin: true
            }
        })
        tl2.to('.child', {
            height: '120%',
            width: '100%',
        }, 'a');
        tl2.to('#fir', {
            x: '-100%',
            opacity: .2
        }, 'a');
        tl2.to('#sec', {
            x: '100%',
            opacity: .2
        }, 'a');
        gsap.from('.aniPara span', {
            transformOrigin: 'left',
            y: '-100%',
            opacity: 0,
            rotate: '-10deg',
            duration: 2,
            stagger: .3,
            scrollTrigger: {
                trigger: '.paraBox',
                start: 'top 50%',
                end: 'top 0%',
            }
        });
    });

    return (
        <section className='main h-[230vh] max-sm:h-[100vh] w-full bg-black relative overflow-hidden'>
            <div className="h-screen max-sm:h-[50vh] w-full flex flex-col justify-center items-center text-white">
                {['A New', 'Generation', 'Communications', 'Agency'].map((item, i) => (
                    <div key={i} className="overflow-hidden">
                        <h1 id={`head${i}`} className={`leading-[9.5vw] uppercase text-[12vw] ${i <= 1 ? 'font-CanelaC' : 'font-SoehneSD'}`}>
                            {item}
                        </h1>
                    </div>
                ))}
                <div className="flex justify-between w-full text-[.8vw] px-[6vw]">
                    <p id='fir' className='text-center'>WE STRATEGICALLY CONNECT BRANDS<br />WITH AUDIENCES</p>
                    <p id='sec'>WHO PROVOKE, INSPIRE AND CONVERT</p>
                </div>
            </div>
                <div className=" md:hidden h-[20vh] w-[100%] flex justify-center items-center">
                    <img className='h-[100%] w-[70%] object-cover object-center' src="/img/1.jpg" alt="" />
                </div>
            <div className="pare max-sm:hidden h-screen w-full overflow-hidden absolute top-[0%] z-[999] flex justify-center items-center">
                <div className="child h-[26vh] w-[22vw] max-sm:w-full">
                    <div className="anime h-full w-[0%] overflow-hidden">
                        <div className="h-full w-full">
                            <img className="h-[120%] object-cover object-left" src="/img/1.jpg" alt="Image"/>
                        </div>
                    </div>
                </div>

            </div>

            <div className="paraBox absolute bottom-0 h-[80vh] max-sm:h-[20vh] w-full bg-white flex flex-col items-center justify-center gap-[4vw]">
                <p className='aniPara uppercase font-CanelaC text-center text-[3.7vw] leading-none font-[400]'>
                    {para.map((item, i) => (
                        <div key={i} className="overflow-hidden">
                            <span className='inline-block'>{item}<br /></span>
                        </div>
                    ))}
                </p>
                <Button val= 'ABOUT US' />
            </div>
        </section>
    );
};

export default Hero;
