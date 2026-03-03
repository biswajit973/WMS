import React from 'react';
import SEOHead from '../components/SEOHead';

import { Link } from 'react-router-dom';

const JobDetailsPage = () => {
    return (
        <>
            <SEOHead
                title="Job Opening Details — SoftwareStudios Careers"
                description="View detailed job descriptions, responsibilities, and how to apply at SoftwareStudios."
                path="/job-details/"
            />

            <section className="breadcrumb__area  breadcrumb__pt-310 include-bg p-relative" style={{ backgroundImage: `url(/img/breadcrum/ab-1.1.jpg)` }}>
                <div className="ac-about-shape-img z-index-1">
                    <img src="/img/breadcrum/ab-shape-1.1.jpg" alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="breadcrumb__content p-relative z-index-1">
                                <h3 className="breadcrumb__title">Job Details</h3>
                                <Link to="/contact/" className="tp-btn-white-border">Lets work together <i className="far fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="job-details-info pt-120 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="jobdetails">
                                <div className="jobdetails__subtitle">
                                    <h5 className="jb-subtitle">Ongoing</h5>
                                </div>
                                <div className="jobdetails__title">
                                    <h4 className="job-title pb-10">AI/ML Developer (Generative AI) </h4>
                                    <span>AI/ML Development</span>
                                </div>
                                <div className="jobdetails__paragraph">
                                    <p className="pb-20">SoftwareStudios is looking for an AI/ML Developer to join our dynamic team. You will work closely with our R&D and product teams to design, develop, and implement cutting-edge AI solutions, focusing on generative AI for videos and images.</p>
                                    <p className="pb-30">Our team thrives on innovation, and as part of our AI journey, you'll have the opportunity to make a real impact in shaping the future of generative technologies.</p>
                                </div>
                                <div className="jobdetails__feature">
                                    <ul>
                                        <li> <i className="fal fa-check"></i> <span>Salary :</span> 6L to 12L, depending on experience and discussion</li>
                                        <li> <i className="fal fa-check"></i> <span>Perks :</span> Gym membership, Udemy/Coursera subscriptions, Swiggy/Zomato vouchers, free flights to Hyderabad when required</li>
                                        <li> <i className="fal fa-check"></i> <span>Full-Time/Part-Time :</span> Flexible work options available</li>
                                        <li> <i className="fal fa-check"></i> <span>Required skills :</span> Minimum 3 years of experience in AI/ML, particularly in generative video and image models; strong programming skills; experience with machine learning algorithms</li>
                                        <li> <i className="fal fa-check"></i> <span>Location :</span> Hyderabad or Remote</li>
                                    </ul>
                                </div>
                                <div className="jobdetails__img">
                                    <img src="/img/job/job-1.jpg" alt="AI/ML Developer" />
                                </div>
                                <div className="jobdetails__title">
                                    <h4 className="job-title pb-20">Your responsibilities :</h4>
                                </div>
                                <div className="jobdetails__paragraph">
                                    <p className="mb-30">At SoftwareStudios, our mission is to help businesses innovate with top-notch software solutions. We believe in transparency, collaboration, and ownership. As part of the team, your role will include:</p>
                                </div>
                                <div className="jobdetails__feature jobdetails__feature-2">
                                    <ul>
                                        <li> <i className="fal fa-check"></i> <span>Develop and implement ML algorithms</span> for generative video and image creation.</li>
                                        <li> <i className="fal fa-check"></i> <span>Collaborate with product teams</span> to enhance the AI features in our solutions, ensuring they align with client goals.</li>
                                        <li> <i className="fal fa-check"></i> <span>Research and develop</span> new AI/ML methodologies to improve system performance.</li>
                                        <li> <i className="fal fa-check"></i> <span>Analyze and interpret data</span> to build robust models that deliver high-quality generative content.</li>
                                        <li> <i className="fal fa-check"></i> <span>Work in a dynamic environment</span> with cross-functional teams to ensure timely and scalable AI solutions.</li>
                                        <li> <i className="fal fa-check"></i> <span>Location :</span> Hyderabad or remote work options available.</li>
                                    </ul>
                                </div>
                                <div className="jobdetails__title">
                                    <h4 className="job-title pb-15">Why Join SoftwareStudios? </h4>
                                </div>
                                <div className="jobdetails__paragraph">
                                    <p>We’re a cutting-edge company dedicated to providing innovative solutions through AI, ML, and software development. With a team-driven approach, we ensure a positive, inclusive, and creative environment where ideas and growth thrive.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="tpcontact">
                                <div className="tpcontact__form tpcontact__form-2">
                                    <form action="#" onSubmit={(e) => e.preventDefault()}>
                                        <input type="text" placeholder="Enter your Name" />
                                        <input type="email" placeholder="Enter your Email" />
                                        <textarea placeholder="Enter your Message*"></textarea>
                                        <button type="submit" className="tp-btn-yellow w-100">Apply Now</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default JobDetailsPage;
