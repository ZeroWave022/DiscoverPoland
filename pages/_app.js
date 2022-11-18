import React from 'react';
import { useRouter } from 'next/router';
import '../styles/globals.css';

import Title from '../components/Title/Title.js';

function MyApp({ Component, pageProps }) {
    const [loading, setLoading] = React.useState(false);
    const router = useRouter();

    React.useEffect(() => {
        const handleLoading = () => {
            setLoading(true);
        };
        const handleFinished = () => {
            // Add a short delay to avoid flashes when changing page.
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        };

        router.events.on('routeChangeStart', handleLoading);
        router.events.on('routeChangeComplete', handleFinished);
        router.events.on('routeChangeError', handleFinished);
    }, [router]);

    if (loading) {
        return (
        <div className="loader">
            <div className="discoverTitle">
                <Title size="large" font="SaturdayBright">Discover</Title>
                <Title size="large" font="SaturdayBright">Poland</Title>
            </div>
        </div>
    )
    } else {
        return <Component {...pageProps} />;
    }
}

export default MyApp;
