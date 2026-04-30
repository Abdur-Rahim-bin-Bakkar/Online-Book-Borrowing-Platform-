'use client'
import { authClient } from '@/lib/auth-client';
import { redirect, useRouter } from 'next/navigation';
import React from 'react';

const page = () => {
    const {
        data: session,
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession()
    const router = useRouter()

    console.log(session?.user?.image)
    const handleEditProfile = async (e) => {
        console.log(e?.targe?.image?.value)

        await authClient.updateUser({
            image: e?.target?.image?.value,
            name: e?.target?.name?.value,
        })
        // router.push('/profile')
    }
    return (
        <div className='min-h-screen '>
            <form onSubmit={handleEditProfile}  className="max-w-120 mx-auto card shadow-2xl mt-20 p-5">

                <label htmlFor="" className='font-bold text-lg text-black'>Name</label>
                <br />
                <input type="text" className='input w-full mb-5 text-black' name="name" id="" placeholder='enter your new name' />
                <label htmlFor="" className='font-bold text-lg text-black'>Image URL</label>
                <br />
                <input type="text" className='input w-full mb-5 text-black' name="image" id="" placeholder='enter new image URl' />
                <button type='submit' className='btn'>Save</button>
            </form>
        </div>
    );
};

export default page;