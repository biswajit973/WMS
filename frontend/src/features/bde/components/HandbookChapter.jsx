import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ChapterVisual from './ChapterVisual';
import QuizCard from './QuizCard';
import { GLOSSARY, glossaryMap } from '../data/glossary';

const toneClasses = {
    gold: 'border-amber-200 bg-amber-50 text-amber-950',
    tip: 'border-sky-200 bg-sky-50 text-sky-950',
    warning: 'border-rose-200 bg-rose-50 text-rose-950',
    info: 'border-emerald-200 bg-emerald-50 text-emerald-950',
};

const slugifySection = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const SectionTable = ({ table }) => (
    <div className="overflow-hidden rounded-[16px] border border-[#eadfca] bg-[#fcfaf5]">
        <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm text-stone-700">
                <thead className="border-b border-[#eadfca] bg-[#f7f1e5] text-[11px] uppercase tracking-[0.16em] text-stone-600">
                    <tr>
                        {table.columns.map((column) => (
                            <th key={column} className="px-4 py-3 font-semibold">{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-[#eadfca]">
                    {table.rows.map((row) => (
                        <tr key={row.join('-')} className="align-top">
                            {row.map((cell, index) => (
                                <td key={`${cell}-${index}`} className={`px-4 py-3 leading-7 ${index === 0 ? 'font-semibold text-stone-900' : ''}`}>
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

const TimelineSection = ({ items }) => (
    <div className="space-y-4">
        {items.map((item, index) => (
            <div key={`${item.time}-${index}`} className="flex gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#efe8d7] text-sm font-semibold text-stone-900">
                    {index + 1}
                </div>
                <div>
                    <p className="text-sm font-semibold text-stone-900">{item.time}</p>
                    <p className="mt-1 text-[15px] leading-8 text-stone-700">{item.text}</p>
                </div>
            </div>
        ))}
    </div>
);

const ScriptSection = ({ englishScript, hinglishScript }) => {
    const hasEnglish = Boolean(englishScript?.length);
    const hasHinglish = Boolean(hinglishScript?.length);
    const [mode, setMode] = useState(hasHinglish ? 'hinglish' : 'english');
    const items = mode === 'hinglish' ? hinglishScript : englishScript;

    if (!hasEnglish && !hasHinglish) {
        return null;
    }

    return (
        <section className="border-t border-[#eadfca] pt-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">Live script</p>
                    <h2 className="mt-2 text-2xl font-semibold text-stone-900">Practice this once before the next call</h2>
                </div>
                <div className="inline-flex rounded-full border border-[#eadfca] bg-[#fcfaf5] p-1">
                    {hasEnglish && (
                        <button
                            type="button"
                            onClick={() => setMode('english')}
                            className={`rounded-full px-4 py-2 text-sm font-semibold ${mode === 'english' ? 'bg-white text-stone-900' : 'text-stone-600'}`}
                        >
                            English
                        </button>
                    )}
                    {hasHinglish && (
                        <button
                            type="button"
                            onClick={() => setMode('hinglish')}
                            className={`rounded-full px-4 py-2 text-sm font-semibold ${mode === 'hinglish' ? 'bg-white text-stone-900' : 'text-stone-600'}`}
                        >
                            Hinglish
                        </button>
                    )}
                </div>
            </div>

            <div className="mt-5 rounded-[18px] border border-[#eadfca] bg-[#fcfaf5] p-5">
                <div className="space-y-4">
                    {items.map((item) => (
                        <div key={`${item.speaker}-${item.line}`}>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-500">{item.speaker}</p>
                            <p className="mt-2 text-[15px] leading-8 text-stone-800">{item.line}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const HandbookChapter = ({
    chapter,
    quizItems,
    savedScore,
    onScoreChange,
    prevChapter,
    nextChapter,
    extraContent,
}) => {
    const location = useLocation();
    const termEntries = chapter.glossaryTerms
        .map((term) => GLOSSARY.find((item) => item.term === term) || { term, meaning: glossaryMap[term.toLowerCase()] })
        .filter(Boolean);

    useEffect(() => {
        if (location.hash) {
            const target = document.getElementById(location.hash.replace('#', ''));
            if (target) {
                window.setTimeout(() => {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 80);
            }
            return;
        }

        window.scrollTo({ top: 0, behavior: 'auto' });
    }, [chapter.slug, location.hash]);

    return (
        <div className="space-y-8">
            <section className="border-b border-[#eadfca] pb-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-500">Chapter {chapter.number}</p>
                <h1 className="bde-docs-title mt-4 text-5xl leading-none text-stone-900 lg:text-6xl">{chapter.title}</h1>
                <p className="mt-5 max-w-3xl text-[16px] leading-8 text-stone-700">{chapter.subtitle}</p>

                <div className="mt-6 grid gap-4 lg:grid-cols-[minmax(0,1.4fr)_320px]">
                    <div className="rounded-[18px] border border-[#eadfca] bg-[#fcfaf5] p-5">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-500">Chapter overview</p>
                        <p className="mt-3 text-[15px] leading-8 text-stone-700">{chapter.overview}</p>
                    </div>
                    <div className="rounded-[18px] border border-amber-200 bg-amber-50 p-5">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-700">Remember this</p>
                        <p className="mt-3 text-[15px] font-semibold leading-8 text-amber-950">{chapter.importantLine}</p>
                    </div>
                </div>
            </section>

            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {chapter.keyCards.map((card) => (
                    <article key={card.label} className="rounded-[18px] border border-[#eadfca] bg-[#fcfaf5] p-4">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-500">{card.label}</p>
                        <p className="mt-2 text-2xl font-semibold text-stone-900">{card.value}</p>
                        <p className="mt-2 text-sm leading-7 text-stone-700">{card.text}</p>
                    </article>
                ))}
            </section>

            <section className="grid gap-4 md:grid-cols-2">
                <article className="rounded-[18px] border border-emerald-200 bg-emerald-50 p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-700">What to do</p>
                    <div className="mt-4 space-y-3">
                        {chapter.doList.map((item) => (
                            <p key={item} className="text-sm leading-7 text-emerald-950">• {item}</p>
                        ))}
                    </div>
                </article>
                <article className="rounded-[18px] border border-rose-200 bg-rose-50 p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-rose-700">What not to do</p>
                    <div className="mt-4 space-y-3">
                        {chapter.dontList.map((item) => (
                            <p key={item} className="text-sm leading-7 text-rose-950">• {item}</p>
                        ))}
                    </div>
                </article>
            </section>

            <ChapterVisual visual={chapter.visual} />

            {termEntries.length > 0 && (
                <section className="border-t border-[#eadfca] pt-8">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-500">Simple meanings</p>
                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                        {termEntries.map((item) => (
                            <article key={item.term} className="rounded-[18px] border border-[#eadfca] bg-[#fcfaf5] p-4">
                                <p className="text-sm font-semibold text-stone-900">{item.term}</p>
                                <p className="mt-2 text-sm leading-7 text-stone-700">{item.meaning}</p>
                            </article>
                        ))}
                    </div>
                </section>
            )}

            {chapter.sections.map((section) => (
                <section key={section.title} id={slugifySection(section.title)} className="border-t border-[#eadfca] pt-8">
                    <h2 className="text-2xl font-semibold text-stone-900">{section.title}</h2>

                    {section.paragraphs && (
                        <div className="mt-4 max-w-[72ch] space-y-4">
                            {section.paragraphs.map((paragraph) => (
                                <p key={paragraph} className="text-[15px] leading-8 text-stone-700">{paragraph}</p>
                            ))}
                        </div>
                    )}

                    {section.points && (
                        <div className="mt-5 space-y-3">
                            {section.points.map((point) => (
                                <p key={point} className="text-[15px] leading-8 text-stone-700">• {point}</p>
                            ))}
                        </div>
                    )}

                    {section.callout && (
                        <div className={`mt-5 rounded-[18px] border p-5 ${toneClasses[section.callout.tone] || toneClasses.info}`}>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.16em]">{section.callout.title}</p>
                            <p className="mt-2 max-w-[72ch] text-sm leading-7">{section.callout.text}</p>
                        </div>
                    )}

                    {section.table && (
                        <div className="mt-5">
                            <SectionTable table={section.table} />
                        </div>
                    )}

                    {section.qa && (
                        <div className="mt-5 space-y-4">
                            {section.qa.map((item) => (
                                <article key={item.question} className="rounded-[18px] border border-[#eadfca] bg-[#fcfaf5] p-5">
                                    <p className="text-sm font-semibold text-stone-900">{item.question}</p>
                                    <p className="mt-3 text-[15px] leading-8 text-stone-700">{item.answer}</p>
                                </article>
                            ))}
                        </div>
                    )}

                    {section.timeline && (
                        <div className="mt-5">
                            <TimelineSection items={section.timeline} />
                        </div>
                    )}
                </section>
            ))}

            <section className="border-t border-[#eadfca] pt-8">
                <h2 className="text-2xl font-semibold text-stone-900">Quick rules</h2>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                    <article className="rounded-[18px] border border-amber-200 bg-amber-50 p-5">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-700">Pro tip</p>
                        <p className="mt-2 text-sm leading-7 text-amber-950">{chapter.rules.proTip}</p>
                    </article>
                    <article className="rounded-[18px] border border-[#eadfca] bg-[#f3ebdc] p-5">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-500">Golden rule</p>
                        <p className="mt-2 text-sm leading-7 text-stone-900">{chapter.rules.goldenRule}</p>
                    </article>
                    <article className="rounded-[18px] border border-violet-200 bg-violet-50 p-5">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-violet-700">Thumb rule</p>
                        <p className="mt-2 text-sm leading-7 text-violet-950">{chapter.rules.thumbRule}</p>
                    </article>
                </div>
            </section>

            {extraContent && (
                <section className="border-t border-[#eadfca] pt-8">
                    <h2 className="text-2xl font-semibold text-stone-900">Industry playbook</h2>
                    <p className="mt-3 max-w-3xl text-[15px] leading-8 text-stone-700">
                        Open the business type you need, read the angle, then continue to the next chapter when done.
                    </p>
                    <div className="mt-5">
                        {extraContent}
                    </div>
                </section>
            )}

            <ScriptSection englishScript={chapter.englishScript} hinglishScript={chapter.hinglishScript} />

            <div id="chapter-quiz" className="border-t border-[#eadfca] pt-8">
                <QuizCard chapterSlug={chapter.slug} items={quizItems} savedScore={savedScore} onScoreChange={onScoreChange} />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#eadfca] pt-8">
                {prevChapter ? (
                    <Link
                        to={`/bde/chapter/${prevChapter.slug}`}
                        className="rounded-[14px] border border-[#d8cab1] bg-[#fcfaf5] px-5 py-3 text-sm font-semibold text-stone-800 transition hover:bg-white"
                    >
                        ← Previous chapter
                    </Link>
                ) : (
                    <span />
                )}

                {nextChapter ? (
                    <Link
                        to={`/bde/chapter/${nextChapter.slug}`}
                        className="rounded-[14px] bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-stone-800"
                    >
                        Next chapter →
                    </Link>
                ) : (
                    <span className="text-sm text-stone-500">Last chapter reached.</span>
                )}
            </div>
        </div>
    );
};

export default HandbookChapter;
