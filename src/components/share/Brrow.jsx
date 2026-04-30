'use client'
import React from 'react';
import { toast } from 'react-toastify';

const Brrow = ({name}) => {
    const handleBorrow = ()=>{
        toast.success(`${name} added`)
    }
    return (
        <div>
            <button onClick={handleBorrow} className='mt-6 btn btn-primary animate__animated animate__bounce hover:animate__animated '>Borrow This Book</button>
        </div>
    );
};

export default Brrow;