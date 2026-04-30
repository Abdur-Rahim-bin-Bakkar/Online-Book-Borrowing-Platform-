import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
    return (
        <div className='mt-5 md:mt-15 flex justify-between flex-col md:flex-row gap-3 bg-[#f7f6f1] p-5 rounded-md'>
            <div className="flex-1  gap-3 px-3 py-5 space-y-5 md:pt-20">
                <h1 className='text-2xl md:text-4xl font-bold'>Find Your <span className='text-[#6356c1]'> Next Read</span> </h1>
                <p className='text-secondary font-bold '>Discover your next favorite book in our digital library. Explore thousands of titles across genres, from timeless classics to modern bestsellers—all in one place.</p>
                <Link href={'/allbooks'}>
                    <button className='btn btn-success text-white font-bold'>Browse Now</button>
                </Link>
            </div>
            <div className="flex-1">
                <Image
                    className='w-full rounded-2xl shadow hover:shadow-2xl duration-1000'
                    src={'https://media.istockphoto.com/id/2246082274/photo/students-reading-a-book-at-the-school-library-and-laughing.jpg?s=1024x1024&w=is&k=20&c=jZd355FtIBq3-DFxR6OF6rx1jNZ_KbBh3Wbo_WqO9cY='

                    } alt='hero image' width={400} height={400} />
            </div>
        </div>
    );
};

export default Hero;