import React from 'react';
import SEOHead from '../components/SEOHead';

import { Link } from 'react-router-dom';

const AboutPage = () => {
    return (
        <>
            <SEOHead
                title="About SoftwareStudios — Top Software Company in Bhubaneswar, Odisha"
                description="10+ years building websites & apps for businesses in Odisha and across India. 24+ team members. 100% client satisfaction. Learn our story."
                path="/about/"
            />

            <div id="corporate-about" className="corporate-about__area pt-120 corporate-plr">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".5s">
                            <div className="corporate-about__left-wrapper text-center text-xl-start p-relative">
                                <div className="corporate-about__main-img">
                                    <img src="/img/about/about-shape-7-2.png" alt="SoftwareStudios Mission Image" />
                                </div>
                                <div className="corporate-about__sub-img d-none d-sm-block">
                                    <img src="/img/about/about-shape-7-1.png" alt="SoftwareStudios Mission Image" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".7s">
                            <div className="corporate-about__section-box">
                                <h4 className="tp-subtitle pink-circle">Our Story</h4>
                                <h3 className="tp-title">Over 10 Years of Helping Businesses Grow</h3>
                            </div>
                            <div className="corporate-about__content">
                                <p className="pb-25">SoftwareStudios has been building websites, apps, and digital solutions since 2014. What started as a small tech team has grown into a trusted partner for hundreds of businesses — from local shops to international brands.</p>
                                <p>We focus on one thing: making technology easy and affordable for business owners like you. No confusing jargon, no hidden costs — just real solutions that help you grow.</p>
                            </div>
                            <div className="corporate-about__btn">
                                <Link className="corporate-btn-2" to="/contact/"><span>Talk with Our Experts <i className="far fa-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br />
            <div className="tp-mission-area pt-130 p-relative">
                <div className="bp-mission-shape-1 d-none d-lg-block">
                    <img src="/img/mission/mission-shape-5.1.png" alt="" />
                </div>
                <div className="bp-mission-shape-2 d-none d-lg-block">
                    <img src="/img/mission/mission-shape-5.6.png" alt="" />
                </div>
                <div className="bp-mission-shape-3 d-none d-lg-block">
                    <img src="/img/mission/mission-shape-5.3.png" alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-7 col-md-11 wow tpfadeLeft" data-wow-duration=".5s" data-wow-delay=".7s">
                            <div className="tp-mission-tab-section pb-10">
                                <nav>
                                    <div className="nav tp-mission-tab" id="nav-tab" role="tablist">
                                        <button className="nav-links active" id="nav-Mission-tab" data-bs-toggle="tab" data-bs-target="#Mission" type="button" role="tab" aria-controls="nav-Mission-tab" aria-selected="true"><span>Our Mission</span></button>
                                        <button className="nav-links" id="nav-Vission-tab" data-bs-toggle="tab" data-bs-target="#Vission" type="button" role="tab" aria-controls="nav-Vission-tab" aria-selected="false"><span>Our Vision</span></button>
                                        <button className="nav-links" id="nav-Value-tab" data-bs-toggle="tab" data-bs-target="#Value" type="button" role="tab" aria-controls="nav-Value-tab" aria-selected="false"><span>Our Values</span></button>
                                    </div>
                                </nav>
                            </div>
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="Mission" role="tabpanel" aria-labelledby="nav-Mission-tab" tabIndex="0">
                                    <div className="tpmission">
                                        <div className="tpmission__content">
                                            <h2 className="tp-mission-title">Empowering India’s Digital Revolution with
                                                <span className="tp-section-highlight"> Affordable
                                                    <svg width="160" height="11" viewBox="0 0 160 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0 0L160 11H0V0Z" fill="#FFDC60" />
                                                    </svg>
                                                </span> Solutions
                                            </h2>
                                            <p className="pb-20">We believe every business — big or small — deserves a great website and a strong online presence. That's why we keep our prices low and our quality high.</p>
                                            <p>With 10+ years of real experience behind us, we know what works and what doesn't. We focus on getting you results, not just delivering code.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="Vission" role="tabpanel" aria-labelledby="nav-Vission-tab" tabIndex="0">
                                    <div className="tpmission">
                                        <div className="tpmission__content">
                                            <h2 className="tp-mission-title">Leading the Charge in
                                                <span className="tp-section-highlight"> Digital Innovation
                                                    <svg width="201" height="12" viewBox="0 0 201 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0 0L201 12H0V0Z" fill="#FFDC60" />
                                                    </svg>
                                                </span> for Every Business
                                            </h2>
                                            <p className="pb-20">We want to make technology easy and affordable for every business owner in India — whether you're running a chai stall or a chain of hotels.</p>
                                            <p>Our goal is simple: help you reach more customers, save time, and grow your income using the right tools.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="Value" role="tabpanel" aria-labelledby="nav-Value-tab" tabIndex="0">
                                    <div className="tpmission">
                                        <div className="tpmission__content">
                                            <h2 className="tp-mission-title">Our Commitment to
                                                <span className="tp-section-highlight"> Excellence
                                                    <svg width="160" height="11" viewBox="0 0 160 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0 0L160 11H0V0Z" fill="#FFDC60" />
                                                    </svg>
                                                </span> and Affordability
                                            </h2>
                                            <p className="pb-20">We deliver great work at honest prices. No surprises, no fine print. What you see is what you get.</p>
                                            <p>Our core values are simple: do excellent work, treat every client like family, and make sure our solutions actually make a difference in your business.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-5 col-md-12 wow tpfadeRight" data-wow-duration=".5s" data-wow-delay=".7s">
                            <div className="tp-mission-img">
                                <img src="/img/mission/collage.jpg" alt="SoftwareStudios Mission Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ac-about-content-area pt-130">
                <div className="container">
                    <div className="ac-border-bottom ac-bottom-space">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".3s" data-wow-delay=".5s">
                                <div className="ac-about-left">
                                    <h3 className="ac-ab-title"><Link to="/portfolio/">Building software for world changers</Link></h3>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 wow tpfadeRight" data-wow-duration=".5s" data-wow-delay=".7s">
                                <div className="ac-about-right">
                                    <p className="pb-25">We've built everything from simple landing pages for local shops to complex booking systems for hotel chains and AI-powered tools for large businesses. Whatever your size, we've got you covered.</p>
                                    <p>Whether you're a solo entrepreneur or part of a bigger team, we make sure your tech works for you — not the other way around. Our mission is to give you affordable, powerful tools that help your business succeed.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ac-chose-area mb-130">
                <div className="container ac-chose-bg">
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-md-6 col-12 wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".5s">
                            <div className="tp-chose-item mb-30">
                                <div className="tpchosebox">
                                    <div className="tpchosebox__icon mb-30">
                                        <a href="#"><i className="flaticon-group"></i></a>
                                    </div>
                                    <div className="tpchosebox__content">
                                        <h4><Link to="/service-details/">Professional <br /> Team</Link></h4>
                                        <p>24+ Team Members</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-12 wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".7s">
                            <div className="tp-chose-item mb-30">
                                <div className="tpchosebox tpchosebox-three">
                                    <div className="tpchosebox__icon fea-color-5 mb-30">
                                        <a href="#"><i className="fas fa-star"></i></a>
                                    </div>
                                    <div className="tpchosebox__content">
                                        <h4><Link to="/service-details/">Competitive <br /> Rate</Link></h4>
                                        <p>100% Client Satisfaction</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-12 wow tpfadeUp" data-wow-duration=".7s" data-wow-delay=".9s">
                            <div className="tp-chose-item mb-30">
                                <div className="tpchosebox tpchosebox-two">
                                    <div className="tpchosebox__icon fea-color-4 mb-30">
                                        <a href="#"><i className="flaticon-web"></i></a>
                                    </div>
                                    <div className="tpchosebox__content">
                                        <h4><Link to="/service-details/">Certified <br /> Globally</Link></h4>
                                        <p>65,000+ People Reached</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-12 wow tpfadeUp" data-wow-duration=".7s" data-wow-delay=".9s">
                            <div className="tp-chose-item mb-30">
                                <div className="tpchosebox">
                                    <div className="tpchosebox__icon mb-30">
                                        <a href="#"><i className="fas fa-star"></i></a>
                                    </div>
                                    <div className="tpchosebox__content">
                                        <h4><Link to="/service-details/">Competitive <br /> Rate</Link></h4>
                                        <p>100% Client Satisfaction</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ac-feature-area">
                <div className="container">
                    <div className="row ac-feature-space">
                        <div className="col-xl-6 col-lg-6">
                            <div className="ac-feature-left">
                                <h3 className="ac-feature-title">Empowering Every Business Through Technology</h3>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="ac-feature-right">
                                <p className="pb-25">At SoftwareStudios, we're committed to bringing the digital revolution to every corner of India. Share your business challenges with us, and we’ll collaborate to create transformative digital solutions. From banking innovations to e-commerce enhancements, we’re here to drive your success.</p>
                                <p>Our work has impacted various industries and has been featured in major tech outlets. Join us in redefining business through technology.</p>
                            </div>
                        </div>
                    </div>
                    <div className="ac-feature-border-top">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <div className="acfeature mb-50">
                                    <div className="ac-circle"></div>
                                    <div className="acfeature__item">
                                        <h3 className="ac-feature-sm-title"><Link to="/contact/">Project Kickoff</Link></h3>
                                        <p>We start by understanding your business and setting goals for digital transformation.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <div className="acfeature mb-50">
                                    <div className="ac-circle ac-cirle-color-2"></div>
                                    <div className="acfeature__item">
                                        <h3 className="ac-feature-sm-title ac-cirle-color-2"><Link to="/contact/">Planning & Ideas</Link></h3>
                                        <p>We brainstorm and come up with the best ideas for your business.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <div className="acfeature mb-50">
                                    <div className="ac-circle ac-cirle-color-3"></div>
                                    <div className="acfeature__item">
                                        <h3 className="ac-feature-sm-title ac-cirle-color-3"><Link to="/contact/">Design Process</Link></h3>
                                        <p>We craft user-friendly designs that capture your brand's essence.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <div className="acfeature mb-50">
                                    <div className="ac-circle ac-cirle-color-4"></div>
                                    <div className="acfeature__item">
                                        <h3 className="ac-feature-sm-title ac-cirle-color-4"><Link to="/contact/">Development</Link></h3>
                                        <p>Our tech team builds robust solutions tailored to your goals.</p>
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
                            <div className="tp-news-sub-wrapper pr-50">
                                <div className="tp-news-letter-section-box">
                                    <h5 className="tp-subtitle subtitle-secondary-color wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".6s">Our CEO says</h5>
                                    <h2 className="tp-title-sm tp-title-sm tp-white-text pb-25 wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".8s">
                                        The future of business is not about having the most money but leveraging the most effective technology.
                                    </h2>
                                </div>
                                <div className="tp-news-button wow tpfadeUp" data-wow-duration=".7s" data-wow-delay="1s">
                                    <Link className="tp-btn-lg-yellow mr-20" to="/contact/">Contact Us</Link>
                                    <Link className="tp-btn-sky" to="/faq/">Help</Link>
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

export default AboutPage;
