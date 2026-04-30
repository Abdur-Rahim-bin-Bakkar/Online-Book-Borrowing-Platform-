import React from 'react';
import { FaStar } from 'react-icons/fa6';

const ReviewCard = ({review}) => {
    console.log(review)
    return (
        <div className='card shadow p-4 hover:shadow-2xl duration-700 text-center space-y-3'>
           <h1 className='text-lg font-bold'> {review.name}</h1>
           <p>{review.comment}</p>
           <div className="flex gap-3 items-center justify-center mt-3">
                <FaStar  className='text-[#f97330] text-lg' />
                <p className='text-lg font-bold'>{review.rating}</p>
           </div>
        </div>
    );
};

export default ReviewCard;