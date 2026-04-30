import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white px-4"> <h1 className="text-7xl font-bold mb-4">404</h1> <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-center"> Oops! Page not found </h2> <p className="text-sm md:text-base text-white/80 mb-6 text-center max-w-md"> The page you are looking for doesn’t exist or has been moved. </p> <Link href="/" className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-xl shadow-lg hover:bg-gray-100 transition" > Go Back Home </Link> </div>
        </div>
    );
};

export default NotFound;