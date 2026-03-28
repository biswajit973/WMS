import React, { startTransition, useState } from 'react';
import { Navigate, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import '../features/bde/bde-docs.css';
import BdeShell from '../features/bde/components/BdeShell';
import BonusScriptsPanel from '../features/bde/components/BonusScriptsPanel';
import CheatsheetPage from '../features/bde/components/CheatsheetPage';
import DashboardPage from '../features/bde/components/DashboardPage';
import GlossaryPage from '../features/bde/components/GlossaryPage';
import HandbookChapter from '../features/bde/components/HandbookChapter';
import IndustryExplorer from '../features/bde/components/IndustryExplorer';
import { CHAPTERS, CHAPTER_MAP } from '../features/bde/data/chapters';
import { QUIZZES } from '../features/bde/data/quizzes';
import { bdeStorage } from '../features/bde/utils/storage';

const PASSCODE = '29000';
const MOTIVATIONAL_QUOTES = [
    {
        id: 'quote-1',
        text: 'Great salespeople are relationship builders who provide value and help their customers win.',
        author: 'Jeffrey Gitomer',
    },
    {
        id: 'quote-2',
        text: 'Every call is not a sale, but every good call can open the next door.',
        author: 'Software Studios',
    },
    {
        id: 'quote-3',
        text: 'When you speak with clarity and respect, you already sound different from the crowd.',
        author: 'Software Studios',
    },
    {
        id: 'quote-4',
        text: 'A calm rep with a clear message can beat a loud rep with a weak pitch.',
        author: 'Software Studios',
    },
    {
        id: 'quote-5',
        text: 'Do not chase the sale first. Build trust first, and the sale gets easier.',
        author: 'Software Studios',
    },
    {
        id: 'quote-6',
        text: 'One more good follow-up can change the whole month.',
        author: 'Software Studios',
    },
];

const pickUnlockQuote = (previousId) => {
    const choices = MOTIVATIONAL_QUOTES.filter((item) => item.id !== previousId);
    const pool = choices.length > 0 ? choices : MOTIVATIONAL_QUOTES;
    return pool[Math.floor(Math.random() * pool.length)];
};

const ChapterRoute = ({ scores, onScoreChange }) => {
    const { slug } = useParams();
    const chapter = CHAPTER_MAP[slug];

    if (!chapter) {
        return <Navigate to="/bde/" replace />;
    }

    const chapterIndex = CHAPTERS.findIndex((item) => item.slug === chapter.slug);
    const prevChapter = chapterIndex > 0 ? CHAPTERS[chapterIndex - 1] : null;
    const nextChapter = chapterIndex < CHAPTERS.length - 1 ? CHAPTERS[chapterIndex + 1] : null;

    return (
        <HandbookChapter
            chapter={chapter}
            quizItems={QUIZZES[chapter.slug]}
            savedScore={scores[chapter.slug]}
            onScoreChange={onScoreChange}
            prevChapter={prevChapter}
            nextChapter={nextChapter}
            extraContent={
                chapter.slug === 'industries'
                    ? <IndustryExplorer />
                    : chapter.slug === 'bonus-scripts'
                        ? <BonusScriptsPanel />
                        : null
            }
        />
    );
};

const BdeLockScreen = ({ passInput, error, onChange, onSubmit }) => (
    <div className="bde-docs-root bde-lock-shell flex min-h-screen items-center justify-center px-4 py-10">
        <div className="bde-lock-orb bde-lock-orb-one" />
        <div className="bde-lock-orb bde-lock-orb-two" />
        <div className="bde-lock-orb bde-lock-orb-three" />

        <section className="bde-lock-card relative z-10 w-full max-w-md rounded-[32px] border border-white/15 p-8 text-white backdrop-blur-2xl lg:p-10">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bde-lock-ring">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl font-semibold">
                    SS
                </div>
            </div>

            <div className="mt-8 text-center">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-100/80">Protected Access</p>
                <h1 className="mt-4 text-3xl font-semibold tracking-[0.02em] text-white lg:text-4xl">
                    Enter Password
                </h1>
                <p className="mt-3 text-sm leading-7 text-slate-200/80">
                    Internal handbook access only.
                </p>
            </div>

            <form onSubmit={onSubmit} className="mt-8 space-y-5">
                <label className="block">
                    <span className="sr-only">Password</span>
                    <input
                        type="password"
                        value={passInput}
                        onChange={onChange}
                        placeholder="Password"
                        className="w-full rounded-[18px] border border-white/15 bg-white/[0.08] px-5 py-4 text-sm text-white outline-none backdrop-blur placeholder:text-slate-300/75 focus:border-sky-300/60 focus:bg-white/[0.1]"
                        required
                    />
                </label>

                {error && (
                    <p className="rounded-[18px] border border-rose-300/30 bg-rose-500/10 px-4 py-3 text-sm font-medium text-rose-100">
                        {error}
                    </p>
                )}

                <button
                    type="submit"
                    className="w-full rounded-[18px] bg-white px-5 py-4 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
                >
                    Enter
                </button>
            </form>
        </section>
    </div>
);

const BdePage = () => {
    const navigate = useNavigate();
    const [passInput, setPassInput] = useState('');
    const [error, setError] = useState('');
    const [unlocked, setUnlocked] = useState(() => bdeStorage.isUnlocked());
    const [scores, setScores] = useState(() => bdeStorage.getQuizScores());
    const [notes, setNotes] = useState(() => bdeStorage.getNotes());
    const [theme, setTheme] = useState(() => bdeStorage.getTheme());
    const [welcomeQuote, setWelcomeQuote] = useState(null);
    const [showWelcomeQuote, setShowWelcomeQuote] = useState(false);

    const refreshScores = () => {
        startTransition(() => {
            setScores(bdeStorage.getQuizScores());
        });
    };

    const handleAddNote = (chapterSlug, text) => {
        startTransition(() => {
            setNotes(bdeStorage.addNote(chapterSlug, text));
        });
    };

    const handleDeleteNote = (chapterSlug, noteId) => {
        startTransition(() => {
            setNotes(bdeStorage.deleteNote(chapterSlug, noteId));
        });
    };

    const handleUnlock = (event) => {
        event.preventDefault();

        if (passInput.trim() !== PASSCODE) {
            setError('Incorrect passcode. Please use the internal key.');
            return;
        }

        bdeStorage.unlock();
        const nextQuote = pickUnlockQuote(welcomeQuote?.id);
        setUnlocked(true);
        setWelcomeQuote(nextQuote);
        setShowWelcomeQuote(true);
        setPassInput('');
        setError('');
        navigate('/bde/');
    };

    const handleLock = () => {
        bdeStorage.lock();
        setUnlocked(false);
        setPassInput('');
        setError('');
        setShowWelcomeQuote(false);
        navigate('/bde/');
    };

    const handleToggleTheme = () => {
        const nextTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(nextTheme);
        bdeStorage.setTheme(nextTheme);
    };

    if (!unlocked) {
        return (
            <>
                <SEOHead
                    title="BDE Access | SoftwareStudios"
                    description="Protected Software Studios sales handbook."
                    path="/bde/"
                />
                <BdeLockScreen
                    passInput={passInput}
                    error={error}
                    onChange={(event) => setPassInput(event.target.value)}
                    onSubmit={handleUnlock}
                />
            </>
        );
    }

    return (
        <>
            <SEOHead
                title="Sales Handbook | SoftwareStudios"
                description="Protected internal sales handbook for Software Studios teams."
                path="/bde/"
            />

            <Routes>
                <Route element={<BdeShell theme={theme} onToggleTheme={handleToggleTheme} onLock={handleLock} />}>
                    <Route
                        index
                        element={(
                            <DashboardPage
                                scores={scores}
                                notes={notes}
                                theme={theme}
                                welcomeQuote={welcomeQuote}
                                showWelcomeQuote={showWelcomeQuote}
                                onDismissWelcomeQuote={() => setShowWelcomeQuote(false)}
                                onAddNote={handleAddNote}
                                onDeleteNote={handleDeleteNote}
                            />
                        )}
                    />
                    <Route path="chapter/:slug" element={<ChapterRoute scores={scores} onScoreChange={refreshScores} />} />
                    <Route path="glossary" element={<GlossaryPage />} />
                    <Route path="cheatsheet" element={<CheatsheetPage />} />
                    <Route path="*" element={<Navigate to="/bde/" replace />} />
                </Route>
            </Routes>
        </>
    );
};

export default BdePage;
