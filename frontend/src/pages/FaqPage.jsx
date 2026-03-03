import React from 'react';
import SEOHead from '../components/SEOHead';

import { Link } from 'react-router-dom';

const FaqPage = () => {
    return (
        <>
            <SEOHead
                title="Frequently Asked Questions — SoftwareStudios Odisha"
                description="Got questions about web development, pricing, or our process? Find answers here. 7-day money-back guarantee. 24/7 support."
                path="/faq/"
            />

            <section className="breadcrumb__area  breadcrumb__pt-310 include-bg p-relative" style={{ backgroundImage: `url(/img/breadcrum/ab-1.1.jpg)` }}>
                <div className="ac-about-shape-img z-index-1">
                    <img src="/img/breadcrum/ab-shape-1.1.jpg" alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="breadcrumb__content p-relative z-index-1">
                                <h3 className="breadcrumb__title">Ask Question</h3>
                                <Link to="/contact/" className="tp-btn-white-border">Lets work together <i className="far fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="sd-accordio-area pt-130 pb-130">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="tp-custom-accordio faq-accordio-border">
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-items">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-buttons" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Is my data safe?
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                A dedicated product design team can help you achieve your business goals. Whether you need to craft an idea for a completely new product or elevate the quality of an existing solution, we’ll help you to create a product that is laser targeted to your users’ needs and delivers business results.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-items">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-buttons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                How does the 30-day free software trial work?
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                A dedicated product design team can help you achieve your business goals. Whether you need to craft an idea for a completely new product or elevate the quality of an existing solution, we’ll help you to create a product that is laser targeted to your users’ needs and delivers business results.
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
                                                A dedicated product design team can help you achieve your business goals. Whether you need to craft an idea for a completely new product or elevate the quality of an existing solution, we’ll help you to create a product that is laser targeted to your users’ needs and delivers business results.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-items">
                                        <h2 className="accordion-header" id="headingfour">
                                            <button className="accordion-buttons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                                                What makes LessAccounting better than the rest?
                                            </button>
                                        </h2>
                                        <div id="collapsefour" className="accordion-collapse collapse" aria-labelledby="headingfour" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                A dedicated product design team can help you achieve your business goals. Whether you need to craft an idea for a completely new product or elevate the quality of an existing solution, we’ll help you to create a product that is laser targeted to your users’ needs and delivers business results.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-items">
                                        <h2 className="accordion-header" id="headingfive">
                                            <button className="accordion-buttons" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="true" aria-controls="collapsefive">
                                                Is my data safe?
                                            </button>
                                        </h2>
                                        <div id="collapsefive" className="accordion-collapse collapse" aria-labelledby="headingfive" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                A dedicated product design team can help you achieve your business goals. Whether you need to craft an idea for a completely new product or elevate the quality of an existing solution, we’ll help you to create a product that is laser targeted to your users’ needs and delivers business results.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-items">
                                        <h2 className="accordion-header" id="headingsix">
                                            <button className="accordion-buttons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
                                                How does the 30-day free software trial work?
                                            </button>
                                        </h2>
                                        <div id="collapsesix" className="accordion-collapse collapse" aria-labelledby="headingsix" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                A dedicated product design team can help you achieve your business goals. Whether you need to craft an idea for a completely new product or elevate the quality of an existing solution, we’ll help you to create a product that is laser targeted to your users’ needs and delivers business results.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-items">
                                        <h2 className="accordion-header" id="headingseven">
                                            <button className="accordion-buttons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseseven" aria-expanded="false" aria-controls="collapseseven">
                                                What happens after my free trial?
                                            </button>
                                        </h2>
                                        <div id="collapseseven" className="accordion-collapse collapse" aria-labelledby="headingseven" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                A dedicated product design team can help you achieve your business goals. Whether you need to craft an idea for a completely new product or elevate the quality of an existing solution, we’ll help you to create a product that is laser targeted to your users’ needs and delivers business results.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-items">
                                        <h2 className="accordion-header" id="headingeight">
                                            <button className="accordion-buttons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseight" aria-expanded="false" aria-controls="collapseight">
                                                What makes LessAccounting better than the rest?
                                            </button>
                                        </h2>
                                        <div id="collapseight" className="accordion-collapse collapse" aria-labelledby="headingeight" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                A dedicated product design team can help you achieve your business goals. Whether you need to craft an idea for a completely new product or elevate the quality of an existing solution, we’ll help you to create a product that is laser targeted to your users’ needs and delivers business results.
                                            </div>
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
                        <div className="col-xl-8 col-lg-8 col-md-12 ">
                            <div className="tp-news-sub-wrapper text-center">
                                <div className="tp-news-letter-section-box">
                                    <h2 className="tp-title-sm tp-title-sm tp-white-text pb-30">Launch your product with us</h2>
                                    <p className="text-white pb-35">We had the pleasure of being a partner for companies from markets like Fintech, Health, Government, Security, Big Data & many more.</p>
                                </div>
                                <div className="tp-news-button">
                                    <Link className="tp-btn-lg-yellow" to="/contact/">Become a Partner</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FaqPage;
