'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { authClient } from "@/lib/auth-client";
import { redirect } from 'next/navigation';

const page = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const handleForm = async (data) => {

        const name = data.name;
        const password = data.password;
        const image = data.image;
        const email = data.email;
        // console.log(name, password, email, image)
        // console.log(errors)
        //import the auth client

        const { data: ServerData, error } = await authClient.signUp.email({
            email, // user email address
            password, // user password -> min 8 characters by default
            name, // user display name
            image, // User image URL (optional)
            // A URL to redirect to after the user verifies their email (optional)
        }, {

            onSuccess: (ctx) => {
                redirect('/signin')
            },

        }

        );
        console.log('dfdf')
        console.log(ServerData)
        console.log(error)

    }
    const signIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    };
    return (
        <div className='min-h-screen'>
            <div className="card max-w-150 shadow mt-15 mx-auto p-5 hover:shadow-2xl duration-700">
                <h1 className='text-2xl font-bold text-center'>Sign UP Form</h1>
                <form onSubmit={handleSubmit(handleForm)} className='mt-5' action="">
                    <div className="space-y-3">
                        <label className='text-lg font-bold' htmlFor="">Name</label><br />
                        <input type="text" className='input mt-3 w-full' placeholder='Enter Your Name' name="" id=""
                            {...register('name', { required: true })}
                        />
                        <label className='text-lg font-bold' htmlFor="">Image Link</label><br />
                        <input type="text" className='input mt-3 w-full' placeholder='Enter Your Image Link' name="" id=""
                            {...register('image', { required: true })}
                        />
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
                    <button className='btn w-full mt-5 btn-success text-white font-bold'>Sign Up</button>
                </form>
                <div className="divider">OR</div>
                <button onClick={signIn} className='btn btn-outline w-full mt-5 border border-blue-600 text-blue-600 text-lg'><FaGoogle /> Login With Google</button>
            </div>
        </div>
    );
};

export default page;