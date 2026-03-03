import React from 'react';
import SEOHead from '../components/SEOHead';


const ContactPage = () => {
    return (
        <>
            <SEOHead
                title="Contact SoftwareStudios — Best Web Developer in Bhubaneswar & Odisha"
                description="Get in touch with Odisha's top web development company. Free consultation. Call +91 9063677927. We reply within 1 hour."
                path="/contact/"
            />

            <div className="tp-hero-area-two">
                <div className="tp-hero-bg-circle p-relative">
                    <div className="tp-hero-light-shape-one">
                        <img src="/img/hero/hero-light-1.png" alt="" />
                    </div>
                    <div className="tp-hero-light-shape-two">
                        <img src="/img/hero/hero-light-2.png" alt="" />
                    </div>
                    <div className="tp-hero-light-shape-three z-index-1">
                        <img src="/img/hero/Spiral.png" alt="" />
                    </div>
                    <div className="tp-hero-light-shape-four z-index-1">
                        <img src="/img/hero/hero-light-2.png" alt="" />
                    </div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-10">
                                <div className="tp-hero-content-box text-center">
                                    <h3 className="tp-hero-title wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".6s">
                                        Hi 👋 Ready to supercharge your business with our tech expertise?
                                        <span className="tp-highlight">
                                            <svg width="244" height="8" viewBox="0 0 244 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 0L244 8H0V0Z" fill="#FFDC60" />
                                            </svg>
                                            <i className="tp-theme-color">Get in Touch with Our Tech Heroes!</i>
                                        </span>
                                    </h3>
                                    <p className="tp-subtitle" style={{ fontSize: '14px', color: '#777', marginTop: '10px' }}>
                                        Let our experts elevate your business. Request a call back or reach out to us—your tech boost is just a step away!
                                    </p>

                                    <div className="tp-hero-img mt-20 mb-80 wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".8s">
                                        <img src="/img/hero/hero-3.png" alt="" />
                                    </div>
                                    <div className="tp-hero-social-link wow tpfadeUp" data-wow-duration=".7s" data-wow-delay="1s">
                                        <a className="tp-btn-white-brand" href="#"><img className="mr-15" src="/img/hero/hero-icon-1.png" alt="" /> Dribbble <i className="fal fa-long-arrow-right"></i></a>
                                        <a className="tp-btn-white-brand" href="#"><img className="mr-15" src="/img/hero/hero-icon-2.png" alt="" /> Behance <i className="fal fa-long-arrow-right"></i></a>
                                        <a className="tp-btn-white-brand" href="#"><img className="mr-15" src="/img/hero/hero-icon-3.png" alt="" /> Message <i className="fal fa-long-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tp-contact-area pt-135 pb-130">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="tp-contct-wrapper contact-space-40">
                                <div className="tp-contact-thumb mb-60">
                                    <img src="/img/contact/contact-1.jpg" alt="Contact Image" />
                                </div>
                                <div className="tp-contact-info mb-40">
                                    <h4 className="contact-title">Mail Address</h4>
                                    <span><a href="mailto:info@softwarestudios.com">info@softwarestudios.com</a></span>
                                </div>
                                <div className="tp-contact-info mb-40">
                                    <h4 className="contact-title">Phone Number</h4>
                                    <span><a href="tel:+919063677927">+91 9063677927</a></span>
                                </div>
                                <div className="tp-contact-info">
                                    <h4 className="contact-title">Address</h4>
                                    <span><a href="https://www.google.com/maps?q=Khairatabad,+Hyderabad,+India" target="_blank" rel="noopener noreferrer">Khairatabad, Hyderabad, India</a></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="tpcontact">
                                <h4 className="tp-contact-big-title">Let’s Connect...</h4>
                                <div className="tpcontact__form tpcontact__form-3">
                                    <form id="contact-form" onSubmit={(e) => e.preventDefault()}>
                                        <input name="name" type="text" placeholder="Enter Your Name" />
                                        <input name="email" type="email" placeholder="Enter Your Email" />
                                        <textarea name="message" placeholder="Enter Your Message"></textarea>
                                        <button type="submit" className="tp-btn-yellow">Send Message</button>
                                    </form>
                                    <p className="ajax-response"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactPage;
