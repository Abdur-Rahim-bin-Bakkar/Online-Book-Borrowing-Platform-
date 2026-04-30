import React from 'react';
import Marquee from 'react-fast-marquee';
import { FaBookOpenReader } from 'react-icons/fa6';

const MarquerCompo = () => {
    return (
        <div className='bg-[#72BAA9]  my-10 py-3 px-3 text-[#f7f6f1] font-bold hover:shadow-2xl duration-500'>
            <Marquee pauseOnHover><FaBookOpenReader className='mx-5'/> Step into a world of knowledge and imagination. Browse, search, and explore books that inspire, educate, and entertain—anytime, anywhere.</Marquee>
        </div>
    );
};

export default MarquerCompo;