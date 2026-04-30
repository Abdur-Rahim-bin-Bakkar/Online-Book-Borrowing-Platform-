import BookCard from '@/components/share/BookCard';
import SearachBar from '@/components/share/SearachBar';
import { SearchContextApi } from '@/lib';
import React, { use } from 'react';

const page = async ({ searchParams }) => {
    const { category, search } = await searchParams
    console.log(category, 'category')
    console.log(search, 'search')
    console.log('eta ki')

    const res = await fetch("http://localhost:3000/books.json", { cache: 'no-store' })
    const books = await res.json()
    const fileterBooks = search ? books.filter(book => book.title.toLowerCase().includes(search)) : books;
    console.log(fileterBooks)
    // console.log(books)
    return (
        <div>
            <SearachBar/>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-5 mt-15">
                {
                    fileterBooks.map(book => <BookCard key={book.id} book={book} />)
                }
            </div>
        </div>
    );
};

export default page;