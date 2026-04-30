import React from 'react';
import { FaStar } from 'react-icons/fa6';

const ReviewCard = ({ review }) => {
    console.log(review)
    const numbers = [1, 2, 3, 4, 5, 6, 7]
    return (
        <div className='card shadow p-4 hover:shadow-2xl duration-700 text-center space-y-3'>
            <h1 className='text-lg font-bold'> {review.name}</h1>
            <p>{review.comment}</p>
            <p className='text-lg font-bold'>{review.rating} Star</p>
            <div className="flex gap-3 items-center justify-center ">
                {
                    numbers.map(num => {
                        if (num <= Number(review.rating)) {

                            return <FaStar key={num} className='text-[#f97330] text-lg' />
                        }
                    })
                }
            </div>
        </div>
    );
};

export default ReviewCard;