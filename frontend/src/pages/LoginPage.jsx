import React from 'react';
import SEOHead from '../components/SEOHead';

import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <>
            <SEOHead
                title="Login — SoftwareStudios"
                description="Log in to your SoftwareStudios account."
                path="/login/"
            />

            <section className="breadcrumb__area  breadcrumb__pt-310 include-bg p-relative" style={{ backgroundImage: `url(/img/breadcrum/ab-1.1.jpg)` }}>
                <div className="ac-about-shape-img z-index-1">
                    <img src="/img/breadcrum/ab-shape-1.1.jpg" alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="breadcrumb__content p-relative z-index-1">
                                <h3 className="breadcrumb__title">Login Page</h3>
                                <Link to="/contact/" className="tp-btn-white-border">Lets work together <i className="far fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="tp-login-area">
                <div className="container-fluid p-0">
                    <div className="row gx-0 align-items-center">
                        <div className="col-xl-6 col-lg-6 col-12">
                            <div className="tp-login-thumb login-space sky-bg d-flex justify-content-center">
                                <img src="/img/contact/login.png" alt="" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-12">
                            <div className="tp-login-wrapper login-space d-flex justify-content-center">
                                <div className="tplogin">
                                    <div className="tplogin__title">
                                        <h3 className="tp-login-title">Login your Account</h3>
                                    </div>
                                    <div className="tplogin__form">
                                        <form action="#" onSubmit={(e) => e.preventDefault()}>
                                            <div className="tp-mail">
                                                <label htmlFor="mail">Enter your Email</label>
                                                <input type="text" placeholder="Enter your Mail" id="mail" />
                                            </div>
                                            <div className="tp-password">
                                                <label htmlFor="Password">Enter Password</label>
                                                <input type="password" placeholder="Enter your password" id="Password" />
                                            </div>
                                            <div className="tp-forgot-password d-flex justify-content-between">
                                                <div className="checkbox">
                                                    <input type="checkbox" id="Remember" name="fav_language" value="Remember" />
                                                    <label htmlFor="Remember">Remember me</label>
                                                </div>
                                                <div className="forgot">
                                                    <Link to="#">Forgot password?</Link>
                                                </div>
                                            </div>
                                            <div className="tp-login-button">
                                                <button className="tp-btn-yellow w-100" type="submit">Sign In</button>
                                            </div>
                                            <div className="tp-signup d-flex justify-content-between">
                                                <div className="account">
                                                    <Link to="#">Don’t have an account?</Link>
                                                </div>
                                                <div className="signin">
                                                    <Link to="/registration/">Sign up now</Link>
                                                </div>
                                            </div>
                                        </form>
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

export default LoginPage;
