'use client'
import { authClient } from '@/lib/auth-client';
import { redirect, useRouter } from 'next/navigation';
// import { redirect } from 'next/dist/server/api-utils';
import React from 'react';
import { toast } from 'react-toastify';

const Brrow = ({ name }) => {
    const router = useRouter()
    const {
        data: session,
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession()
    const handleBorrow = () => {
        console.log(session)
        if(!session){
            router.push('/signin')
            return;
        }
        toast.success(`${name} added`)
    }
    return (
        <div>
            <button onClick={handleBorrow} className='mt-6 btn btn-primary animate__animated animate__bounce hover:animate__animated '>Borrow This Book</button>
        </div>
    );
};

export default Brrow;