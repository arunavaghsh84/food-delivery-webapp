'use client';

import Footer from '@/app/_components/Footer';
import Navbar from '@/app/_components/Navbar';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Dashboard() {
    const router = useRouter();

    const [token, setToken] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');

        setToken(token);

        if (!token) {
            router.push('/restaurant');
        }

        setLoading(false);
    }, []);

    if (loading || !token) {
        return;
    }

    return (
        <>
            <Navbar />
            <div>Dashboard</div>
            <Footer />
        </>
    );
}
