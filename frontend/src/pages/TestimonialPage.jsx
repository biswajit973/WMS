import React from 'react';
import SEOHead from '../components/SEOHead';

import { Link } from 'react-router-dom';

const TestimonialPage = () => {
    return (
        <>
            <SEOHead
                title="Client Reviews & Testimonials — SoftwareStudios Bhubaneswar"
                description="Read what our clients say. 100% satisfaction rate. Trusted by dentists, hotels, car rentals & more across India."
                path="/testimonial/"
            />

            <section className="breadcrumb__area  breadcrumb__pt-310 include-bg p-relative" style={{ backgroundImage: `url(/img/breadcrum/ab-1.1.jpg)` }}>
                <div className="ac-about-shape-img z-index-1">
                    <img src="/img/breadcrum/ab-shape-1.1.jpg" alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="breadcrumb__content p-relative z-index-1">
                                <h3 className="breadcrumb__title">Our Review</h3>
                                <Link to="/contact/" className="tp-btn-white-border">Lets work together <i className="far fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="tp-testimonial-area pt-130 pb-130 p-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 wow tpfadeUp" data-wow-duration="1s" data-wow-delay=".3s">
                            <div className="swiper-slide">
                                <div className="tp-testimonial-item-four testimonial-html-space mb-30">
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
                                        <p>"Working with SoftwareStudios has been a game-changer for our business. They developed our web app from the ground up and ensured that every feature was aligned with our vision. The team's dedication to ensuring every detail was perfect is what sets them apart."</p>
                                    </div>
                                    <div className="tp-testimonial-item-four__client d-flex align-items-center">
                                        <div className="mr-20">
                                            <img src="/img/testimonial/testi-4.2.png" alt="" />
                                        </div>
                                        <div className="tp-testimonial-item-four__position">
                                            <h4 className="m-0">Amit Sharma</h4>
                                            <span>Founder, E-commerce Platform (India)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-12 wow tpfadeUp" data-wow-duration="1s" data-wow-delay=".5s">
                            <div className="swiper-slide">
                                <div className="tp-testimonial-item-four testimonial-html-space mb-30">
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
                                        <p>"The AI solution SoftwareStudios provided revolutionized the way we handle bookings on our platform. Their team's technical expertise, combined with an in-depth understanding of our industry, made this project a success."</p>
                                    </div>
                                    <div className="tp-testimonial-item-four__client d-flex align-items-center">
                                        <div className="mr-20">
                                            <img src="/img/testimonial/testi-4.5.png" alt="" />
                                        </div>
                                        <div className="tp-testimonial-item-four__position">
                                            <h4 className="m-0">Ahmed Al-Farsi</h4>
                                            <span>CEO, Booking Solutions (Dubai)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-12 wow tpfadeUp" data-wow-duration="1s" data-wow-delay=".7s">
                            <div className="swiper-slide">
                                <div className="tp-testimonial-item-four testimonial-html-space mb-30">
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
                                        <p>"SoftwareStudios's LMS solution has empowered our students and educators alike. The platform is easy to use, and their team's responsiveness ensured we launched on time with zero issues."</p>
                                    </div>
                                    <div className="tp-testimonial-item-four__client d-flex align-items-center">
                                        <div className="mr-20">
                                            <img src="/img/testimonial/testi-4.1.png" alt="" />
                                        </div>
                                        <div className="tp-testimonial-item-four__position">
                                            <h4 className="m-0">Sushila Rana</h4>
                                            <span>EdTech Entrepreneur (Nepal)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-12 wow tpfadeUp" data-wow-duration="1s" data-wow-delay=".9s">
                            <div className="swiper-slide">
                                <div className="tp-testimonial-item-four testimonial-html-space mb-30">
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
                                        <p>"Our e-commerce platform now runs seamlessly thanks to SoftwareStudios. From payment integration to backend management, every aspect has been tailored to our exact needs. We couldn’t be happier."</p>
                                    </div>
                                    <div className="tp-testimonial-item-four__client d-flex align-items-center">
                                        <div className="mr-20">
                                            <img src="/img/testimonial/testi-4.6.png" alt="" />
                                        </div>
                                        <div className="tp-testimonial-item-four__position">
                                            <h4 className="m-0">Tashi Dorji</h4>
                                            <span>Founder, Retail Tech (Bhutan)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-12 wow tpfadeUp" data-wow-duration="1s" data-wow-delay="1.1s">
                            <div className="swiper-slide">
                                <div className="tp-testimonial-item-four testimonial-html-space mb-30">
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
                                        <p>"Thanks to SoftwareStudios, our digital marketing campaigns now reach thousands of customers every day. Their strategies are innovative, and the results speak for themselves."</p>
                                    </div>
                                    <div className="tp-testimonial-item-four__client d-flex align-items-center">
                                        <div className="mr-20">
                                            <img src="/img/testimonial/testi-4.7.png" alt="" />
                                        </div>
                                        <div className="tp-testimonial-item-four__position">
                                            <h4 className="m-0">Ritika Iyer</h4>
                                            <span>Marketing Head, Fashion Brand (India)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tp-news-letter-area tp-news-letter-bg pt-200 pb-150" style={{ backgroundImage: `url(/img/news/news-bg.jpg)` }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-8 col-md-12">
                            <div className="tp-news-sub-wrapper text-center">
                                <div className="tp-news-letter-section-box">
                                    <h2 className="tp-title-sm tp-title-sm tp-white-text pb-30">Launch Your Vision with SoftwareStudios</h2>
                                    <p className="text-white pb-35">From solving complex challenges to turning innovative ideas into reality, we thrive on creating tailored solutions for businesses of all kinds. Whether you're in Fintech, Health, Big Data, or beyond – we’re here to help your brand soar.</p>
                                </div>
                                <div className="tp-news-button">
                                    <Link className="tp-btn-lg-yellow" to="/contact/">Partner with Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestimonialPage;
