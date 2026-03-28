const ACCESS_KEY = 'softwarestudios_bde_access';
const QUIZ_KEY = 'softwarestudios_bde_quiz_scores';
const LAST_ROUTE_KEY = 'softwarestudios_bde_last_route';
const NOTES_KEY = 'softwarestudios_bde_notes';
const THEME_KEY = 'softwarestudios_bde_theme';

const readJson = (key, fallback) => {
    if (typeof window === 'undefined') {
        return fallback;
    }

    try {
        const raw = window.localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallback;
    } catch (error) {
        return fallback;
    }
};

const writeJson = (key, value) => {
    if (typeof window === 'undefined') {
        return;
    }

    window.localStorage.setItem(key, JSON.stringify(value));
};

export const bdeStorage = {
    accessKey: ACCESS_KEY,
    isUnlocked() {
        if (typeof window === 'undefined') {
            return false;
        }

        return window.sessionStorage.getItem(ACCESS_KEY) === 'granted';
    },
    unlock() {
        if (typeof window === 'undefined') {
            return;
        }

        window.sessionStorage.setItem(ACCESS_KEY, 'granted');
    },
    lock() {
        if (typeof window === 'undefined') {
            return;
        }

        window.sessionStorage.removeItem(ACCESS_KEY);
    },
    getQuizScores() {
        return readJson(QUIZ_KEY, {});
    },
    saveQuizScore(chapterSlug, score) {
        const scores = this.getQuizScores();
        const current = scores[chapterSlug];
        const nextScore = !current || score.score >= current.score ? score : current;
        writeJson(QUIZ_KEY, {
            ...scores,
            [chapterSlug]: nextScore,
        });
        return nextScore;
    },
    resetQuizScore(chapterSlug) {
        const scores = this.getQuizScores();
        if (!scores[chapterSlug]) {
            return scores;
        }

        const next = { ...scores };
        delete next[chapterSlug];
        writeJson(QUIZ_KEY, next);
        return next;
    },
    getLastRoute() {
        if (typeof window === 'undefined') {
            return '/bde/';
        }

        return window.localStorage.getItem(LAST_ROUTE_KEY) || '/bde/';
    },
    setLastRoute(pathname) {
        if (typeof window === 'undefined') {
            return;
        }

        window.localStorage.setItem(LAST_ROUTE_KEY, pathname);
    },
    getNotes() {
        return readJson(NOTES_KEY, {});
    },
    addNote(chapterSlug, text) {
        const trimmed = text.trim();
        if (!trimmed) {
            return this.getNotes();
        }

        const notes = this.getNotes();
        const chapterNotes = notes[chapterSlug] || [];
        const nextNotes = {
            ...notes,
            [chapterSlug]: [
                {
                    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
                    text: trimmed,
                    createdAt: new Date().toISOString(),
                },
                ...chapterNotes,
            ],
        };

        writeJson(NOTES_KEY, nextNotes);
        return nextNotes;
    },
    deleteNote(chapterSlug, noteId) {
        const notes = this.getNotes();
        const chapterNotes = notes[chapterSlug] || [];
        const filtered = chapterNotes.filter((note) => note.id !== noteId);
        const nextNotes = { ...notes };

        if (filtered.length > 0) {
            nextNotes[chapterSlug] = filtered;
        } else {
            delete nextNotes[chapterSlug];
        }

        writeJson(NOTES_KEY, nextNotes);
        return nextNotes;
    },
    getTheme() {
        if (typeof window === 'undefined') {
            return 'light';
        }

        return window.localStorage.getItem(THEME_KEY) || 'light';
    },
    setTheme(theme) {
        if (typeof window === 'undefined') {
            return;
        }

        window.localStorage.setItem(THEME_KEY, theme);
    },
};

export const getCompletionPercentage = (scores, chapterSlugs) => {
    const passed = chapterSlugs.filter((slug) => (scores[slug]?.passed)).length;
    return chapterSlugs.length ? Math.round((passed / chapterSlugs.length) * 100) : 0;
};
