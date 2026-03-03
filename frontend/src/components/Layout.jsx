import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import QuickContact from './QuickContact';

const Layout = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
        // Scroll to top on route change
        window.scrollTo(0, 0);

        // Re-initialize jQuery plugins if they exist globally
        // We delay slightly to allow DOM to render
        const timer = setTimeout(() => {
            if (window.jQuery && window.collaxInitPlugins) {
                window.collaxInitPlugins(window.jQuery);
            }
        }, 100);

        return () => clearTimeout(timer);
    }, [location.pathname]);

    return (
        <>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
            <ScrollToTop />
            <QuickContact />
        </>
    );
};

export default Layout;
