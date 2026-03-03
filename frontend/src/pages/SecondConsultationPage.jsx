import React from 'react';
import SEOHead from '../components/SEOHead';

import { Link } from 'react-router-dom';

const SecondConsultationPage = () => {
    return (
        <>
            <SEOHead
                title="Design & Development Process — How We Build Your Project"
                description="Learn about our design and development process. We keep you in the loop at every step until you're 100% happy."
                path="/second_Consultation/"
            />

            <section className="breadcrumb__area breadcrumb__pt-310 include-bg p-relative" style={{ backgroundImage: `url(/img/breadcrum/ab-1.1.jpg)` }}>
                <div className="ac-about-shape-img z-index-1">
                    <img src="/img/breadcrum/ab-shape-1.1.jpg" alt="Decorative Shape" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="breadcrumb__content p-relative z-index-1">
                                <h3 className="breadcrumb__title">Design & Develop</h3>
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
                                <h3 className="tp-title-sm service-details-space">Turning Your Vision into Reality</h3>
                                <Link to="/contact/">Schedule a Free Expert Session <i className="fal fa-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="sd-service-details-paragraph">
                                <p className="pb-15">Once we have your requirements, it’s time for the magic to happen. Our design team will craft everything from your logo and website theme to animations and illustrations. We’ve designed for over 100 brands from scratch in the last two years and will continue until you’re completely satisfied.</p>
                                <p className="pb-10">Our backend engineers, with 5 to 12 years of experience, handle the core logic of your system—be it e-commerce, trading apps, or AI/ML solutions. We ensure accuracy, security, and top performance in every project.</p>
                                <p>Our project managers will keep you updated daily and offer as many sessions as needed. We put our heart and soul into your project to ensure your satisfaction.</p>
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
                                <h3 className="tp-title-sm service-details-space">Expertise in Action: Tailored Solutions for Every Need</h3>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="sd-service-details-paragraph">
                                <p className="pb-15">We combine top industry practices with custom solutions to ensure your project stands out. With experience building real-time tracking for apps like Ola and Uber, secured payment systems for online games, e-commerce platforms, and more, we deliver impactful results.</p>
                                <p>From idea to launch, we use our expertise in developing video meeting sites, management software, algo trading platforms, and LMS to enhance usability and engagement, ensuring your product is both effective and innovative.</p>
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
                                                How many times can I change my design?
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                You can request design changes as many times as needed. Our goal is to ensure you're completely satisfied with the final product. We’ll work closely with you until your vision is realized.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                How many video sessions can I request?
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                You can request as many video sessions as needed to stay updated and address any questions or concerns. We’re here to support you throughout the project.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Will you provide a free domain and hosting?
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Yes, we provide free domain and hosting for one year as part of our service package. We want to ensure your online presence starts smoothly and efficiently.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingFour">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                What if I don’t know coding or technical details?
                                            </button>
                                        </h2>
                                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Don’t worry! We handle all technical aspects for you. Our team will explain everything in simple terms and guide you through the process, ensuring you feel confident and informed.
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

export default SecondConsultationPage;
