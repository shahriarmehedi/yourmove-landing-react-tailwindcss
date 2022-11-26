import React from 'react';

const Hero = () => {
    return (
        <div className=''>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-20 flex flex-col lg:flex-row justify-between items-center py-8'>
                <div>
                    <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-700'>
                        Spend <span className='text-sky-500'>less</span> time texting <br /> and more time <span className='text-red-500'>dating.</span>
                    </h1>
                    <p className='text-gray-500 text-xl font-thin mt-4'>
                        Generate flirty (or thoughtful) responses and openers.
                    </p>
                    <div className='mt-8 flex gap-5 '>
                        <a href="
                            https://www.yourmove.ai/
                        ">
                            <button className='bg-gray-700 text-white px-10 py-[12px] rounded-md text-sm font-semibold hover:bg-red-500 transition duration-200'>Try it now</button>
                        </a>
                        <div className='tooltip tooltip-right' data-tip="Coming soon">
                            <img className='h-[43px] opacity-80 cursor-pointer' src="https://www.pngmart.com/files/10/Download-On-The-App-Store-PNG-Photos.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className=''>
                    <img className=' ' src="/images/1.png" alt="" />

                </div>
            </div>
            <div>
                <div className=''>
                    {/* pink circle */}
                    <div className='absolute top-36 left-10 lg:top-36 lg:left-44 flex flex-col lg:flex-row'>

                        <div className='h-[500px] w-[500px]  rounded-full bg-sky-500 opacity-[0.12] blur-3xl '></div>
                        <div className='h-[500px] w-[500px]  rounded-full bg-red-500 opacity-[0.12] blur-3xl relative bottom-80 right-20 lg:bottom-0 lg:right-36'></div>
                    </div>
                    <div className='absolute top-10 right-56'>
                        <div className='h-[600px] w-[600px] bg-sky-500 rounded-full  opacity-[0.12] blur-3xl'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;