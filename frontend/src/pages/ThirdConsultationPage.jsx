import React from 'react';
import SEOHead from '../components/SEOHead';

import { Link } from 'react-router-dom';

const ThirdConsultationPage = () => {
    return (
        <>
            <SEOHead
                title="Digital Marketing & Launch — We Get You Customers"
                description="We launch your project and bring customers through smart digital marketing. 7-day free trial. Money-back guarantee."
                path="/third_Consultation/"
            />

            <section className="breadcrumb__area breadcrumb__pt-310 include-bg p-relative" style={{ backgroundImage: `url(/img/breadcrum/ab-1.1.jpg)` }}>
                <div className="ac-about-shape-img z-index-1">
                    <img src="/img/breadcrum/ab-shape-1.1.jpg" alt="Decorative Shape" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="breadcrumb__content p-relative z-index-1">
                                <h3 className="breadcrumb__title">Prototype & Polish</h3>
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
                                <h3 className="tp-title-sm service-details-space">Transforming Your Vision into Reality</h3>
                                <Link to="/contact/">Book Your Free Expert Consultation <i className="fal fa-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="sd-service-details-paragraph">
                                <p className="pb-15">At the final stage, we handle everything meticulously: from design and development to comprehensive testing. Our experienced testers conduct rigorous internal testing, followed by your tests to ensure it meets your satisfaction. We even involve your users in the testing process. Our goal is simple—if you're satisfied, we are too.</p>
                                <p className="pb-10">To ensure your continued satisfaction, we offer 1 year of complimentary service, including monthly video sessions to review and address any issues. Plus, a dedicated tech expert is available to support you throughout the year.</p>
                                <p>For our digital marketing clients, we finalize and implement strategies, ensuring both you and your customers see tangible results. Once the strategy is perfected, we scale up to meet your needs, reaching thousands of customers daily. You’ll also receive a personal digital marketing expert to guide and optimize your efforts.</p>
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
                                <h3 className="tp-title-sm service-details-space">Your Success is <br /> Our Mission</h3>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="sd-service-details-paragraph">
                                <p className="pb-15">At the heart of our approach is your complete satisfaction. We don’t just deliver projects; we craft tailored solutions that resonate with your vision and drive success. With our deep expertise in real-time tracking, secure payment systems, and cutting-edge e-commerce platforms, we transform your ideas into impactful results.</p>
                                <p>From initial concept to final launch, our commitment is unwavering. We utilize our skills in video meeting solutions, management software, algo trading platforms, and LMS to not only meet but exceed your expectations. Your success is our priority, and we ensure that every step we take is aligned with your goals and aspirations.</p>
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
                                                How many months of free service and support do you offer?
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                We offer 12 months of service and support absolutely free of charge. There are no hidden fees or costs.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                What if I encounter a glitch or issue unexpectedly?
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                We offer 24/7 support, including nights and weekends, to address any issues promptly and efficiently.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Do you renew our hosting and domain?
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                We provide free domain and hosting for the first year. Starting from the second year, renewal fees will apply.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingFour">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                What if I’m not satisfied with the end product?
                                            </button>
                                        </h2>
                                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                If you're not satisfied with the final product, we will engage in reverse engineering to make necessary adjustments until you are completely happy.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingFive">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                What if my data gets deleted or lost?
                                            </button>
                                        </h2>
                                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                We ensure data security with multi-level backups to protect against data loss or accidental deletion.
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

export default ThirdConsultationPage;
