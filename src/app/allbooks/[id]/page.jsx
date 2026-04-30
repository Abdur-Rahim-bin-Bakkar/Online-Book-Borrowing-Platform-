import Brrow from '@/components/share/Brrow';
import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa6';

const BookDetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch("http://localhost:3000/books.json", { cache: 'no-store' })
    const books = await res.json()
    const currentBook = books.find(book => book.id == id)
    console.log(currentBook)
    const numbers = [1, 2, 3, 4, 5, 6, 7]
    return (
        <div>
            <div className='card p-3 md:p-10 bg-[#f7f6f1] my-10 duration-50 md:flex-row gap-5 '>
                <div className="">
                    <Image className='max-w-100 mx-auto object-cover rounded-md' src={currentBook.image_url} alt='image' width={300} height={250} />
                </div>

                <div className="flex-1 space-y-6">

                    <p className='my-4 text-lg font-bold'>Book Name: <span className='text-[#6356c1]'> {currentBook.title}</span> </p>
                    <p className='my-4 text-lg font-bold'>Author: <span className='text-[#6356c1]'> {currentBook.author}</span> </p>
                    <p className='my-4 text-lg font-bold'>category: <span className='text-[#6356c1]'> {currentBook.category}</span> </p>
                    <p className='my-4 text-lg font-bold'>available quantity
                        : <span className='text-[#6356c1]'> {currentBook.available_quantity
                        }</span> </p>

                    <p className='my-4 '>{currentBook.description}</p>

                    <Brrow name={currentBook.title} />

                </div>


            </div>
        </div>
    );
};

export default BookDetailsPage;