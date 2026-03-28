export const GLOSSARY = [
    {
        term: 'FOMO',
        meaning: 'Fear Of Missing Out. This means the customer feels they are falling behind competitors.',
    },
    {
        term: 'Lead',
        meaning: 'A person or business that may buy from us after a call, message, or meeting.',
    },
    {
        term: 'Cold Call',
        meaning: 'A first call to someone who did not ask us to contact them before.',
    },
    {
        term: 'Local SEO',
        meaning: 'Showing a business in local Google searches like "best dentist near me".',
    },
    {
        term: 'Anchor Price',
        meaning: 'The first price we say to set value in the customer’s mind.',
    },
    {
        term: 'Follow-up',
        meaning: 'The next call or message after the first conversation.',
    },
    {
        term: 'Conversion',
        meaning: 'When a lead moves to the next step like WhatsApp, meeting, or payment.',
    },
    {
        term: 'Digital Showroom',
        meaning: 'A website that shows the business, products, trust, and contact details 24/7.',
    },
    {
        term: 'Social Proof',
        meaning: 'Proof that other people already trust the business, like reviews or client stories.',
    },
    {
        term: 'Discovery',
        meaning: 'Questions asked to understand how the business gets customers and where it is losing them.',
    },
    {
        term: 'CTA',
        meaning: 'Call to Action. The next step we ask the customer to take, like "Can I send details on WhatsApp?"',
    },
    {
        term: 'USP',
        meaning: 'Unique Selling Point. The reason a customer should choose that business over others.',
    },
    {
        term: 'ROI',
        meaning: 'Return on Investment. The value a customer gets back compared to the money spent.',
    },
    {
        term: 'Warm Lead',
        meaning: 'A lead that showed interest and should be followed up soon.',
    },
    {
        term: 'Cold Lead',
        meaning: 'A lead that has not yet shown interest but may respond after more follow-up.',
    },
    {
        term: 'Trust Signal',
        meaning: 'Anything that makes the customer feel we are real and reliable, like reviews, office address, and work samples.',
    },
    {
        term: 'Google Business Profile',
        meaning: 'The business card-like section shown on Google Maps and local Google search.',
    },
    {
        term: 'Discovery Call',
        meaning: 'A short call to understand the business need before giving a solution.',
    },
    {
        term: 'Lead Capture',
        meaning: 'A form, WhatsApp button, or call button that helps collect interested customer details.',
    },
    {
        term: 'Retention',
        meaning: 'Keeping old customers coming back again and again.',
    },
];

export const glossaryMap = GLOSSARY.reduce((accumulator, item) => {
    accumulator[item.term.toLowerCase()] = item.meaning;
    return accumulator;
}, {});
