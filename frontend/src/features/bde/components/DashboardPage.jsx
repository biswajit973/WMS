import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { CHAPTERS } from '../data/chapters';
import { getCompletionPercentage } from '../utils/storage';

const formatNoteDate = (value) => new Date(value).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
});

const DashboardPage = ({
    scores,
    notes,
    onAddNote,
    onDeleteNote,
    theme,
    welcomeQuote,
    showWelcomeQuote,
    onDismissWelcomeQuote,
}) => {
    const [openNotesSlug, setOpenNotesSlug] = useState(null);
    const [drafts, setDrafts] = useState({});
    const chapterSlugs = CHAPTERS.map((chapter) => chapter.slug);
    const completion = getCompletionPercentage(scores, chapterSlugs);
    const completed = useMemo(
        () => chapterSlugs.filter((slug) => scores[slug]?.passed).length,
        [chapterSlugs, scores],
    );
    const isDark = theme === 'dark';

    const panelClass = isDark
        ? 'rounded-[24px] border border-white/10 bg-slate-950/75 shadow-[0_24px_80px_rgba(2,6,23,0.45)] backdrop-blur'
        : 'rounded-[24px] border border-[#eadfca] bg-[#fcfaf5] shadow-[0_22px_70px_rgba(120,94,59,0.14)]';
    const statPanelClass = isDark
        ? 'rounded-[22px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_18px_60px_rgba(2,6,23,0.34)]'
        : 'rounded-[22px] border border-[#eadfca] bg-[#fcfaf5] p-5 shadow-[0_16px_45px_rgba(120,94,59,0.12)]';
    const titleClass = isDark ? 'text-white' : 'text-stone-900';
    const copyClass = isDark ? 'text-slate-300' : 'text-stone-700';
    const softTextClass = isDark ? 'text-slate-400' : 'text-stone-500';
    const headerBgClass = isDark ? 'bg-white/[0.04]' : 'bg-[#f3ebdc]';
    const rowBorderClass = isDark ? 'border-white/10' : 'border-[#eadfca]';
    const primaryButtonClass = isDark
        ? 'inline-flex rounded-[14px] bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 shadow-[0_14px_35px_rgba(34,211,238,0.25)] transition hover:bg-cyan-300'
        : 'inline-flex rounded-[14px] bg-stone-900 px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(41,37,36,0.22)] transition hover:bg-stone-800';
    const secondaryButtonClass = isDark
        ? 'inline-flex rounded-[14px] border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/[0.08]'
        : 'inline-flex rounded-[14px] border border-[#d8cab1] bg-white px-4 py-3 text-sm font-semibold text-stone-800 transition hover:bg-[#fcfaf5]';
    const noteDeleteButtonClass = isDark
        ? 'rounded-[12px] border border-rose-400/25 bg-rose-500/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-rose-200 transition hover:bg-rose-500/15'
        : 'rounded-[12px] border border-rose-200 bg-rose-50 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-rose-700 transition hover:bg-rose-100';
    const inputClass = isDark
        ? 'mt-3 min-h-[110px] w-full rounded-[16px] border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-400/60'
        : 'mt-3 min-h-[110px] w-full rounded-[16px] border border-[#ddd0bb] bg-white px-4 py-3 text-sm text-stone-700 outline-none transition focus:border-[#ba9d6d]';
    const notePanelClass = isDark
        ? 'rounded-[20px] border border-white/10 bg-white/[0.04] p-4 shadow-[0_16px_45px_rgba(2,6,23,0.28)]'
        : 'rounded-[20px] border border-[#eadfca] bg-[#fcfaf5] p-4 shadow-[0_16px_45px_rgba(120,94,59,0.10)]';
    const notesRowBgClass = isDark ? 'bg-slate-950/55' : 'bg-white';

    const handleAdd = (slug) => {
        const value = drafts[slug] || '';
        if (!value.trim()) {
            return;
        }

        onAddNote(slug, value);
        setDrafts((current) => ({
            ...current,
            [slug]: '',
        }));
    };

    return (
        <div className="space-y-6">
            {showWelcomeQuote && welcomeQuote && (
                <section className="bde-quote-card relative overflow-hidden rounded-[32px] border border-cyan-400/20 p-7 text-white shadow-[0_28px_100px_rgba(8,15,34,0.45)] lg:p-9">
                    <div className="bde-quote-shape bde-quote-shape-one" />
                    <div className="bde-quote-shape bde-quote-shape-two" />
                    <div className="bde-quote-shape bde-quote-shape-three" />

                    <button
                        type="button"
                        onClick={onDismissWelcomeQuote}
                        aria-label="Close quote"
                        className="absolute right-5 top-5 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-lg text-white transition hover:bg-white/15"
                    >
                        x
                    </button>

                    <div className="relative z-10 max-w-4xl">
                        <p className="text-5xl leading-none text-cyan-300">"</p>
                        <p className="mt-5 max-w-3xl text-3xl font-semibold leading-[1.35] text-white lg:text-5xl">
                            {welcomeQuote.text}
                        </p>
                        <p className="mt-6 text-xl font-medium text-cyan-300 lg:text-2xl">- {welcomeQuote.author}</p>
                    </div>
                </section>
            )}

            <section className="space-y-3">
                <p className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${softTextClass}`}>Table of contents</p>
                <div className="flex flex-wrap items-end justify-between gap-4">
                    <div>
                        <h1 className={`bde-docs-title text-5xl leading-none lg:text-6xl ${titleClass}`}>Chapter List</h1>
                        <p className={`mt-4 max-w-3xl text-[15px] leading-8 ${copyClass}`}>
                            Read chapter by chapter. Use `Read now` for content, `Solve quiz` to jump to the test section, and `My notes`
                            to save your own learning in local storage.
                        </p>
                    </div>

                    <div className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] ${isDark ? 'border border-white/10 bg-white/[0.04] text-slate-300' : 'border border-[#e2d4bc] bg-white text-stone-700'} shadow-[0_10px_30px_rgba(15,23,42,0.08)]`}>
                        Made by softwarestudios.in
                    </div>
                </div>
            </section>

            <section className="grid gap-4 md:grid-cols-3">
                <div className={statPanelClass}>
                    <p className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${softTextClass}`}>Total chapters</p>
                    <p className={`mt-2 text-3xl font-semibold ${titleClass}`}>{CHAPTERS.length}</p>
                </div>
                <div className={statPanelClass}>
                    <p className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${softTextClass}`}>Completed</p>
                    <p className={`mt-2 text-3xl font-semibold ${titleClass}`}>{completed}</p>
                </div>
                <div className={statPanelClass}>
                    <p className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${softTextClass}`}>Progress</p>
                    <p className={`mt-2 text-3xl font-semibold ${titleClass}`}>{completion}%</p>
                </div>
            </section>

            <section className={`${panelClass} overflow-hidden`}>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-left">
                        <thead className={`border-b ${rowBorderClass} ${headerBgClass}`}>
                            <tr>
                                <th className={`px-4 py-4 text-[11px] font-semibold uppercase tracking-[0.16em] ${softTextClass}`}>Chapter</th>
                                <th className={`px-4 py-4 text-[11px] font-semibold uppercase tracking-[0.16em] ${softTextClass}`}>Read now</th>
                                <th className={`px-4 py-4 text-[11px] font-semibold uppercase tracking-[0.16em] ${softTextClass}`}>Solve quiz</th>
                                <th className={`px-4 py-4 text-[11px] font-semibold uppercase tracking-[0.16em] ${softTextClass}`}>My notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {CHAPTERS.map((chapter) => {
                                const chapterNotes = notes[chapter.slug] || [];
                                const chapterScore = scores[chapter.slug];
                                const isNotesOpen = openNotesSlug === chapter.slug;

                                return (
                                    <React.Fragment key={chapter.slug}>
                                        <tr className={`align-top transition ${rowBorderClass} border-b ${isDark ? 'hover:bg-white/[0.03]' : 'hover:bg-white/70'}`}>
                                            <td className="px-4 py-4">
                                                <p className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${softTextClass}`}>Chapter {chapter.number}</p>
                                                <p className={`mt-1 text-lg font-semibold ${titleClass}`}>{chapter.title}</p>
                                                <p className={`mt-2 max-w-xl text-sm leading-7 ${copyClass}`}>{chapter.subtitle}</p>
                                                <div className="mt-3">
                                                    <span className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${
                                                        chapterScore?.passed
                                                            ? isDark
                                                                ? 'bg-emerald-500/15 text-emerald-200'
                                                                : 'bg-emerald-100 text-emerald-700'
                                                            : isDark
                                                                ? 'bg-white/[0.06] text-slate-300'
                                                                : 'bg-[#efe8d7] text-stone-700'
                                                    }`}>
                                                        {chapterScore?.passed ? `Quiz passed • ${chapterScore.score}/${chapterScore.total}` : 'Not completed'}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4">
                                                <Link to={`/bde/chapter/${chapter.slug}`} className={primaryButtonClass}>
                                                    Read now
                                                </Link>
                                            </td>
                                            <td className="px-4 py-4">
                                                <Link to={`/bde/chapter/${chapter.slug}#chapter-quiz`} className={secondaryButtonClass}>
                                                    Solve quiz
                                                </Link>
                                            </td>
                                            <td className="px-4 py-4">
                                                <button
                                                    type="button"
                                                    onClick={() => setOpenNotesSlug(isNotesOpen ? null : chapter.slug)}
                                                    className={secondaryButtonClass}
                                                >
                                                    My notes ({chapterNotes.length})
                                                </button>
                                            </td>
                                        </tr>

                                        {isNotesOpen && (
                                            <tr className={`${rowBorderClass} border-b ${notesRowBgClass}`}>
                                                <td colSpan={4} className="px-4 py-5">
                                                    <div className="space-y-4">
                                                        <div className={notePanelClass}>
                                                            <p className={`text-sm font-semibold ${titleClass}`}>Add note for {chapter.title}</p>
                                                            <textarea
                                                                value={drafts[chapter.slug] || ''}
                                                                onChange={(event) => setDrafts((current) => ({
                                                                    ...current,
                                                                    [chapter.slug]: event.target.value,
                                                                }))}
                                                                placeholder="Write your note here..."
                                                                className={inputClass}
                                                            />
                                                            <div className="mt-3">
                                                                <button type="button" onClick={() => handleAdd(chapter.slug)} className={primaryButtonClass}>
                                                                    Add note
                                                                </button>
                                                            </div>
                                                        </div>

                                                        {chapterNotes.length > 0 ? (
                                                            <div className="space-y-3">
                                                                {chapterNotes.map((note) => (
                                                                    <article key={note.id} className={notePanelClass}>
                                                                        <div className="flex flex-wrap items-start justify-between gap-3">
                                                                            <p className={`text-[15px] leading-8 ${copyClass}`}>{note.text}</p>
                                                                            <button
                                                                                type="button"
                                                                                onClick={() => onDeleteNote(chapter.slug, note.id)}
                                                                                className={noteDeleteButtonClass}
                                                                            >
                                                                                Delete
                                                                            </button>
                                                                        </div>
                                                                        <p className={`mt-2 text-xs ${softTextClass}`}>Saved on {formatNoteDate(note.createdAt)}</p>
                                                                    </article>
                                                                ))}
                                                            </div>
                                                        ) : (
                                                            <p className={`text-sm ${softTextClass}`}>No notes saved yet.</p>
                                                        )}
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                    </React.Fragment>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default DashboardPage;
