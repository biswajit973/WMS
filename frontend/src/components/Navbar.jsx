import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header className="d-none d-lg-block">
                <div
                    id="header-sticky"
                    className={`tp-header-area-two header-transparent header-space-three pl-115 pr-115 pt-35 ${isSticky ? 'header-sticky' : ''}`}
                >
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-xxl-3 col-xl-2 col-lg-2">
                                <div className="tp-logo text-start">
                                    <Link to="/">
                                        <img src="/img/logo/logo-text-blue.svg" alt="SoftwareStudios Logo" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-7 col-lg-7">
                                <div className="tp-main-menu tp-menu-black text-center">
                                    <nav id="mobile-menu">
                                        <ul>
                                            <li><Link to="/">Home</Link></li>
                                            <li><Link to="/service-1/">What we do</Link></li>
                                            <li><Link to="/about/">Who we are</Link></li>
                                            <li><Link to="/portfolio/">Our Work</Link></li>
                                            <li><Link to="/price/">Pricing</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-xl-3 col-lg-3">
                                <div className="tp-header-left d-flex align-items-center justify-content-end">
                                    <div className="tp-header-yellow-button tp-yellow-space">
                                        <Link className="tp-btn-black" to="/contact/">Contact</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            <div id="header-sticky-mobile" className={`tp-md-header-area d-md-block d-lg-none pt-30 pb-30 ${isSticky ? 'header-sticky' : ''} header-transparent`}>
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-6 col-6">
                            <div className="tp-logo">
                                <Link to="/">
                                    <img src="/img/logo/logo-text-blue.svg" alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-6">
                            <div className="tp-header-right z-index-1 d-flex align-items-center justify-content-end">
                                <button className="tp-menu-bar"><i className="fal fa-bars"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Offcanvas */}
            <div className="tp-offcanvas-area">
                <div className="tpoffcanvas">
                    <div className="tpoffcanvas__logo">
                        <Link to="/">
                            <img src="/img/logo/logo-text-white.svg" alt="" />
                        </Link>
                    </div>
                    <div className="tpoffcanvas__close-btn">
                        <a className="close-btn" href="javascript:void(0)"><i className="fal fa-times-hexagon"></i></a>
                    </div>
                    <div className="tpoffcanvas__content d-none d-sm-block">
                        <p>We deploy world-class Creative <br /> on demand.</p>
                    </div>
                    <div className="mobile-menu"></div>
                    <div className="tpoffcanvas__contact">
                        <span>Contact us</span>
                        <ul>
                            <li><i className="fas fa-star"></i> <a href="https://goo.gl/maps/abHegV4AoiJA6Syd8" target="_blank" rel="noreferrer">Hyderabad, Telangana 500004, IN</a></li>
                            <li><i className="fas fa-star"></i> <a href="tel:+919063677927">+91 90636 77927</a></li>
                            <li><i className="fas fa-star"></i> <a href="mailto:info@softwarestudios.com">info@softwarestudios.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="body-overlay"></div>
        </>
    );
};

export default Navbar;
