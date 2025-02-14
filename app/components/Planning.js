import React from 'react'
import Button from './Button'

const Planning = ({ val }) => {
    const data = [
        { img: '/img/12.png', p1: '01', h1: 'AMAZON PRIME VIDEO "THE <br/> BOYS" ACTIVATION AND VIP EVENT', p2: 'EVENT PLANNING & PRODUCTION' },
        { img: '/img/13.jpg', p1: '02', h1: 'STEVE MADDEN CANADIAN <br/> COLLECTION LAUNCH: MADE TO MOVE', p2: 'INFLUENCER MARKETING' },
        { img: '/img/14.png', p1: '03', h1: 'DULCEDO MODELS: MODEL SEARCH', p2: 'SOCIAL MEDIA' },
        { img: '/img/15.jpg', p1: '04', h1: "L'OREAL LUX TREND HACKING", p2: 'INFLUENCER MARKETING' }
    ]
    return (
        <section className='h-[280vh] max-sm:h-[240vh] w-full flex items-center'>
            <div className="h-[240vh] w-full px-[1.5vw]">
                {data.map((item, i) => (
                    <div key={i} className="h-[60vh] w-full border-t-[1px] border-black border-b-[1px] py-[2vw] flex flex-wrap px-[8vw] gap-[5vw]">
                        <div className="flex gap-[2vw] items-start justify-between h-full max-sm:h-[25vh] w-[25%] max-sm:w-full">
                            <img className='h-full w-[80%] max-sm:w-[60%] object-cover object-center' src={item.img} />
                            <p className='text-[#F34848] font-SoehneSD text-[1.6vw] max-sm:text-[10vw]'>{item.p1}</p>
                        </div>
                        <div className="flex flex-col justify-between items-start h-full w-[50%] max-sm:h-[25vh] max-sm:w-[100%]">
                            <div className="">
                                {item.h1.split('<br/>').map((each, i) => (
                                    <h1 key={i} className='text-[3vw] leading-[3.5vw] max-sm:text-[9vw] max-sm:leading-[8vw] font-CanelaC'>{each}</h1>
                                ))}
                            </div>
                            <p className='px-[1vw] py-[.2vw] border-[1px] max-sm:text-[4vw] border-black font-SwitzerR text-[.9vw]'>{item.p2}</p>
                        </div>
                        <div className="flex items-end w-[25%]">
                            <Button val='VIEW FULL CASE STUDY' />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Planning