import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="tp-error-area pt-140 pb-140">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <div className="tp-error-content-box text-center mb-40">
                            <img src="/img/contact/error.png" alt="404 Error" />
                        </div>
                        <div className="tp-error-text-box text-center">
                            <h4 className="error-title-sm">Oops... Page Not Found!</h4>
                            <p>The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
                            <Link className="tp-btn-yellow-sm" to="/">Back To Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
