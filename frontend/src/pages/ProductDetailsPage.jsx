import React from 'react';
import SEOHead from '../components/SEOHead';

import { Link } from 'react-router-dom';

const ProductDetailsPage = () => {
    return (
        <>
            <SEOHead
                title="Product Details — SoftwareStudios"
                description="Explore our digital products and solutions designed to help your business grow."
                path="/product-details/"
            />

            <section className="breadcrumb__area  breadcrumb__pt-310 include-bg p-relative" style={{ backgroundImage: `url(/img/breadcrum/ab-1.1.jpg)` }}>
                <div className="ac-about-shape-img z-index-1">
                    <img src="/img/breadcrum/ab-shape-1.1.jpg" alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="breadcrumb__content p-relative z-index-1">
                                <h3 className="breadcrumb__title">Product Details</h3>
                                <Link to="/contact/" className="tp-btn-white-border">Lets work together <i className="far fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="tp-product-details-area pt-130">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-5 col-lg-6 col-12">
                            <div className="tp-product-img">
                                <img src="/img/product/product-big-1.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 col-12">
                            <div className="productdetails">
                                <div className="productdetails__content">
                                    <h3 className="pd-title">Ux mind seter Book</h3>
                                    <p>Rorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore.</p>
                                </div>
                                <div className="productdetails__ratting">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fal fa-star"></i>
                                    <i className="fal fa-star"></i>
                                    <span>(4 customer review)</span>
                                    <h4>$208.00 <del>/308</del></h4>
                                </div>
                                <div className="productdetails__model">
                                    <h5>Model</h5>
                                    <Link to="#">tyk</Link>
                                    <Link to="#">ffd2</Link>
                                    <Link to="#">23tt</Link>
                                    <Link to="#">r454</Link>
                                    <Link to="#">45hy</Link>
                                </div>
                                <div className="productdetails__button">
                                    <button className="tp-btn-yellow mb-20 mr-20">Add to cart</button>
                                    <button className="tp-btn-sm-sky">Buy now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="productdetails-tabs">
                            <div className="row justify-content-center">
                                <div className="col-xl-10 col-lg-12 col-12">
                                    <div className="product-additional-tab">
                                        <div className="pro-details-nav mb-40">
                                            <ul className="nav nav-tabs pro-details-nav-btn" id="myTabs" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-links active" id="home-tab-1" data-bs-toggle="tab" data-bs-target="#home-1" type="button" role="tab" aria-controls="home-1" aria-selected="true"><span>Product Details</span></button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-links" id="information-tab" data-bs-toggle="tab" data-bs-target="#additional-information" type="button" role="tab" aria-controls="additional-information" aria-selected="false"><span>Additional Info</span></button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-links" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews" type="button" role="tab" aria-controls="reviews" aria-selected="false"><span>Review (08)</span></button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-links" id="size-chart-tab" data-bs-toggle="tab" data-bs-target="#chart" type="button" role="tab" aria-controls="chart" aria-selected="false"><span>Faq</span></button>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="tab-content tp-content-tab" id="myTabContent-2">
                                            <div className="tab-para tab-pane fade show active" id="home-1" role="tabpanel" aria-labelledby="home-tab-1">
                                                <p className="mb-30">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate vestibulum Phasellus rhoncus, dolor eget viverra pretium, dolor tellus aliquet nunc, vitae ultricies erat elit eu lacus. Vestibulum non justo consectetur, cursus ante, tincidunt sapien. Nulla quis diam sit amet turpis interdum accumsan quis nec enim. Vivamus faucibus ex sed nibh egestas elementum. Mauris et bibendum dui. Aenean consequat pulvinar luctus. Suspendisse consectetur tristique tortor</p>
                                                <p>We have covered many special events such as fireworks, fairs, parades, races, walks, awards ceremonies, fashion shows, sporting events, and even a memorial service.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate vestibulum Phasellus rhoncus, dolor eget viverra pretium, dolor tellus aliquet nunc, vitae ultricies erat elit eu lacus. Vestibulum non justo consectetur, cursus ante, tincidunt sapien. Nulla quis diam sit amet turpis interdum accumsan quis nec enim. Vivamus faucibus ex sed nibh egestas elementum. Mauris et bibendum dui. Aenean consequat pulvinar luctus. Suspendisse consectetur</p>
                                            </div>
                                            <div className="tab-pane fade" id="additional-information" role="tabpanel" aria-labelledby="information-tab">
                                                <div className="product__details-info table-responsive">
                                                    <table className="table table-striped">
                                                        <tbody>
                                                            <tr>
                                                                <td className="add-info">Weight</td>
                                                                <td className="add-info-list"> 2 lbs</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="add-info">Dimensions</td>
                                                                <td className="add-info-list"> 12 × 16 × 19 in</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="add-info">Product</td>
                                                                <td className="add-info-list"> Purchase this product on rag-bone.com</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="add-info">Color</td>
                                                                <td className="add-info-list"> Gray, Black</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="add-info">Size</td>
                                                                <td className="add-info-list"> S, M, L, XL</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="add-info">Model</td>
                                                                <td className="add-info-list"> Model </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="add-info">Shipping</td>
                                                                <td className="add-info-list"> Standard shipping: $5,95L</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="add-info">Care Info</td>
                                                                <td className="add-info-list"> Machine Wash up to 40ºC/86ºF Gentle Cycle</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="add-info">Brand</td>
                                                                <td className="add-info-list">  Kazen</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                                                <div className="product-details-review">
                                                    <h3 className="tp-comments-title mb-35">3 reviews for “Wide Cotton Tunic extreme hammer”</h3>
                                                    <div className="latest-comments mb-55">
                                                        <ul>
                                                            <li>
                                                                <div className="comments-box d-flex">
                                                                    <div className="comments-avatar mr-25">
                                                                        <img src="/img/product/client.png" alt="" />
                                                                    </div>
                                                                    <div className="comments-text">
                                                                        <div className="comments-top d-sm-flex align-items-start justify-content-between mb-5">
                                                                            <div className="avatar-name">
                                                                                <b>Siarhei Dzenisenka</b>
                                                                                <div className="comments-date mb-20">
                                                                                    <span>March 27, 2018 9:51 am</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="user-rating">
                                                                                <ul>
                                                                                    <li><Link to="#"><i className="fas fa-star"></i></Link></li>
                                                                                    <li><Link to="#"><i className="fas fa-star"></i></Link></li>
                                                                                    <li><Link to="#"><i className="fas fa-star"></i></Link></li>
                                                                                    <li><Link to="#"><i className="fas fa-star"></i></Link></li>
                                                                                    <li><Link to="#"><i className="fal fa-star"></i></Link></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate vestibulum Phasellus rhoncus, dolor eget viverra pretium, dolor tellus aliquet nunc, vitae ultricies erat elit eu lacus. Vestibulum non justo consectetur, cursus ante, tincidunt sapien. Nulla quis diam sit amet turpis interdum accumsan quis nec enim. Vivamus faucibus ex sed nibh egestas elementum. Mauris et bibendum dui. Aenean consequat pulvinar luctus. Suspendisse consectetur tristique tortor</p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="comments-box d-flex">
                                                                    <div className="comments-avatar mr-25">
                                                                        <img src="/img/product/client-2.png" alt="" />
                                                                    </div>
                                                                    <div className="comments-text">
                                                                        <div className="comments-top d-sm-flex align-items-start justify-content-between mb-5">
                                                                            <div className="avatar-name">
                                                                                <b>Tommy Jarvis </b>
                                                                                <div className="comments-date mb-20">
                                                                                    <span>March 27, 2018 9:51 am</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="user-rating">
                                                                                <ul>
                                                                                    <li><Link to="#"><i className="fas fa-star"></i></Link></li>
                                                                                    <li><Link to="#"><i className="fas fa-star"></i></Link></li>
                                                                                    <li><Link to="#"><i className="fas fa-star"></i></Link></li>
                                                                                    <li><Link to="#"><i className="fas fa-star"></i></Link></li>
                                                                                    <li><Link to="#"><i className="fal fa-star"></i></Link></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <p className="m-0">We have covered many special events such as fireworks, fairs, parades, races, walks, awards ceremonies, fashion shows, sporting events, and even a memorial service.
                                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate vestibulum Phasellus rhoncus, dolor eget viverra pretium, dolor tellus aliquet nunc, vitae ultricies erat elit eu lacus. Vestibulum non justo consectetur, cursus ante, tincidunt sapien. Nulla quis diam sit amet turpis interdum accumsan quis nec enim. Vivamus faucibus ex sed nibh egestas elementum. Mauris et bibendum dui. Aenean consequat pulvinar luctus. Suspendisse consectetur</p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="comments-box d-flex">
                                                                    <div className="comments-avatar mr-25">
                                                                        <img src="/img/product/client-3.png" alt="" />
                                                                    </div>
                                                                    <div className="comments-text">
                                                                        <div className="comments-top d-sm-flex align-items-start justify-content-between mb-5">
                                                                            <div className="avatar-name">
                                                                                <b>Johnny Cash</b>
                                                                                <div className="comments-date mb-20">
                                                                                    <span>March 27, 2018 9:51 am</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="user-rating">
                                                                                <ul>
                                                                                    <li><Link to="#"><i className="fas fa-star"></i></Link></li>
                                                                                    <li><Link to="#"><i className="fas fa-star"></i></Link></li>
                                                                                    <li><Link to="#"><i className="fas fa-star"></i></Link></li>
                                                                                    <li><Link to="#"><i className="fas fa-star"></i></Link></li>
                                                                                    <li><Link to="#"><i className="fal fa-star"></i></Link></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <p className="m-0">This is cardigan is a comfortable warm classic piece. Great to layer with a light top and you can dress up or down given the jewel buttons. I'm 5'8” 128lbs a 34A and the Small fit fine.</p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="product-details-comment pb-100">
                                                        <div className="comment-title mb-20">
                                                            <h3>Add a review</h3>
                                                            <p>Your email address will not be published. Required fields are marked*</p>
                                                        </div>
                                                        <div className="comment-rating mb-20 d-flex">
                                                            <span>Overall ratings</span>
                                                            <ul>
                                                                <li><Link to="#"><i className="fas fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fas fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fas fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fas fa-star"></i></Link></li>
                                                                <li><Link to="#"><i className="fal fa-star"></i></Link></li>
                                                            </ul>
                                                        </div>
                                                        <div className="comment-input-box">
                                                            <form action="#" onSubmit={(e) => e.preventDefault()}>
                                                                <div className="row">
                                                                    <div className="col-xxl-12">
                                                                        <div className="comment-input">
                                                                            <textarea placeholder="Your review..."></textarea>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xxl-6">
                                                                        <div className="comment-input">
                                                                            <input type="text" placeholder="Your Name*" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xxl-6">
                                                                        <div className="comment-input">
                                                                            <input type="email" placeholder="Your Email*" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xxl-12">
                                                                        <div className="comment-submit">
                                                                            <button type="submit" className="tp-btn-yellow">Submit</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="chart" role="tabpanel" aria-labelledby="size-chart-tab">
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tp-product-slider pb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10">
                            <div className="tp-product-slider-title">
                                <h3 className="tp-product-slider-title pb-45">Related Product</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-10">
                            <div className="tp-product-price-slider">
                                <div className="swiper-container product-slider-active">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="tpproduct text-center mb-30">
                                                <div className="tpproduct__img">
                                                    <img className="w-100" src="/img/product/product-2.jpg" alt="" />
                                                    <div className="tp-product-icon">
                                                        <Link to="#"><i className="fal fa-shopping-basket"></i></Link>
                                                        <Link to="#"><i className="fal fa-heart"></i></Link>
                                                    </div>
                                                </div>
                                                <div className="tpproduct__meta">
                                                    <h4 className="tp-product-title"><Link to="/product-details/">Jeff Gothelf learn UX</Link></h4>
                                                    <span>$46.00</span>
                                                    <div className="product-rating">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fal fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="tpproduct text-center mb-30">
                                                <div className="tpproduct__img">
                                                    <img className="w-100" src="/img/product/product-1.jpg" alt="" />
                                                    <div className="tp-product-icon">
                                                        <Link to="#"><i className="fal fa-shopping-basket"></i></Link>
                                                        <Link to="#"><i className="fal fa-heart"></i></Link>
                                                    </div>
                                                </div>
                                                <div className="tpproduct__meta">
                                                    <h4 className="tp-product-title"><Link to="/product-details/">Jeff Gothelf learn UX</Link></h4>
                                                    <span>$46.00</span>
                                                    <div className="product-rating">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fal fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="tpproduct text-center mb-30">
                                                <div className="tpproduct__img">
                                                    <img className="w-100" src="/img/product/product-3.jpg" alt="" />
                                                    <div className="tp-product-icon">
                                                        <Link to="#"><i className="fal fa-shopping-basket"></i></Link>
                                                        <Link to="#"><i className="fal fa-heart"></i></Link>
                                                    </div>
                                                </div>
                                                <div className="tpproduct__meta">
                                                    <h4 className="tp-product-title"><Link to="/product-details/">Jeff Gothelf learn UX</Link></h4>
                                                    <span>$46.00</span>
                                                    <div className="product-rating">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fal fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="tpproduct text-center mb-30">
                                                <div className="tpproduct__img">
                                                    <img className="w-100" src="/img/product/product-5.jpg" alt="" />
                                                    <div className="tp-product-icon">
                                                        <Link to="#"><i className="fal fa-shopping-basket"></i></Link>
                                                        <Link to="#"><i className="fal fa-heart"></i></Link>
                                                    </div>
                                                </div>
                                                <div className="tpproduct__meta">
                                                    <h4 className="tp-product-title"><Link to="/product-details/">Jeff Gothelf learn UX</Link></h4>
                                                    <span>$46.00</span>
                                                    <div className="product-rating">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fal fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="tpproduct text-center mb-30">
                                                <div className="tpproduct__img">
                                                    <img className="w-100" src="/img/product/product-6.jpg" alt="" />
                                                    <div className="tp-product-icon">
                                                        <Link to="#"><i className="fal fa-shopping-basket"></i></Link>
                                                        <Link to="#"><i className="fal fa-heart"></i></Link>
                                                    </div>
                                                </div>
                                                <div className="tpproduct__meta">
                                                    <h4 className="tp-product-title"><Link to="/product-details/">Jeff Gothelf learn UX</Link></h4>
                                                    <span>$46.00</span>
                                                    <div className="product-rating">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fal fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetailsPage;
