'use client'
import Link from 'next/link';
import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const path = usePathname()

    const links = <>
        <Link className={`${path === '/' && 'border-b pb-1 text-success font-semibold'}`} href={'/'}>Home</Link>
        <Link className={`${path === '/allbooks' && 'border-b pb-1 text-success font-semibold'}`} href={'/allbooks'}>All Books</Link>
        <Link className={`${path === '/profile' && 'border-b pb-1 text-success font-semibold'}`} href={'/profile'}>profile</Link>
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

                        <Link className='' href={'/'}>
                            <Image className='w-30  rounded-full ' src={logo} alt='logo' height={70} width={70} />
                        </Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-5">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;