import React from 'react';

const Header = () => {
    return (
        <div className=''>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-50 flex justify-between py-8'>

                <div className='relative z-10 flex items-center gap-16'>
                    <div className=' flex items-center'>
                        <img className='h-10' src="/images/icon-red-512.png" alt="" />
                        <h2 className='text-xl text-gray-700 font-semibold px-3'>
                            YourMove
                        </h2>
                    </div>
                    <div className='hidden lg:block'>
                        <a href='/' className=' rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]'>Home</a>
                        <a href='#features' className=' rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]'>Features</a>
                        <a href='#contact' className=' rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]'>Contact</a>
                        <a href='https://www.yourmove.ai/privacy' className=' rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]'>
                            Privacy policy
                        </a>

                    </div>
                </div>

                <div className=' items-center gap-6 hidden lg:flex'>
                    <h4>
                        <a href='https://www.yourmove.ai/' className='  rounded-lg px-3 py-[10px] text-sm text-gray-700 transition duration-200 delay-150 border-gray-300 hover:border-gray-500 border-[1px] hover:text-gray-900 '>Try it now</a>
                    </h4>
                    <div className='tooltip tooltip-right' data-tip="Coming soon">
                        <img className='h-[40px] opacity-80 cursor-pointer rounded-md' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/640px-Download_on_the_App_Store_Badge.svg.png" alt="" />
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Header;