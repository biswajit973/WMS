import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import QuickContact from './QuickContact';

const Layout = ({ children }) => {
    const location = useLocation();
    const isHandbookRoute = location.pathname.startsWith('/bde');

    useEffect(() => {
        // Scroll to top on route change
        window.scrollTo(0, 0);

        // Re-initialize jQuery plugins if they exist globally
        // We delay slightly to allow DOM to render
        const timer = setTimeout(() => {
            if (!isHandbookRoute && window.jQuery && window.collaxInitPlugins) {
                window.collaxInitPlugins(window.jQuery);
            }
        }, 100);

        return () => clearTimeout(timer);
    }, [isHandbookRoute, location.pathname]);

    return (
        <>
            {!isHandbookRoute && <Navbar />}
            <main>
                {children}
            </main>
            {!isHandbookRoute && <Footer />}
            <ScrollToTop />
            {!isHandbookRoute && <QuickContact />}
        </>
    );
};

export default Layout;
