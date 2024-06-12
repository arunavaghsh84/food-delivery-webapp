'use client';

import { useState } from 'react';
import Login from './_components/Login';
import Signup from './_components/Signup';
import Navbar from '../_components/Navbar';
import Footer from '../_components/Footer';

export default function Restaurant() {
    const [login, setLogin] = useState(true);

    return (
        <>
            <Navbar />
            <section className="bg-gray-50 dark:bg-gray-900">
                <div
                    className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
                    style={{ height: 'calc(100vh - 148px)' }}
                >
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            {login ? <Login onToggle={() => setLogin(false)} /> : <Signup onToggle={() => setLogin(true)} />}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
