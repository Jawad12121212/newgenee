import React from 'react'

const Poster = () => {
    return (
        <section className='h-[120vh] w-full bg-[url(/img/7.jpg)] bg-cover bg-center px-[2vw] py-[2vw] text-[#F34848] flex'>
            <div className="flex flex-col justify-between h-[100%] w-[67%] max-sm:w-[50%]">
                <h3 className='font-SoehneSD text-[8vw] max-sm:text-[24vw] max-sm:leading-[20vw] leading-[6vw]'>WHERE <br />INFLUENCE</h3>
                <p className='max-sm:hidden text-[1vw] leading-none font-Switzer'>we envision, craft, and execute <br/> groundbreaking communication<br/> strategies.</p>
                <h3 className='font-SoehneSD text-[8vw] max-sm:text-[24vw] max-sm:leading-[20vw] leading-[6vw]'>INTERSECT</h3>
            </div>
            <div className="flex flex-col justify-between h-[100%] w-[30%] max-sm:justify-center">
                <p className='max-sm:hidden font-Switzer text-[1vw] leading-none'>We redefine the conventional<br/> norms of PR, offering a fresh,<br/> forward-thinking perspective as<br/> your agency partner.</p>
                <div className="flex flex-col gap-[2vw]">
                    <h1 className='font-SoehneSD text-[8vw] max-sm:text-[24vw] max-sm:leading-[20vw] leading-[6.3vw]'>AND<br/>IMPACT</h1>
                    <p className=' max-sm:hidden leading-none font-Switzer text-[1vw]'>We pride ourselves on delivering<br/> high-quality, result-driven<br/> campaigns that authentically<br/> connect with audiences and<br/> drive business success.</p>
                </div>
            </div>
        </section>
    )
}

export default Poster
