import React, { useEffect } from 'react';
import SEOHead from '../components/SEOHead';

import { Link } from 'react-router-dom';

const ServicePage = () => {
    useEffect(() => {
        let swiperInstance = null;
        const timer = setTimeout(() => {
            const el = document.querySelector('.testi-slider-active-five');
            if (el && window.Swiper) {
                swiperInstance = new window.Swiper('.testi-slider-active-five', {
                    loop: true, slidesPerView: 3, spaceBetween: 20, centeredSlides: true,
                    autoplay: { delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true },
                    breakpoints: { 1200: { slidesPerView: 3 }, 992: { slidesPerView: 3 }, 768: { slidesPerView: 1 }, 0: { slidesPerView: 1 } },
                });
            }
        }, 100);
        return () => { clearTimeout(timer); if (swiperInstance) swiperInstance.destroy(true, true); };
    }, []);
    return (
        <>
            <SEOHead
                title="Web Development, App Development & Digital Marketing Services"
                description="Explore our services — website design, mobile app development, social media marketing, branding, AI solutions & more. Trusted by 1000+ businesses across India."
                path="/service-1/"
            />

            <div className="tp-hero-area tp-hero-space p-relative z-index-1 fix">
                <div className="tp-hero-shape">
                    <div className="shape-circle-yellow d-none"></div>
                    <div className="shape-circle-blue"></div>
                    <div className="shape-one"><img src="/img/hero/shape-1.png" alt="" /></div>
                </div>
                <div className="tp-hero-wapper">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-7 col-lg-7">
                                <div className="tp-hero-content">
                                    <div className="tp-hero-text">
                                        <h2 className="tp-hero-title wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".6s"> Grow Your Business with the Right Technology 🚀 </h2>
                                        <p className="wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".8s">
                                            Want to get more customers online? Need a website, app, or social media marketing? <br />
                                            We make it easy and affordable — no tech knowledge needed.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-5">
                                <div className="tp-hero-big-img wow fadeInRight" data-wow-duration=".7s" data-wow-delay="1.2s">
                                    <img src="/img/hero/hero-2.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tp-service-area tp-service-bs-space pt-130 pb-130 yellow-bg p-relative">
                <div className="bp-sv-shape-1 d-none d-lg-block">
                    <img src="/img/chose/bp-chose-5.1.png" alt="" />
                </div>
                <div className="bp-sv-shape-2 d-none d-lg-block">
                    <img src="/img/hero/hero-shape-5.2.png" alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-10">
                            <div className="tp-best-services-title-box">
                                <h5 className="tp-subtitle tp-subtitle-before-color">Our Specialisations</h5>
                                <h2 className="tp-title tp-title-sm">Grow your
                                    <span className="tp-section-highlight">
                                        business
                                        <svg width="170" height="12" viewBox="0 0 170 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 0L170 12H0V0Z" fill="#89CEFB" />
                                        </svg>
                                    </span>
                                    with our best service</h2>
                            </div>
                            <div className="tp-sv-button">
                                <img src="/img/service/service-logo.png" alt="" />
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-6 col-md-12 col-12">
                            <div className="tp-sv-space-wrapper">
                                <Link to="/service-details/">
                                    <div className="bg-white-wrapper sv-border-top sv-border-bottom service-space">
                                        <div className="row align-items-center">
                                            <div className="col-xl-3 col-lg-3 col-3">
                                                <div className="tpservices__icon">
                                                    <i className="flaticon-target"></i>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-6">
                                                <div className="tpservices">
                                                    <div className="tpservices__content">
                                                        <h5 className="tp-sv-bs-title">Business <br /> Analysis</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-3 col-3">
                                                <div className="tp-services-best-item text-end">
                                                    <div className="tpservices__icon">
                                                        <div className="angle-right-svg">
                                                            <div className="angle-right">
                                                                <svg width="18" height="33" viewBox="0 0 18 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <line x1="0.707107" y1="1.18181" x2="16.7071" y2="17.1818" stroke="black" strokeWidth="2" />
                                                                    <line x1="1.07121" y1="31.4041" x2="15.2934" y2="17.1819" stroke="black" strokeWidth="2" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/service-details/">
                                    <div className="bg-white-wrapper sv-border-bottom service-space ">
                                        <div className="row align-items-center">
                                            <div className="col-xl-3 col-lg-3 col-3">
                                                <div className="tpservices__icon">
                                                    <i className="flaticon-statistics"></i>
                                                </div>
                                            </div>
                                            <div className="col-xl-6  col-lg-6 col-6 ">
                                                <div className="tpservices">
                                                    <div className="tpservices__content">
                                                        <h5 className="tp-sv-bs-title">Marketing <br />Strategy</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-3 col-3">
                                                <div className="tp-services-best-item text-end">
                                                    <div className="tpservices__icon">
                                                        <div className="angle-right-svg">
                                                            <div className="angle-right">
                                                                <svg width="18" height="33" viewBox="0 0 18 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <line x1="0.707107" y1="1.18181" x2="16.7071" y2="17.1818" stroke="black" strokeWidth="2" />
                                                                    <line x1="1.07121" y1="31.4041" x2="15.2934" y2="17.1819" stroke="black" strokeWidth="2" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/service-details/">
                                    <div className="bg-white-wrapper sv-border-bottom service-space">
                                        <div className="row align-items-center">
                                            <div className="col-xl-3 col-lg-3 col-3">
                                                <div className="tpservices__icon">
                                                    <i className="flaticon-coding"></i>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-6 ">
                                                <div className="tpservices">
                                                    <div className="tpservices__content">
                                                        <h5 className="tp-sv-bs-title">Design & <br />Development</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-3 col-3">
                                                <div className="tp-services-best-item text-end">
                                                    <div className="tpservices__icon">
                                                        <div className="angle-right-svg">
                                                            <div className="angle-right">
                                                                <svg width="18" height="33" viewBox="0 0 18 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <line x1="0.707107" y1="1.18181" x2="16.7071" y2="17.1818" stroke="black" strokeWidth="2" />
                                                                    <line x1="1.07121" y1="31.4041" x2="15.2934" y2="17.1819" stroke="black" strokeWidth="2" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/service-details/">
                                    <div className="bg-white-wrapper sv-border-bottom service-space">
                                        <div className="row align-items-center">
                                            <div className="col-xl-3 col-lg-3 col-3">
                                                <div className="tpservices__icon">
                                                    <i className="flaticon-team"></i>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-6">
                                                <div className="tpservices">
                                                    <div className="tpservices__content">
                                                        <h5 className="tp-sv-bs-title">Business <br />Consulting</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-3 col-3">
                                                <div className="tp-services-best-item text-end">
                                                    <div className="tpservices__icon">
                                                        <div className="angle-right-svg">
                                                            <div className="angle-right">
                                                                <svg width="18" height="33" viewBox="0 0 18 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <line x1="0.707107" y1="1.18181" x2="16.7071" y2="17.1818" stroke="black" strokeWidth="2" />
                                                                    <line x1="1.07121" y1="31.4041" x2="15.2934" y2="17.1819" stroke="black" strokeWidth="2" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tp-service-area pt-110 pb-130">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".6s">
                            <div className="tp-sv-border-effect">
                                <div className="tp-service-item-four sv-1-border sv-color-1 mb-30">
                                    <div className="tp-service-item-four__img  mb-40">
                                        <img src="/img/service/007-email.png" alt="" />
                                    </div>
                                    <div className="tp-service-item-four__title">
                                        <h3 className="tp-sv-sm-title"><Link to="/service-details/">Desktop App Development</Link></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".7s">
                            <div className="tp-sv-border-effect sv-border-effect-1">
                                <div className="tp-service-item-four sv-1-border sv-color-2 mb-30">
                                    <div className="tp-service-item-four__img  mb-40">
                                        <img src="/img/service/service4.1.png" alt="" />
                                    </div>
                                    <div className="tp-service-item-four__title">
                                        <h3 className="tp-sv-sm-title"><Link to="/service-details/">Web and mobile app Development</Link></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".9s">
                            <div className="tp-sv-border-effect sv-border-effect-2">
                                <div className="tp-service-item-four sv-1-border sv-color-3 mb-30">
                                    <div className="tp-service-item-four__img mb-40">
                                        <img src="/img/service/service4.2.png" alt="" />
                                    </div>
                                    <div className="tp-service-item-four__title">
                                        <h3 className="tp-sv-sm-title"><Link to="/service-details/">E-commerce Setup</Link></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow tpfadeUp" data-wow-duration=".7s" data-wow-delay="1s">
                            <div className="tp-sv-border-effect sv-border-effect-3">
                                <div className="tp-service-item-four sv-1-border sv-color-4 mb-30">
                                    <div className="tp-service-item-four__img mb-40">
                                        <img src="/img/service/service4.3.png" alt="" />
                                    </div>
                                    <div className="tp-service-item-four__title">
                                        <h3 className="tp-sv-sm-title"><Link to="/service-details/">Content Creation</Link></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay="1.1s">
                            <div className="tp-sv-border-effect sv-border-effect-4">
                                <div className="tp-service-item-four sv-1-border sv-color-5 mb-30">
                                    <div className="tp-service-item-four__img mb-40">
                                        <img src="/img/service/service4.4.png" alt="" />
                                    </div>
                                    <div className="tp-service-item-four__title">
                                        <h3 className="tp-sv-sm-title"><Link to="/service-details/">Designing and Branding</Link></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay="1.2s">
                            <div className="tp-sv-border-effect sv-border-effect-5">
                                <div className="tp-service-item-four sv-1-border sv-color-6 mb-30">
                                    <div className="tp-service-item-four__img mb-40">
                                        <img src="/img/service/service4.5.png" alt="" />
                                    </div>
                                    <div className="tp-service-item-four__title">
                                        <h3 className="tp-sv-sm-title"><Link to="/service-details/">Digital Marketing</Link></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay="1.3s">
                            <div className="tp-sv-border-effect sv-border-effect-6">
                                <div className="tp-service-item-four sv-1-border sv-color-7 mb-30">
                                    <div className="tp-service-item-four__img mb-40">
                                        <img src="/img/service/service4.6.png" alt="" />
                                    </div>
                                    <div className="tp-service-item-four__title">
                                        <h3 className="tp-sv-sm-title"><Link to="/service-details/">AI/ML Solutions</Link></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow tpfadeUp" data-wow-duration=".3s" data-wow-delay="1.3s">
                            <div className="tp-sv-border-effect">
                                <div className="tp-service-item-four sv-1-border sv-color-1 mb-30">
                                    <div className="tp-service-item-four__img  mb-40">
                                        <img src="/img/service/007-email.png" alt="" />
                                    </div>
                                    <div className="tp-service-item-four__title">
                                        <h3 className="tp-sv-sm-title"><Link to="/service-details/">AI Agents & Automation</Link></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sd-accordio-area grey-bg pt-110 pb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7">
                            <h3 className="tp-title-sm mb-90">Solutions: All Your Questions Answered</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="tp-custom-accordio">
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-items faq-accordio-border">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-buttons" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Is my data safe?
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Absolutely! We prioritize your data security with top-notch encryption and secure servers. All credentials are kept confidential and are solely in your control. Your safety is our top priority.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-items">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-buttons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                How does the 7-day free trial work?
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Our 7-day free trial allows you to experience our services risk-free. If you are not completely satisfied within this period, you can opt for a 100% money-back guarantee.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-items">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-buttons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                What happens after my free trial?
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                After your free trial, if you choose to continue, you will have access to a dedicated manager who simplifies technical details for you, 24/7 support, and one year of free service.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-items">
                                        <h2 className="accordion-header" id="headingFour">
                                            <button className="accordion-buttons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                What makes you different from other agencies?
                                            </button>
                                        </h2>
                                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                We offer customized solutions tailored to your needs, free hosting for your webpages, and a dedicated manager who ensures all technical aspects are made easy for you. Our commitment to exceptional service sets us apart.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-50">
                        <div className="col-12 text-center">
                            <p>Ready to start? Click on our <Link to="/contact/">Let's Talk</Link> page or send us your query directly. You can also call our team for immediate assistance!</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tp-testimonial-area pb-120 pt-50 p-relative">
                <div className="bs-testi-shape-1 d-none d-lg-block">
                    <img src="/img/testimonial/testimonial-shape-5.3.png" alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="tp-testi-wrapper d-flex pb-50 justify-content-between align-items-end">
                                <div className="tp-testimonial-title-box ">
                                    <h5 className="tp-subtitle">Testimonial</h5>
                                    <h2 className="tp-title-sm">Hear from our happy clients</h2>
                                </div>
                                <div className="tp-testi-button-right-side">
                                    <Link className="tp-btn-yellow" to="/testimonial/">More Testimonial</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tp-testimonial-slider-section-four">
                        <div className="swiper-container testi-slider-active-five ">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="tp-testimonial-item-four">
                                        <div className="tp-testimonial-item-four__meta d-flex justify-content-end align-items-center mb-30">
                                            <div className="tp-testimonial-item-four__rating">
                                                <span><i className="fas fa-star"></i></span>
                                                <span><i className="fas fa-star"></i></span>
                                                <span><i className="fas fa-star"></i></span>
                                                <span><i className="fas fa-star"></i></span>
                                                <span><i className="fas fa-star"></i></span>
                                            </div>
                                        </div>
                                        <div className="tp-testi-paragraph pb-30">
                                            <p>Partnering with SoftwareStudios was transformative for my dental practice. The social media marketing services were top-notch, boosting our visibility and patient engagement significantly.</p>
                                        </div>
                                        <div className="tp-testimonial-item-four__client d-flex align-items-center">
                                            <div className="mr-20">
                                                <img src="/img/testimonial/testi-4.2.png" alt="Dr. Soumya Sharma" />
                                            </div>
                                            <div className="tp-testimonial-item-four__position">
                                                <h4 className="m-0">Dr. Soujanya Nanda</h4>
                                                <span>Dentist, Indore</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="tp-testimonial-item-four">
                                        <div className="tp-testimonial-item-four__meta d-flex justify-content-end align-items-center mb-30">
                                            <div className="tp-testimonial-item-four__rating">
                                                <span><i className="fas fa-star"></i></span>
                                                <span><i className="fas fa-star"></i></span>
                                                <span><i className="fas fa-star"></i></span>
                                                <span><i className="fas fa-star"></i></span>
                                                <span><i className="fas fa-star"></i></span>
                                            </div>
                                        </div>
                                        <div className="tp-testi-paragraph pb-30">
                                            <p>SoftwareStudios took our Dubai car rental business to the next level! Their web app made license checks and bookings a breeze. Top-notch service!</p>
                                        </div>
                                        <div className="tp-testimonial-item-four__client d-flex align-items-center">
                                            <div className="mr-20">
                                                <img src="/img/testimonial/testi-4.5.png" alt="Car Rental Dubai" />
                                            </div>
                                            <div className="tp-testimonial-item-four__position">
                                                <h4 className="m-0">Ahmed Al Farsi</h4>
                                                <span>Owner, Dubai Car Rentals</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="tp-testimonial-item-four">
                                        <div className="tp-testimonial-item-four__meta d-flex justify-content-end align-items-center mb-30">
                                            <div className="tp-testimonial-item-four__rating">
                                                <span><i className="fas fa-star"></i></span>
                                                <span><i className="fas fa-star"></i></span>
                                                <span><i className="fas fa-star"></i></span>
                                                <span><i className="fas fa-star"></i></span>
                                                <span><i className="fas fa-star"></i></span>
                                            </div>
                                        </div>
                                        <div className="tp-testi-paragraph pb-30">
                                            <p>Incredible transformation! SoftwareStudios optimized our hotel operations and boosted online bookings. Their expertise is unmatched and they delivered beyond expectations.</p>
                                        </div>
                                        <div className="tp-testimonial-item-four__client d-flex align-items-center">
                                            <div className="mr-20">
                                                <img src="/img/testimonial/testi-4.1.png" alt="Arundams Hotel and Parks" />
                                            </div>
                                            <div className="tp-testimonial-item-four__position">
                                                <h4 className="m-0">Kajol Roy</h4>
                                                <span>Manager, Arundams Hotel and Parks</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tp-news-letter-area tp-news-letter-bg pt-65 pb-60" style={{ backgroundImage: `url(/img/news/news-bg.jpg)` }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-7 col-lg-7 col-md-12 ">
                            <div className="tp-news-sub-wrapper pr-50 wow tpfadeLeft" data-wow-duration=".3s" data-wow-delay=".6s">
                                <div className="tp-news-letter-section-box">
                                    <h5 className="tp-subtitle subtitle-secondary-color">Stay Updated</h5>
                                    <h2 className="tp-title-sm tp-title-sm tp-white-text pb-25">Trusted by Businesses for Over 10 Years</h2>
                                    <p className="tp-text-light">Our methods are tried and tested over the past decade. We guarantee your satisfaction — or your money back within 7 days.</p>
                                </div>
                                <div className="tp-news-button">
                                    <Link className="tp-btn-lg-yellow mr-20" to="/contact/">Become a Partner</Link>
                                    <Link className="tp-btn-sky" to="/about/">Learn More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-12 wow tpfadeRight" data-wow-duration=".5s" data-wow-delay=".7s">
                            <div className="tp-news-letter-img text-md-start text-lg-end pr-45">
                                <img src="/img/news/news-7.1.png" alt="Partner with Us" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicePage;
