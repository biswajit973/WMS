import React from 'react';

const tones = [
    'from-sky-50 to-white',
    'from-amber-50 to-white',
    'from-emerald-50 to-white',
    'from-rose-50 to-white',
    'from-violet-50 to-white',
];

const FunnelVisual = ({ visual }) => (
    <div className="space-y-3">
        {visual.items.map((item, index) => (
            <div
                key={item.label}
                className={`mx-auto rounded-[24px] border border-stone-200 bg-gradient-to-r px-4 py-4 text-center ${tones[index % tones.length]}`}
                style={{ width: `${92 - index * 12}%` }}
            >
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-500">{item.label}</p>
                <p className="mt-1 text-2xl font-semibold text-stone-950">{item.value}</p>
            </div>
        ))}
    </div>
);

const BarsVisual = ({ visual }) => (
    <div className="space-y-4">
        {visual.items.map((item) => (
            <div key={item.label}>
                <div className="mb-2 flex items-center justify-between gap-3">
                    <div>
                        <p className="text-sm font-semibold text-stone-950">{item.label}</p>
                        <p className="text-xs text-stone-500">{item.helper}</p>
                    </div>
                    <span className="text-sm font-semibold text-stone-950">{item.value}%</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-stone-200">
                    <div className="h-full rounded-full bg-gradient-to-r from-sky-500 via-indigo-500 to-violet-500" style={{ width: `${item.value}%` }} />
                </div>
            </div>
        ))}
    </div>
);

const LadderVisual = ({ visual }) => (
    <div className="grid gap-4 md:grid-cols-3">
        {visual.items.map((item, index) => (
            <div key={item.label} className="relative rounded-[24px] border border-stone-200 bg-white p-5">
                <span className="absolute right-4 top-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-400">Step {index + 1}</span>
                <p className="text-sm font-semibold text-stone-700">{item.label}</p>
                <p className="mt-2 text-3xl font-semibold text-stone-950">{item.value}</p>
                <p className="mt-3 text-sm leading-6 text-stone-600">{item.helper}</p>
            </div>
        ))}
    </div>
);

const TimelineVisual = ({ visual }) => (
    <div className="space-y-4">
        {visual.items.map((item, index) => (
            <div key={item.label} className="flex gap-4">
                <div className="flex flex-col items-center">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-stone-900 text-xs font-bold text-white">
                        {index + 1}
                    </div>
                    {index < visual.items.length - 1 && <div className="mt-2 h-12 w-px bg-stone-200" />}
                </div>
                <div className="rounded-[24px] border border-stone-200 bg-white p-4">
                    <p className="text-sm font-semibold text-stone-950">{item.label}</p>
                    <p className="mt-1 text-sm leading-6 text-stone-600">{item.helper}</p>
                </div>
            </div>
        ))}
    </div>
);

const ClusterVisual = ({ visual }) => (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
        {visual.items.map((item, index) => (
            <div
                key={item.label}
                className={`rounded-[24px] border border-stone-200 bg-gradient-to-br p-5 ${tones[index % tones.length]}`}
            >
                <p className="text-sm font-semibold text-stone-950">{item.label}</p>
                <p className="mt-2 text-sm leading-6 text-stone-600">{item.helper}</p>
            </div>
        ))}
    </div>
);

const StackVisual = ({ visual }) => (
    <div className="space-y-3">
        {visual.items.map((item, index) => (
            <div
                key={item.label}
                className="rounded-[24px] border border-stone-200 bg-white p-4"
                style={{ marginLeft: `${index * 12}px`, marginRight: `${index * 12}px` }}
            >
                <p className="text-sm font-semibold text-stone-950">{item.label}</p>
                <p className="mt-1 text-sm leading-6 text-stone-600">{item.value}</p>
            </div>
        ))}
    </div>
);

const visualMap = {
    funnel: FunnelVisual,
    bars: BarsVisual,
    ladder: LadderVisual,
    timeline: TimelineVisual,
    clusters: ClusterVisual,
    stack: StackVisual,
};

const ChapterVisual = ({ visual }) => {
    if (!visual) {
        return null;
    }

    const VisualComponent = visualMap[visual.type];

    if (!VisualComponent) {
        return null;
    }

    return (
        <section className="rounded-[30px] border border-stone-200 bg-white p-5 shadow-sm lg:p-7">
            <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
                <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">Visual aid</p>
                    <h2 className="mt-2 text-xl font-semibold text-stone-950">{visual.title}</h2>
                </div>
                {visual.note && (
                    <p className="max-w-xl text-sm leading-6 text-stone-500">{visual.note}</p>
                )}
            </div>

            <VisualComponent visual={visual} />
        </section>
    );
};

export default ChapterVisual;
