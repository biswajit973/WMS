import React, { useDeferredValue, useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { INDUSTRIES, INDUSTRY_CATEGORIES, INDUSTRY_DEAL_BANDS, INDUSTRY_TIERS } from '../data/industries';

const FEATURED_IDS = [
    'jewellers',
    'doctors-solo-clinics',
    'lawyers-law-firms',
    'architects',
    'interior-designers',
    'builders-construction-firms',
    'private-schools',
    'hospitals-multi-specialty-clinics',
    'salons-spas',
    'makeup-artists',
    'wedding-planners-event-managers',
    'hotels-resorts',
    'car-rental-fleets',
    'self-drive-car-rentals',
    'driving-schools',
    'pet-trainers',
    'pet-shops',
    'gift-shops-gift-houses',
    'textile-big-cloth-stores',
    'product-based-brand-stores',
    'physiotherapy-rehab-centres',
];

const filterOptions = (items, activeTier, activeCategory, activeDealBand, query) => {
    const lowerQuery = query.trim().toLowerCase();

    return items.filter((item) => {
        const matchesTier = activeTier === 'All' || item.tier === activeTier;
        const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
        const matchesDealBand = activeDealBand === 'All' || item.dealBand === activeDealBand;
        const matchesQuery = !lowerQuery || [
            item.name,
            item.openingLine,
            item.whatTheyCareAbout,
            item.fomo,
            item.websiteAngle,
            item.likelyObjection,
            item.recommendedPackage,
        ].join(' ').toLowerCase().includes(lowerQuery);

        return matchesTier && matchesCategory && matchesDealBand && matchesQuery;
    });
};

const IndustryExplorer = () => {
    const location = useLocation();
    const [query, setQuery] = useState('');
    const [activeTier, setActiveTier] = useState('All');
    const [activeCategory, setActiveCategory] = useState('All');
    const [activeDealBand, setActiveDealBand] = useState('All');
    const [activeId, setActiveId] = useState('jewellers');
    const deferredQuery = useDeferredValue(query);

    const featured = useMemo(() => INDUSTRIES.filter((item) => FEATURED_IDS.includes(item.id)), []);
    const filtered = useMemo(
        () => filterOptions(INDUSTRIES, activeTier, activeCategory, activeDealBand, deferredQuery),
        [activeCategory, activeDealBand, activeTier, deferredQuery],
    );

    useEffect(() => {
        if (!filtered.length) {
            setActiveId(null);
            return;
        }

        if (!filtered.some((item) => item.id === activeId)) {
            setActiveId(filtered[0].id);
        }
    }, [activeId, filtered]);

    useEffect(() => {
        if (!location.hash) {
            return;
        }

        const targetId = location.hash.replace('#', '');
        setActiveId(targetId);

        const target = document.getElementById(targetId);
        if (target) {
            window.setTimeout(() => {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 120);
        }
    }, [location.hash]);

    return (
        <section className="space-y-5">
            <div className="rounded-[28px] border border-stone-200 bg-stone-50 p-5">
                <div className="flex flex-wrap items-end justify-between gap-4">
                    <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">Industry filters</p>
                        <h3 className="mt-2 text-2xl font-semibold text-stone-950">Open only the business you need</h3>
                        <p className="mt-2 max-w-3xl text-sm leading-7 text-stone-600">
                            Search first, then expand one industry card. This keeps the page easy during live calls.
                        </p>
                    </div>
                    <div className="rounded-full bg-white px-4 py-2 text-sm font-medium text-stone-700">
                        Showing <span className="font-semibold text-stone-950">{filtered.length}</span> of {INDUSTRIES.length}
                    </div>
                </div>

                <div className="mt-5 grid gap-3 lg:grid-cols-[minmax(0,1.6fr)_repeat(3,minmax(0,1fr))]">
                    <input
                        type="text"
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        placeholder="Search doctors, jewellers, rural, package, objection..."
                        className="rounded-[22px] border border-stone-200 bg-white px-4 py-3 text-sm text-stone-700 outline-none transition focus:border-sky-300"
                    />

                    <select value={activeTier} onChange={(event) => setActiveTier(event.target.value)} className="rounded-[22px] border border-stone-200 bg-white px-4 py-3 text-sm text-stone-700 outline-none transition focus:border-sky-300">
                        {INDUSTRY_TIERS.map((option) => <option key={option}>{option}</option>)}
                    </select>

                    <select value={activeCategory} onChange={(event) => setActiveCategory(event.target.value)} className="rounded-[22px] border border-stone-200 bg-white px-4 py-3 text-sm text-stone-700 outline-none transition focus:border-sky-300">
                        {INDUSTRY_CATEGORIES.map((option) => <option key={option}>{option}</option>)}
                    </select>

                    <select value={activeDealBand} onChange={(event) => setActiveDealBand(event.target.value)} className="rounded-[22px] border border-stone-200 bg-white px-4 py-3 text-sm text-stone-700 outline-none transition focus:border-sky-300">
                        {INDUSTRY_DEAL_BANDS.map((option) => <option key={option}>{option}</option>)}
                    </select>
                </div>
            </div>

            <div className="rounded-[28px] border border-amber-200 bg-amber-50 p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-700">Most-used business types</p>
                <div className="mt-4 flex flex-wrap gap-2">
                    {featured.map((item) => (
                        <button
                            key={item.id}
                            type="button"
                            onClick={() => setActiveId(item.id)}
                            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                                activeId === item.id
                                    ? 'border-stone-900 bg-stone-900 text-white'
                                    : 'border-amber-200 bg-white text-stone-700 hover:border-stone-300'
                            }`}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>
            </div>

            <div className="space-y-3">
                {filtered.length > 0 ? filtered.map((item) => {
                    const isOpen = activeId === item.id;

                    return (
                        <article
                            id={item.id}
                            key={item.id}
                            className={`scroll-mt-28 rounded-[28px] border bg-white shadow-sm transition ${
                                isOpen ? 'border-stone-900' : 'border-stone-200'
                            }`}
                        >
                            <button
                                type="button"
                                onClick={() => setActiveId(isOpen ? null : item.id)}
                                className="w-full rounded-[28px] px-5 py-5 text-left"
                            >
                                <div className="flex flex-wrap items-start justify-between gap-4">
                                    <div className="min-w-0">
                                        <div className="flex flex-wrap items-center gap-2">
                                            <span className="rounded-full bg-stone-900 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white">{item.tier}</span>
                                            <span className="rounded-full bg-sky-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-sky-700">{item.category}</span>
                                            <span className="rounded-full bg-amber-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-700">{item.recommendedPackage}</span>
                                        </div>
                                        <h4 className="mt-3 text-xl font-semibold text-stone-950">{item.name}</h4>
                                        <p className="mt-2 text-sm leading-7 text-stone-600">{item.openingLine}</p>
                                        <p className="mt-2 text-sm text-stone-500">{item.cityFit}</p>
                                    </div>

                                    <span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-stone-600">
                                        {isOpen ? 'Hide details' : 'Open details'}
                                    </span>
                                </div>
                            </button>

                            {isOpen && (
                                <div className="border-t border-stone-200 px-5 py-5">
                                    <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_360px]">
                                        <div className="space-y-4">
                                            <div className="rounded-[22px] border border-stone-200 bg-stone-50 p-4">
                                                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-500">What they care about</p>
                                                <p className="mt-2 text-sm leading-7 text-stone-700">{item.whatTheyCareAbout}</p>
                                            </div>
                                            <div className="rounded-[22px] border border-stone-200 bg-stone-50 p-4">
                                                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-500">FOMO line</p>
                                                <p className="mt-2 text-sm leading-7 text-stone-700">{item.fomo}</p>
                                            </div>
                                            <div className="rounded-[22px] border border-stone-200 bg-stone-50 p-4">
                                                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-500">Best website angle</p>
                                                <p className="mt-2 text-sm leading-7 text-stone-700">{item.websiteAngle}</p>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="rounded-[22px] border border-stone-200 bg-stone-50 p-4">
                                                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-500">Likely objection</p>
                                                <p className="mt-2 text-sm leading-7 text-stone-700">{item.likelyObjection}</p>
                                            </div>
                                            <div className="rounded-[22px] border border-sky-200 bg-sky-50 p-4">
                                                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-700">Reply</p>
                                                <p className="mt-2 text-sm leading-7 text-sky-950">{item.objectionReply}</p>
                                            </div>
                                            <div className="rounded-[22px] border border-emerald-200 bg-emerald-50 p-4">
                                                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-700">ROI logic</p>
                                                <p className="mt-2 text-sm leading-7 text-emerald-950">{item.roiLine}</p>
                                            </div>
                                            <div className="rounded-[22px] border border-amber-200 bg-amber-50 p-4">
                                                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-700">WhatsApp follow-up</p>
                                                <p className="mt-2 text-sm leading-7 text-amber-950">{item.whatsappLine}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </article>
                    );
                }) : (
                    <div className="rounded-[28px] border border-stone-200 bg-stone-50 p-5 text-sm leading-7 text-stone-600">
                        No industry matched this filter. Try a broader search or switch one filter back to `All`.
                    </div>
                )}
            </div>
        </section>
    );
};

export default IndustryExplorer;
