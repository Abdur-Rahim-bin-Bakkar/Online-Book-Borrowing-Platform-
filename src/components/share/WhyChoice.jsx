import React from 'react';

const WhyChoice = () => {
    return (
        <div>
            <section className="mt-16 mb-20 px-6 text-center">
                <h2 className="text-2xl font-bold mb-8">Why Choose Our Library?</h2>

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-6 shadow rounded-xl">
                        <h3 className="font-semibold">📚 Large Collection</h3>
                        <p className="text-sm mt-2">Thousands of books in one place</p>
                    </div>

                    <div className="p-6 shadow rounded-xl">
                        <h3 className="font-semibold">⚡ Fast Access</h3>
                        <p className="text-sm mt-2">Quick search and smooth browsing</p>
                    </div>

                    <div className="p-6 shadow rounded-xl">
                        <h3 className="font-semibold">❤️ Free to Use</h3>
                        <p className="text-sm mt-2">Enjoy reading without cost</p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default WhyChoice;