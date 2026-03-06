import React from 'react';
import { Link } from 'react-router-dom';

const ServiceGrid = ({ services = [], getHref }) => {
    return (
        <div className="row ss-service-grid gx-3 gy-3">
            {services.map((service, index) => {
                const href = getHref ? getHref(service) : service.link || '/service-details/';

                return (
                    <div
                        className="col-xl-3 col-lg-4 col-md-6 col-sm-4 col-4 ss-service-col wow tpfadeUp"
                        data-wow-duration=".5s"
                        data-wow-delay={`${0.4 + (index % 6) * 0.1}s`}
                        key={service.title}
                    >
                        <Link className={`ss-service-card ${service.tone || ''}`} to={href}>
                            <span className="ss-service-card__icon" aria-hidden="true">
                                <i className={service.icon}></i>
                            </span>
                            <h3 className="ss-service-card__title">{service.title}</h3>
                            <p className="ss-service-card__desc">{service.description}</p>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default ServiceGrid;
