import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaLocationArrow } from 'react-icons/fa6';

const BookCard = ({ book }) => {
    // console.log(book)
    return (
        <div className='card p-3 bg-[#f7f6f1] shadow hover:shadow-2xl duration-500'>
            <div className="flex-1">
                <Image className='w-full min-h-70 object-cover rounded-md' src={book.image_url} alt='image' width={300} height={250} />
            </div>

            <h1 className='mt-5 font-bold text-xl'>{book.title}</h1>
            <p className='my-4 line-clamp-2'>{book.description}</p>
            <Link className='w-full btn bg-[#f97315]  text-white font-bold flex flex-row' href={`/allbooks/${book.id}`}>
                <button className='flex'>View Details <FaLocationArrow className='text-lg' /></button>
            </Link>

        </div>
    );
};

export default BookCard;