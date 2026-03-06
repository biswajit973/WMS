import React from 'react';
import SEOHead from '../components/SEOHead';

import { Link } from 'react-router-dom';
import { highlights } from '../data/highlights';
import { SHOWCASE_VIDEOS } from '../data/showcaseVideos';

const PortfolioPage = () => {
    return (
        <>
            <SEOHead
                title="Our Work — Web Development & App Projects"
                description="See our portfolio of websites, apps & digital marketing campaigns for businesses across India. Real results, real clients."
                path="/portfolio/"
            />

            <style>{`
        .highlight-card {
           height: 100%;
           border: 1px solid #e5e9f2;
           border-radius: 20px;
           overflow: hidden;
           background: var(--tp-common-white);
           box-shadow: 0 4px 25px rgba(31, 43, 84, 0.08);
           transition: all 0.3s ease;
        }

        .highlight-card:hover {
           transform: translateY(-6px);
           box-shadow: 0 20px 45px rgba(31, 43, 84, 0.14);
        }

        .highlight-preview {
           height: 220px;
           background: #f5f8ff;
           border-bottom: 1px solid #e5e9f2;
           overflow: hidden;
           position: relative;
        }

        .highlight-preview iframe {
           border: 0;
           width: 136%;
           height: 136%;
           transform: scale(0.735);
           transform-origin: 0 0;
           pointer-events: none;
        }

        .highlight-preview-fallback {
           width: 100%;
           height: 100%;
           display: block;
           position: relative;
           color: #15224f;
        }

        .highlight-fallback-image {
           width: 100%;
           height: 100%;
           object-fit: cover;
           display: block;
        }

        .highlight-preview-overlay {
           position: absolute;
           inset: 0;
           display: flex;
           align-items: flex-start;
           justify-content: flex-end;
           flex-direction: column;
           gap: 10px;
           text-align: left;
           padding: 18px;
           background: linear-gradient(180deg, rgba(10, 19, 46, 0.02) 22%, rgba(10, 19, 46, 0.9) 100%);
           color: #ffffff;
        }

        .highlight-preview-overlay strong {
           font-size: 20px;
           font-weight: 700;
           line-height: 1.3;
           text-shadow: 0 2px 8px rgba(0, 0, 0, 0.45);
           background: rgba(7, 15, 38, 0.6);
           border: 1px solid rgba(255, 255, 255, 0.2);
           padding: 6px 12px;
           border-radius: 10px;
        }

        .highlight-preview-overlay span {
           font-size: 13px;
           color: #dce6ff;
           text-transform: uppercase;
           letter-spacing: 0.08em;
        }

        .highlight-meta {
           display: flex;
           align-items: center;
           gap: 14px;
           padding: 16px 18px;
        }

        .highlight-logo {
           width: 52px;
           height: 52px;
           min-width: 52px;
           border-radius: 14px;
           border: 1px solid #dbe5fa;
           background: #eef4ff;
           display: flex;
           align-items: center;
           justify-content: center;
        }

        .highlight-logo img {
           width: 26px;
           height: 26px;
           border-radius: 50%;
        }

        .highlight-copy h5 {
           font-size: 21px;
           margin-bottom: 2px;
           line-height: 1.2;
        }

        .highlight-copy h5 a:hover {
           color: var(--tp-theme-1);
        }

        .highlight-copy p {
           margin: 0;
           font-size: 14px;
           color: #6f7892;
           font-family: var(--tp-ff-mono);
           word-break: break-word;
        }

        .highlight-visit {
           margin-left: auto;
           width: 42px;
           height: 42px;
           min-width: 42px;
           border-radius: 50%;
           border: 1px solid #dce5fa;
           display: inline-flex;
           align-items: center;
           justify-content: center;
           color: #5b6786;
           transition: 0.3s;
        }

        .highlight-visit:hover {
           color: var(--tp-common-white);
           background-color: var(--tp-theme-1);
           border-color: var(--tp-theme-1);
        }

        @media (max-width: 767px) {
           .highlight-preview {
              height: 190px;
           }

           .highlight-copy h5 {
              font-size: 18px;
           }
        }
      `}</style>

            <section className="breadcrumb__area breadcrumb__pt-310 include-bg p-relative" style={{ backgroundImage: `url(/img/breadcrum/ab-1.1.jpg)` }}>
                <div className="ac-about-shape-img z-index-1">
                    <img src="/img/breadcrum/ab-shape-1.1.jpg" alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="breadcrumb__content p-relative z-index-1">
                                <h3 className="breadcrumb__title">Our Work</h3>
                                <Link to="/contact/" className="tp-btn-white-border ss-breadcrumb-cta">Lets work together <i className="far fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="corporate-hero__area corporate-plr pt-50">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-xl-5 col-lg-6 corporate-hero__tablet-space">
                            <div className="corporate-hero__section-box">
                                <h3 className="corporate-hero-title wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">Tech Revolution</h3>
                                <p className="wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">Over 10 years of expertise in the tech industry, delivering innovative solutions for modern challenges.</p>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6">
                            <div className="corporate-hero__img-box p-relative">
                                <div className="corporate-hero__main-img text-end">
                                    <img src="/img/hero/cp-hero-2.png" alt="" />
                                </div>
                                <div className="corporate-hero__sub-img d-none d-sm-block">
                                    <img src="/img/hero/cp-hero-1.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="tp-project-area pt-90 pb-40 p-relative">
                <div className="container">
                    <div className="row justify-content-center pb-35">
                        <div className="col-xl-8 col-lg-10 text-center">
                            <h5 className="tp-subtitle pb-10">Featured Videos</h5>
                            <h2 className="tp-title-sm pb-10">See recent delivery snapshots</h2>
                            <p>Preview project quality through real visual case clips from our latest client collaborations.</p>
                        </div>
                    </div>
                    <div className="row gx-4 gy-4">
                        {SHOWCASE_VIDEOS.map((video) => (
                            <div className="col-lg-6 col-md-12" key={video.id}>
                                <article className="ss-work-videos">
                                    <video controls preload="metadata" playsInline muted>
                                        <source src={video.mp4} type="video/mp4" />
                                        <source src={video.mov} type="video/quicktime" />
                                    </video>
                                    <div className="ss-work-videos__meta">
                                        <h4>{video.title}</h4>
                                        <p>{video.subtitle}</p>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="tp-project-area pt-80 pb-120 p-relative">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10">
                            <div className="tp-project-section-box text-center pb-35">
                                <h5 className="tp-subtitle pb-10">Our Work</h5>
                                <h2 className="tp-title-sm pb-10">Websites and Experiences We Build for Clients</h2>
                                <p>Browse real client projects and see how SoftwareStudios delivers business-ready digital experiences.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 text-center">
                            <div className="tp-project-tab-button masonary-menu mb-70">
                                <button className="active" data-filter="*"><span>All</span></button>
                                <button data-filter=".cat-featured"><span>Featured</span></button>
                                <button data-filter=".cat-fintech"><span>Fintech</span></button>
                                <button data-filter=".cat-blockchain"><span>Blockchain</span></button>
                                <button data-filter=".cat-architecture"><span>Architecture</span></button>
                                <button data-filter=".cat-health"><span>Healthcare</span></button>
                                <button data-filter=".cat-commerce"><span>Commerce</span></button>
                                <button data-filter=".cat-corporate"><span>Enterprise</span></button>
                            </div>
                        </div>
                    </div>
                    <div className="row grid gx-4 gy-4 port-space">
                        {highlights.map((item, index) => (
                            <div key={index} className={`col-xl-4 col-lg-6 col-md-6 grid-item ${item.categories}`}>
                                <article className="highlight-card mb-30">
                                    <div className="highlight-preview">
                                        {item.use_iframe ? (
                                            <iframe src={item.url} title={`${item.name} preview`} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                        ) : (
                                            <a className="highlight-preview-fallback" href={item.url} target="_blank" rel="noopener noreferrer">
                                                {item.fallback_image && (
                                                    <img className="highlight-fallback-image" src={item.fallback_image} alt={`${item.name} fallback preview`} loading="lazy" />
                                                )}
                                                <div className="highlight-preview-overlay">
                                                    <strong>{item.name}</strong>
                                                    <span style={{ fontSize: '14px', fontWeight: '500', color: '#fff', background: 'rgba(255,255,255,0.15)', padding: '6px 18px', borderRadius: '20px', marginTop: '4px' }}>Click to Visit Website →</span>
                                                </div>
                                            </a>
                                        )}
                                    </div>
                                    <div className="highlight-meta">
                                        <div className="highlight-logo">
                                            <img src={`https://www.google.com/s2/favicons?domain=${item.domain}&sz=64`} alt={`${item.name} logo`} loading="lazy" />
                                        </div>
                                        <div className="highlight-copy">
                                            <h5><a href={item.url} target="_blank" rel="noopener noreferrer">{item.name}</a></h5>
                                            <p>{item.domain}</p>
                                        </div>
                                        <a className="highlight-visit" href={item.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${item.name}`}>
                                            <i className="far fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PortfolioPage;
