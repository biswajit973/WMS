import React, { useEffect } from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';
import ServiceGrid from '../components/ServiceGrid';
import { SERVICES_CATALOG } from '../data/servicesCatalog';

const ServicePage = () => {
    useEffect(() => {
        let swiperInstance = null;
        const timer = setTimeout(() => {
            const el = document.querySelector('.testi-slider-active-five');
            if (el && window.Swiper) {
                swiperInstance = new window.Swiper('.testi-slider-active-five', {
                    loop: true,
                    slidesPerView: 3,
                    spaceBetween: 20,
                    centeredSlides: true,
                    autoplay: { delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true },
                    breakpoints: {
                        1200: { slidesPerView: 3 },
                        992: { slidesPerView: 3 },
                        768: { slidesPerView: 1 },
                        0: { slidesPerView: 1 },
                    },
                });
            }
        }, 100);

        return () => {
            clearTimeout(timer);
            if (swiperInstance) swiperInstance.destroy(true, true);
        };
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
                                        <h2 className="tp-hero-title wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".6s">
                                            Managing your business with practical digital solutions
                                        </h2>
                                        <p className="wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".8s">
                                            We design and build systems that directly support growth: websites, apps, marketing, automation,
                                            and long-term technical support. Clear process, predictable delivery, and measurable outcomes.
                                        </p>
                                    </div>
                                    <div className="mt-35 wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".9s">
                                        <Link className="tp-btn" to="/contact/">Book Free Consultation</Link>
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

            <div className="tp-service-area grey-bg pt-110 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10 text-center">
                            <div className="tp-service-section-box pb-45">
                                <h5 className="tp-subtitle pb-10">Our Services</h5>
                                <h2 className="tp-title-sm pb-10">Built for real business outcomes, not filler features</h2>
                                <p>
                                    Every engagement is focused on conversion, usability, and long-term maintainability.
                                    Choose the services you need now and scale as your business grows.
                                </p>
                            </div>
                        </div>
                    </div>
                    <ServiceGrid services={SERVICES_CATALOG} getHref={() => '/service-details/'} />
                </div>
            </div>

            <div className="tp-service-area pt-110 pb-110 yellow-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10 text-center">
                            <h5 className="tp-subtitle pb-10">How We Execute</h5>
                            <h2 className="tp-title-sm pb-10">A transparent delivery model your team can trust</h2>
                        </div>
                    </div>
                    <div className="row gx-4 gy-4 pt-20">
                        <div className="col-lg-4 col-md-6">
                            <div className="ss-cta-block">
                                <h4>1. Discovery & Planning</h4>
                                <p>
                                    We map business goals, define user journeys, and lock scope with timelines before development begins.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="ss-cta-block">
                                <h4>2. Build & Review Cycles</h4>
                                <p>
                                    We deliver in checkpoints, gather feedback early, and refine functionality and UX through focused iterations.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="ss-cta-block">
                                <h4>3. Launch & Ongoing Support</h4>
                                <p>
                                    We handle deployment, performance checks, and post-launch support so your team stays focused on growth.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-40">
                        <div className="col-12 text-center">
                            <Link className="tp-btn" to="/contact/">Start Your Project</Link>
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
                                <div className="tp-testimonial-title-box">
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
                        <div className="swiper-container testi-slider-active-five">
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
                                            <p>Partnering with SoftwareStudios was transformative for my dental practice. Their social media strategy improved our visibility and patient engagement quickly.</p>
                                        </div>
                                        <div className="tp-testimonial-item-four__client d-flex align-items-center">
                                            <div className="mr-20">
                                                <img src="/img/testimonial/testi-4.2.png" alt="Dr. Soujanya Nanda" />
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
                                            <p>SoftwareStudios took our Dubai car rental business to the next level. Their web app made license checks and bookings seamless for our staff and customers.</p>
                                        </div>
                                        <div className="tp-testimonial-item-four__client d-flex align-items-center">
                                            <div className="mr-20">
                                                <img src="/img/testimonial/testi-4.5.png" alt="Ahmed Al Farsi" />
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
                                            <p>Incredible execution from planning to launch. SoftwareStudios optimized our hotel operations and improved online bookings within weeks.</p>
                                        </div>
                                        <div className="tp-testimonial-item-four__client d-flex align-items-center">
                                            <div className="mr-20">
                                                <img src="/img/testimonial/testi-4.1.png" alt="Kajol Roy" />
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

            <div className="tp-news-letter-area tp-news-letter-bg pt-65 pb-60" style={{ backgroundImage: 'url(/img/news/news-bg.jpg)' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-7 col-lg-7 col-md-12">
                            <div className="tp-news-sub-wrapper pr-50 wow tpfadeLeft" data-wow-duration=".3s" data-wow-delay=".6s">
                                <div className="tp-news-letter-section-box">
                                    <h5 className="tp-subtitle subtitle-secondary-color">Stay Updated</h5>
                                    <h2 className="tp-title-sm tp-title-sm tp-white-text pb-25">Trusted by Businesses for Over 10 Years</h2>
                                    <p className="ss-readable-light">Our delivery model is built on measurable outcomes, clear communication, and long-term technical support after launch.</p>
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
