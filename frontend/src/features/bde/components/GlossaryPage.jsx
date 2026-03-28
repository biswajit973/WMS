import React, { useDeferredValue, useState } from 'react';
import { GLOSSARY } from '../data/glossary';

const GlossaryPage = () => {
    const [query, setQuery] = useState('');
    const deferredQuery = useDeferredValue(query);
    const lowerQuery = deferredQuery.trim().toLowerCase();
    const filtered = GLOSSARY.filter((item) => {
        if (!lowerQuery) {
            return true;
        }

        return `${item.term} ${item.meaning}`.toLowerCase().includes(lowerQuery);
    });

    return (
        <div className="space-y-8">
            <section className="border-b border-[#eadfca] pb-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-500">Reference</p>
                <h1 className="bde-docs-title mt-4 text-5xl leading-none text-stone-900 lg:text-6xl">Glossary</h1>
                <p className="mt-5 max-w-3xl text-[16px] leading-8 text-stone-700">
                    Simple meanings for common sales and website words, so a new rep can read confidently.
                </p>
                <input
                    type="text"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search SEO, FOMO, ROI, lead..."
                    className="mt-6 w-full max-w-xl rounded-[14px] border border-[#ddd0bb] bg-[#fcfaf5] px-4 py-3 text-sm text-stone-700 outline-none transition focus:border-[#ba9d6d] focus:bg-white"
                />
            </section>

            <div className="space-y-4">
                {filtered.map((item) => (
                    <article key={item.term} className="rounded-[18px] border border-[#eadfca] bg-[#fcfaf5] p-5">
                        <p className="text-lg font-semibold text-stone-900">{item.term}</p>
                        <p className="mt-3 text-[15px] leading-8 text-stone-700">{item.meaning}</p>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default GlossaryPage;
