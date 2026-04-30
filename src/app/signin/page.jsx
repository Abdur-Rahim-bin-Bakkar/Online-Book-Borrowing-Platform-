'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { toast } from 'react-toastify';

const page = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const handleForm = async (data) => {
        console.log('dfdf')

        const password = data.password;

        const email = data.email;

        const { data: serverData, error } = await authClient.signIn.email({
            email: email, // required
            password: password,
            rememberMe: true,
            callbackURL: "/",
        });
        console.log(serverData, 'data')
        console.log(error, 'error')
        if (error) {
            toast.error(`${error.message}`)
        }
        if(!error){
            toast.success('successfully login')
        }


    }
    const signIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        
        });
    };
    return (
        <div className='min-h-screen'>
            <div className="card max-w-150 shadow mt-15 mx-auto p-5 hover:shadow-2xl duration-700">
                <h1 className='text-2xl font-bold text-center'>Login Form</h1>
                <form onSubmit={handleSubmit(handleForm)} className='mt-5' action="">
                    <div className="space-y-3">

                        <label className='text-lg font-bold' htmlFor="">Email</label><br />
                        <input type="email" className='input mt-3 w-full' placeholder='Enter Your Email' name="" id=""
                            {...register('email', { required: true })}
                        />
                        <label className='text-lg font-bold' htmlFor="">Password</label><br />
                        <input type="password" className='input mt-3 w-full' placeholder='Enter Your Password' name="" id=""
                            {...register('password', { required: 'set 8 digit password' })}
                        />

                    </div>

                    <br />
                    <button className='btn w-full mt-2 btn-success text-white font-bold'>Sign Up</button>
                </form>
                    <p className='text-[#403F3F] text-center mt-3'>Dont’t Have An Account ? <Link href={'/signup'} className=' text-[#F75B5F] font-bold cursor-pointer'>Register</Link></p>
                <div className="divider">OR</div>
                <button onClick={signIn} className='btn btn-outline w-full mt-5 border border-blue-600 text-blue-600 text-lg'><FaGoogle /> Login With Google</button>
            </div>
        </div>
    );
};

export default page;