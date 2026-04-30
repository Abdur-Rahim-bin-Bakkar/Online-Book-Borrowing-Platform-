import React from 'react';
import Marquee from 'react-fast-marquee';
import { FaBookOpenReader } from 'react-icons/fa6';

const MarquerCompo = () => {
    return (
        <div className='bg-[#72BAA9]  my-10 py-3 px-3 text-[#f7f6f1] font-bold hover:shadow-2xl duration-500'>
            <Marquee pauseOnHover><FaBookOpenReader className='mx-5'/> 
            <p className='border-r-2 border-success pr-5 mr-10'>New Arrivals: JavaScript Mastery</p>
            <p className='border-r-2 border-success pr-5 mr-10'>Special Discount on Memberships</p></Marquee>
        </div>
    );
};

export default MarquerCompo;