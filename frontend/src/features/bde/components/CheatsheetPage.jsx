import React from 'react';

const cheatsheetBlocks = [
    {
        title: 'One-line core pitch',
        lines: [
            'We help local businesses look more trusted online so customers feel ready to call or visit.',
            'Hum businesses ko online zyada trusted dikhate hain so customer call ya visit karne ke liye ready feel kare.',
        ],
    },
    {
        title: '3 price lines to remember',
        lines: [
            '₹30,000 is the value anchor.',
            '₹25,000 is the main growth close.',
            '₹8,000 is a small-scope starter and we never go below that.',
        ],
    },
    {
        title: 'Best first-call close',
        lines: [
            'Can I send one simple example on WhatsApp?',
            'Kya main ek simple sample WhatsApp par bhej sakta/sakti hoon?',
        ],
    },
    {
        title: 'When the owner says Maps is enough',
        lines: [
            'Maps shows competitors beside you. Your website shows only your brand.',
        ],
    },
    {
        title: 'When the owner says price is high',
        lines: [
            'This is a one-time trust asset. One good customer can recover the cost.',
        ],
    },
    {
        title: 'Best trust stack',
        lines: [
            '12 years experience',
            'City presence',
            'Portfolio links',
            'Reviews and client proof',
            'Support after launch',
        ],
    },
    {
        title: 'Good business-fit question',
        lines: [
            'How do most new customers find you right now?',
            'Abhi naye customers aap tak zyada kis way se aate hain?',
        ],
    },
    {
        title: 'Daily discipline',
        lines: [
            '60 calls',
            'Same-day WhatsApp follow-up',
            'Hot leads first next day',
            'Notes updated before day end',
        ],
    },
];

const CheatsheetPage = () => (
    <div className="space-y-8">
        <section className="border-b border-[#eadfca] pb-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-500">Reference</p>
            <h1 className="bde-docs-title mt-4 text-5xl leading-none text-stone-900 lg:text-6xl">Quick Cheatsheet</h1>
            <p className="mt-5 max-w-3xl text-[16px] leading-8 text-stone-700">
                Read this right before a calling block. It keeps the main lines in one clean place.
            </p>
        </section>

        <div className="space-y-4">
            {cheatsheetBlocks.map((block) => (
                <article key={block.title} className="rounded-[18px] border border-[#eadfca] bg-[#fcfaf5] p-5">
                    <p className="text-lg font-semibold text-stone-900">{block.title}</p>
                    <div className="mt-4 space-y-3">
                        {block.lines.map((line) => (
                            <p key={line} className="text-[15px] leading-8 text-stone-700">
                                • {line}
                            </p>
                        ))}
                    </div>
                </article>
            ))}
        </div>
    </div>
);

export default CheatsheetPage;
