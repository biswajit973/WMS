import React, { useEffect } from 'react';
import SEOHead from '../components/SEOHead';

import { Link } from 'react-router-dom';

const HomePage = () => {
    // Re-initialize Swiper after React renders the testimonial section.
    // main.js runs before this lazy-loaded component mounts, so Swiper
    // can't find .testi-slider-active-five on first page load.
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
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    },
                    pagination: {
                        el: '.testimonial-slider-dots-four',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '.test-n',
                        prevEl: '.test-p',
                    },
                    breakpoints: {
                        1200: { slidesPerView: 3 },
                        992: { slidesPerView: 3 },
                        768: { slidesPerView: 1 },
                        576: { slidesPerView: 1 },
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
                title="Best Web Development & Digital Marketing Company in Odisha"
                description="Top-rated web development company in Bhubaneswar, Odisha. We build websites, mobile apps & digital marketing solutions for small businesses across India. Starting ₹12,999. Call +91 9063677927."
                path="/"
            />

            {/* tp-hero-area-start */}
            <div className="tp-hero-area-two pt-130 p-relative fix">
                <div className="tp-hero-yellow-shape d-none d-lg-block"></div>
                <div className="ce-hero-shape d-none d-lg-block">
                    <img src="/img/hero/hero-shape-4.png" alt="" />
                </div>
                <div className="ce-hero-shape-two d-none d-lg-block">
                    <img src="/img/hero/hero-shape-4.1.png" alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="tp-hero-section-box tp-hero-section-box-four pt-120 pb-140">
                                <h3 className="tp-hero-bd-title text-black wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".6s">
                                    We Build Websites, Apps &
                                    <span className="tp-highlight">
                                        <svg width="266" height="12" viewBox="0 0 266 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 0L266 12H0V0Z" fill="#FFDC60" />
                                        </svg>
                                        <i>Marketing</i>
                                    </span>
                                    That Grow Your Business
                                </h3>
                                <p className="wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".7s">
                                    Whether you run a small shop or a growing company — we design websites, mobile apps, and online marketing that bring you more customers. Simple. Affordable. Fast.
                                </p>
                                <div className="tp-hero-three-button-box d-flex align-items-center wow tpfadeUp" data-wow-duration=".7s" data-wow-delay=".9s">
                                    <a className="tp-btn mr-55 mb-20" href="#how-it-works">How it Works</a>
                                </div>
                            </div>
                            <div className="tp-hero-social pb-90 wow tpfadeUp" data-wow-duration=".7s" data-wow-delay=".9s">
                                <div className="tp-hero-social bp-hero-social">
                                    <a className="social-icon-1" href="#"><i className="fab fa-facebook-f social-icon-1"></i><span>Facebook</span></a>
                                    <a className="social-icon-3" href="#"><i className="fab fa-youtube social-icon-3"></i><span>youtube</span></a>
                                    <a className="social-icon-2" href="#"><i className="fab fa-twitter social-icon-2"></i><span>twitter</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 wow fadeInRight" data-wow-duration=".7s" data-wow-delay=".9s">
                            <div className="tp-hero-right-img-four pt-90">
                                <img src="/img/hero/hero-5.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br />
            <div className="corporate-chose__area pt-120 pb-120 corporate-plr">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".5s">
                            <div className="corporate-chose__wrapper text-center text-xl-start p-relative">
                                <div className="corporate-chose__main-img">
                                    <img src="/img/chose/chose-7-2.png" alt="" />
                                </div>
                                <div className="corporate-chose__sub-img">
                                    <img src="/img/chose/chose-7-1.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".7s">
                            <div className="corporate-chose__section-box">
                                <h4 className="tp-subtitle pink-circle">Struggling to Grow?</h4>
                                <h3 className="tp-title">You Focus on Your Business. We Handle the Tech.</h3>
                            </div>
                            <div className="corporate-chose__content">
                                <p>Feeling like you're pushing your limits but not seeing the results you want? Tired of going it alone? With SoftwareStudios, you don’t have to. Our massive team and cutting-edge technology are here to drive your business forward. Together, we’ll ensure your business runs like a well-oiled machine and achieves unparalleled success.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* service-area-start */}
            <div className="tp-service-area pb-90 pt-30 grey-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-10">
                            <div className="tp-service-section-box text-center pb-60">
                                <h5 className="tp-subtitle pb-10">Our Services</h5>
                                <h2 className="tp-title-sm">Everything you need to grow online —<br />
                                    <span className="tp-section-highlight">
                                        under one roof
                                        <svg width="266" height="12" viewBox="0 0 266 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 0L266 12H0V0Z" fill="#FFDC60" />
                                        </svg>
                                    </span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".5s">
                            <div className="tp-sv-border-effect">
                                <div className="tp-service-item-four sv-color-1 mb-30">
                                    <div className="tp-service-item-four__img  mb-40">
                                        <img src="/img/service/007-email.png" alt="" />
                                    </div>
                                    <div className="tp-service-item-four__title">
                                        <h3 className="tp-sv-sm-title"><Link to="/service-1/">Social Media Marketing</Link></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".7s">
                            <div className="tp-sv-border-effect sv-border-effect-1">
                                <div className="tp-service-item-four sv-color-2 mb-30">
                                    <div className="tp-service-item-four__img  mb-40">
                                        <img src="/img/service/service4.1.png" alt="" />
                                    </div>
                                    <div className="tp-service-item-four__title">
                                        <h3 className="tp-sv-sm-title"><Link to="/service-1/">Web & Mobile Development</Link></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow tpfadeUp" data-wow-duration=".7s" data-wow-delay=".9s">
                            <div className="tp-sv-border-effect sv-border-effect-2">
                                <div className="tp-service-item-four sv-color-3 mb-30">
                                    <div className="tp-service-item-four__img mb-40">
                                        <img src="/img/service/service4.2.png" alt="" />
                                    </div>
                                    <div className="tp-service-item-four__title">
                                        <h3 className="tp-sv-sm-title"><Link to="/service-1/">E-commerce Solutions</Link></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay="1s">
                            <div className="tp-sv-border-effect sv-border-effect-3">
                                <div className="tp-service-item-four sv-color-4 mb-30">
                                    <div className="tp-service-item-four__img mb-40">
                                        <img src="/img/service/service4.3.png" alt="" />
                                    </div>
                                    <div className="tp-service-item-four__title">
                                        <h3 className="tp-sv-sm-title"><Link to="/service-1/">Content Creation </Link></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay="1.1s">
                            <div className="tp-sv-border-effect sv-border-effect-4">
                                <div className="tp-service-item-four sv-color-5 mb-30">
                                    <div className="tp-service-item-four__img mb-40">
                                        <img src="/img/service/service4.4.png" alt="" />
                                    </div>
                                    <div className="tp-service-item-four__title">
                                        <h3 className="tp-sv-sm-title"><Link to="/service-1/">Desktop App Development</Link></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow tpfadeUp" data-wow-duration="1s" data-wow-delay="1.1s">
                            <div className="tp-sv-border-effect sv-border-effect-5">
                                <div className="tp-service-item-four sv-color-6 mb-30">
                                    <div className="tp-service-item-four__img mb-40">
                                        <img src="/img/service/service4.5.png" alt="" />
                                    </div>
                                    <div className="tp-service-item-four__title">
                                        <h3 className="tp-sv-sm-title"><Link to="/service-1/">Branding and Graphic Design</Link></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow tpfadeUp" data-wow-duration="1s" data-wow-delay="1.2s">
                            <div className="tp-sv-border-effect sv-border-effect-6">
                                <div className="tp-service-item-four sv-color-7 mb-30">
                                    <div className="tp-service-item-four__img mb-40">
                                        <img src="/img/service/service4.6.png" alt="" />
                                    </div>
                                    <div className="tp-service-item-four__title">
                                        <h3 className="tp-sv-sm-title"><Link to="/service-1/">AI/ML Solutions</Link></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow tpfadeUp" data-wow-duration="1.1s" data-wow-delay="1.3s">
                            <div className="tp-sv-border-effect">
                                <div className="tp-service-item-four sv-color-1 mb-30">
                                    <div className="tp-service-item-four__img mb-40">
                                        <img src="/img/service/007-email.png" alt="" />
                                    </div>
                                    <div className="tp-service-item-four__title">
                                        <h3 className="tp-sv-sm-title"><Link to="/service-1/">AI Agents & Automation</Link></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* service-area-end */}

            {/* feature-area-start */}
            <div className="tp-feature-arae pt-130 pb-100 p-relative">
                <div className="ce-chose-shape d-none d-lg-block">
                    <img src="/img/hero/hero-shape-4.png" alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".5s" data-wow-delay=".5s">
                            <div className="tp-fea-img">
                                <img decoding="async" src="/img/feature/fea-1.png" alt="" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 wow tpfadeRight" data-wow-duration=".5s" data-wow-delay=".7s">
                            <div className="tp-fea-right-side">
                                <div className="tp-fea-section-box">
                                    <h5 className="tp-subtitle pb-10">Why Choose Us</h5>
                                    <h2 className="tp-title-sm pb-40">
                                        Your One-Stop Solution for <br />
                                        <span className="tp-section-highlight">
                                            Digital Success
                                            <svg width="240" height="11" viewBox="0 0 240 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 0L240 11H0V0Z" fill="#FFDC60" />
                                            </svg>
                                        </span>
                                    </h2>
                                </div>
                                <div className="fea-wrapper-main">
                                    <div className="tp-feature-list d-flex">
                                        <div className="tp-feature-list__icon-img fea-color-1 mr-25">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.10492 6.4812L4.02565 6.64184C3.44708 6.68656 2.93179 6.98979 2.61182 7.47377L0.213854 11.1006C-0.0288162 11.4676 -0.067394 11.9269 0.110589 12.3293C0.288619 12.7317 0.654475 13.0121 1.08924 13.0794L2.99305 13.3743C3.43841 11.0108 4.50452 8.65323 6.10492 6.4812Z" />
                                                <path d="M10.6255 21.0069L10.9204 22.9107C10.9877 23.3455 11.2681 23.7113 11.6705 23.8893C11.8379 23.9634 12.015 23.9999 12.1913 23.9999C12.439 23.9999 12.6849 23.9278 12.8992 23.786L16.5261 21.3881C17.0101 21.0681 17.3133 20.5528 17.358 19.9743L17.5186 17.895C15.3465 19.4955 12.989 20.5616 10.6255 21.0069Z" />
                                                <path d="M9.90947 19.6874C9.97557 19.6874 10.042 19.682 10.1084 19.6709C11.0985 19.5054 12.0529 19.2265 12.9633 18.8614L5.13853 11.0366C4.77347 11.947 4.49456 12.9013 4.329 13.8916C4.26375 14.2819 4.39467 14.6795 4.67447 14.9594L9.04056 19.3255C9.27287 19.5577 9.58641 19.6874 9.90947 19.6874Z" />
                                                <path d="M22.0865 10.6407C24.0013 6.93881 24.0722 3.02684 23.9721 1.19216C23.9379 0.563527 23.4367 0.0623433 22.808 0.0280779C22.5093 0.0117655 22.1552 0 21.7562 0C19.7047 0 16.4586 0.310732 13.3595 1.9137C10.8966 3.18762 7.66708 5.99264 5.76172 9.67896C5.78422 9.69653 5.8062 9.71519 5.82692 9.73591L14.2644 18.1733C14.2851 18.1941 14.3037 18.216 14.3213 18.2385C18.0076 16.3331 20.8126 13.1036 22.0865 10.6407ZM13.9547 5.07371C15.3254 3.70305 17.5557 3.70291 18.9265 5.07371C19.5905 5.73769 19.9562 6.62057 19.9562 7.55961C19.9562 8.49865 19.5905 9.38154 18.9265 10.0455C18.2412 10.7308 17.3407 11.0735 16.4406 11.0736C15.5402 11.0736 14.6401 10.731 13.9547 10.0455C13.2907 9.38154 12.925 8.49865 12.925 7.55961C12.925 6.62057 13.2907 5.73769 13.9547 5.07371Z" />
                                                <path d="M14.9489 9.05108C15.7713 9.8735 17.1096 9.87355 17.932 9.05108C18.3304 8.65264 18.5498 8.12295 18.5498 7.55952C18.5498 6.99608 18.3304 6.46639 17.932 6.068C17.5208 5.65677 16.9806 5.45117 16.4404 5.45117C15.9003 5.45117 15.3601 5.65677 14.9489 6.068C14.5505 6.46639 14.3311 6.99608 14.3311 7.55952C14.3311 8.12295 14.5505 8.65269 14.9489 9.05108Z" />
                                            </svg>
                                        </div>
                                        <div className="tp-feature-list__content">
                                            <h4>Fastest Delivery & 24/7 Support</h4>
                                            <p>Get your project delivered swiftly with around-the-clock support. We ensure you’re never left waiting, with assistance always available when needed.</p>
                                        </div>
                                    </div>
                                    <div className="tp-feature-list d-flex">
                                        <div className="tp-feature-list__icon-img fea-color-2 mr-25">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20.5358 12.812H18.6797C18.8689 13.33 18.9722 13.889 18.9722 14.4716V21.4864C18.9722 21.7293 18.93 21.9625 18.853 22.1793H21.9215C23.0678 22.1793 24.0002 21.2468 24.0002 20.1006V16.2765C24.0003 14.3662 22.4461 12.812 20.5358 12.812Z" fill="currentColor" />
                                                <path d="M5.02806 14.4716C5.02806 13.8889 5.13142 13.33 5.3206 12.812H3.46454C1.55419 12.812 0 14.3662 0 16.2765V20.1007C0 21.2469 0.932486 22.1794 2.07872 22.1794H5.14726C5.07034 21.9625 5.02806 21.7293 5.02806 21.4864V14.4716Z" fill="currentColor" />
                                                <path d="M14.1218 11.0071H9.8786C7.96825 11.0071 6.41406 12.5613 6.41406 14.4716V21.4865C6.41406 21.8691 6.72428 22.1794 7.10697 22.1794H16.8935C17.2761 22.1794 17.5864 21.8692 17.5864 21.4865V14.4716C17.5864 12.5613 16.0322 11.0071 14.1218 11.0071Z" fill="currentColor" />
                                                <path d="M12 1.82056C9.70259 1.82056 7.8335 3.68965 7.8335 5.98714C7.8335 7.5455 8.69361 8.90652 9.96383 9.62109C10.5663 9.95999 11.2609 10.1537 12 10.1537C12.7392 10.1537 13.4338 9.95999 14.0362 9.62109C15.3065 8.90652 16.1666 7.54546 16.1666 5.98714C16.1666 3.6897 14.2975 1.82056 12 1.82056Z" fill="currentColor" />
                                            </svg>
                                        </div>
                                        <div className="tp-feature-list__content">
                                            <h4>Custom Solutions at Affordable Prices</h4>
                                            <p>Starting from just ₹6,999, get a tailored solution for your business. Free hosting, one-year support, and two annual design updates included.</p>
                                        </div>
                                    </div>
                                    <div className="tp-feature-list d-flex">
                                        <div className="tp-feature-list__icon-img fea-color-3 mr-25">
                                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.7423 0.00474192C15.2913 -0.0425081 14.882 0.268281 14.8267 0.716883C14.7707 1.16707 15.0895 1.57646 15.5388 1.63252C16.6523 1.77109 17.7402 2.16534 18.7728 2.60114C19.1949 2.77647 19.6728 2.57872 19.8479 2.16375C20.0233 1.74561 19.8279 1.26491 19.4105 1.0887C18.2385 0.595203 17.004 0.16175 15.7423 0.00474192V0.00474192Z" fill="currentColor" />
                                                <path d="M24.9534 6.66668C25.3147 6.39269 25.3852 5.87759 25.1112 5.51709C24.343 4.50532 23.4402 3.60248 22.4284 2.83423C22.0671 2.56189 21.5536 2.62997 21.2788 2.99206C21.0048 3.35256 21.0753 3.86766 21.4366 4.14165C22.3298 4.81939 23.1261 5.61564 23.8038 6.50885C24.0787 6.87088 24.593 6.93935 24.9534 6.66668V6.66668Z" fill="currentColor" />
                                                <path d="M25.7815 8.09729C25.3642 8.27354 25.1687 8.75419 25.3442 9.17233C25.78 10.2049 26.2271 11.3475 26.3658 12.461C26.4195 12.8961 26.8129 13.2277 27.2814 13.1732C27.7308 13.1171 28.0496 12.7077 27.9935 12.2575C27.8365 10.9958 27.35 9.70663 26.8566 8.53468C26.6804 8.1173 26.1989 7.92426 25.7815 8.09729V8.09729Z" fill="currentColor" />
                                                <path d="M8.58965 1.08871C8.17227 1.26497 7.97682 1.74562 8.15226 2.16376C8.32769 2.5796 8.80626 2.7761 9.2273 2.60115C10.2599 2.16535 11.3478 1.7711 12.4613 1.63252C12.9107 1.57647 13.2296 1.16708 13.1734 0.716892C13.1174 0.268291 12.7064 -0.0425531 12.2578 0.00475154C10.9961 0.161759 9.76165 0.595213 8.58965 1.08871Z" fill="currentColor" />
                                                <path d="M14 28C21.0207 28 27.126 22.6989 27.9935 15.7423C28.0496 15.2929 27.7308 14.8827 27.2814 14.8267C26.8296 14.7762 26.4211 15.0895 26.3658 15.5388C25.5999 21.6768 20.1948 26.3593 14 26.3593C7.2148 26.3593 1.64062 20.7852 1.64062 14C1.64062 11.0095 2.82717 8.09921 4.7578 5.87649V6.14807C4.7578 6.60149 5.1247 6.96838 5.57811 6.96838C6.03153 6.96838 6.39842 6.60149 6.39842 6.14807V3.82812C6.39842 3.37471 6.03153 3.00781 5.57811 3.00781H3.2574C2.80399 3.00781 2.43709 3.37471 2.43709 3.82812C2.43709 4.28154 2.80399 4.64789 3.2574 4.64789H3.65246C1.38026 7.1885 0 10.5412 0 14C0 21.6896 6.31038 28 14 28V28Z" fill="currentColor" />
                                                <path d="M4.10156 14C4.10156 19.4282 8.57183 23.8984 14 23.8984C19.4282 23.8984 23.8984 19.4282 23.8984 14C23.8984 8.57183 19.4282 4.10156 14 4.10156C8.57183 4.10156 4.10156 8.57183 4.10156 14ZM14.8203 10.7188C14.8203 10.2653 15.1872 9.89844 15.6406 9.89844C16.094 9.89844 16.4609 10.2653 16.4609 10.7188V13.1797H18.1016V10.7188C18.1016 10.2653 18.4685 9.89844 18.9219 9.89844C19.3753 9.89844 19.7422 10.2653 19.7422 10.7188V17.2812C19.7422 17.7347 19.3753 18.1016 18.9219 18.1016C18.4685 18.1016 18.1016 17.7347 18.1016 17.2812V14.8203H15.6406C15.1872 14.8203 14.8203 14.4534 14.8203 14V10.7188ZM10.7188 11.5391C10.2662 11.5391 9.89844 11.9068 9.89844 12.3594C9.89844 12.8128 9.53154 13.1797 9.07812 13.1797C8.62471 13.1797 8.25781 12.8128 8.25781 12.3594C8.25781 11.0024 9.36173 9.89844 10.7188 9.89844C12.0758 9.89844 13.1797 11.0024 13.1797 12.3594C13.1797 14 12.0878 14.8187 11.2106 15.4764C10.7247 15.8411 10.3786 16.1328 10.1589 16.4609H12.3594C12.8128 16.4609 13.1797 16.8278 13.1797 17.2812C13.1797 17.7347 12.8128 18.1016 12.3594 18.1016H9.07812C8.62471 18.1016 8.25781 17.7347 8.25781 17.2812C8.25781 15.6406 9.3497 14.8219 10.2269 14.1642C11.0649 13.5354 11.5391 13.1412 11.5391 12.3594C11.5391 11.9067 11.1714 11.5391 10.7188 11.5391Z" fill="currentColor" />
                                            </svg>
                                        </div>
                                        <div className="tp-feature-list__content">
                                            <h4>Expert Team for Guaranteed Results</h4>
                                            <p>Work with experienced developers and marketers to boost your business performance. Your personal relationship manager ensures seamless communication and success.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* feature-area-end */}

            {/* creative-area-start */}
            <div className="p-relative">
                <div className="shape-two z-index-1">
                    <img src="/img/hero/shape-2.png" alt="" />
                </div>
                <div className="tp-creative-area p-relative black-bg pt-140 pb-135 fix">
                    <div className="circle-animation testimonial">
                        <span className="tp-circle-1"></span>
                        <span className="tp-circle-2"></span>
                    </div>
                    <div className="creative-shape-img">
                        <img src="/img/creative/creative-hand.png" alt="" />
                    </div>
                    <div className="creative-shape-img-2">
                        <img src="/img/creative/creative-circle-img.png" alt="" />
                    </div>
                    <div className="container creative-z-index ">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="tp-creative-box text-center">
                                    <div className="tp-creative-content mb-110">
                                        <h4 className="tp-creative-title">Your dream project, brought to life by our <b>Expert Team</b>.
                                            From idea to launch — we build what your business truly needs.</h4>
                                    </div>
                                    <div className="tp-play-button mb-150">
                                        <a className="popup-video" href="#"><i className="fal fa-play"></i></a>
                                        <span><b>24/7</b> support — we're always here when you need us.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="creative-box pl-40 pr-40">
                            <div className="row gx-5">
                                <div className="col-lg-4 col-md-12 col-xs-12 mb-30">
                                    <div className="tp-creative-item wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".6s">
                                        <div className="tp-creative-yellow d-flex align-items-center">
                                            <div className="tp-creative-icon mr-35">
                                                <i className="flaticon-satisfaction"></i>
                                            </div>
                                            <div className="counter-text">
                                                <span>100%</span>
                                                <p className="m-0">Client Satisfaction Guaranteed</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 col-xs-12 mb-30">
                                    <div className="tp-creative-item tp-creative-blue wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".8s">
                                        <div className="tp-creative-yellow d-flex align-items-center">
                                            <div className="tp-creative-icon mr-35">
                                                <i className="flaticon-clipboard"></i>
                                            </div>
                                            <div className="counter-text">
                                                <span>1k+</span>
                                                <p className="m-0">Development & Design Projects Delivered</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 col-xs-12 mb-30">
                                    <div className="tp-creative-item tp-creative-pink wow tpfadeUp" data-wow-duration=".7s" data-wow-delay="1s">
                                        <div className="tp-creative-yellow d-flex align-items-center">
                                            <div className="tp-creative-icon mr-35">
                                                <i className="flaticon-setting"></i>
                                            </div>
                                            <div className="counter-text">
                                                <span>500+</span>
                                                <p className="m-0">Digital Marketing Campaigns Completed</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* creative-area-end */}

            <br />
            <br />
            <div className="container" id="how-it-works">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="tp-service-section-box mb-30 wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".6s">
                            <h5 className="tp-subtitle pb-10">How We Work</h5>
                            <h2 className="tp-title">We guide you from idea to launch, step by step</h2>
                            <Link className="tp-btn" to="/service-details/">View All Services</Link>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="tp-sv-box wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".8s">
                            <div className="tp-service-item d-flex mb-30">
                                <div className="tp-sv-img">
                                    <img src="/img/service/service-1.png" alt="" />
                                </div>
                                <div className="tp-sv-content pl-60">
                                    <h3 className="tp-sv-title mb-35"><Link to="/Initial_Consultation/">Initial Consultation</Link></h3>
                                    <p className="mb-30">Tell us about your business — or let us call you. We'll understand what you need, spot what's holding you back, and plan the best way forward.</p>
                                    <p>No tech talk, no confusion. Just a simple conversation about how we can help you grow.</p>
                                    <div className="tp-sv-link mt-35">
                                        <Link to="/Initial_Consultation/"><i className="far fa-arrow-right"></i> Learn More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="tp-sv-box wow tpfadeUp" data-wow-duration=".7s" data-wow-delay="1s">
                            <div className="tp-service-item d-flex mb-30">
                                <div className="tp-sv-img">
                                    <img src="/img/service/service-2.png" alt="" />
                                </div>
                                <div className="tp-sv-content pl-60">
                                    <h3 className="tp-sv-title mb-35"><Link to="/second_Consultation/">Design & Development</Link></h3>
                                    <p className="mb-30">Our designers and developers work together to build exactly what your business needs. We keep refining until you love every detail.</p>
                                    <p>You stay in the loop at every step — nothing gets finalized until you're 100% happy.</p>
                                    <div className="tp-sv-link mt-35">
                                        <Link to="/second_Consultation/"><i className="far fa-arrow-right"></i> Learn More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="tp-sv-box wow tpfadeUp" data-wow-duration=".9s" data-wow-delay="1.2s">
                            <div className="tp-service-item d-flex mb-30">
                                <div className="tp-sv-img">
                                    <img src="/img/service/service-3.png" alt="" />
                                </div>
                                <div className="tp-sv-content pl-60">
                                    <h3 className="tp-sv-title mb-35"><Link to="/third_Consultation/">Digital Marketing & Launch</Link></h3>
                                    <p className="mb-30">We handle digital marketing and product launches with a focus on results. You get a 7-day unlimited trial to ensure you’re happy with the final product.</p>
                                    <p>Our goal is your satisfaction, and we don’t stop until you’re pleased with the outcome.</p>
                                    <div className="tp-sv-link mt-35">
                                        <Link to="/third_Consultation/"><i className="far fa-arrow-right"></i> Learn More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* testimonial-area-start */}
            <div className="tp-testimonial-area pt-100 pb-100 p-relative">
                <div className="ce-testi-shape d-none d-lg-block">
                    <img src="/img/hero/hero-shape-4.png" alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="tp-testi-wrapper d-flex pb-50 justify-content-between align-items-end">
                                <div className="tp-testimonial-title-box ">
                                    <h5 className="tp-subtitle">Testimonials</h5>
                                    <h2 className="tp-title-sm">Hear from our
                                        <span className="tp-section-highlight">
                                            happy clients
                                            <svg width="212" height="11" viewBox="0 0 212 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 0L212 11H0V0Z" fill="#FFDC60" />
                                            </svg>
                                        </span>
                                    </h2>
                                </div>
                                <div className="tp-testi-button-right-side">
                                    <Link className="tp-btn" to="/testimonial/">More Testimonials</Link>
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
                                            <p>"Our collaboration with SoftwareStudios has been fantastic. Their content creation and digital marketing strategies helped us grow from one to three parlours, boosting our sales and client base significantly."</p>
                                        </div>
                                        <div className="tp-testimonial-item-four__client d-flex align-items-center">
                                            <div className="mr-20">
                                                <img src="/img/testimonial/testi-4.2.png" alt="Sophia Patel" />
                                            </div>
                                            <div className="tp-testimonial-item-four__position">
                                                <h4 className="m-0">Sophia Patel</h4>
                                                <span>Owner, The Glamour Spa</span>
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
                                            <p>"They delivered a complete solution for our hotel chain — from landing pages to booking and management systems. Their affordable pricing and great service transformed how we do business."</p>
                                        </div>
                                        <div className="tp-testimonial-item-four__client d-flex align-items-center">
                                            <div className="mr-20">
                                                <img src="/img/testimonial/testi-4.5.png" alt="Michael Reynolds" />
                                            </div>
                                            <div className="tp-testimonial-item-four__position">
                                                <h4 className="m-0">Michael Reynolds</h4>
                                                <span>Owner, Elite Hotel Chains</span>
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
                                            <p>"SoftwareStudios built our school's online platform and it exceeded all expectations. The professionalism, honesty, and expertise they bring are unmatched. Parents and students love it!"</p>
                                        </div>
                                        <div className="tp-testimonial-item-four__client d-flex align-items-center">
                                            <div className="mr-20">
                                                <img src="/img/testimonial/testi-4.1.png" alt="Rajesh Kumar" />
                                            </div>
                                            <div className="tp-testimonial-item-four__position">
                                                <h4 className="m-0">Rajesh Kumar</h4>
                                                <span>Director, Bright Future Academy</span>
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
                                            <p>"The AI solution SoftwareStudios provided revolutionized our booking platform. Their technical expertise combined with an in-depth understanding of our industry made this project a huge success."</p>
                                        </div>
                                        <div className="tp-testimonial-item-four__client d-flex align-items-center">
                                            <div className="mr-20">
                                                <img src="/img/testimonial/testi-4.6.png" alt="Ahmed Al-Farsi" />
                                            </div>
                                            <div className="tp-testimonial-item-four__position">
                                                <h4 className="m-0">Ahmed Al-Farsi</h4>
                                                <span>CEO, Booking Solutions (Dubai)</span>
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
                                            <p>"Our e-commerce platform now runs seamlessly thanks to SoftwareStudios. From payment integration to backend management, every aspect has been tailored to our exact needs. We couldn't be happier."</p>
                                        </div>
                                        <div className="tp-testimonial-item-four__client d-flex align-items-center">
                                            <div className="mr-20">
                                                <img src="/img/testimonial/testi-4.7.png" alt="Tashi Dorji" />
                                            </div>
                                            <div className="tp-testimonial-item-four__position">
                                                <h4 className="m-0">Tashi Dorji</h4>
                                                <span>Founder, Retail Tech (Bhutan)</span>
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
                                            <p>"Thanks to SoftwareStudios, our digital marketing campaigns now reach thousands of customers every day. Their strategies are innovative and results-driven. Our revenue grew 3x in just 6 months!"</p>
                                        </div>
                                        <div className="tp-testimonial-item-four__client d-flex align-items-center">
                                            <div className="mr-20">
                                                <img src="/img/testimonial/testi-4.2.png" alt="Ritika Iyer" />
                                            </div>
                                            <div className="tp-testimonial-item-four__position">
                                                <h4 className="m-0">Ritika Iyer</h4>
                                                <span>Marketing Head, Fashion Brand</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* testimonial-area-end */}

            {/* news-area-start */}
            <div className="tp-news-letter-area tp-news-letter-bg pt-130 pb-130" style={{ backgroundImage: `url(/img/news/news-bg.jpg)` }}>
                <div className="container">
                    <div className="row align-items-center wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".5s">
                        <div className="col-xl-7 col-lg-7 col-md-12">
                            <div className="tp-news-sub-wrapper pr-50">
                                <div className="tp-news-letter-section-box">
                                    <h5 className="tp-subtitle subtitle-secondary-color">Need Help?</h5>
                                    <h2 className="tp-title-sm tp-title-sm tp-white-text pb-25">Leave your number — we'll call you back for free
                                    </h2>
                                </div>
                                <div className="tp-news-button p-relative">
                                    <form action="#" onSubmit={(e) => { e.preventDefault(); alert('Thank you for requesting a callback! Our team will get in touch with you soon.'); }}>
                                        <input type="text" placeholder="Enter your phone number" required />
                                        <button className="tp-submit-button tp-btn-yellow" type="submit">Request Callback <i className="fal fa-long-arrow-right"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-12">
                            <div className="tp-news-letter-img text-md-start text-lg-end pr-45">
                                <img src="/img/news/news-3.png" alt="Contact Us" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* news-area-end */}

            {/* blog link moved to footer */}
        </>
    );
};

export default HomePage;
