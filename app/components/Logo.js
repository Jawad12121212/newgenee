import React from 'react'

const Logo = () => {
    const data = [
        {h1: 'LOREAL PARIS', img: 'https://sundaecreative.com/uploads/attachments/brand/L_OREAL_PARIS-450w.png'},
        {h1: 'ROYALMOUNT', img: 'https://sundaecreative.com/uploads/attachments/brand/ROYALMOUNT-450w.png'},
        {h1: 'DAVIDSTEA', img: 'https://sundaecreative.com/uploads/attachments/brand/DAVIDSTEA-450w.png'},
        {h1: 'ROOTS', img: 'https://sundaecreative.com/uploads/attachments/brand/ROOTS-450w.png'},
        {h1: 'BATH AND BODY WORKS', img: 'https://sundaecreative.com/uploads/attachments/brand/BATH_AND_BODY-450w.png'},
        {h1: 'CALL IT SPRING', img: 'https://sundaecreative.com/uploads/attachments/brand/CALL_IT_SPRING-450w.png'},
        {h1: 'MOON ORAL', img: 'https://sundaecreative.com/uploads/attachments/brand/MOON_ORAL-450w.png'},
        {h1: 'ESSENCE BEAUTY', img: 'https://sundaecreative.com/uploads/attachments/brand/ESSENCE_BEAUTY-450w.png'},
    ]
  return (
    <section className='h-[120vh] w-full px-[2vw] flex items-center'>
        <div className="h-[100vh] w-[100%] flex flex-wrap gap-[2vw]">
            {data.map((item, i) => (
                <div key={i} className="h-[35vh] w-[22vw] flex flex-col justify-start items-center gap-[5vw] py-[1vw] border-t-[1px] border-black">
                <div className="flex justify-between w-full">
                    <span className="h-4 w-4 bg-red-600"></span>
                    <h1 className='font-CanelaC text-[1.7vw] font-bold leading-[1.5vw] '>{item.h1}</h1>
                </div>
                <img className='h-[7vw]' src={item.img} />
            </div>
            ))}
        </div>
    </section>
  )
}

export default Logo