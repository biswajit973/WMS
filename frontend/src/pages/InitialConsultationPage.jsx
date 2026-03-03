import React from 'react';
import SEOHead from '../components/SEOHead';

import { Link } from 'react-router-dom';

const InitialConsultationPage = () => {
    return (
        <>
            <SEOHead
                title="Free Initial Consultation — Talk to Our Experts"
                description="Book a free consultation with SoftwareStudios. We'll understand your business needs and plan the best way to help you grow online."
                path="/Initial_Consultation/"
            />

            <section className="breadcrumb__area breadcrumb__pt-310 include-bg p-relative" style={{ backgroundImage: `url(/img/breadcrum/ab-1.1.jpg)` }}>
                <div className="ac-about-shape-img z-index-1">
                    <img src="/img/breadcrum/ab-shape-1.1.jpg" alt="Decorative Shape" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="breadcrumb__content p-relative z-index-1">
                                <h3 className="breadcrumb__title">Discover & Define</h3>
                                <Link to="/about/" className="tp-btn-white-border">Let's Work Together <i className="far fa-arrow-right"></i></Link>
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
                                <h3 className="tp-title-sm service-details-space">How We Turn Your Vision into Reality</h3>
                                <Link to="/contact/">Schedule a Free Expert Session <i className="fal fa-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="sd-service-details-paragraph">
                                <p className="pb-15">First, tell us what you need—whether it's a website, web app, mobile app, or just some advice about your current business. We’re here to listen and understand your needs completely.</p>
                                <p className="pb-10">Our business experts will carefully review your details, drawing on their extensive experience and insights from over 1,000+ business case studies across diverse industries.</p>
                                <p>We compare your situation with our existing cases. If there's a match, we apply proven solutions to address your challenges. We'll guide you through every step, whether in person or via video conference, to make sure you understand the process.</p>
                                <p>Think of us as your architects—before building a big house, we plan everything: design, rooms, safety, and durability. Similarly, we carefully plan and document every aspect of your business strategy before moving forward.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="sd-big-img">
                                <img src="/img/service/service-icon-10.1.png" alt="Service Image" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="sd-service-details">
                                <h3 className="tp-title-sm service-details-space">A Process Tailored to Your Needs</h3>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="sd-service-details-paragraph">
                                <p className="pb-15">Our approach combines industry best practices with tailored solutions to ensure that your product stands out. We don’t just create; we craft experiences that drive success and resonate with your audience.</p>
                                <p>From brainstorming to launch, we focus on strategies that enhance usability and engagement, ensuring that your product is both impactful and effective.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sd-accordion-area grey-bg pt-130 pb-130">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7">
                            <h3 className="tp-title-sm mb-90">Got Questions? We’ve Got Answers!</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="tp-custom-accordion">
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item faq-accordion-border">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Is my data safe?
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Absolutely! We prioritize your data security with top-notch encryption and secure servers. All credentials are kept confidential and are under your full control. Your privacy is our top priority.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                How does the 7-day free trial work?
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Our 7-day free trial lets you experience our services with no risk. If you’re not completely satisfied, we offer a 100% money-back guarantee—no questions asked.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                What happens after my free trial?
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Once your free trial ends, you’ll enjoy personalized support, including access to a dedicated manager, 24/7 assistance, and one year of free hosting. We’re committed to helping you succeed.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingFour">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                What makes our service stand out?
                                            </button>
                                        </h2>
                                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                We offer solutions tailored specifically to your needs, with added benefits like free hosting and a dedicated manager. Our exceptional service and commitment to your success are what set us apart.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-50">
                        <div className="col-12 text-center">
                            <p>Ready to get started? Visit our <Link to="/contact/">Let's Talk</Link> page or drop us a message. For immediate assistance, give us a call!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InitialConsultationPage;
