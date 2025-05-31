import React from 'react'
import Image from 'next/image';

const HeroSection = () => {
    return (
        <section>
            <div className='grid grid-cols-1 lg:grid-cols-12'>
                
                {/* Left side */}
                <div className='col-span-7 place-self-center'>
                    <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
                        Hello, I'm Brian
                    </h1>
                    <p className='text-[#ADB7BE] text-lg lg:text-xl mb-6'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, ea, magnam nam beatae reprehenderit dolores fugit accusantium iure adipisci nisi similique voluptatum cumque dolor ullam sed aspernatur maxime ipsa natus!
                    </p>
                    <div>
                        <button className='px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black'>Hire Me</button>
                        <button className='px-6 py-3 rounded-full mr-4 bg-transparent hover:bg-slate-800 text-white border border-white mt-4'>Download CV</button>
                    </div>
                </div>

                {/* Right side */}
                <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                    <div className='rounded-full bg-[#181818] w-[375px] h-[375px] lg:w-[400px] lg:h-[400px] relative'>
                        <Image
                            src="/images/hero_img.png"
                            alt="Hero Image"
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            width={250}
                            height={250}
                        />
                    </div>
                </div>
            </div>

            
        </section>
    )
}

export default HeroSection