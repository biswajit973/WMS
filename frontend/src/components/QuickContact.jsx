import React from 'react';

const QuickContact = () => {
    const phoneNumber = "919063677927"; // Without '+' for WhatsApp link

    return (
        <div className="quick-contact-overlay">
            <a
                href={`https://wa.me/${phoneNumber}?text=Hi%2C%20I%20need%20a%20website%20for%20my%20business.%20Can%20you%20help%3F`}
                target="_blank"
                rel="noopener noreferrer"
                className="qc-btn qc-whatsapp"
                title="Chat on WhatsApp"
            >
                <i className="fab fa-whatsapp"></i>
            </a>
        </div>
    );
};

export default QuickContact;
