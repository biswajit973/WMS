import React from 'react';
import SEOHead from '../components/SEOHead';

import { Link } from 'react-router-dom';

const PricePage = () => {
    return (
        <>
            <SEOHead
                title="Affordable Website Development Pricing — Starting ₹12,999"
                description="Transparent pricing for web development, app development & digital marketing. Plans from ₹12,999. Free hosting included. No hidden costs."
                path="/price/"
            />

            <style>{`
        .cpprice {
           position: relative;
        }

        .cpprice__badge {
           position: absolute;
           top: 14px;
           right: 14px;
           background: var(--tp-theme-primary);
           color: var(--tp-common-black);
           font-size: 12px;
           font-weight: 700;
           letter-spacing: 0.04em;
           text-transform: uppercase;
           padding: 6px 10px;
           border-radius: 999px;
        }

        .cpprice__bottomline {
           font-size: 15px;
           line-height: 1.55;
           color: var(--tp-common-black);
           background: #f7f9ff;
           border: 1px solid #e8edf8;
           border-radius: 12px;
           padding: 14px 14px;
           margin-top: 8px;
        }

        .cpprice__bottomline b {
           font-weight: 600;
        }

        .cp-price-area .cpprice__button {
           padding-top: 34px;
        }

        @media (max-width: 991px) {
           .cpprice {
              margin-bottom: 20px;
           }
        }
      `}</style>

            <section className="breadcrumb__area  breadcrumb__pt-310 include-bg p-relative" style={{ backgroundImage: `url(/img/breadcrum/ab-1.1.jpg)` }}>
                <div className="ac-about-shape-img z-index-1">
                    <img src="/img/breadcrum/ab-shape-1.1.jpg" alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="breadcrumb__content p-relative z-index-1">
                                <h3 className="breadcrumb__title">Pricing Plan</h3>
                                <Link to="/contact/" className="tp-btn-white-border">Lets work together <i className="far fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="cp-price-area pt-130 pb-130">
                <div className="container">
                    <div className="row justify-content-center pb-45">
                        <div className="col-xl-8 col-lg-10 text-center">
                            <h5 className="tp-subtitle pb-10">Pricing Plans</h5>
                            <h2 className="tp-title-sm pb-10">Simple, Honest Pricing — No Hidden Costs</h2>
                            <p>Pick the plan that fits your budget. Upgrade anytime as your business grows.</p>
                        </div>
                    </div>
                    <div className="row tp-gx-15">
                        <div className="col-xl-3 col-lg-6 col-md-6 col-12">
                            <div className="cpprice text-center mb-20">
                                <div className="cpprice__title">
                                    <h3 className="cp-price-title">Starter Launch</h3>
                                </div>
                                <div className="cpprice__meta">
                                    <span><b>₹12,999</b> one-time</span>
                                </div>
                                <div className="cpprice__title-sm">
                                    <h4 className="cp-price-sm-title">Go live quickly with a polished, professional website foundation.</h4>
                                </div>
                                <div className="cpprice__list">
                                    <ul>
                                        <li>Curated Professional Designs</li>
                                        <li>Ready-to-Launch Frameworks</li>
                                        <li>Mobile-Responsive Build</li>
                                        <li>Essential Contact & Inquiry Setup</li>
                                        <li>1 Year Free Hosting</li>
                                    </ul>
                                </div>
                                <p className="cpprice__bottomline"><b>Bottom Line:</b> Perfect for getting online fast. Most growth-focused businesses upgrade to Business Growth for stronger long-term value.</p>
                                <div className="cpprice__button">
                                    <Link className="tp-btn-yellow" to="/contact/">Start with Starter Launch <i className="fal fa-long-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-12">
                            <div className="cpprice active text-center mb-20">
                                <span className="cpprice__badge">Most Popular</span>
                                <div className="cpprice__title">
                                    <h3 className="cp-price-title">Business Growth</h3>
                                </div>
                                <div className="cpprice__meta">
                                    <span><b>₹27,999</b> one-time</span>
                                </div>
                                <div className="cpprice__title-sm">
                                    <h4 className="cp-price-sm-title">The best-value package for brands ready to convert visitors into customers.</h4>
                                </div>
                                <div className="cpprice__list">
                                    <ul>
                                        <li>Fully Custom Design</li>
                                        <li>5 Smart Connections (Payment, WhatsApp, Maps, etc.)</li>
                                        <li>2 Years Free Hosting</li>
                                        <li>5 Professional Email Accounts</li>
                                        <li>Designed to Turn Visitors into Customers</li>
                                    </ul>
                                </div>
                                <p className="cpprice__bottomline"><b>Bottom Line:</b> For just ~₹15k more than Starter Launch, you get custom design, double hosting, smart connections, and professional email — the best value pick.</p>
                                <div className="cpprice__button">
                                    <Link className="tp-btn-yellow" to="/contact/">Choose Business Growth <i className="fal fa-long-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-12">
                            <div className="cpprice text-center mb-20">
                                <div className="cpprice__title">
                                    <h3 className="cp-price-title">Professional Scale</h3>
                                </div>
                                <div className="cpprice__meta">
                                    <span><b>₹49,999</b> one-time</span>
                                </div>
                                <div className="cpprice__title-sm">
                                    <h4 className="cp-price-sm-title">Built for businesses that need web-app capabilities and advanced workflows.</h4>
                                </div>
                                <div className="cpprice__list">
                                    <ul>
                                        <li>Full Web Application (Not Just a Website)</li>
                                        <li>Advanced Features & Custom Tools</li>
                                        <li>Login Accounts for Your Team with Dashboards</li>
                                        <li>Built to Handle More Traffic as You Grow</li>
                                        <li>Fast, Secure & Reliable</li>
                                    </ul>
                                </div>
                                <p className="cpprice__bottomline"><b>Bottom Line:</b> Best for complex operations. If you want the best value without this level of complexity, our Business Growth plan is the smarter pick.</p>
                                <div className="cpprice__button">
                                    <Link className="tp-btn-yellow" to="/contact/">Explore Professional Scale <i className="fal fa-long-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-12">
                            <div className="cpprice text-center mb-20">
                                <div className="cpprice__title">
                                    <h3 className="cp-price-title">Enterprise Solutions</h3>
                                </div>
                                <div className="cpprice__meta">
                                    <span>Starting from <b>₹1 Lakh</b></span>
                                </div>
                                <div className="cpprice__title-sm">
                                    <h4 className="cp-price-sm-title">Fully tailored digital systems for large-scale, multi-team business requirements.</h4>
                                </div>
                                <div className="cpprice__list">
                                    <ul>
                                        <li>Fully Customizable Scope</li>
                                        <li>Requirement-Based Architecture</li>
                                        <li>Complex Integrations & Automations</li>
                                        <li>Dedicated Discovery & Planning</li>
                                        <li>Phased Delivery Roadmap</li>
                                    </ul>
                                </div>
                                <p className="cpprice__bottomline"><b>Bottom Line:</b> Built for large businesses with complex needs. For most small businesses, our Business Growth plan gives you the best value for money.</p>
                                <div className="cpprice__button">
                                    <Link className="tp-btn-yellow" to="/contact/">Talk to Enterprise Team <i className="fal fa-long-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PricePage;
