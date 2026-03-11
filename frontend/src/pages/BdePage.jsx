import React, { useMemo, useState } from 'react';
import SEOHead from '../components/SEOHead';

const ACCESS_KEY = 'softwarestudios_bde_access';
const PASSCODE = '29000';

const CHAPTERS = [
    {
        id: 'role-reset',
        short: 'Role',
        title: 'Role Reset: Aap telecaller nahi, business consultant ho',
        tagline: 'Trust-first mindset',
        why: 'Har call ka goal direct sale nahi hota. Pehle trust, phir relevance, phir proof, phir meeting.',
        keyPoints: [
            '60 seconds mein trust build karo: calm opening + permission line.',
            '2 minutes mein interest build karo: Google profile observation + online gap.',
            'Call ka target: WhatsApp proof bhejna + meeting fix karna.',
            'Tone consultative rakho: bechna nahi, business grow karwana hai.',
        ],
        mustRemember: 'Aap product nahi bech rahi ho. Aap owner ko next business step dikha rahi ho.',
    },
    {
        id: 'prep-engine',
        short: 'Prep',
        title: 'Call Prep Engine: List, priority aur proof kit ready rakho',
        tagline: 'Field-ready workflow',
        why: 'Random calling se conversion low hota hai. Prepared calling se meetings fast milti hain.',
        keyPoints: [
            'Google Maps se category-wise list nikalo: Restaurant, Hotel, Architect, Salon, Gym, Clinic, Coaching.',
            'Sheet columns: Business Name, City, Phone, Rating, Website status, Notes.',
            'Priority leads: rating 4.0+, website missing/outdated, profile active.',
            'WhatsApp proof kit always ready: 2 testimonial videos + 2-3 sample links + short company intro.',
        ],
        mustRemember: 'Call ke turant baad WhatsApp proof bhejo. Delay karoge to lead thanda ho jayega.',
    },
    {
        id: 'positioning',
        short: 'Trust Line',
        title: 'Company Positioning Line (Har call par consistent)',
        tagline: 'Credibility anchor',
        why: 'Consistent trust line se owner ko lagta hai company stable, serious aur long-term hai.',
        keyPoints: [
            'Primary line: "Hum Hyderabad ki 12 saal purani IT/Software company hain. Ab Odisha mein businesses ko direct support de rahe hain."',
            'Longevity + location support mention karne se fly-by-night doubt kam hota hai.',
            'Line ko ratta nahi, naturally bolna hai.',
        ],
        mustRemember: 'Trust line bina aggression ke bolo. Confidence high, speed slow.',
    },
    {
        id: 'domain-hosting',
        short: 'Explain Tech',
        title: 'Domain & Hosting ko simple language mein kaise samjhaana hai',
        tagline: 'No-tech confusion',
        why: 'Owner technical jargon se confuse hota hai. Simple analogy trust aur clarity dono badhata hai.',
        keyPoints: [
            'Domain = online address (jaise shop ka address). Example: www.aapkabusiness.com.',
            'Hosting/Server = website ka ghar jahan files internet par rehti hain.',
            'End with assurance: "Aap tension mat lijiye, domain-hosting-maintenance package mein include hota hai."',
        ],
        mustRemember: 'Technical depth nahi, business clarity deni hai.',
    },
    {
        id: 'website-vs-no-website',
        short: 'Comparison',
        title: 'Website vs No Website: Small Salon ka clear difference',
        tagline: 'Why website wins',
        why: 'Customer ke liye decision bahut simple hota hai: jaha clarity, trust aur easy booking milegi, wohi option choose karega.',
        keyPoints: [
            'Small salon ke liye bhi website luxury nahi, growth tool hai.',
            'Website se trust build hota hai, no-website se lead leakage hota hai.',
            'Owner ko numbers aur outcome language mein samjhao - yahi conversion karta hai.',
        ],
        comparison: {
            title: 'Small Salon Monthly Reality Check',
            columns: ['Area', 'Without Website', 'With Website'],
            rows: [
                ['Google Discovery', 'Sirf social ya map profile par limited visibility', 'Website + local SEO se near me searches mein zyada visibility'],
                ['Trust at first look', 'Customer ko rate card, hygiene, services clear nahi dikhta', 'Services, pricing, photos, reviews ek jagah clear milte hain'],
                ['Booking experience', 'Call busy ho to lead drop', 'Form + WhatsApp click + appointment flow se quick booking'],
                ['Premium services sell', 'Hair spa, bridal, skin packages explain karna mushkil', 'Dedicated landing sections se premium package conversion better'],
                ['Repeat customer retention', 'Manual follow-up ya memory-based process', 'Offers, memberships, and reminders through one official channel'],
                ['Monthly outcome', 'Inquiries scattered, conversion unpredictable', 'Structured inquiries, better close rate, and stronger brand recall'],
            ],
        },
        mustRemember: 'Chhota business ho ya bada, website trust + booking + repeat business ka multiplier hota hai.',
    },
    {
        id: 'packages',
        short: 'Packages',
        title: 'Package Mastery: Need samjho, phir plan recommend karo',
        tagline: 'Value-led pricing',
        why: 'Price pe jump karne se resistance aata hai. Need ke baad recommendation dene se close easy hota hai.',
        keyPoints: [
            'Basic Website (Rs 11,999): 5-6 pages, mobile friendly, inquiry form, WhatsApp, 2 years hosting/maintenance.',
            'Premium Website (Rs 14,999): 8-10 pages, stronger branding, basic SEO, 5 years hosting/maintenance.',
            'Custom WebApp (Rs 29,999): backend/admin, booking/appointments, lead/order flow, 3 years hosting/maintenance.',
            'Upsell line: "Hum website ke saath mobile app aur custom software bhi build karte hain."',
        ],
        mustRemember: 'Price ko feature list nahi, business outcome ke saath connect karo.',
    },
    {
        id: 'call-flow',
        short: 'Call Flow',
        title: '4-Step Calling Framework',
        tagline: 'Permission to meeting',
        why: 'Simple framework se call controlled rehta hai, random nahi hota.',
        keyPoints: [
            'Step 1: Permission + time respect ("1 minute hoga?").',
            'Step 2: Observation (Google profile strong, website gap).',
            'Step 3: Proof offer (2-minute testimonial WhatsApp).',
            'Step 4: Meeting ask (10-15 minute quick discussion).',
        ],
        script: [
            'Opening: "Namaste Sir/Ma\'am, main Ananya bol rahi hoon Software Studios se. Aapke paas 1 minute hoga?"',
            'Gap line: "Aapki rating/reviews achhi hain, bas website presence mein ek improvement opportunity dikhi."',
            'Proof line: "Main ek 2-minute testimonial bhej doon WhatsApp pe? Useful lage to quick meeting rakh lete hain."',
        ],
        mustRemember: 'Har step pe owner ko control ka feel do: "Agar relevant na lage to ignore kar dijiye."',
    },
    {
        id: 'objections',
        short: 'Objections',
        title: 'Objection Handling Playbook',
        tagline: 'Handle, don\'t argue',
        why: 'Objection rejection nahi hota. Objection ka matlab hai owner aur clarity chahta hai.',
        qa: [
            {
                q: '"Website ki zarurat nahi."',
                a: '"Bilkul Sir, business chal raha hai. Website ka fayda new customer trust aur inquiries mein hota hai. Main 2-minute example bhej deti hoon, aap dekh kar decide kariye."',
            },
            {
                q: '"Instagram/Facebook se kaam chal raha hai."',
                a: '"Social media traffic ke liye best hai, but website aapki official identity hoti hai. Social + website combination conversion improve karta hai."',
            },
            {
                q: '"Budget 5k-6k hai."',
                a: '"Samajh sakti hoon Sir. Chaliye 10 minute meeting mein scope align karte hain. Basic se start karke phase-wise upgrade bhi kar sakte hain."',
            },
            {
                q: '"Busy hoon, baad mein."',
                a: '"No problem Sir. Main proof WhatsApp kar deti hoon. Main kal [time] pe 2-minute follow-up kar loon?"',
            },
        ],
        mustRemember: 'Low-budget lead ko drop mat karo. Meeting fix karo, scope optimize karo.',
    },
    {
        id: 'industry-pitches',
        short: 'Industry Pitch',
        title: 'Industry-wise quick pitch lines',
        tagline: 'Context sells',
        why: 'Generic pitch weak hoti hai. Industry-specific line owner ko instantly relevant lagti hai.',
        keyPoints: [
            'Restaurants/Cafes: direct orders + table booking + repeat customer retention.',
            'Hotels: rooms gallery, call/inquiry flow, location trust, optional custom booking system.',
            'Architects/Interiors: premium portfolio positioning, one clean shareable link.',
            'Clinics/Salons: appointment forms + WhatsApp quick booking + credibility.',
        ],
        mustRemember: 'Pitch ko category language mein bolo, IT language mein nahi.',
    },
    {
        id: 'whatsapp',
        short: 'Follow-up',
        title: 'WhatsApp Follow-up Templates',
        tagline: 'Short, clean, action-driven',
        why: 'Follow-up template crisp hoga to response rate improve hota hai.',
        script: [
            'Template 1: "Hi Sir/Ma\'am, Ananya from Software Studios. As discussed, 2-minute client testimonial: [link]. Sample website: [link]. Useful lage to 10-15 minute demo schedule kar dete hain."',
            'Template 2: "Sir/Ma\'am, kal jo video bheja tha dekhne ka time mila? Chaho to 10 minute mein Basic vs Premium clear kar deti hoon."',
        ],
        mustRemember: 'Message short rakho. One message = one clear next step.',
    },
    {
        id: 'meeting-close',
        short: 'Meeting Close',
        title: 'Meeting ka objective + closing question',
        tagline: 'Meeting without close is incomplete',
        why: 'Meeting ka end clear choice question par hona chahiye, warna lead delay mode mein chali jaati hai.',
        keyPoints: [
            'Right package recommendation based on business stage.',
            'Live demo + timeline + payment clarity.',
            'Maintenance and support expectation clear karo.',
            'Next action lock karo: advance / kickoff date.',
        ],
        script: [
            'Close question: "Sir, kaunsa option better lag raha hai - Basic se start karein ya Premium (5 years maintenance) zyada value lag rahi hai?"',
        ],
        mustRemember: 'Meeting ke end pe binary choice do. Open-ended ending avoid karo.',
    },
    {
        id: 'non-negotiables',
        short: 'Rules',
        title: 'Non-negotiable daily rules',
        tagline: 'Discipline drives revenue',
        why: 'Consistent behavior hi pipeline ko stable rakhta hai.',
        keyPoints: [
            'Tone always respectful + calm.',
            'Short lines, simple words, no over-technical explanation.',
            'Help-first energy: "I am here to improve your business visibility."',
            'Each call outcome: proof + follow-up time + meeting ask.',
            'CRM/Sheet notes live update karo.',
        ],
        mustRemember: 'Aaj ka disciplined follow-up = kal ka easy close.',
    },
    {
        id: 'daily-mantra',
        short: 'Mantra',
        title: 'Daily mantra + quick cheatsheet mode',
        tagline: 'Clarity in one line',
        why: 'Agar line clear hai to pitch clear hota hai, confidence naturally strong hota hai.',
        keyPoints: [
            'Daily mantra: "Main website nahi bechti; main owner ko online gap dikhakar next step tak le jaati hoon."',
            'Before first call: trust line revise karo.',
            'Before follow-up block: proof links ready rakho.',
            'Before meeting: package recommendation by category pre-decide karo.',
        ],
        mustRemember: 'Consultation mindset rakho, pressure mindset hatao.',
    },
];

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const highlightText = (text, query) => {
    if (!query) return text;
    const safeQuery = escapeRegExp(query);
    const regex = new RegExp(`(${safeQuery})`, 'ig');
    const parts = text.split(regex);

    return parts.map((part, index) => {
        if (part.toLowerCase() === query.toLowerCase()) {
            return (
                <mark key={`${part}-${index}`} className="rounded bg-amber-200 px-1 text-slate-900">
                    {part}
                </mark>
            );
        }
        return <React.Fragment key={`${part}-${index}`}>{part}</React.Fragment>;
    });
};

const getChapterSearchText = (chapter) => {
    const pool = [
        chapter.title,
        chapter.tagline,
        chapter.why,
        chapter.mustRemember,
        ...(chapter.keyPoints || []),
        ...(chapter.script || []),
        ...((chapter.qa || []).flatMap((item) => [item.q, item.a])),
        chapter.comparison?.title || '',
        ...((chapter.comparison?.columns || [])),
        ...((chapter.comparison?.rows || []).flat()),
    ];

    return pool.join(' ').toLowerCase();
};

const ChapterCard = ({ chapter, index, query }) => {
    return (
        <section id={chapter.id} className="scroll-mt-28 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 lg:p-8">
            <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold tracking-wide text-indigo-700">
                    Chapter {index + 1}
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">{highlightText(chapter.tagline, query)}</span>
            </div>

            <h2
                className="mb-3 text-2xl font-semibold leading-tight text-slate-900"
                style={{ fontFamily: '"DM Serif Display", "Georgia", serif' }}
            >
                {highlightText(chapter.title, query)}
            </h2>

            <p className="mb-4 text-sm leading-7 text-slate-700">{highlightText(chapter.why, query)}</p>

            {chapter.keyPoints && chapter.keyPoints.length > 0 && (
                <ul className="mb-5 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
                    {chapter.keyPoints.map((point) => (
                        <li key={point}>{highlightText(point, query)}</li>
                    ))}
                </ul>
            )}

            {chapter.comparison && (
                <div className="mb-5 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                    <div className="border-b border-slate-200 bg-white px-4 py-3">
                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Comparison Table</p>
                        <p className="mt-1 text-sm font-semibold text-slate-900">{highlightText(chapter.comparison.title, query)}</p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-left text-sm text-slate-700">
                            <thead className="bg-slate-100 text-xs uppercase tracking-[0.08em] text-slate-600">
                                <tr>
                                    {chapter.comparison.columns.map((column) => (
                                        <th key={column} className="px-4 py-3 font-semibold">
                                            {highlightText(column, query)}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                                {chapter.comparison.rows.map((row) => (
                                    <tr key={row[0]} className="bg-white align-top">
                                        {row.map((cell, cellIndex) => (
                                            <td
                                                key={`${row[0]}-${cellIndex}`}
                                                className={`px-4 py-3 leading-6 ${cellIndex === 0 ? 'font-semibold text-slate-900' : ''}`}
                                            >
                                                {highlightText(cell, query)}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {chapter.script && chapter.script.length > 0 && (
                <div className="mb-5 rounded-2xl border border-sky-100 bg-sky-50 p-4">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-sky-700">Ready-to-use lines</p>
                    <div className="space-y-2 text-sm leading-7 text-slate-700">
                        {chapter.script.map((line) => (
                            <p key={line}>{highlightText(line, query)}</p>
                        ))}
                    </div>
                </div>
            )}

            {chapter.qa && chapter.qa.length > 0 && (
                <div className="mb-5 space-y-3">
                    {chapter.qa.map((item) => (
                        <article key={item.q} className="rounded-xl border border-slate-200 p-4">
                            <h3 className="mb-2 text-sm font-semibold text-slate-900">{highlightText(item.q, query)}</h3>
                            <p className="text-sm leading-7 text-slate-700">{highlightText(item.a, query)}</p>
                        </article>
                    ))}
                </div>
            )}

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-amber-800">Important highlight</p>
                <p className="mt-1 text-sm font-medium leading-7 text-amber-900">{highlightText(chapter.mustRemember, query)}</p>
            </div>
        </section>
    );
};

const BdePage = () => {
    const [passInput, setPassInput] = useState('');
    const [error, setError] = useState('');
    const [query, setQuery] = useState('');
    const [isUnlocked, setIsUnlocked] = useState(() => {
        if (typeof window === 'undefined') return false;
        return window.sessionStorage.getItem(ACCESS_KEY) === 'granted';
    });

    const unlock = (event) => {
        event.preventDefault();

        if (passInput.trim() === PASSCODE) {
            window.sessionStorage.setItem(ACCESS_KEY, 'granted');
            setIsUnlocked(true);
            setError('');
            return;
        }

        setError('Incorrect passcode. Please enter valid key.');
    };

    const lockPage = () => {
        window.sessionStorage.removeItem(ACCESS_KEY);
        setIsUnlocked(false);
        setPassInput('');
        setError('');
        setQuery('');
    };

    const normalizedQuery = query.trim().toLowerCase();

    const filteredChapters = useMemo(() => {
        if (!normalizedQuery) return CHAPTERS;
        return CHAPTERS.filter((chapter) => getChapterSearchText(chapter).includes(normalizedQuery));
    }, [normalizedQuery]);

    if (!isUnlocked) {
        return (
            <>
                <SEOHead
                    title="BDE Access | SoftwareStudios"
                    description="Protected BDE sales training portal."
                    path="/bde/"
                />
                <div className="min-h-screen bg-slate-100 px-4 py-20" style={{ fontFamily: '"Poppins", "Segoe UI", sans-serif' }}>
                    <div className="mx-auto max-w-md rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-indigo-600">Protected Portal</p>
                        <h1 className="mb-2 text-2xl font-semibold text-slate-900">BDE Sales Playbook</h1>
                        <p className="mb-6 text-sm leading-6 text-slate-600">Passcode daal kar chapter-wise training guide unlock kijiye.</p>

                        <form onSubmit={unlock} className="space-y-4">
                            <label className="block text-sm font-medium text-slate-700">
                                Passcode
                                <input
                                    type="password"
                                    value={passInput}
                                    onChange={(event) => setPassInput(event.target.value)}
                                    className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                                    placeholder="Enter key"
                                    required
                                />
                            </label>

                            {error && <p className="text-sm font-medium text-red-600">{error}</p>}

                            <button
                                type="submit"
                                className="w-full rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-500"
                            >
                                Unlock BDE Chapters
                            </button>
                        </form>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <SEOHead
                title="BDE Sales Playbook | SoftwareStudios"
                description="Chapter-wise Hinglish sales guide with quick search and objection handling for BDE team."
                path="/bde/"
            />

            <div className="min-h-screen bg-slate-100 px-4 py-10" style={{ fontFamily: '"Poppins", "Segoe UI", sans-serif' }}>
                <div className="mx-auto max-w-7xl space-y-6">
                    <header className="rounded-3xl bg-gradient-to-r from-indigo-700 via-indigo-600 to-sky-500 p-7 text-white shadow-xl lg:p-9">
                        <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-indigo-100">SoftwareStudios Internal - BDE</p>
                            <button
                                onClick={lockPage}
                                className="rounded-lg border border-white/30 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-white/10"
                            >
                                Lock Page
                            </button>
                        </div>

                        <h1 className="text-3xl font-bold leading-tight lg:text-4xl" style={{ fontFamily: '"DM Serif Display", "Georgia", serif' }}>
                            Chapter-wise Sales Playbook (Hinglish)
                        </h1>
                        <p className="mt-3 max-w-4xl text-sm leading-7 text-indigo-100 lg:text-base">
                            Jab bhi customer koi sawal puche, quick search karo, relevant chapter kholo, aur ready response use karo.
                            Ye page live call support ke liye optimized hai.
                        </p>

                        <div className="mt-5 rounded-2xl bg-white/12 p-4 backdrop-blur-sm">
                            <label className="text-xs font-semibold uppercase tracking-[0.12em] text-indigo-100">Search by objection, package, script, industry...</label>
                            <input
                                type="text"
                                value={query}
                                onChange={(event) => setQuery(event.target.value)}
                                placeholder="e.g. budget 5k, instagram, restaurant, 12 saal, meeting close"
                                className="mt-2 w-full rounded-xl border border-white/30 bg-white/95 px-4 py-2.5 text-sm text-slate-800 outline-none ring-indigo-200 placeholder:text-slate-400 focus:ring-2"
                            />
                            <p className="mt-2 text-xs text-indigo-100">
                                Showing <span className="font-semibold text-white">{filteredChapters.length}</span> of {CHAPTERS.length} chapters.
                            </p>
                        </div>
                    </header>

                    <div className="grid gap-6 lg:grid-cols-[290px_minmax(0,1fr)]">
                        <aside className="hidden lg:block">
                            <div className="sticky top-24 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                                <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.1em] text-slate-500">Quick Chapter Jump</h2>
                                <nav className="max-h-[70vh] space-y-2 overflow-y-auto pr-1">
                                    {filteredChapters.map((chapter, index) => (
                                        <a
                                            key={chapter.id}
                                            href={`#${chapter.id}`}
                                            className="block rounded-xl border border-slate-200 px-3 py-2 text-sm leading-6 text-slate-700 transition hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700"
                                        >
                                            <span className="mr-2 text-xs font-semibold text-indigo-600">{String(index + 1).padStart(2, '0')}</span>
                                            {highlightText(chapter.title, normalizedQuery)}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </aside>

                        <main className="space-y-5">
                            <div className="lg:hidden">
                                <div className="overflow-x-auto pb-2">
                                    <div className="flex w-max gap-2">
                                        {filteredChapters.map((chapter, index) => (
                                            <a
                                                key={chapter.id}
                                                href={`#${chapter.id}`}
                                                className="whitespace-nowrap rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700"
                                            >
                                                {index + 1}. {chapter.short}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {filteredChapters.length === 0 && (
                                <div className="rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-200">
                                    <h3 className="text-lg font-semibold text-slate-900">No chapter matched your search</h3>
                                    <p className="mt-2 text-sm text-slate-600">Try keywords like: budget, objection, restaurant, script, closing.</p>
                                </div>
                            )}

                            {filteredChapters.map((chapter, index) => (
                                <ChapterCard
                                    key={chapter.id}
                                    chapter={chapter}
                                    index={index}
                                    query={normalizedQuery}
                                />
                            ))}
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BdePage;
