'use client'
import { SearchContextApi } from '@/lib';
import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';

const SearachBar = () => {
    const {search,setSearch,category,setCategory} = useContext(SearchContextApi)
    const router = useRouter()
    console.log(search)
    const handleSearch = ()=>{
        router.push(`http://localhost:3000/allbooks?category=${category}&search=${search}`)
    }
    
    return (
        <div className='mt-10 flex justify-between'>
            <h1>Filter</h1>
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
                    <input onChange={(e)=>setSearch(e.target.value)} type="search" required placeholder="Search" />
                </label>
                <button onClick={handleSearch} className='btn btn-success text-white font-bold'>Search</button>
            </div>
        </div>
    );
};

export default SearachBar;