import React from 'react';
import ReviewCard from './ReviewCard';

const Review = async () => {
    const res = await fetch('https://book-library-two-kohl.vercel.app/review.json', {cache:'no-store'})
    const reviews = await res.json()
    console.log(reviews)

    return (
        <div className='mt-5 border-t mb-10 '>
            <h1 className='mt-5 mb-5 text-2xl font-bold text-center'>Customer Reviews</h1>
            <div className='grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8'>
                {
                    reviews.map((review, ind) => <ReviewCard key={ind} review={review} />)
                }
            </div>
        </div>
    );
};

export default Review;