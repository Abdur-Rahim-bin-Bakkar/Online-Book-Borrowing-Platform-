'use client'
import React, { createContext, useState } from 'react';
export const SearchContextApi = createContext('')

const Provider = ({ children }) => {
    const [search, setSearch] = useState('')
    const [category, setCategory] = useState('')
    return (
        <div>
            <SearchContextApi.Provider value={{search,setSearch,category,setCategory}}>
                {children}
            </SearchContextApi.Provider>
        </div>
    );
};

export default Provider;