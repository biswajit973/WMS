import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="tp-footer-area black-bg pt-130 pb-30">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="tp-footer-widget">
                                <div className="tp-footer-widget__logo mb-30">
                                    <Link to="/">
                                        <img src="/img/logo/logo-text-white.svg" alt="SoftwareStudios" />
                                    </Link>
                                </div>
                                <div className="tp-footer-widget__text mb-30">
                                    <p>
                                        An affordable way to elevate your business through a strong online presence.
                                        Harness technology to streamline operations and drive growth with ease and efficiency.
                                    </p>
                                </div>
                                <div className="tp-footer-widget__social-link">
                                    <a href="https://wa.me/919063677927?text=Hi%2C%20I%20need%20a%20website%20for%20my%20business" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
                                    <a href="https://www.linkedin.com/company/softwarestudios" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="https://www.facebook.com/softwarestudios" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                                    <a href="https://www.instagram.com/softwarestudios" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-2 col-md-6 d-flex justify-content-lg-center">
                            <div className="tp-footer-widget">
                                <div className="tp-footer-widget__title pb-15">
                                    <h3 className="footer-title">Useful Links</h3>
                                </div>
                                <div className="tp-footer-widget__list">
                                    <ul>
                                        <li><Link to="/service-3/">Case Studies</Link></li>
                                        <li><Link to="/testimonial/">Testimonials</Link></li>
                                        <li><Link to="/price/">Pricing</Link></li>
                                        <li><Link to="/job/">Careers</Link></li>
                                        <li><Link to="/bde/">BDE</Link></li>
                                        <li><Link to="/contact/">Contact us</Link></li>
                                        <li><Link to="/faq/">FAQ</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-2 col-md-6">
                            <div className="tp-footer-widget pl-20">
                                <div className="tp-footer-widget__title pb-15">
                                    <h3 className="footer-title">Our Services</h3>
                                </div>
                                <div className="tp-footer-widget__list">
                                    <ul>
                                        <li><Link to="/service-1/">All Services</Link></li>
                                        <li><Link to="/service-details/">Web Development</Link></li>
                                        <li><Link to="/service-3/">Case Studies</Link></li>
                                        <li><Link to="/about/">About Us</Link></li>
                                        <li><Link to="/portfolio/">Portfolio</Link></li>
                                        <li><Link to="/blog-details/">Blog</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="tp-footer-widget">
                                <div className="tp-footer-widget__title pb-15">
                                    <h3 className="footer-title">Stay Updated!</h3>
                                </div>
                                <div className="tp-footer-widget__text mb-55">
                                    <p>
                                        Be the first to know about our latest updates, promotions, and industry news.
                                        Subscribe to our newsletter and stay ahead!
                                    </p>
                                </div>
                                <div className="tp-footer-widget__input">
                                    <form action="#">
                                        <input type="email" placeholder="Enter your email" required />
                                        <button type="submit"><i className="fas fa-paper-plane"></i> Subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* SEO Location Links */}
                <div className="container">
                    <div className="row pt-30 pb-20">
                        <div className="col-12">
                            <div className="tp-footer-locations text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '25px' }}>
                                <h5 style={{ color: '#fff', fontSize: '14px', marginBottom: '12px', fontWeight: '600' }}>We Serve Across India</h5>
                                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', lineHeight: '2.2' }}>
                                    <Link to="/" style={{ color: 'rgba(255,255,255,0.6)' }}>Bhubaneswar</Link> &nbsp;|&nbsp;
                                    <Link to="/" style={{ color: 'rgba(255,255,255,0.6)' }}>Cuttack</Link> &nbsp;|&nbsp;
                                    <Link to="/" style={{ color: 'rgba(255,255,255,0.6)' }}>Rourkela</Link> &nbsp;|&nbsp;
                                    <Link to="/" style={{ color: 'rgba(255,255,255,0.6)' }}>Sambalpur</Link> &nbsp;|&nbsp;
                                    <Link to="/" style={{ color: 'rgba(255,255,255,0.6)' }}>Berhampur</Link> &nbsp;|&nbsp;
                                    <Link to="/" style={{ color: 'rgba(255,255,255,0.6)' }}>Puri</Link> &nbsp;|&nbsp;
                                    <Link to="/" style={{ color: 'rgba(255,255,255,0.6)' }}>Balasore</Link> &nbsp;|&nbsp;
                                    <Link to="/" style={{ color: 'rgba(255,255,255,0.6)' }}>Dhenkanal</Link> &nbsp;|&nbsp;
                                    <Link to="/" style={{ color: 'rgba(255,255,255,0.6)' }}>Bhawanipatna</Link> &nbsp;|&nbsp;
                                    <Link to="/" style={{ color: 'rgba(255,255,255,0.6)' }}>Kalahandi</Link> &nbsp;|&nbsp;
                                    <Link to="/" style={{ color: 'rgba(255,255,255,0.6)' }}>Odisha</Link> &nbsp;|&nbsp;
                                    <Link to="/" style={{ color: 'rgba(255,255,255,0.6)' }}>Hyderabad</Link> &nbsp;|&nbsp;
                                    <Link to="/" style={{ color: 'rgba(255,255,255,0.6)' }}>Kolkata</Link> &nbsp;|&nbsp;
                                    <Link to="/" style={{ color: 'rgba(255,255,255,0.6)' }}>Delhi</Link> &nbsp;|&nbsp;
                                    <Link to="/" style={{ color: 'rgba(255,255,255,0.6)' }}>Mumbai</Link> &nbsp;|&nbsp;
                                    <Link to="/" style={{ color: 'rgba(255,255,255,0.6)' }}>Pune</Link> &nbsp;|&nbsp;
                                    <Link to="/" style={{ color: 'rgba(255,255,255,0.6)' }}>Chennai</Link> &nbsp;|&nbsp;
                                    <Link to="/" style={{ color: 'rgba(255,255,255,0.6)' }}>Bengaluru</Link> &nbsp;|&nbsp;
                                    <Link to="/" style={{ color: 'rgba(255,255,255,0.6)' }}>Ahmedabad</Link> &nbsp;|&nbsp;
                                    <Link to="/" style={{ color: 'rgba(255,255,255,0.6)' }}>Jaipur</Link> &nbsp;|&nbsp;
                                    <Link to="/" style={{ color: 'rgba(255,255,255,0.6)' }}>Lucknow</Link> &nbsp;|&nbsp;
                                    <Link to="/" style={{ color: 'rgba(255,255,255,0.6)' }}>Chandigarh</Link> &nbsp;|&nbsp;
                                    <Link to="/" style={{ color: 'rgba(255,255,255,0.6)' }}>Nagpur</Link> &nbsp;|&nbsp;
                                    <Link to="/" style={{ color: 'rgba(255,255,255,0.6)' }}>Patna</Link> &nbsp;|&nbsp;
                                    <Link to="/" style={{ color: 'rgba(255,255,255,0.6)' }}>Surat</Link> &nbsp;|&nbsp;
                                    <Link to="/" style={{ color: 'rgba(255,255,255,0.6)' }}>Kochi</Link> &nbsp;|&nbsp;
                                    <Link to="/" style={{ color: 'rgba(255,255,255,0.6)' }}>Visakhapatnam</Link> &nbsp;|&nbsp;
                                    <Link to="/" style={{ color: 'rgba(255,255,255,0.6)' }}>Coimbatore</Link> &nbsp;|&nbsp;
                                    <Link to="/" style={{ color: 'rgba(255,255,255,0.6)' }}>Guwahati</Link> &nbsp;|&nbsp;
                                    <Link to="/" style={{ color: 'rgba(255,255,255,0.6)' }}>Indore</Link> &nbsp;|&nbsp;
                                    <Link to="/" style={{ color: 'rgba(255,255,255,0.6)' }}>Bhopal</Link> &nbsp;|&nbsp;
                                    <Link to="/" style={{ color: 'rgba(255,255,255,0.6)' }}>Raipur</Link> &nbsp;|&nbsp;
                                    <Link to="/" style={{ color: 'rgba(255,255,255,0.6)' }}>West Bengal</Link> &nbsp;|&nbsp;
                                    <Link to="/" style={{ color: 'rgba(255,255,255,0.6)' }}>Chhattisgarh</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tp-copyright-area">
                    <div className="container">
                        <div className="copyright-border pt-40">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-12">
                                    <div className="tp-copyright-left text-lg-start text-start text-md-center">
                                        <p> © Copyright 2024 SoftwareStudios. All Rights Reserved</p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-12">
                                    <div className="tp-copyright-right text-start text-md-center text-lg-end">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
