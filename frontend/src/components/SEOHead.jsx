import React from 'react';
import useDocumentHead from '../hooks/useDocumentHead';

const SITE_NAME = 'SoftwareStudios';
const SITE_URL = 'https://www.wemakesoftwares.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/img/logo/logo.png`;

// Organization Schema — appears on every page
const ORG_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SoftwareStudios",
    "alternateName": "WeMakeSoftwares",
    "url": SITE_URL,
    "logo": `${SITE_URL}/img/logo/logo.png`,
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9063677927",
        "contactType": "sales",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi", "Odia"]
    },
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bhubaneswar",
        "addressRegion": "Odisha",
        "addressCountry": "IN"
    },
    "sameAs": []
};

// LocalBusiness Schema — comprehensive for Google Local Pack
const LOCAL_BIZ_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "SoftwareStudios - Web Development & Digital Marketing",
    "image": `${SITE_URL}/img/logo/logo.png`,
    "url": SITE_URL,
    "telephone": "+91-9063677927",
    "priceRange": "₹₹",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bhubaneswar",
        "addressLocality": "Bhubaneswar",
        "addressRegion": "Odisha",
        "postalCode": "751001",
        "addressCountry": "IN"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 20.2961,
        "longitude": 85.8245
    },
    "openingHoursSpecification": [
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "21:00"
        },
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Sunday",
            "opens": "10:00",
            "closes": "18:00"
        }
    ],
    "areaServed": [
        { "@type": "State", "name": "Odisha" },
        { "@type": "City", "name": "Bhubaneswar" },
        { "@type": "City", "name": "Cuttack" },
        { "@type": "City", "name": "Rourkela" },
        { "@type": "City", "name": "Sambalpur" },
        { "@type": "City", "name": "Berhampur" },
        { "@type": "City", "name": "Puri" },
        { "@type": "City", "name": "Balasore" },
        { "@type": "City", "name": "Jajpur" },
        { "@type": "City", "name": "Angul" },
        { "@type": "Country", "name": "India" }
    ],
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Digital Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Website Design & Development", "description": "Professional, mobile-friendly websites for businesses. Starting at ₹12,999." }
            },
            {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Mobile App Development", "description": "Custom Android and iOS apps for your business." }
            },
            {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Digital Marketing & SEO", "description": "SEO, social media marketing, and Google Ads campaigns." }
            },
            {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "E-commerce Solutions", "description": "Online stores with payment gateway integration." }
            }
        ]
    },
    "paymentAccepted": "Cash, UPI, Bank Transfer, Credit Card, Debit Card",
    "currenciesAccepted": "INR",
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "50",
        "bestRating": "5"
    },
    "sameAs": []
};

/**
 * SEOHead — drop this into any page component for per-page SEO.
 * 
 * @param {string} title - Page title (will append " | SoftwareStudios")
 * @param {string} description - Meta description
 * @param {string} path - URL path (e.g. "/about/")
 * @param {object} extraJsonLd - Additional JSON-LD schema(s) to merge
 */
const SEOHead = ({ title, description, path = '/', extraJsonLd = null }) => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : `Best Web Development & Digital Marketing Company in Odisha | ${SITE_NAME}`;
    const canonicalUrl = `${SITE_URL}${path}`;

    // Combine schemas
    const jsonLd = extraJsonLd
        ? [ORG_SCHEMA, LOCAL_BIZ_SCHEMA, extraJsonLd]
        : [ORG_SCHEMA, LOCAL_BIZ_SCHEMA];

    useDocumentHead({
        title: fullTitle,
        description: description || 'Top-rated web development company in Bhubaneswar, Odisha. We build websites, mobile apps & digital marketing solutions for small businesses across India.',
        canonical: canonicalUrl,
        ogTitle: fullTitle,
        ogDescription: description || 'We build websites, apps & marketing that grow your business. Trusted by 1000+ businesses across India.',
        ogImage: DEFAULT_OG_IMAGE,
        ogUrl: canonicalUrl,
        jsonLd
    });

    return null; // This component renders nothing visible
};

export default SEOHead;
export { ORG_SCHEMA, LOCAL_BIZ_SCHEMA, SITE_URL, SITE_NAME };
