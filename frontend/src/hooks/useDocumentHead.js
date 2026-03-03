import { useEffect } from 'react';

/**
 * Custom hook to dynamically update document <head> tags for SEO.
 * Works without any external dependencies (replaces react-helmet-async).
 */
const useDocumentHead = ({ title, description, canonical, ogTitle, ogDescription, ogImage, ogUrl, jsonLd }) => {
    useEffect(() => {
        // Update title
        if (title) {
            document.title = title;
        }

        // Helper to set or create a meta tag
        const setMeta = (attr, attrValue, content) => {
            let el = document.querySelector(`meta[${attr}="${attrValue}"]`);
            if (!el) {
                el = document.createElement('meta');
                el.setAttribute(attr, attrValue);
                document.head.appendChild(el);
            }
            el.setAttribute('content', content);
        };

        // Meta description
        if (description) {
            setMeta('name', 'description', description);
        }

        // Canonical URL
        if (canonical) {
            let link = document.querySelector('link[rel="canonical"]');
            if (!link) {
                link = document.createElement('link');
                link.setAttribute('rel', 'canonical');
                document.head.appendChild(link);
            }
            link.setAttribute('href', canonical);
        }

        // Open Graph tags
        if (ogTitle) setMeta('property', 'og:title', ogTitle);
        if (ogDescription) setMeta('property', 'og:description', ogDescription);
        if (ogImage) setMeta('property', 'og:image', ogImage);
        if (ogUrl) setMeta('property', 'og:url', ogUrl);

        // Twitter Card tags
        if (ogTitle) setMeta('name', 'twitter:title', ogTitle);
        if (ogDescription) setMeta('name', 'twitter:description', ogDescription);
        if (ogImage) setMeta('name', 'twitter:image', ogImage);

        // JSON-LD Structured Data
        if (jsonLd) {
            // Remove any existing script we added
            const existingScript = document.querySelector('script[data-seo-jsonld]');
            if (existingScript) existingScript.remove();

            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.setAttribute('data-seo-jsonld', 'true');
            script.textContent = JSON.stringify(jsonLd);
            document.head.appendChild(script);
        }

        // Cleanup JSON-LD on unmount
        return () => {
            const existingScript = document.querySelector('script[data-seo-jsonld]');
            if (existingScript) existingScript.remove();
        };
    }, [title, description, canonical, ogTitle, ogDescription, ogImage, ogUrl, jsonLd]);
};

export default useDocumentHead;
