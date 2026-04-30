'use client'
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import React from 'react';
import { FaEdit } from 'react-icons/fa';

const page = () => {
    const {
        data: session,
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession()
    console.log(session)
    const handleEditProfile = async () => {
        await authClient.updateUser({
            image: "https://example.com/image.jpg",
            name: "John Doe",
        })
    }
    return (
        <div className='min-h-screen pt-20 text-center'>
            {
                session &&
                <div className="card max-w-150 mx-auto px-10 py-5 shadow hover:shadow-2xl duration-500">

                    <Image className='max-w-40 max-h-40 mx-auto rounded-full' src={session?.user?.image} alt='user image' width={600} height={550} />

                    <p className='mt-5'>{session?.user?.email}</p>
                    <p className='my-3'>User ID: {session?.user?.id}</p>
                    <h1 className=' text-lg font-bold'>{session?.user?.name}</h1>

                    <button className='btn mt-5'><FaEdit className='text-lg ' />Edit your Profile</button>
                </div>
            }
        </div>
    );
};

export default page;