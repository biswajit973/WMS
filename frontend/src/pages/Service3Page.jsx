import React, { useEffect } from 'react';
import SEOHead from '../components/SEOHead';

import { Link } from 'react-router-dom';

const Service3Page = () => {
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
                title="Case Studies & Success Stories — SoftwareStudios"
                description="See how we helped real businesses grow with our web development, app development, and digital marketing services."
                path="/service-3/"
            />

            <section className="breadcrumb__area  breadcrumb__pt-310 include-bg p-relative" style={{ backgroundImage: `url(/img/breadcrum/ab-1.1.jpg)` }}>
                <div className="ac-about-shape-img z-index-1">
                    <img src="/img/breadcrum/ab-shape-1.1.jpg" alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="breadcrumb__content p-relative z-index-1">
                                <h3 className="breadcrumb__title">What We’re Up To</h3>
                                <Link to="/contact/" className="tp-btn-white-border">Lets work together <i className="far fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="sv-case-area pt-130 pb-130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <div className="project-section-box-two text-center pb-60">
                                <h2 className="tp-title-sm">Our recent completed case studies</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-6">
                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".6s">
                            <div className="svcase text-center mb-50">
                                <div className="svcase__img fix">
                                    <img src="/img/service/service-9.1.jpg" alt="" />
                                </div>
                                <div className="svcase__content">
                                    <h4 className="sv-case-sm-title"><Link to="/portfolio/">Revolutionizing Stock Trading</Link></h4>
                                    <p>We engineered cutting-edge algorithms and automated trading bots to supercharge investment strategies and maximize returns.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".8s">
                            <div className="svcase text-center mb-50">
                                <div className="svcase__img fix">
                                    <img src="/img/service/service-9.2.jpg" alt="" />
                                </div>
                                <div className="svcase__content">
                                    <h4 className="sv-case-sm-title"><Link to="/portfolio/">Smartphone Stock Management Mastery</Link></h4>
                                    <p>We crafted an intuitive stock management system and seamless buy/sell automation to streamline operations and boost efficiency for smartphone wholesalers.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 wow tpfadeUp" data-wow-duration=".7s" data-wow-delay="1s">
                            <div className="svcase text-center mb-50">
                                <div className="svcase__img fix">
                                    <img src="/img/service/service-9.3.jpg" alt="" />
                                </div>
                                <div className="svcase__content">
                                    <h4 className="sv-case-sm-title"><Link to="/portfolio/">Revamping Phone Store Experience</Link></h4>
                                    <p>We excel in crafting seamless, engaging, and scalable solutions to elevate your phone store's customer journey. See how we transformed their digital presence!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="case-button text-center pt-30">
                                <Link to="/portfolio/" className="tp-btn-sky">See more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tp-testimonial-area pb-130 p-relative">
                <div className="bs-testi-shape-1 d-none d-lg-block">
                    <img src="/img/testimonial/testimonial-shape-5.3.png" alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="tp-testi-wrapper d-flex pb-50 justify-content-between align-items-end">
                                <div className="tp-testimonial-title-box ">
                                    <h5 className="tp-subtitle">Testimonial</h5>
                                    <h2 className="tp-title-sm">Check what client say</h2>
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
                                            <p>Wow. What a great experience with this copywriter. Muhammad Noman is a very talented copywriter. yesterday I got his first Email that was amazing... experience with him</p>
                                        </div>
                                        <div className="tp-testimonial-item-four__client d-flex align-items-center">
                                            <div className="mr-20">
                                                <img src="/img/testimonial/testi-4.2.png" alt="" />
                                            </div>
                                            <div className="tp-testimonial-item-four__position">
                                                <h4 className="m-0">Leslie Alexander</h4>
                                                <span>P. Desiger of (Amazon)</span>
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
                                            <p>Excellent UI/Ux Design. She literally transformed my App into a wonderful piece of art. She's got awesome Ui design skills. - Hardworking Dedicated Great Communication Skills</p>
                                        </div>
                                        <div className="tp-testimonial-item-four__client d-flex align-items-center">
                                            <div className="mr-20">
                                                <img src="/img/testimonial/testi-4.5.png" alt="" />
                                            </div>
                                            <div className="tp-testimonial-item-four__position">
                                                <h4 className="m-0">Guy Hawkins</h4>
                                                <span>Ux Designer of (Godaddy)</span>
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
                                            <p>Absolutely amazing. we can't believe how incredible this turned out. Yetta Thomas is a true professional. he is such a honest, decent and reliable. and he have greate experience.</p>
                                        </div>
                                        <div className="tp-testimonial-item-four__client d-flex align-items-center">
                                            <div className="mr-20">
                                                <img src="/img/testimonial/testi-4.1.png" alt="" />
                                            </div>
                                            <div className="tp-testimonial-item-four__position">
                                                <h4 className="m-0">Kristin Watson</h4>
                                                <span>CEO of (Zlitemes)</span>
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
                        <div className="col-xl-7 col-lg-7 col-md-12 wow tpfadeLeft" data-wow-duration=".3s" data-wow-delay=".6s">
                            <div className="tp-news-sub-wrapper pr-50">
                                <div className="tp-news-letter-section-box">
                                    <h5 className="tp-subtitle subtitle-secondary-color">Stay Informed</h5>
                                    <h2 className="tp-title-sm tp-title-sm tp-white-text pb-25">Let Us Study Your Business Case and Help You Grow</h2>
                                    <p className="tp-description">Give us the opportunity to analyze your business needs and demonstrate how our tailored solutions can drive your growth. Partner with us to unlock your business potential.</p>
                                </div>
                                <div className="tp-news-button">
                                    <Link className="tp-btn-lg-yellow mr-20" to="/contact/">Start Your Journey</Link>
                                    <Link className="tp-btn-sky" to="/about/">Learn More About Us</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-12 wow tpfadeRight" data-wow-duration=".5s" data-wow-delay=".8s">
                            <div className="tp-news-letter-img text-md-start text-lg-end pr-45">
                                <img src="/img/news/news-7.1.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service3Page;
