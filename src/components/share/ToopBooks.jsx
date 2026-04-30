import React from 'react';
import BookCard from './BookCard';

const ToopBooks = async() => {
    const res = await fetch('http://localhost:3000/books.json')
    const books = await res.json()
    console.log(books)
    return (
        <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
                {
                    books.slice(0,4).map(book=> <BookCard key={book.id} book={book} />)
                }
            </div>

            
        </div>
    );
};

export default ToopBooks;