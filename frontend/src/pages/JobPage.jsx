import React from 'react';
import SEOHead from '../components/SEOHead';

import { Link } from 'react-router-dom';

const JobPage = () => {
    return (
        <>
            <SEOHead
                title="Careers at SoftwareStudios — Join Our Team"
                description="Explore job openings at SoftwareStudios. Work with a talented team building websites, apps & digital marketing solutions across India."
                path="/job/"
            />

            <section className="breadcrumb__area  breadcrumb__pt-310 include-bg p-relative" style={{ backgroundImage: `url(/img/breadcrum/ab-1.1.jpg)` }}>
                <div className="ac-about-shape-img z-index-1">
                    <img src="/img/breadcrum/ab-shape-1.1.jpg" alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="breadcrumb__content p-relative z-index-1">
                                <h3 className="breadcrumb__title">SoftwareStudios Job List</h3>
                                <Link to="/contact/" className="tp-btn-white-border">Lets work together <i className="far fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="job-area pt-130 pb-130">
                <div className="container">
                    <div className="row justify-content-center mb-80">
                        <div className="col-10 p-0 text-center">
                            <div className="tp-project-tab-button masonary-menu">
                                <button className="active" data-filter="*"><span>All</span></button>
                                <button data-filter=".hyderabad"><span>Hyderabad</span></button>
                                <button data-filter=".uae"><span>UAE</span></button>
                                <button data-filter=".remote"><span>Remote</span></button>
                            </div>
                        </div>
                    </div>
                    <div className="row grid">
                        <div className="col-xl-3 grid-item hyderabad">
                            <div className="jobitem mb-30">
                                <div className="jobitem__brand">
                                    <img src="/img/job/job-1.png" alt="AI/ML Developer" />
                                </div>
                                <div className="jobitem__title">
                                    <h4 className="job-title-sm"><Link to="/job-details/">AI/ML Developer (Generative AI)</Link></h4>
                                </div>
                                <div className="jobitem__details">
                                    <p className="mb-0"><i className="fal fa-map-marker-alt"></i> Hyderabad, India</p>
                                    <p className="mb-0"><i className="fal fa-clock"></i> Full Time</p>
                                </div>
                                <div className="jobitem__button">
                                    <button className="tp-btn-border-sm">Apply Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 grid-item hyderabad">
                            <div className="jobitem mb-30">
                                <div className="jobitem__brand">
                                    <img src="/img/job/job-3.png" alt="Sales for Algos" />
                                </div>
                                <div className="jobitem__title">
                                    <h4 className="job-title-sm"><Link to="/job-details/">Sales Specialist - Trading Algorithms</Link></h4>
                                </div>
                                <div className="jobitem__details">
                                    <p className="mb-0"><i className="fal fa-map-marker-alt"></i> Hyderabad, India</p>
                                    <p className="mb-0"><i className="fal fa-clock"></i> Full Time</p>
                                </div>
                                <div className="jobitem__button">
                                    <button className="tp-btn-border-sm">Apply Now</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 grid-item uae">
                            <div className="jobitem mb-30">
                                <div className="jobitem__brand">
                                    <img src="/img/job/job-4.png" alt="iOS Developer" />
                                </div>
                                <div className="jobitem__title">
                                    <h4 className="job-title-sm"><Link to="/job-details/">iOS Developer (Swift)</Link></h4>
                                </div>
                                <div className="jobitem__details">
                                    <p className="mb-0"><i className="fal fa-map-marker-alt"></i> Abu Dhabi, UAE</p>
                                    <p className="mb-0"><i className="fal fa-clock"></i> Full Time</p>
                                </div>
                                <div className="jobitem__button">
                                    <button className="tp-btn-border-sm">Apply Now</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 grid-item remote">
                            <div className="jobitem mb-30">
                                <div className="jobitem__brand">
                                    <img src="/img/job/job-5.png" alt="React Native Developer" />
                                </div>
                                <div className="jobitem__title">
                                    <h4 className="job-title-sm"><Link to="/job-details/">React Native Developer</Link></h4>
                                </div>
                                <div className="jobitem__details">
                                    <p className="mb-0"><i className="fal fa-map-marker-alt"></i> Remote</p>
                                    <p className="mb-0"><i className="fal fa-clock"></i> Part Time</p>
                                </div>
                                <div className="jobitem__button">
                                    <button className="tp-btn-border-sm">Apply Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 grid-item remote">
                            <div className="jobitem mb-30">
                                <div className="jobitem__brand">
                                    <img src="/img/job/job-6.png" alt="Sr. Azure Infra. Engineer" />
                                </div>
                                <div className="jobitem__title">
                                    <h4 className="job-title-sm"><Link to="/job-details/">Senior Azure Infrastructure Engineer</Link></h4>
                                </div>
                                <div className="jobitem__details">
                                    <p className="mb-0"><i className="fal fa-map-marker-alt"></i> Remote</p>
                                    <p className="mb-0"><i className="fal fa-clock"></i> Part Time</p>
                                </div>
                                <div className="jobitem__button">
                                    <button className="tp-btn-border-sm">Apply Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 grid-item remote">
                            <div className="jobitem mb-30">
                                <div className="jobitem__brand">
                                    <img src="/img/job/job-7.png" alt="Video Editor" />
                                </div>
                                <div className="jobitem__title">
                                    <h4 className="job-title-sm"><Link to="/job-details/">Video Editor (Premiere Pro)</Link></h4>
                                </div>
                                <div className="jobitem__details">
                                    <p className="mb-0"><i className="fal fa-map-marker-alt"></i> Remote</p>
                                    <p className="mb-0"><i className="fal fa-clock"></i> Full Time</p>
                                </div>
                                <div className="jobitem__button">
                                    <button className="tp-btn-border-sm">Apply Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 grid-item remote">
                            <div className="jobitem mb-30">
                                <div className="jobitem__brand">
                                    <img src="/img/job/job-7.png" alt="Digital Marketing Specialist" />
                                </div>
                                <div className="jobitem__title">
                                    <h4 className="job-title-sm"><Link to="/job-details/">Digital Marketing & SEO Specialist</Link></h4>
                                </div>
                                <div className="jobitem__details">
                                    <p className="mb-0"><i className="fal fa-map-marker-alt"></i> Remote</p>
                                    <p className="mb-0"><i className="fal fa-clock"></i> Full Time</p>
                                </div>
                                <div className="jobitem__button">
                                    <button className="tp-btn-border-sm">Apply Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 grid-item remote">
                            <div className="jobitem mb-30">
                                <div className="jobitem__brand">
                                    <img src="/img/job/job-7.png" alt="Full Stack Web Developer" />
                                </div>
                                <div className="jobitem__title">
                                    <h4 className="job-title-sm"><Link to="/job-details/">Full Stack Web Developer</Link></h4>
                                </div>
                                <div className="jobitem__details">
                                    <p className="mb-0"><i className="fal fa-map-marker-alt"></i> Remote</p>
                                    <p className="mb-0"><i className="fal fa-clock"></i> Full Time</p>
                                </div>
                                <div className="jobitem__button">
                                    <button className="tp-btn-border-sm">Apply Now</button>
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
                                    <h2 className="tp-title-sm tp-title-sm tp-white-text pb-30">Join Our Tech Revolution</h2>
                                    <p className="text-white pb-35">At SoftwareStudios, we’re pushing the boundaries of technology and innovation. Whether you’re looking to join us full-time, part-time, or as a freelancer, we offer exciting opportunities to work on industry-leading projects across Fintech, Health, Government, Security, Big Data, and more.</p>
                                    <p className="text-white pb-35">Showcase your tech skills and contribute to groundbreaking products and solutions. Be part of a team that values expertise and dedication, and help us set new standards in the tech world.</p>
                                </div>
                                <div className="tp-news-button">
                                    <Link className="tp-btn-lg-yellow" to="/job/">Explore Opportunities</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default JobPage;
