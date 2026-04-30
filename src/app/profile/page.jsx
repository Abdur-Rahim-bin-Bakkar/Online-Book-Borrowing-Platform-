'use client'
import ModalForm from '@/components/share/ModalForm';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaEdit } from 'react-icons/fa';
// import { type } from './../../../.next/types/routes.d';

const page = () => {

    const {
        data: session,
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession()
    console.log(session?.user?.image)
    const handleEditProfile = async (e) => {
        console.log(e?.targe?.image?.value)
      
        await authClient.updateUser({
            image: e?.target?.image?.value,
            name:e?.target?.name?.value,
        })
    }
    return (
        <div className='min-h-screen pt-20 text-center'>
            {
                session &&
                <div className="card max-w-150 mx-auto px-10 py-5 shadow hover:shadow-2xl duration-500">
                    {
                        session?.user?.image? 
                        <Image className='max-w-40 max-h-40 mx-auto rounded-full' src={session?.user?.image} alt='user image' width={600} height={550} />
                        :
                        <h1 className='w-30 h-30 border rounded-full mx-auto flex justify-center items-center text-4xl font-bold'>{session?.user?.name[0]}</h1>
                    }

                    <p className='mt-5'>{session?.user?.email}</p>
                    <p className='my-3'>User ID: {session?.user?.id}</p>
                    <h1 className=' text-lg font-bold'>{session?.user?.name}</h1>

                    <Link href={'/edit'} className="btn mt-5" ><FaEdit className='text-lg ' />Edit your Profile</Link>
                    
                </div>
            }
        </div>
    );
};

export default page;