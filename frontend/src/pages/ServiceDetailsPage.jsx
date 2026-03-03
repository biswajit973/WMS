import React from 'react';
import SEOHead from '../components/SEOHead';

import { Link } from 'react-router-dom';

const ServiceDetailsPage = () => {
    return (
        <>
            <SEOHead
                title="Our Services in Detail — Web, App, Marketing & More"
                description="Detailed breakdown of all services we offer — from web design and development to digital marketing, branding, and AI solutions."
                path="/service-details/"
            />

            <section className="breadcrumb__area  breadcrumb__pt-310 include-bg p-relative" style={{ backgroundImage: `url(/img/breadcrum/ab-1.1.jpg)` }}>
                <div className="ac-about-shape-img z-index-1">
                    <img src="/img/breadcrum/ab-shape-1.1.jpg" alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="breadcrumb__content p-relative z-index-1">
                                <h3 className="breadcrumb__title">Service Details</h3>
                                <Link to="/about/" className="tp-btn-white-border">Lets work together <i className="far fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="service-details-area">
                <div className="container">
                    <div className="row service-pt-pb">
                        <div className="col-xl-6 col-lg-6">
                            <div className="sd-service-details">
                                <h3 className="tp-title-sm service-details-space">Find the best solution for every stage of your business development</h3>
                                <Link to="/contact/">Schedule a free expert session <i className="fal fa-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="sd-service-details-paragraph">
                                <p className="pb-15">A dedicated product design team can help you achieve your business goals. Whether you need to craft an idea for a completely new product or elevate the quality of an existing solution, we’ll help you to create a product that is laser targeted to your users’ needs and delivers business results.</p>
                                <p className="pb-10">Design services range from research and product review to ideation, UX design, and user testing.</p>
                                <p>A dedicated product design team can help you achieve your business goals. Whether you need to craft an idea for a completely new product or elevate the quality of an existing solution, we’ll help you to create a product that is laser targeted to your users’ needs and delivers business results</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="sd-big-img">
                                <img src="/img/service/service-icon-10.1.png" alt="" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="sd-service-details">
                                <h3 className="tp-title-sm service-details-space">Design process based on best practices and methodologies that deliver</h3>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="sd-service-details-paragraph">
                                <p className="pb-15">A dedicated product design team can help you achieve your business goals. Whether you need to craft an idea for a completely new product or elevate the quality of an existing solution, we’ll help you to create a product that is laser targeted to your users’ needs and delivers business results.</p>
                                <p>Design services range from research and product review to ideation, UX design, and user testing.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sd-accordio-area grey-bg pt-130 pb-130">
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
                                            <button className="accordion-buttons" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Is my data safe?
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Absolutely! We prioritize your data security with top-notch encryption and secure servers. All credentials are kept confidential and are solely in your control. Your safety is our top priority.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-items">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-buttons collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                How does the 7-day free trial work?
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Our 7-day free trial allows you to experience our services risk-free. If you are not completely satisfied within this period, you can opt for a 100% money-back guarantee.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-items">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-buttons collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                What happens after my free trial?
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                After your free trial, if you choose to continue, you will have access to a dedicated manager who simplifies technical details for you, 24/7 support, and one year of free service.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-items">
                                        <h2 className="accordion-header" id="headingFour">
                                            <button className="accordion-buttons collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                What makes our service stand out?
                                            </button>
                                        </h2>
                                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                                            data-bs-parent="#accordionExample">
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
        </>
    );
};

export default ServiceDetailsPage;
