'use client'
import Link from 'next/link';
import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import "animate.css";
import { FaBookOpen, FaHome, FaUserTie } from 'react-icons/fa';
import { authClient } from '@/lib/auth-client';
import { Audio } from 'react-loader-spinner';


const Navbar = () => {
    const path = usePathname()
    const {
        data: session,
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession()
    console.log(session, 'session')
    const handleSignOut = async () => {
        await authClient.signOut();
    }

    const links = <>
        <Link className={`flex gap-2 items-center ${path === '/' && 'border-b pb-1 text-success font-semibold'}`} href={'/'}><FaHome className='text-lg' /> Home</Link>
        <Link className={`flex gap-2 items-center ${path === '/allbooks' && 'border-b pb-1 text-success font-semibold'}`} href={'/allbooks'}><FaBookOpen className='text-lg' /> All Books</Link>
        <Link className={`flex gap-2 items-center ${path === '/profile' && 'border-b pb-1 text-success font-semibold'}`} href={'/profile'}><FaUserTie className='text-lg' />MY profile</Link>
    </>

    return (
        <div className=' shadow'>
            <div className="navbar px-3 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <div className="rounded-full  w-15 h-15 flex justify-center items-center shadow bg-[#f8f9f4]">

                        <Link className='animate__animated animate__bounce hover:animate__animated animate__bounce ' href={'/'}>
                            <Image className='w-30  rounded-full ' src={logo} alt='logo' height={70} width={70} />
                        </Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-8">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-3">

                    {
                        isPending ? <>
                        <Audio
                            height="40"
                            width="40"
                            color="#4fa94d"
                            ariaLabel="audio-loading"
                            wrapperStyle={{}}
                            wrapperClass="wrapper-class"
                            visible={true}
                        />
                        <p>Loading...</p>
                        </> :
                            session ? <>

                                <p className='text-lg font-bold'>{session?.user?.name}</p>
                                <a className="btn" onClick={handleSignOut}>Logout</a>
                            </>
                                :
                                <Link href={'/signin'} className='btn btn-primary'>Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;