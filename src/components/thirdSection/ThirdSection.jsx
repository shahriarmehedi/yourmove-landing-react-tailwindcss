import React from 'react';

const ThirdSection = () => {
    return (
        <div>
            <div className='bg-gray-200 relative'>
                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-20 flex flex-col lg:flex-row  items-center py-20 gap-36'>

                    <div>
                        <h2 className='text-4xl text-gray-700 font-semibold'>
                            Generate flirty (or thoughtful) responses and openers.
                        </h2>
                        <p className='text-gray-500 mt-2'>
                            Need a little help getting the conversation started? We've got you covered.
                        </p>
                        <div className=''>
                            <div className='bg-red-400 bg-opacity-10 text-gray-600 rounded-xl py-7 px-10 mt-7'>
                                <span>
                                    {/* conversation svg */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 inline-block" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M2 3a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V3zm1 0v12h12V3H3z" clipRule="evenodd" />
                                        <path fillRule="evenodd" d="M5 5a1 1 0 011-1h6a1 1 0 011 1v2a1 1 0 01-1 1H6a1 1 0 01-1-1V5zm1 0v2h6V5H6z" clipRule="evenodd" />
                                        <path fillRule="evenodd" d="M5 9a1 1 0 011-1h6a1 1 0 011 1v2a1 1 0 01-1 1H6a1 1 0 01-1-1V9zm1 0v2h6V9H6z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <p>
                                    Generate flirty responses using our AI-powered text generator to get the conversation going. We use AI to generate the best possible conversation starters for you.
                                </p>
                            </div>
                            <a href="
                            https://www.yourmove.ai/
                        ">

                                <button className='bg-gray-700 mt-5 text-white px-10 py-[12px] rounded-md text-sm font-semibold hover:bg-red-600 transition duration-200'>Try it now</button>
                            </a>
                        </div>
                    </div>
                    <div>
                        <img className='' src="/images/3.png" alt="" />
                    </div>

                </div>
                <div className='absolute top-10 lg:right-44'>
                    <div className='h-[500px] w-[500px] bg-red-500 rounded-full  opacity-[0.1] blur-3xl'></div>
                </div>
            </div>
        </div>
    );
};

export default ThirdSection;