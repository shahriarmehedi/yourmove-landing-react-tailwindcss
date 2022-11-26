import React from 'react';

const AppStore = () => {
    return (
        <div className='bg-gray-800 py-20'>
            <div className='text-center'>
                <h3 className='text-2xl lg:text-4xl font-semibold text-white'>
                    Get our app on the App Store
                </h3>
                <p className='text-gray-500 p-3'>
                    To get our AI powered texting app on your phone, download it from the App Store.
                </p>
            </div>
            <div className='flex justify-center items-center py-10'>
                <div className='tooltip tooltip-top' data-tip="Coming soon">
                    <img className='h-[43px] opacity-80 cursor-pointer shadow-lg shadow-sky-500/50' src="https://www.pngmart.com/files/10/Download-On-The-App-Store-PNG-Photos.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default AppStore;