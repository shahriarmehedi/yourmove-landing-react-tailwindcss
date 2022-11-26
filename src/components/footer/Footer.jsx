import React from 'react';

const Footer = () => {
    return (
        <div className='bg-gray-800 text-gray-300'>
            <footer className="footer footer-center p-10 rounded">
                {/* <div className="grid grid-flow-col gap-4">
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div> */}
                <div>
                    <div className=' flex items-center'>
                        <img className='h-10' src="/images/icon-red-512.png" alt="" />
                        <h2 className='text-xl text-gray-300 font-semibold px-3'>
                            YourMove
                        </h2>
                    </div>
                </div>
                <div>
                    <p>Copyright © 2022 - All right reserved by
                        <span>
                            <a href='https://www.yourmove.ai/' className=' font-bold  rounded-lg px-1 text-red-500  hover:text-sky-500 '>YourMove</a>
                        </span>
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;