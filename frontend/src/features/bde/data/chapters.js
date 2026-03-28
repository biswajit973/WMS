export const CHAPTERS = [
    {
        slug: 'mindset',
        number: '01',
        label: 'Right Mindset',
        title: 'The Right Mindset',
        subtitle: 'We sell trust, status, and a 24/7 digital showroom. We do not sell code.',
        overview: 'Cold calling feels hard only when you think every call must become a sale. In real life, most calls only create the next step. Your job is to earn trust, create curiosity, and move the business owner to WhatsApp or a short meeting.',
        searchTerms: ['trust', 'status', 'rejection', 'cold call', 'digital showroom', 'fomo'],
        keyCards: [
            { label: 'Daily Calls', value: '60', text: 'Do enough activity so rejection does not control your mood.' },
            { label: 'Real Talks', value: '12-15', text: 'Only a part of the calls will become real conversations.' },
            { label: 'Next Steps', value: '2-3', text: 'WhatsApp, demo, or follow-up is a win on the first call.' },
            { label: 'Core Pitch', value: 'Trust First', text: 'Help the owner feel they are falling behind if they stay invisible online.' },
        ],
        visual: {
            type: 'funnel',
            title: 'A Normal Day Funnel',
            items: [
                { label: 'Calls Made', value: '60' },
                { label: 'Connected Calls', value: '25' },
                { label: 'Real Talks', value: '12-15' },
                { label: 'WhatsApp / Demo', value: '2-3' },
            ],
            note: 'This is not failure. This is the math of the job.',
        },
        glossaryTerms: ['FOMO', 'Lead', 'Conversion', 'Digital Showroom', 'Cold Call'],
        doList: [
            'Start every day with the belief that you are helping the business owner, not disturbing them.',
            'Track your calls by numbers, not by emotions.',
            'Use competitor examples to make the owner feel the gap.',
            'Aim for the next step, not full payment on the first call.',
        ],
        dontList: [
            'Do not sound needy or desperate for a sale.',
            'Do not speak like a tech person with too many complex words.',
            'Do not take rejection personally.',
            'Do not argue when the customer is not yet ready.',
        ],
        sections: [
            {
                title: 'What we are really selling',
                paragraphs: [
                    'A local business owner does not wake up wanting a website. They want more trust, better status, and more customers.',
                    'So our words must connect the website to what the owner already wants: more calls, more walk-ins, better image, and less fear of losing customers to competitors.',
                ],
                points: [
                    'Trust: "Customers verify you before they visit."',
                    'Status: "A premium website makes a small business look bigger and more serious."',
                    'Availability: "Your showroom stays open even when your shop is closed."',
                ],
                callout: {
                    tone: 'gold',
                    title: 'Golden thought',
                    text: 'When you say "website", the owner hears "cost". When you say "trust and more customers", the owner hears "value".',
                },
            },
            {
                title: 'How to handle rejection',
                paragraphs: [
                    'Rejection is normal in Indian cold calling. Many owners are busy, many get spam calls, and many are not ready today.',
                    'That does not mean your offer is weak. It only means the timing, trust, or relevance is not strong yet.',
                ],
                points: [
                    'A "no" today may become a "yes" after the third follow-up.',
                    'A rude reply is often frustration, not your real value.',
                    'Your confidence should come from your process, not from one call result.',
                ],
            },
            {
                title: 'Daily mental reset',
                paragraphs: [
                    'When a call goes badly, reset in 30 seconds. Sit straight, breathe, read your value line, and dial the next business.',
                    'Momentum matters more than one perfect call.',
                ],
                table: {
                    title: 'Quick Reset Routine',
                    columns: ['Step', 'Time', 'Why it helps'],
                    rows: [
                        ['Sit straight and breathe', '10 sec', 'Your voice sounds more calm and trusted.'],
                        ['Read your core pitch line', '10 sec', 'You remember what you really sell.'],
                        ['Open next lead and dial', '10 sec', 'You keep momentum instead of overthinking.'],
                    ],
                },
            },
        ],
        englishScript: [
            { speaker: 'Sales Rep', line: 'I am not calling to sell code. I am calling to show a business how it can look more trusted online.' },
            { speaker: 'Sales Rep', line: 'If this owner is not ready today, I will still leave a strong impression and a useful next step.' },
        ],
        hinglishScript: [
            { speaker: 'Sales Rep', line: 'Mera kaam website thopna nahi hai. Mera kaam business owner ko unka online gap dikhana hai.' },
            { speaker: 'Sales Rep', line: 'Aaj sale na ho, koi problem nahi. Trust build hua toh kal follow-up strong hoga.' },
        ],
        rules: {
            proTip: 'Read your one-line value pitch before every call block.',
            goldenRule: 'Sell outcome first, service second.',
            thumbRule: 'If you sound calm, clear, and respectful, you already sound different from spam callers.',
        },
        importantLine: 'Main thing: we sell trust and business growth, not just pages and code.',
    },
    {
        slug: 'target-audience',
        number: '02',
        label: 'Target Audience',
        title: 'Target Audience',
        subtitle: 'Know who to call, why they will care, and what angle fits their business size.',
        overview: 'Every business does not buy for the same reason. Small ventures buy trust and local discovery. Bigger ventures buy status, lead generation, and brand control. If you match the pitch to the business type, your close rate improves fast.',
        searchTerms: ['target audience', 'small ventures', 'large ventures', 'local seo', 'lead generation', 'rural', 'metro'],
        keyCards: [
            { label: 'Small Ventures', value: 'Trust + Local SEO', text: 'Use simple starter logic and local discovery angle.' },
            { label: 'Growing Brands', value: 'Status + Leads', text: 'Use stronger FOMO and brand image language.' },
            { label: 'Rural to Metro', value: 'Same Need', text: 'Every market needs trust, only the language changes.' },
            { label: 'Best Fit', value: 'Visual Businesses', text: 'Jewellers, clinics, education, hospitality, and design firms close faster.' },
        ],
        visual: {
            type: 'bars',
            title: 'Where the pitch changes',
            items: [
                { label: 'Small local business', value: 45, helper: 'Trust + visibility' },
                { label: 'Growth-stage business', value: 70, helper: 'Brand + leads' },
                { label: 'High-ticket business', value: 90, helper: 'Status + direct enquiry' },
            ],
            note: 'The bigger the deal size, the stronger the status and trust pitch becomes.',
        },
        glossaryTerms: ['Local SEO', 'Lead Capture', 'USP'],
        doList: [
            'Check whether the business already has a website before you call.',
            'Notice what they sell: local walk-in service, high-ticket trust sale, or repeat-order business.',
            'Use local competitor examples when calling Tier 2, Tier 3, and rural businesses.',
            'Use brand-control language for bigger firms that depend on image.',
        ],
        dontList: [
            'Do not use the same pitch for a kirana store and a hospital.',
            'Do not start with features before you understand the business type.',
            'Do not ignore local language comfort in non-metro markets.',
            'Do not waste long calls on poor-fit leads when better-fit categories are available.',
        ],
        sections: [
            {
                title: 'Small ventures vs larger ventures',
                paragraphs: [
                    'A kirana store, tailor, or seed shop usually needs a simple online identity, local search trust, and WhatsApp ordering.',
                    'A hospital, real estate firm, or architect needs a stronger image, more proof, and better lead capture.',
                ],
                table: {
                    title: 'Pitch by business size',
                    columns: ['Business size', 'Main pain', 'Main pitch', 'Best package'],
                    rows: [
                        ['Small venture', 'People do not find or trust them online', 'Simple digital presence and local trust', '₹8,000 starter'],
                        ['Growing business', 'Competitors look stronger online', 'Brand image plus more direct enquiries', '₹25,000 growth'],
                        ['High-ticket brand', 'Leads are shared or trust is weak', 'Status, proof, and owned lead flow', '₹25,000 growth'],
                    ],
                },
            },
            {
                title: 'How to read a business quickly',
                paragraphs: [
                    'You do not need deep research before every call. A 60-second scan is enough.',
                    'Check Google Maps, website status, social media quality, and whether top competitors already have websites.',
                ],
                points: [
                    'No website: start with trust and missed-opportunity angle.',
                    'Weak website: use redesign and status angle.',
                    'Strong social page but no website: use control and professionalism angle.',
                    'High-ticket business: talk about image, authority, and fewer lost leads.',
                ],
            },
            {
                title: 'Rural and non-metro markets',
                paragraphs: [
                    'In rural and semi-urban India, business owners may not care about design words. They care about trust, phone calls, and easy follow-up.',
                    'Keep the language simpler. Show how the website helps local buyers, dealers, farmers, parents, or nearby families trust them faster.',
                ],
                callout: {
                    tone: 'tip',
                    title: 'Pro tip',
                    text: 'In rural and Tier 3 calls, use more practical words like "phone se dikhna", "aapka online card", and "WhatsApp enquiry".',
                },
            },
        ],
        rules: {
            proTip: 'Pick 5-6 high-fit industries and build strong examples for them first.',
            goldenRule: 'The better you match the pitch to the business type, the less you need to push.',
            thumbRule: 'If the business value per customer is high, the website price will feel small.',
        },
        importantLine: 'Right business, right angle, right language: this is what makes cold calling feel easier.',
    },
    {
        slug: 'pricing',
        number: '03',
        label: 'Pricing Game',
        title: 'The Pricing Game',
        subtitle: 'Use anchoring with confidence: ₹30,000 first, ₹25,000 to close, ₹8,000 only as a last-fit starter.',
        overview: 'Price should never be the first emotional message. First build value, then use the price ladder. The owner must feel that the website can recover its cost through trust, one good customer, or better retention.',
        searchTerms: ['pricing', 'anchor price', '25,000', '30,000', '8,000', 'discount', 'negotiation'],
        keyCards: [
            { label: 'Anchor', value: '₹30,000', text: 'This sets the value frame in the customer’s mind.' },
            { label: 'Close Price', value: '₹25,000', text: 'This feels like a smart decision after the anchor.' },
            { label: 'Fallback', value: '₹8,000', text: 'Only for very small businesses with real budget limits.' },
            { label: 'Never Below', value: '₹8,000', text: 'Going below this hurts trust and positioning.' },
        ],
        visual: {
            type: 'ladder',
            title: 'Pricing ladder',
            items: [
                { label: 'Premium anchor', value: '₹30,000', helper: 'Premium design + SEO basics' },
                { label: 'Best close', value: '₹25,000', helper: 'Main offer for most businesses' },
                { label: 'Starter floor', value: '₹8,000', helper: '3-page basic site for tiny-budget shops' },
            ],
            note: 'Do not jump to the lowest price too fast.',
        },
        glossaryTerms: ['Anchor Price', 'ROI', 'CTA'],
        doList: [
            'Say the higher value first so the next price feels more reasonable.',
            'Connect price to outcome, not only to pages.',
            'Use the ₹8,000 option only when the business is truly small and budget-limited.',
            'Frame price as a one-time trust investment, not monthly pain.',
        ],
        dontList: [
            'Do not open with the cheapest package.',
            'Do not discount too fast.',
            'Do not sound guilty while saying the price.',
            'Do not go below ₹8,000.',
        ],
        sections: [
            {
                title: 'How the anchor works',
                paragraphs: [
                    'When the customer first hears ₹30,000, they create a value frame in their head.',
                    'Then when you offer ₹25,000, it feels like a smart and fair deal instead of a random price.',
                ],
                points: [
                    'Anchor first.',
                    'Explain value second.',
                    'Close at ₹25,000 when the fit is strong.',
                    'Offer ₹8,000 only to avoid losing a tiny-budget but real-fit business.',
                ],
            },
            {
                title: 'How to protect the price',
                paragraphs: [
                    'The customer may say, "It is expensive." Do not panic. Slow down and take control of the value again.',
                    'Bring the conversation back to one extra customer, one premium order, one direct booking, or one saved commission cycle.',
                ],
                table: {
                    title: 'Price framing lines',
                    columns: ['Situation', 'Better line', 'Why it works'],
                    rows: [
                        ['Customer says it is costly', 'It is a one-time trust asset, not a daily expense.', 'Moves the mind from cost to investment.'],
                        ['Customer compares cheap template', 'Cheap tools give pages. We give trust, support, and business fit.', 'Shows the service gap clearly.'],
                        ['Customer asks for low budget', 'We can scale scope, but we do not reduce quality below our floor.', 'Protects brand value.'],
                    ],
                },
            },
            {
                title: 'When to use the starter option',
                paragraphs: [
                    'Use ₹8,000 only for truly small shops, local service sellers, or rural businesses that need a simple 3-page trust site.',
                    'Do not present it as a cheap bargain. Present it as a smaller first step.',
                ],
                callout: {
                    tone: 'warning',
                    title: 'Important',
                    text: 'Never let the customer feel that the same big-brand value is available at a throwaway rate. The starter site is a smaller scope, not a panic discount.',
                },
            },
        ],
        englishScript: [
            { speaker: 'Sales Rep', line: 'Our premium business website work usually starts at ₹30,000 because it covers trust-first design and strong business structure.' },
            { speaker: 'Sales Rep', line: 'For your case, I can bring it to ₹25,000 because this is the package that fits best and gives proper value.' },
            { speaker: 'Sales Rep', line: 'If you want only a very basic starter website for a small local presence, we have a small-scope ₹8,000 option, but we do not go below that.' },
        ],
        hinglishScript: [
            { speaker: 'Sales Rep', line: 'Hamare proper business website projects normally ₹30,000 se start hote hain, kyunki usme premium trust-focused setup hota hai.' },
            { speaker: 'Sales Rep', line: 'Aapke business ke liye main ₹25,000 wala proper growth package suggest karunga. Yeh value aur image dono balance karta hai.' },
            { speaker: 'Sales Rep', line: 'Agar aapko sirf bahut basic starter presence chahiye, toh ₹8,000 ka small-scope option hai. Uske neeche hum nahi jaate.' },
        ],
        rules: {
            proTip: 'Let the owner react to the anchor before you present the closer price.',
            goldenRule: 'Do not reduce price before you increase value in the customer’s mind.',
            thumbRule: 'One good customer story beats ten technical price explanations.',
        },
        importantLine: 'The price ladder works only when your voice sounds steady and your value sounds bigger than the price.',
    },
    {
        slug: 'script',
        number: '04',
        label: 'Cold Call Script',
        title: 'The Cold Call Script',
        subtitle: 'A good cold call earns permission, gives one sharp insight, and moves to WhatsApp or meeting.',
        overview: 'The first call is not for full selling. It is for opening the door. Keep the call respectful, relevant, and useful. Use one compliment, one gap, one trust line, and one next-step ask.',
        searchTerms: ['script', 'cold call', 'intro', 'hook', 'whatsapp', 'permission', 'close'],
        keyCards: [
            { label: 'First 5 Seconds', value: 'Respect', text: 'Make the owner feel safe enough to keep listening.' },
            { label: 'Main Hook', value: 'Missing Website', text: 'Show the gap in simple words, not in a dramatic tone.' },
            { label: 'Main CTA', value: 'WhatsApp', text: 'The first win is getting permission to send proof.' },
            { label: 'Voice', value: 'Calm', text: 'Do not sound over-excited or robotic.' },
        ],
        visual: {
            type: 'timeline',
            title: '4-minute call flow',
            items: [
                { label: '0-15 sec', helper: 'Name, company, permission' },
                { label: '15-45 sec', helper: 'Compliment + online gap' },
                { label: '45-120 sec', helper: 'Ask 2-3 discovery questions' },
                { label: '2-4 min', helper: 'Give proof and move to WhatsApp' },
            ],
            note: 'Short, relevant, and respectful wins over long sales talk.',
        },
        glossaryTerms: ['Discovery', 'CTA', 'Lead Capture'],
        doList: [
            'Use the business name and one real observation.',
            'Ask for a small amount of time first.',
            'Move to WhatsApp quickly after interest appears.',
            'Use a soft close, not a heavy close, on the first call.',
        ],
        dontList: [
            'Do not start by asking, "Do you want a website?"',
            'Do not speak for two full minutes without a pause.',
            'Do not force a price discussion too early.',
            'Do not sound scripted even when you follow a structure.',
        ],
        sections: [
            {
                title: 'The winning call shape',
                paragraphs: [
                    'A good cold call has four parts: permission, observation, quick discovery, and proof with next step.',
                    'If the owner feels you noticed their business and respected their time, they will usually listen longer.',
                ],
                points: [
                    'Permission: "May I take 30 seconds?"',
                    'Observation: "You are visible on Maps, but you do not yet have your own site."',
                    'Discovery: "How do most new customers find you today?"',
                    'Proof: "Can I send one sample on WhatsApp?"',
                ],
            },
            {
                title: 'Questions that keep the owner talking',
                paragraphs: [
                    'Use simple questions that help the owner talk about business pain in their own words.',
                ],
                table: {
                    title: 'Good discovery questions',
                    columns: ['Question', 'What it reveals', 'When to use it'],
                    rows: [
                        ['How do most new customers find you today?', 'Current customer source', 'Use on almost every call'],
                        ['Do people search your business online before they visit?', 'Trust gap', 'Use for clinics, jewellers, schools, and services'],
                        ['If a customer compares you with a stronger competitor online, what do they see today?', 'FOMO gap', 'Use for status-driven industries'],
                    ],
                },
            },
            {
                title: 'Close the first call correctly',
                paragraphs: [
                    'The right close is not "buy now". The right close is "let me send proof" or "let us keep a short meeting".',
                    'This reduces pressure and keeps the conversation moving.',
                ],
            },
        ],
        englishScript: [
            { speaker: 'Sales Rep', line: 'Hello [Owner Name], this is [Your Name] from Software Studios. We help local businesses look more trusted online. May I take 30 seconds?' },
            { speaker: 'Sales Rep', line: 'I saw [Business Name] on Google. You already have a presence, but you do not yet have your own website. That means customers compare you on maps with competitors instead of seeing your brand alone.' },
            { speaker: 'Sales Rep', line: 'How do most new customers find you right now: referral, walk-in, or online search?' },
            { speaker: 'Sales Rep', line: 'I can send one simple portfolio example on WhatsApp so you can see the difference in 2 minutes. Is this number on WhatsApp?' },
        ],
        hinglishScript: [
            { speaker: 'Sales Rep', line: 'Namaste [Owner Name] ji, main [Your Name] bol raha/rahi hoon Software Studios se. Hum businesses ko online zyada trusted dikhne mein help karte hain. Kya 30 seconds le sakta/sakti hoon?' },
            { speaker: 'Sales Rep', line: 'Maine [Business Name] ko Google par dekha. Presence hai, lekin aapka apna website nahi hai. Is wajah se customer aapko competitor ke saath compare karta hai, aapke brand ko alag se nahi dekhta.' },
            { speaker: 'Sales Rep', line: 'Abhi naye customers zyada referral se aate hain, walk-in se, ya Google se?' },
            { speaker: 'Sales Rep', line: 'Main ek simple sample WhatsApp par bhej deta/deti hoon. 2 minute mein clear ho jayega ki website trust kaise build karti hai. Yeh number WhatsApp pe hai na?' },
        ],
        rules: {
            proTip: 'The more specific your observation, the less you sound like a random caller.',
            goldenRule: 'Permission first. Pitch second.',
            thumbRule: 'If the customer replies with more than one sentence, the call is going well.',
        },
        importantLine: 'The first call must open a door, not force a contract.',
    },
    {
        slug: 'objections',
        number: '05',
        label: 'Objections',
        title: 'Handling Objections',
        subtitle: 'Every objection is a request for more clarity, more trust, or lower risk.',
        overview: 'Do not fight objections. Decode them. Most objections hide one of four things: low trust, low urgency, low budget comfort, or low understanding of value. Your job is to answer the real fear behind the sentence.',
        searchTerms: ['objections', 'google maps', 'hostinger', 'no ecommerce', 'budget', 'friend will do it'],
        keyCards: [
            { label: 'Most Common', value: 'Maps is enough', text: 'Turn it into a trust and competitor angle.' },
            { label: 'Second Common', value: 'Too costly', text: 'Move from price to one good customer value.' },
            { label: 'Hidden Meaning', value: 'Not convinced', text: 'Many soft no lines only mean the owner needs more proof.' },
            { label: 'Best Response', value: 'Calm + Clear', text: 'Short answers work better than long debates.' },
        ],
        visual: {
            type: 'ladder',
            title: '4-step objection response',
            items: [
                { label: 'Listen', value: 'Hear fully', helper: 'Do not interrupt' },
                { label: 'Acknowledge', value: 'That makes sense', helper: 'Lower resistance' },
                { label: 'Reframe', value: 'Show the bigger issue', helper: 'Move to trust or loss' },
                { label: 'Close small', value: 'WhatsApp / demo', helper: 'Do not overpush' },
            ],
            note: 'You do not need to win the argument. You only need to move the owner forward.',
        },
        glossaryTerms: ['Objection', 'Social Proof', 'ROI'],
        doList: [
            'Repeat the concern in your own words so the owner feels heard.',
            'Use simple business logic, not defensive talk.',
            'Bring the answer back to trust, status, or lost customers.',
            'End with a small next step like WhatsApp or a short demo.',
        ],
        dontList: [
            'Do not argue line by line.',
            'Do not insult cheap options, friends, or social media.',
            'Do not sound hurt when the owner doubts the price.',
            'Do not keep talking after the objection is already answered.',
        ],
        sections: [
            {
                title: 'Top objection answers',
                qa: [
                    {
                        question: 'Google Maps or JustDial is enough.',
                        answer: 'Maps and JustDial are shared spaces. The customer sees your competitors beside you. Your website is the only place where your brand stands alone.',
                    },
                    {
                        question: 'I do not sell online.',
                        answer: 'The website is not only for e-commerce. It is a digital showroom that builds trust so the customer feels ready to call or visit your physical place.',
                    },
                    {
                        question: 'I cannot afford ₹25,000.',
                        answer: 'This is a one-time trust investment. In many businesses, one or two good customers can recover the cost and keep paying back later.',
                    },
                    {
                        question: 'Hostinger or cheap templates are available.',
                        answer: 'Cheap tools give pages. We give structure, support, trust, and a site designed for your type of business and customer.',
                    },
                    {
                        question: 'My products or designs change regularly.',
                        answer: 'The website can show premium categories and main strengths. Daily stock can still move through WhatsApp or direct call.',
                    },
                    {
                        question: 'My friend or nephew will do it for free.',
                        answer: 'A free site often looks free. Premium customers judge trust by design, clarity, and support quality.',
                    },
                ],
            },
            {
                title: 'Soft no lines in India',
                paragraphs: [
                    'Many Indian owners do not say no directly. They may say "I will think", "Call later", or "I will ask my partner".',
                    'Do not accept this without a gentle follow-up question.',
                ],
                points: [
                    'Ask: "Sure, what part would you like to think about: price, timing, or fit?"',
                    'Ask: "What would help you feel clear enough to decide the next step?"',
                    'Set a fixed next time instead of "I will call later."',
                ],
            },
            {
                title: 'Objection close lines',
                paragraphs: [
                    'After answering, always move back to a small next step.',
                ],
                table: {
                    title: 'Short close after an objection',
                    columns: ['After the answer', 'Close line'],
                    rows: [
                        ['Owner sounds calmer', 'Let me send one example on WhatsApp so you can judge with proof.'],
                        ['Owner is still unsure', 'Let us do a short 10-minute call after you see the sample.'],
                        ['Owner says later', 'What is the best time tomorrow or the day after for a short follow-up?'],
                    ],
                },
            },
        ],
        rules: {
            proTip: 'Answer the emotion first, then the logic.',
            goldenRule: 'An objection is not the end of the call. It is the center of the call.',
            thumbRule: 'The shorter and calmer your answer, the stronger it sounds.',
        },
        importantLine: 'You do not need a perfect comeback. You need a believable answer and one clear next step.',
    },
    {
        slug: 'daily-action',
        number: '06',
        label: 'Daily Action Plan',
        title: 'Daily Action Plan',
        subtitle: 'A strong process beats random motivation every time.',
        overview: 'Sales grows when daily work is steady. A clear call schedule, fast note-taking, and disciplined follow-up are more important than one brilliant call. The job becomes easier when you know exactly what to do in each hour.',
        searchTerms: ['daily plan', 'call volume', 'whatsapp follow up', 'crm', 'schedule', 'time to call'],
        keyCards: [
            { label: 'Daily Calls', value: '60', text: 'The target that keeps the funnel healthy.' },
            { label: 'Fresh Leads', value: '20-25', text: 'New businesses to contact every morning.' },
            { label: 'Follow-ups', value: '20+', text: 'Most sales happen after the first touch.' },
            { label: 'Talk Time', value: '3 hrs', text: 'Enough real conversation time every day.' },
        ],
        visual: {
            type: 'timeline',
            title: 'Daily work blocks',
            items: [
                { label: '9:00-9:30', helper: 'Lead review and preparation' },
                { label: '9:30-11:00', helper: 'Fresh calls' },
                { label: '11:00-11:30', helper: 'WhatsApp follow-ups' },
                { label: '2:30-5:30', helper: 'Warm leads and best connect hours' },
            ],
            note: 'Treat calling like fieldwork, not like waiting for motivation.',
        },
        glossaryTerms: ['Warm Lead', 'Cold Lead', 'Follow-up'],
        doList: [
            'Start with fresh calls while your energy is high.',
            'Send WhatsApp material quickly after a good call.',
            'Update notes on the same day.',
            'Use fixed follow-up dates instead of vague promises.',
        ],
        dontList: [
            'Do not leave lead notes for the next day.',
            'Do not spend all day only on new calls and ignore follow-up.',
            'Do not call business owners at the worst busy hours for their industry.',
            'Do not let good leads go cold because you forgot the next step.',
        ],
        sections: [
            {
                title: 'Simple daily schedule',
                timeline: [
                    { time: '9:00-9:30', text: 'Open your lead sheet, pick the day list, and prepare your first examples.' },
                    { time: '9:30-11:00', text: 'Call new prospects while your voice is fresh and focused.' },
                    { time: '11:00-11:30', text: 'Send WhatsApp proof to interested owners right away.' },
                    { time: '11:30-1:00', text: 'Do scheduled follow-ups and second-attempt calls.' },
                    { time: '2:00-2:30', text: 'Update notes, prepare small proposals, and sort hot leads.' },
                    { time: '2:30-4:00', text: 'Call warm leads and industries that open up after lunch.' },
                    { time: '4:00-5:30', text: 'Use the late-day slot for strongest connection rates and decision calls.' },
                ],
            },
            {
                title: 'Best times by business type',
                table: {
                    title: 'Call timing guide',
                    columns: ['Business type', 'Better time', 'Why'],
                    rows: [
                        ['Jewellers / retail shops', '10-11 AM or 2-3 PM', 'Less customer rush'],
                        ['Doctors / clinics', '1-2 PM or before OPD', 'Short break windows'],
                        ['Restaurants / cafes', '2:30-4:30 PM', 'Between lunch and dinner rush'],
                        ['Schools / coaching', '10-11 AM', 'Admin teams are active'],
                        ['Kirana / daily retail', '9-10 AM', 'Before peak store traffic'],
                    ],
                },
            },
            {
                title: 'Tracking system',
                paragraphs: [
                    'Keep your CRM simple. A Google Sheet is enough if you use it every day.',
                    'Minimum fields: business name, owner name, number, city, business type, website status, call outcome, next follow-up date, and notes.',
                ],
                callout: {
                    tone: 'info',
                    title: 'Daily discipline',
                    text: 'A forgotten follow-up is not bad luck. It is a system problem. Fix the system.',
                },
            },
        ],
        rules: {
            proTip: 'Put hot leads at the top of the next day list before you end work.',
            goldenRule: 'Follow-up is not extra work. Follow-up is the real work.',
            thumbRule: 'If a lead asked a real question, follow up within 24 hours.',
        },
        importantLine: 'A good sales day is planned before the first call starts.',
    },
    {
        slug: 'industries',
        number: '07',
        label: 'Industry Playbook',
        title: 'Industry Playbook',
        subtitle: 'The same website does not sell the same way to every business. Use the right angle.',
        overview: 'This chapter helps you match each business with the best sales angle. Some industries buy trust. Some buy direct leads. Some buy status. And small local stores buy a simple online identity that makes them look reliable and easy to contact.',
        searchTerms: ['industries', 'jewellers', 'doctors', 'schools', 'kirana', 'builders', 'salon'],
        keyCards: [
            { label: 'Coverage', value: '45', text: 'From rural shops to metro premium businesses.' },
            { label: 'Use Case', value: 'Search + Filter', text: 'Find the right pitch fast before or during a call.' },
            { label: 'Main Outcome', value: 'Right Angle', text: 'Use FOMO, trust, or direct-lead logic depending on the business.' },
            { label: 'Package Fit', value: '₹25k / ₹8k', text: 'Each business card shows the best offer path.' },
        ],
        visual: {
            type: 'clusters',
            title: 'Industry clusters',
            items: [
                { label: 'Healthcare', helper: 'Trust + appointment' },
                { label: 'Retail', helper: 'Status + walk-in trust' },
                { label: 'Education', helper: 'Parent confidence + enquiries' },
                { label: 'Property', helper: 'Lead ownership + authority' },
                { label: 'Services', helper: 'Local search + fast contact' },
            ],
            note: 'Use this playbook when you need a business-specific angle quickly.',
        },
        glossaryTerms: ['USP', 'Lead Capture', 'ROI'],
        doList: [
            'Use the business-specific line before the generic website line.',
            'Pick one competitor or market shift that creates FOMO.',
            'Match the price recommendation to the business size and deal value.',
            'Use the WhatsApp line from the same industry card for follow-up.',
        ],
        dontList: [
            'Do not speak to every industry in the same tone.',
            'Do not use deep tech words in industry-specific pitches.',
            'Do not over-explain features when one clear business angle is enough.',
            'Do not forget that rural businesses still need trust, just in simpler words.',
        ],
        sections: [
            {
                title: 'How to use this chapter',
                paragraphs: [
                    'Open the filters, pick the business type, and read the opening line first.',
                    'Then use the FOMO line, the website angle, and the objection reply to shape your call.',
                ],
                points: [
                    'Start with the opening line.',
                    'Move to what the business cares about.',
                    'Use one FOMO example.',
                    'Close with the suggested WhatsApp line.',
                ],
            },
        ],
        rules: {
            proTip: 'If you have 30 seconds before a call, read only the opening line and likely objection for that industry.',
            goldenRule: 'Industry context makes your pitch feel real.',
            thumbRule: 'The higher the customer value in that business, the easier it is to justify the website price.',
        },
        importantLine: 'When the owner feels "this person understands my business", the call becomes easier.',
    },
    {
        slug: 'trust-signals',
        number: '08',
        label: 'Mistakes & Trust',
        title: 'Mistakes and Trust Signals',
        subtitle: 'Many sales are lost not because the offer is bad, but because trust is weak.',
        overview: 'Indian business owners are careful. They have seen spam, weak freelancers, broken promises, and poor support. So even a good offer fails if trust feels thin. This chapter shows what breaks trust and what rebuilds it fast.',
        searchTerms: ['trust', 'mistakes', 'support', 'gst', 'reviews', 'portfolio', 'office address'],
        keyCards: [
            { label: 'Big Risk', value: 'Low Trust', text: 'Low trust kills good offers quickly.' },
            { label: 'Trust Stack', value: '6 Signals', text: 'Reviews, office, work, process, agreement, support.' },
            { label: 'Big Mistake', value: 'Tech Talk', text: 'Outcomes matter more than platform words.' },
            { label: 'Support Promise', value: 'Must Say', text: 'Owners fear being abandoned after launch.' },
        ],
        visual: {
            type: 'stack',
            title: 'Trust stack',
            items: [
                { label: 'Real company identity', value: 'Office + cities + years' },
                { label: 'Proof of work', value: 'Portfolio + reviews' },
                { label: 'Safe process', value: 'Agreement + milestone clarity' },
                { label: 'After support', value: 'Help after launch' },
            ],
            note: 'Do not rely on one trust signal. Use a stack.',
        },
        glossaryTerms: ['Trust Signal', 'Social Proof', 'Google Business Profile'],
        doList: [
            'Say Software Studios clearly with years and city presence.',
            'Share portfolio proof early when trust is low.',
            'Mention support after launch before the owner asks.',
            'Use GST invoice, clear deliverables, and written confirmation.',
        ],
        dontList: [
            'Do not sound like an anonymous caller.',
            'Do not hide process or support details.',
            'Do not overpromise unrealistic results.',
            'Do not speak only on phone if the owner needs stronger proof.',
        ],
        sections: [
            {
                title: 'Seven mistakes that hurt sales',
                points: [
                    'Sounding like a spam call.',
                    'Talking too much about technology and too little about outcomes.',
                    'Quoting too low and looking cheap.',
                    'Forgetting to mention after-sales support.',
                    'Not offering proof when trust is weak.',
                    'Not collecting proper advance and written scope later.',
                    'Ignoring referral and review power.',
                ],
            },
            {
                title: 'Trust signals you should use often',
                table: {
                    title: 'Trust signals and where to use them',
                    columns: ['Trust signal', 'Why it matters', 'Best moment to use it'],
                    rows: [
                        ['12 years of experience', 'Shows stability', 'Early in the call'],
                        ['Cities like Hyderabad and Bhubaneswar', 'Shows physical presence', 'Early or mid-call'],
                        ['Portfolio links', 'Shows real delivery', 'When interest appears'],
                        ['Reviews / testimonials', 'Builds social proof', 'When the owner doubts quality'],
                        ['Clear support promise', 'Reduces fear after launch', 'Before price or after objection'],
                        ['GST / invoice / agreement', 'Shows legitimacy', 'During closing stage'],
                    ],
                },
            },
            {
                title: 'How to answer trust fear',
                paragraphs: [
                    'If the owner says they were cheated before, slow down. This is not a price problem. This is a risk problem.',
                    'Show office proof, work proof, client proof, and process proof. Then ask for a small next step.',
                ],
            },
        ],
        rules: {
            proTip: 'When trust is low, proof beats persuasion.',
            goldenRule: 'Every sales message should make the business owner feel safer, not more confused.',
            thumbRule: 'If the owner fears support risk, mention post-launch support before they ask about price.',
        },
        importantLine: 'A website sale often closes when the owner stops fearing the risk, not when the price changes.',
    },
    {
        slug: 'whatsapp',
        number: '09',
        label: 'WhatsApp Playbook',
        title: 'WhatsApp Playbook',
        subtitle: 'The first call opens the door. WhatsApp keeps the door open and moves the deal forward.',
        overview: 'WhatsApp is where Indian business owners continue the conversation. If your follow-up is clear, short, and useful, you stay remembered. If it is long, messy, or late, the lead cools down.',
        searchTerms: ['whatsapp', 'follow up', 'voice note', 'portfolio', 'message', 'cadence'],
        keyCards: [
            { label: 'Best Speed', value: 'Same day', text: 'Send proof while the call is still fresh.' },
            { label: 'Best Asset', value: 'One sample', text: 'Too many links confuse. One strong sample works better.' },
            { label: 'Best Tone', value: 'Short + Clear', text: 'WhatsApp is not the place for long essays.' },
            { label: 'Best Pattern', value: '4 touches', text: 'Value, reminder, proof, and respectful close.' },
        ],
        visual: {
            type: 'timeline',
            title: 'WhatsApp follow-up cadence',
            items: [
                { label: 'Day 0', helper: 'Send sample or mini analysis' },
                { label: 'Day 2-3', helper: 'Short reminder with relevance' },
                { label: 'Day 5-7', helper: 'Send similar business example' },
                { label: 'Day 10+', helper: 'Respectful final nudge' },
            ],
            note: 'Consistency matters more than long messages.',
        },
        glossaryTerms: ['Follow-up', 'Social Proof', 'CTA'],
        doList: [
            'Send the first WhatsApp message quickly after a good call.',
            'Keep each message focused on one clear idea.',
            'Use one or two strong portfolio links, not a flood of samples.',
            'Use short voice notes only when warmth will help.',
        ],
        dontList: [
            'Do not send a long paragraph that looks copied and robotic.',
            'Do not keep messaging daily without a reason.',
            'Do not send too many PDFs and links at once.',
            'Do not disappear after one good call.',
        ],
        sections: [
            {
                title: 'What to send first',
                paragraphs: [
                    'The first message should remind the owner who you are, what you noticed, and what proof you are sharing.',
                ],
                table: {
                    title: 'Best first message structure',
                    columns: ['Part', 'What to include'],
                    rows: [
                        ['Reminder', 'Your name and Software Studios'],
                        ['Reason', 'One-line business gap or angle'],
                        ['Proof', 'One relevant sample or mini note'],
                        ['CTA', 'Ask for a short look and a reply time'],
                    ],
                },
            },
            {
                title: 'When to use voice notes',
                paragraphs: [
                    'Voice notes work well when the owner sounded warm, busy, or relationship-driven.',
                    'Keep them below one minute and end with one clear action.',
                ],
                points: [
                    'Say the owner name.',
                    'Refer to the business type.',
                    'Point to one simple proof.',
                    'Ask for a reply or short call time.',
                ],
            },
            {
                title: 'Follow-up without pressure',
                paragraphs: [
                    'The best follow-up feels helpful, not desperate.',
                    'Use portfolio, insight, comparison, or a small suggestion instead of "just checking".',
                ],
            },
        ],
        englishScript: [
            { speaker: 'Message', line: 'Hello [Owner Name], this is [Your Name] from Software Studios. As discussed, I am sharing one website example for a business like yours. Please have a quick look and let me know a good time for a 10-minute call.' },
            { speaker: 'Voice note idea', line: 'I noticed one simple gap in how your business appears online right now. This example shows how a better site can build trust before the customer even visits.' },
        ],
        hinglishScript: [
            { speaker: 'Message', line: 'Namaste [Owner Name] ji, main [Your Name] from Software Studios. Jaise baat hui thi, main aapke type ke business ka ek simple website example share kar raha/rahi hoon. Dekh kar batayiye, 10 minute ke liye kab connect kar sakte hain.' },
            { speaker: 'Voice note idea', line: 'Aapke business mein ek simple online trust gap hai. Jo sample bheja hai, woh dikhata hai ki website customer ko visit se pehle kaise convince karti hai.' },
        ],
        rules: {
            proTip: 'If the owner opened your message but did not reply, send a shorter follow-up, not a longer one.',
            goldenRule: 'Every WhatsApp message should make the next step easier.',
            thumbRule: 'One relevant example beats five random links.',
        },
        importantLine: 'WhatsApp is where proof becomes memory and memory becomes the next call.',
    },
    {
        slug: 'advanced-closing',
        number: '10',
        label: 'Advanced Closing',
        title: 'Advanced Closing and Follow-up',
        subtitle: 'Closing is not pressure. Closing is helping the owner take a clear decision.',
        overview: 'By the time you reach closing, the owner should already understand the value, the fit, and the next step. Your job is to remove decision fog, reduce risk, and ask a clear question that moves the deal forward.',
        searchTerms: ['closing', 'follow-up', 'meeting close', 'advance', 'proposal', 'decision'],
        keyCards: [
            { label: 'Best Close', value: 'Clear Choice', text: 'Give two sensible next-step options.' },
            { label: 'Best Risk Reducer', value: 'Proof + Process', text: 'Show what happens after yes.' },
            { label: 'Advance Logic', value: 'Commitment', text: 'A real project starts with a real commitment.' },
            { label: 'Final Goal', value: 'Decision', text: 'No confusion, no vague maybe.' },
        ],
        visual: {
            type: 'stack',
            title: 'Close flow',
            items: [
                { label: 'Fit confirmed', value: 'Business need is clear' },
                { label: 'Offer matched', value: '₹25k or ₹8k chosen correctly' },
                { label: 'Risk reduced', value: 'Proof, support, and scope explained' },
                { label: 'Next step fixed', value: 'Advance, meeting, or deadline follow-up' },
            ],
            note: 'Close when the owner feels clear, not cornered.',
        },
        glossaryTerms: ['ROI', 'Warm Lead', 'Trust Signal'],
        doList: [
            'Summarize the owner’s need before you ask for a decision.',
            'Give two sensible options when the owner is near yes.',
            'Explain process, timeline, and support in simple steps.',
            'Ask for advance only after the owner feels clear and comfortable.',
        ],
        dontList: [
            'Do not jump to payment before trust is built.',
            'Do not end with vague lines like "let me know".',
            'Do not overwhelm the owner with too many package choices.',
            'Do not keep chasing forever without a proper final close.',
        ],
        sections: [
            {
                title: 'How to ask for the decision',
                paragraphs: [
                    'Use simple option-based closing. It helps the owner choose without feeling pushed.',
                ],
                points: [
                    'Would you like to start with the ₹25,000 growth website, or is the ₹8,000 starter better for your current stage?',
                    'Should I block a short call for tomorrow to finalize scope, or would today evening work better?',
                    'Would you like me to send the payment and scope summary now so we can move ahead this week?',
                ],
            },
            {
                title: 'How to handle "I need more time"',
                paragraphs: [
                    'More time usually means one of three things: not enough trust, not enough clarity, or no urgency.',
                    'So ask one question that helps the real block come out.',
                ],
                table: {
                    title: 'Decision fog to decision clarity',
                    columns: ['What they say', 'What it may mean', 'Better response'],
                    rows: [
                        ['I will think', 'Not fully clear', 'What part would help you decide faster: price, trust, or website fit?'],
                        ['Call next week', 'Low urgency', 'What changes next week that is not clear today?'],
                        ['I need to ask someone', 'Needs internal support', 'Would a short summary help you explain it to them clearly?'],
                    ],
                },
            },
            {
                title: 'Respectful final follow-up',
                paragraphs: [
                    'Not every lead will close now. End with dignity so the door stays open later.',
                    'A respectful close keeps the brand strong and sometimes brings the owner back when timing changes.',
                ],
                callout: {
                    tone: 'tip',
                    title: 'Final message style',
                    text: 'Keep the last message warm and short: "If the timing is not right now, no problem. I am here whenever you want to build this properly."',
                },
            },
        ],
        englishScript: [
            { speaker: 'Sales Rep', line: 'Based on your business, the ₹25,000 growth website is the right fit because it builds trust and gives you a proper enquiry path. Would you like me to send the scope summary now?' },
            { speaker: 'Sales Rep', line: 'If you want to start smaller, we can do the ₹8,000 starter version, but it is a basic trust site, not the full growth setup.' },
        ],
        hinglishScript: [
            { speaker: 'Sales Rep', line: 'Aapke business ke hisaab se ₹25,000 wala growth website better fit hai, kyunki isse trust aur enquiry dono strong honge. Kya main abhi scope summary share kar doon?' },
            { speaker: 'Sales Rep', line: 'Agar aap smaller step se start karna chahte hain, toh ₹8,000 starter option hai, lekin woh basic trust presence ke liye hai, full growth setup ke liye nahi.' },
        ],
        rules: {
            proTip: 'When the owner is near yes, stop explaining and start confirming.',
            goldenRule: 'A close should feel like clarity, not pressure.',
            thumbRule: 'If the owner keeps delaying without a reason, move them to a respectful final follow-up state.',
        },
        importantLine: 'A strong close feels like the natural next step of a clear conversation.',
    },
    {
        slug: 'bonus-scripts',
        number: '11',
        label: 'Bonus Scripts',
        title: 'Bonus Scripts',
        subtitle: 'Ready-to-use Hinglish scripts grouped by small, medium, and big business levels.',
        overview: 'This is your fast script bank. Use it when you need a sharper line for a specific business size. The goal is not to read word by word. The goal is to borrow the tone, structure, and closing line.',
        searchTerms: ['bonus scripts', 'hinglish scripts', 'small business script', 'medium business script', 'big business script', 'viral shop', 'social media presence', 'branding', 'logo', 'instagram', 'facebook'],
        keyCards: [
            { label: 'Format', value: 'Hinglish', text: 'Practical spoken lines for Indian business calls.' },
            { label: 'Levels', value: '3', text: 'Small, medium, and big business script categories.' },
            { label: 'Best Use', value: 'Live Calls', text: 'Read before the call and adapt naturally.' },
            { label: 'Main Goal', value: 'Convert', text: 'Move the owner to trust, WhatsApp, or next meeting.' },
        ],
        visual: {
            type: 'stack',
            title: 'How to use bonus scripts',
            items: [
                { label: 'Pick business size', value: 'Small, medium, or big' },
                { label: 'Read the opening', value: 'Start with a clear first line' },
                { label: 'Use one pain point', value: 'Show trust gap or missed business' },
                { label: 'Close small', value: 'Move to WhatsApp or short meeting' },
            ],
            note: 'Use the script as support, not as a robotic speech.',
        },
        glossaryTerms: ['FOMO', 'CTA', 'Trust Signal'],
        doList: [
            'Choose the script category that matches the business size first.',
            'Say the lines in your own natural speaking style.',
            'Use only one or two strongest lines in a real call.',
            'Always end with a small next step like WhatsApp or a short meeting.',
        ],
        dontList: [
            'Do not memorize every line like a robot.',
            'Do not mix small-business lines into a premium big-brand pitch.',
            'Do not read long scripts without pausing for the owner.',
            'Do not skip discovery just because you have a ready script.',
        ],
        sections: [
            {
                title: 'How to use this bonus chapter',
                paragraphs: [
                    'This chapter is for quick support when you want sharper Hinglish lines.',
                    'Pick the right business size, read the category scripts, and adapt them to the real business in front of you.',
                ],
                points: [
                    'Small business: simple trust + local visibility + WhatsApp close.',
                    'Medium business: growth + better image + direct enquiry angle.',
                    'Big business: status + authority + owned lead flow angle.',
                ],
            },
            {
                title: 'When to switch script levels',
                table: {
                    title: 'Script level guide',
                    columns: ['Business level', 'Use this tone', 'Main angle'],
                    rows: [
                        ['Small business', 'Simple and practical', 'Trust, calls, local presence'],
                        ['Medium business', 'Growth and smart upgrade', 'More enquiries, better image'],
                        ['Big business', 'Authority and market position', 'Status, direct leads, brand control'],
                    ],
                },
            },
        ],
        rules: {
            proTip: 'Read the opening line twice before you dial.',
            goldenRule: 'The right script level makes your call sound natural.',
            thumbRule: 'Use short strong lines, not long perfect speeches.',
        },
        importantLine: 'Good scripts do not replace thinking. They reduce hesitation and improve flow.',
    },
    {
        slug: 'scenario-counters',
        number: '12',
        label: 'Scenario Counters',
        title: 'Scenario Based Counters',
        subtitle: 'Simple answers for tough customer questions in live calls, meetings, and WhatsApp chats.',
        overview: 'This chapter is your cross-fire answer bank. When the customer asks hard questions, do not panic and do not speak technical words. Give one calm answer, one business reason, and one small next step.',
        searchTerms: [
            'scenario based counters',
            'cross fire questions',
            'google maps',
            'justdial',
            'wordpress',
            'wix',
            'hostinger',
            'drag and drop',
            'coded website',
            'footfall',
            'domain and hosting',
            'odisha agency',
            'hyderabad agency',
            'payment in two phase',
            'office visit',
            'competitor website',
            'online presence',
            'parents ask children',
            'good shop near me',
        ],
        keyCards: [
            { label: 'Answer style', value: 'Short', text: 'Keep the reply small, calm, and business-focused.' },
            { label: 'Best use', value: 'Live Calls', text: 'Use these counters when the customer tests your clarity.' },
            { label: 'Main rule', value: 'No jargon', text: 'Simple school English is easier to trust and repeat.' },
            { label: 'End goal', value: 'Next step', text: 'After the answer, move to demo, sample, or meeting.' },
        ],
        visual: {
            type: 'stack',
            title: 'Simple counter flow',
            items: [
                { label: '1. Hear fully', value: 'Let the customer finish the question.' },
                { label: '2. Agree calmly', value: 'Start with "Yes sir, fair question."' },
                { label: '3. Answer simply', value: 'Use business words, not technical words.' },
                { label: '4. Show result', value: 'Tell what changes in trust, calls, or walk-ins.' },
                { label: '5. Close small', value: 'Move to sample, WhatsApp, or office meeting.' },
            ],
            note: 'A good counter should make the customer feel clearer, not more confused.',
        },
        glossaryTerms: ['Google Business Profile', 'Trust Signal', 'ROI', 'CTA'],
        doList: [
            'Say "fair question" or "good question" before the answer.',
            'Use one simple business reason in every reply.',
            'Bring the answer back to trust, direct enquiry, or lost customers.',
            'End with a small next step like demo, sample, or office visit.',
        ],
        dontList: [
            'Do not fight with the customer.',
            'Do not use heavy technical words.',
            'Do not give very long answers when one short answer is enough.',
            'Do not leave the conversation without asking for the next step.',
        ],
        sections: [
            {
                title: 'How to use this chapter',
                paragraphs: [
                    'These are not debate answers. These are calm business answers.',
                    'Read the customer question, pick the matching counter, say it in your own words, and then bring the conversation back to the next step.',
                ],
                points: [
                    'First agree with the question.',
                    'Then answer in one clear idea.',
                    'Then ask for the next step.',
                ],
                callout: {
                    tone: 'gold',
                    title: 'Golden line',
                    text: 'Do not try to sound smart. Try to sound clear.',
                },
            },
            {
                title: 'When the customer asks what a website will really do',
                qa: [
                    {
                        question: 'Customer says: "I am not going to sell products online. What will happen with a website?"',
                        answer: 'You do not need online selling to need a website. A website works like your online showroom. People check your business before they visit. If they see your services, photos, trust points, and contact details in one proper place, they feel safer and they call or visit faster.',
                    },
                    {
                        question: 'Customer says: "After making the website, will customer footfall increase?"',
                        answer: 'Yes sir, it can increase because more people will trust you before coming. A website does not create magic in one day, but it helps more local people find you, check you, and choose you. If your website, branding, and social media presence all look proper together, the chance of more enquiries and more walk-ins becomes stronger over time.',
                    },
                    {
                        question: 'Customer says: "People already know my shop offline. Why do I need online presence?"',
                        answer: 'Sir, today many families decide this way only. Parents often ask their children, "Beta, check which good shop is nearby." The children search on Google, social media, and websites. So your physical presence is there, but if your internet presence is weak, you may be missed. With one small one-time investment, you can create a long-term online presence that keeps bringing trust and customers.',
                    },
                    {
                        question: 'Customer says: "Can a website and social media really help my shop grow big?"',
                        answer: 'Yes sir, they can help a lot. You may have already seen small shops from cities like Mumbai or Delhi becoming very popular after good videos and strong online presence. We do not promise overnight viral results, but when your website, social media, logo, and branding all look proper, more people notice you, remember you, and share your business with others.',
                    },
                    {
                        question: 'Customer says: "What happens if my business has no website and my competitor has a website?"',
                        answer: 'Then your competitor looks more serious online. When customers compare both of you, your competitor looks more trusted, more ready, and easier to contact. Slowly the customer mind moves toward the business that looks more complete.',
                    },
                ],
            },
            {
                title: 'When the customer says Google or Justdial is enough',
                qa: [
                    {
                        question: 'Customer says: "I already have Google listing and Google Maps. People are coming from there. What more will a website do?"',
                        answer: 'Google Maps is good, but it is only one small place. On Maps, the customer also sees many other businesses near you. On your website, the customer sees only your business, your work, your trust, and your contact details. So Maps can bring attention, but the website helps you win trust.',
                    },
                    {
                        question: 'Customer says: "I already pay Justdial ₹5,000 every month. Why do I still need a website?"',
                        answer: 'Justdial is rented space. You keep paying every month and the customer still sees other businesses there. Your website is your own place. It shows only your brand. So Justdial can stay for listing, but the website gives you your own identity and better control.',
                    },
                ],
                table: {
                    title: 'Listing vs own website',
                    columns: ['Platform', 'What customer sees', 'What you control'],
                    rows: [
                        ['Google Maps', 'Your business plus nearby competitors', 'Basic listing only'],
                        ['Justdial', 'Your listing plus many other options', 'Limited control, monthly payment'],
                        ['Your website', 'Only your business and your message', 'Full control of trust and enquiry'],
                    ],
                },
            },
            {
                title: 'When the customer compares WordPress, Wix, or Hostinger',
                qa: [
                    {
                        question: 'Customer says: "I can use WordPress, Wix, or Hostinger builder. I will drag and drop and make it myself when I get free time. What is the use of a coded website?"',
                        answer: 'Yes sir, those tools are there, and anyone can make a basic page. But making a page and making a business-ready website are not the same. A business owner usually does not get free time to keep fixing layout, photos, text, and contact flow. We make it properly for your business so you save time, look more trusted, and get support when needed.',
                    },
                    {
                        question: 'Customer says: "If I can build something myself, why should I pay an agency?"',
                        answer: 'Because your time should go into your business, not into learning website work. You know your customers. We help you present that business properly so it looks serious from day one. It saves your time, avoids trial and error, and gives you one team to call when you need changes.',
                    },
                ],
                callout: {
                    tone: 'tip',
                    title: 'Better reply style',
                    text: 'Never insult website builders. Just show the gap between a basic page and a serious business website.',
                },
            },
            {
                title: 'When the customer worries about payment, delay, or meetings',
                qa: [
                    {
                        question: 'Customer says: "I cannot keep calling again and again after payment if work gets delayed. I will pay in 2 phases."',
                        answer: 'That is fair, sir. Two-phase payment is normal. We can start with an advance to begin the work and take the balance when the main work is shown clearly. This keeps both sides safe and gives you confidence while the work moves step by step.',
                    },
                    {
                        question: 'Customer says: "Can you come to my office, explain everything, and collect payment?"',
                        answer: 'Yes sir, if you want a proper meeting, we can do that. A face-to-face meeting helps both sides understand the work clearly. We can explain the website plan, answer your questions, and discuss payment in a simple way.',
                    },
                    {
                        question: 'Customer says: "How do I know you will not delay?"',
                        answer: 'Fair question, sir. We keep the work simple and clear: first scope, then sample, then main pages. We stay in touch and show progress. Also, staged payment keeps the work balanced for both sides, so you are not taking blind risk.',
                    },
                ],
            },
            {
                title: 'When the customer asks about domain, hosting, and location',
                qa: [
                    {
                        question: 'Customer says: "What about domain and hosting?"',
                        answer: 'Domain is your website name, and you can take that. Usually it is around ₹1,000. From our side, one year hosting is free in this offer. Its normal cost is around ₹5,000, but for now we are giving that free, free, free for one year.',
                    },
                    {
                        question: 'Customer says: "I want Odisha-based agency. Why should I give this work to Hyderabad-based people?"',
                        answer: 'Sir, we are from Odisha only. Our branch is in Hyderabad. So you are still speaking to an Odisha team that understands the local market, and at the same time you get wider experience from work done in bigger cities too.',
                    },
                ],
            },
            {
                title: 'Small closing lines after the counter',
                points: [
                    'If you want, I can show one simple sample for your business type.',
                    'If you want, I can send a short WhatsApp example now.',
                    'If you prefer, we can meet and I will explain this in person.',
                    'Would you like me to show how your competitor is already using this better?',
                ],
            },
        ],
        englishScript: [
            { speaker: 'Sales Rep', line: 'That is a fair question. A website is not only for online selling. It helps people trust your business before they call or visit.' },
            { speaker: 'Sales Rep', line: 'Google and Justdial can bring attention, but your own website helps you win the customer with your own business story, photos, and contact flow.' },
            { speaker: 'Sales Rep', line: 'When a business has a proper website, logo, branding, and social media presence together, people remember it faster and trust it more.' },
            { speaker: 'Sales Rep', line: 'If you want, I can show one simple example for your business and you can decide after seeing it.' },
        ],
        hinglishScript: [
            { speaker: 'Sales Rep', line: 'Bilkul fair question sir. Website sirf online sale ke liye nahi hota, trust ke liye bhi hota hai.' },
            { speaker: 'Sales Rep', line: 'Google Maps ya Justdial se log dekhte hain, but website pe sirf aapka brand dikhta hai, competitor nahi.' },
            { speaker: 'Sales Rep', line: 'Aaj kal chhote shops bhi internet aur social media se bahut grow kar rahe hain. Hum website ke saath aapka logo, branding, aur social media presence bhi better direction mein set kar sakte hain.' },
            { speaker: 'Sales Rep', line: 'Aaj kal papa mummy bhi bachchon ko bolte hain, beta zara dekho paas mein kaunsa achha shop hai. Bachhe wahi shop prefer karte hain jiska online presence strong ho.' },
            { speaker: 'Sales Rep', line: 'Agar aap chahen toh main abhi ek simple example WhatsApp pe bhej deta hoon.' },
        ],
        rules: {
            proTip: 'Start every hard answer with calm agreement: "Yes sir, fair question."',
            goldenRule: 'Short clear answers win more trust than long clever answers.',
            thumbRule: 'After every counter, ask for one small next step.',
        },
        importantLine: 'When the customer tests you, your job is not to argue. Your job is to make things simple.',
    },
];

export const CHAPTER_MAP = CHAPTERS.reduce((accumulator, chapter) => {
    accumulator[chapter.slug] = chapter;
    return accumulator;
}, {});
