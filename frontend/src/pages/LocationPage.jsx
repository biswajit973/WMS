import React from 'react';
import { Link, useParams } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { LOCATIONS, SERVICES_LIST } from '../data/locations';

const LocationPage = () => {
    const { city } = useParams();
    const location = LOCATIONS.find(l => l.slug === city);

    if (!location) {
        return (
            <>
                <SEOHead title="Location Not Found" description="The requested location page was not found." path={`/web-development-${city}/`} />
                <div className="container pt-130 pb-130 text-center">
                    <h2>Location not found</h2>
                    <p>Sorry, we couldn't find that location. <Link to="/">Go back home</Link>.</p>
                </div>
            </>
        );
    }

    const locationLabel = location.isState ? location.city : `${location.city}, ${location.state}`;
    const pageTitle = `Best Web Development & Digital Marketing Company in ${location.city}`;
    const pageDesc = `Top-rated web developer in ${location.city}. We build websites, mobile apps & run digital marketing for businesses in ${locationLabel}. Affordable pricing from ₹12,999. Call +91 9063677927.`;

    // FAQ Schema for rich snippets
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": `Who is the best web developer in ${location.city}?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `SoftwareStudios is rated as one of the best web development companies in ${location.city}. With 10+ years of experience and 1000+ projects delivered, we build affordable, high-quality websites and apps for businesses of all sizes.`
                }
            },
            {
                "@type": "Question",
                "name": `How much does a website cost in ${location.city}?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `At SoftwareStudios, website development starts at just ₹12,999 with free hosting included. We offer plans for every budget — from small shops to large enterprises.`
                }
            },
            {
                "@type": "Question",
                "name": `Do you provide digital marketing services in ${location.city}?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `Yes! We provide complete digital marketing services in ${location.city} including SEO, social media marketing, Google Ads, and content creation. We've completed 500+ successful campaigns.`
                }
            },
            {
                "@type": "Question",
                "name": `Can you build a mobile app for my business in ${location.city}?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `Absolutely! We build custom Android and iOS apps for businesses in ${location.city}. From restaurant ordering apps to booking systems — we do it all at affordable prices.`
                }
            }
        ]
    };

    return (
        <>
            <SEOHead
                title={pageTitle}
                description={pageDesc}
                path={`/web-development-${location.slug}/`}
                extraJsonLd={faqSchema}
            />

            {/* Breadcrumb / Hero */}
            <section className="breadcrumb__area breadcrumb__pt-310 include-bg p-relative" style={{ backgroundImage: `url(/img/breadcrum/ab-1.1.jpg)` }}>
                <div className="ac-about-shape-img z-index-1">
                    <img src="/img/breadcrum/ab-shape-1.1.jpg" alt={`Web Development in ${location.city}`} />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="breadcrumb__content p-relative z-index-1">
                                <h1 className="breadcrumb__title">Best Web Development Company in {location.city}</h1>
                                <p className="text-white mt-15" style={{ fontSize: '18px', maxWidth: '600px' }}>
                                    Trusted by businesses across {locationLabel}. Affordable websites, apps & digital marketing.
                                </p>
                                <Link to="/contact/" className="tp-btn-white-border mt-20">Get Free Consultation <i className="far fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <div className="container pt-100 pb-80">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".5s" data-wow-delay=".5s">
                        <div className="tp-fea-img">
                            <img src="/img/feature/fea-1.png" alt={`Web development services in ${location.city}`} />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 wow tpfadeRight" data-wow-duration=".5s" data-wow-delay=".7s">
                        <h5 className="tp-subtitle pb-10">Web Development in {location.city}</h5>
                        <h2 className="tp-title-sm pb-20">
                            Why Businesses in {location.city} Choose SoftwareStudios
                        </h2>
                        <p className="pb-15">{location.desc}</p>
                        <p className="pb-15">
                            SoftwareStudios has been building websites, apps, and digital marketing solutions for over 10 years.
                            We've delivered 1000+ projects for businesses across India — and we're proud to serve {location.city} with the same quality and care.
                        </p>
                        <div className="tp-feature-list d-flex mb-20">
                            <div className="tp-feature-list__icon-img fea-color-1 mr-25">
                                <i className="flaticon-satisfaction" style={{ fontSize: '24px' }}></i>
                            </div>
                            <div className="tp-feature-list__content">
                                <h4>100% Satisfaction Guarantee</h4>
                                <p>Not happy? Get a full refund within 7 days. No questions asked.</p>
                            </div>
                        </div>
                        <div className="tp-feature-list d-flex mb-20">
                            <div className="tp-feature-list__icon-img fea-color-2 mr-25">
                                <i className="flaticon-group" style={{ fontSize: '24px' }}></i>
                            </div>
                            <div className="tp-feature-list__content">
                                <h4>Dedicated Support for {location.city}</h4>
                                <p>24/7 WhatsApp and phone support. Your own project manager who speaks your language.</p>
                            </div>
                        </div>
                        <div className="tp-feature-list d-flex mb-20">
                            <div className="tp-feature-list__icon-img fea-color-3 mr-25">
                                <i className="flaticon-web" style={{ fontSize: '24px' }}></i>
                            </div>
                            <div className="tp-feature-list__content">
                                <h4>Starting at Just ₹12,999</h4>
                                <p>Professional website with free hosting. No hidden charges. Honest pricing for {location.city} businesses.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Grid */}
            <div className="tp-service-area pb-90 pt-30 grey-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10">
                            <div className="tp-service-section-box text-center pb-60">
                                <h5 className="tp-subtitle pb-10">Our Services in {location.city}</h5>
                                <h2 className="tp-title-sm">
                                    Everything your business needs to
                                    <span className="tp-section-highlight">
                                        {' '}grow online
                                        <svg width="240" height="11" viewBox="0 0 240 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 0L240 11H0V0Z" fill="#FFDC60" />
                                        </svg>
                                    </span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {SERVICES_LIST.map((service, idx) => (
                            <div className="col-xl-3 col-lg-4 col-md-6 wow tpfadeUp" data-wow-duration=".5s" data-wow-delay={`${0.5 + idx * 0.1}s`} key={idx}>
                                <div className="tp-sv-border-effect">
                                    <div className={`tp-service-item-four sv-color-${(idx % 7) + 1} mb-30`}>
                                        <div className="tp-service-item-four__img mb-40">
                                            <i className={service.icon} style={{ fontSize: '40px' }}></i>
                                        </div>
                                        <div className="tp-service-item-four__title">
                                            <h3 className="tp-sv-sm-title"><Link to="/service-details/">{service.name}</Link></h3>
                                        </div>
                                        <p className="mt-15" style={{ fontSize: '14px' }}>{service.short}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* FAQ Section with Schema */}
            <div className="sd-accordio-area pt-110 pb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8">
                            <h5 className="tp-subtitle pb-10">Frequently Asked Questions</h5>
                            <h3 className="tp-title-sm mb-50">Common Questions About Web Development in {location.city}</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="tp-custom-accordio">
                                <div className="accordion" id={`faq-${location.slug}`}>
                                    <div className="accordion-items faq-accordio-border">
                                        <h2 className="accordion-header" id={`h1-${location.slug}`}>
                                            <button className="accordion-buttons" type="button" data-bs-toggle="collapse" data-bs-target={`#c1-${location.slug}`} aria-expanded="true" aria-controls={`c1-${location.slug}`}>
                                                Who is the best web developer in {location.city}?
                                            </button>
                                        </h2>
                                        <div id={`c1-${location.slug}`} className="accordion-collapse collapse show" aria-labelledby={`h1-${location.slug}`} data-bs-parent={`#faq-${location.slug}`}>
                                            <div className="accordion-body">
                                                SoftwareStudios is rated as one of the best web development companies in {location.city}. With 10+ years of experience and 1000+ projects delivered, we build affordable, high-quality websites and apps for businesses of all sizes in {locationLabel}.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-items">
                                        <h2 className="accordion-header" id={`h2-${location.slug}`}>
                                            <button className="accordion-buttons collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#c2-${location.slug}`} aria-expanded="false" aria-controls={`c2-${location.slug}`}>
                                                How much does a website cost in {location.city}?
                                            </button>
                                        </h2>
                                        <div id={`c2-${location.slug}`} className="accordion-collapse collapse" aria-labelledby={`h2-${location.slug}`} data-bs-parent={`#faq-${location.slug}`}>
                                            <div className="accordion-body">
                                                At SoftwareStudios, website development starts at just ₹12,999 with free hosting included. We offer plans for every budget — from small shops to large enterprises in {location.city}. Check our <Link to="/price/">pricing page</Link> for details.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-items">
                                        <h2 className="accordion-header" id={`h3-${location.slug}`}>
                                            <button className="accordion-buttons collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#c3-${location.slug}`} aria-expanded="false" aria-controls={`c3-${location.slug}`}>
                                                Do you provide digital marketing services in {location.city}?
                                            </button>
                                        </h2>
                                        <div id={`c3-${location.slug}`} className="accordion-collapse collapse" aria-labelledby={`h3-${location.slug}`} data-bs-parent={`#faq-${location.slug}`}>
                                            <div className="accordion-body">
                                                Yes! We provide complete digital marketing services in {location.city} including SEO, social media marketing, Google Ads, and content creation. We've completed 500+ successful campaigns across India.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-items">
                                        <h2 className="accordion-header" id={`h4-${location.slug}`}>
                                            <button className="accordion-buttons collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#c4-${location.slug}`} aria-expanded="false" aria-controls={`c4-${location.slug}`}>
                                                Can you build a mobile app for my business in {location.city}?
                                            </button>
                                        </h2>
                                        <div id={`c4-${location.slug}`} className="accordion-collapse collapse" aria-labelledby={`h4-${location.slug}`} data-bs-parent={`#faq-${location.slug}`}>
                                            <div className="accordion-body">
                                                Absolutely! We build custom Android and iOS apps for businesses in {location.city}. From restaurant ordering apps to booking systems — we do it all at affordable prices. <Link to="/contact/">Contact us</Link> for a free quote.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="tp-news-letter-area tp-news-letter-bg pt-100 pb-100" style={{ backgroundImage: `url(/img/news/news-bg.jpg)` }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-7 col-lg-7 col-md-12">
                            <div className="tp-news-sub-wrapper pr-50">
                                <div className="tp-news-letter-section-box">
                                    <h5 className="tp-subtitle subtitle-secondary-color">Ready to Grow?</h5>
                                    <h2 className="tp-title-sm tp-white-text pb-25">
                                        Let's build something great for your business in {location.city}
                                    </h2>
                                    <p className="tp-text-light">Call us, WhatsApp us, or fill out our form. We reply within 1 hour.</p>
                                </div>
                                <div className="tp-news-button mt-30">
                                    <Link className="tp-btn-lg-yellow mr-20" to="/contact/">Get Free Consultation</Link>
                                    <Link className="tp-btn-sky" to="/price/">View Pricing</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-12">
                            <div className="tp-news-letter-img text-md-start text-lg-end pr-45">
                                <img src="/img/news/news-3.png" alt={`Contact SoftwareStudios for web development in ${location.city}`} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LocationPage;
