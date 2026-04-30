'use client'
import { SearchContextApi } from '@/lib';
import { useRouter } from 'next/navigation';
import React, { use, useContext, useState } from 'react';
import Box from '../TryCom';

const SearachBar = () => {
    const categoryBtns = ["Story", "Tech", "Science"]

    const { search, setSearch, category, setCategory } = useContext(SearchContextApi)
    const router = useRouter()
    const handleSearch = () => {
        router.push(`http://localhost:3000/allbooks?search=${search}`)
    }

    const handleFilter = (e) => {
        // console.log(e.target.value)
        // setCategory(e.target.value)
        router.push(`http://localhost:3000/allbooks?category=${e.target.value}`)
    }

    return (
        <div className='mt-10 md:flex  space-y-3 justify-between gap-3'>
            <div className="w-full">
                <h1 className='my-2 font-bold text-lg'>Filter by Category</h1>
                <select onChange={handleFilter} name="" id="" className='select'>
                    <option value="" disabled>Select One</option>
                    <option value="">all</option>
                    {
                        categoryBtns.map((cb, ind) => <option value={cb.toLowerCase()} key={ind}>{cb}</option>)
                    }
                </select>
            </div>
            <div className="flex items-center gap-3">
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input onChange={(e) => setSearch(e.target.value)} type="search" required placeholder="Search" />
                </label>
                <button onClick={handleSearch} className='btn btn-success text-white font-bold'>Search</button>
            </div>
        </div>
    );
};

export default SearachBar;