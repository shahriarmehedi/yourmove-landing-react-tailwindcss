import React from 'react';

const SecondSection = () => {
    return (
        <div className='bg-gray-800 mt-10 relative'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-20 flex flex-col lg:flex-row  items-center py-20 gap-36'>
                <div>
                    <img className='' src="/images/2.png" alt="" />
                </div>
                <div>
                    <h2 className='text-3xl lg:text-4xl text-center lg:text-left text-white font-semibold'>
                        AI genarated flirting support
                    </h2>
                    <p className='text-gray-500 mt-2 text-center lg:text-left'>
                        We use AI to generate the best possible conversation starters for you.
                    </p>
                    <div className=''>
                        <div className='bg-gray-700 bg-opacity-20 text-gray-400 rounded-xl py-7 px-10 mt-7 shadow-lg shadow-sky-500/30'>
                            <span>
                                {/* conversation svg */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 inline-block" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M2 3a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V3zm1 0v12h12V3H3z" clipRule="evenodd" />
                                    <path fillRule="evenodd" d="M5 5a1 1 0 011-1h6a1 1 0 011 1v2a1 1 0 01-1 1H6a1 1 0 01-1-1V5zm1 0v2h6V5H6z" clipRule="evenodd" />
                                    <path fillRule="evenodd" d="M5 9a1 1 0 011-1h6a1 1 0 011 1v2a1 1 0 01-1 1H6a1 1 0 01-1-1V9zm1 0v2h6V9H6z" clipRule="evenodd" />
                                </svg>
                            </span>
                            <p>
                                Generate conversation starters for you and your partner to get the conversation going. We use AI to generate the best possible conversation starters for you.
                            </p>
                        </div>
                        <a href="
                            https://www.yourmove.ai/
                        ">

                            <div className='flex justify-center lg:justify-end'>
                                <button className='bg-sky-500 mt-7 text-white px-10 py-[12px] rounded-md text-sm font-semibold hover:bg-sky-600 transition duration-200'>Try it now</button>
                            </div>
                        </a>
                    </div>
                </div>

            </div>
            <div className='absolute top-10 left-10 lg:left-36'>
                <div className='h-[300px] w-[300px] lg:h-[500px] lg:w-[500px] bg-sky-500 rounded-full opacity-40 lg:opacity-[0.15] blur-3xl'></div>
            </div>
        </div>
    );
};

export default SecondSection;