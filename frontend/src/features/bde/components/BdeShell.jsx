import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const BdeShell = ({ theme, onToggleTheme, onLock }) => {
    const location = useLocation();
    const isMenuPage = location.pathname === '/bde/' || location.pathname === '/bde';
    const isDark = theme === 'dark';

    const shellClass = isDark
        ? 'bde-docs-root bde-theme-dark min-h-screen'
        : 'bde-docs-root bde-theme-light min-h-screen';

    const topBarClass = isDark
        ? 'sticky top-0 z-30 border-b border-white/10 bg-slate-950/78 backdrop-blur-xl'
        : 'sticky top-0 z-30 border-b border-[#eadfca] bg-[#fbf8f2]/92 backdrop-blur-xl';

    const brandChipClass = isDark
        ? 'rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-200 shadow-[0_10px_40px_rgba(15,23,42,0.28)]'
        : 'rounded-full border border-[#d8cab1] bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-stone-700 shadow-[0_10px_40px_rgba(120,94,59,0.12)]';

    const subtleTextClass = isDark ? 'text-slate-400' : 'text-stone-500';
    const secondaryButtonClass = isDark
        ? 'rounded-[14px] border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-100 transition hover:bg-white/10'
        : 'rounded-[14px] border border-[#d8cab1] bg-white px-4 py-2.5 text-sm font-semibold text-stone-800 transition hover:bg-[#fcfaf5]';
    const dangerButtonClass = isDark
        ? 'rounded-[14px] border border-rose-400/25 bg-rose-500/10 px-4 py-2.5 text-sm font-semibold text-rose-200 transition hover:bg-rose-500/15'
        : 'rounded-[14px] border border-rose-200 bg-rose-50 px-4 py-2.5 text-sm font-semibold text-rose-700 transition hover:bg-rose-100';

    return (
        <div className={shellClass}>
            <div className={topBarClass}>
                <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 lg:px-6">
                    {isMenuPage ? (
                        <div className="flex flex-wrap items-center gap-3">
                            <div className={brandChipClass}>Sales Handbook</div>
                            <p className={`text-xs ${subtleTextClass}`}>Made by softwarestudios.in</p>
                        </div>
                    ) : (
                        <div className="flex flex-wrap items-center gap-3">
                            <Link to="/bde/" className={secondaryButtonClass}>Back to main menu</Link>
                            <p className={`text-xs ${subtleTextClass}`}>Made by softwarestudios.in</p>
                        </div>
                    )}

                    <div className="flex items-center gap-2">
                        <button type="button" onClick={onToggleTheme} className={secondaryButtonClass}>
                            {isDark ? 'Light mode' : 'Dark mode'}
                        </button>
                        <button type="button" onClick={onLock} className={dangerButtonClass}>
                            Lock
                        </button>
                    </div>
                </div>
            </div>

            <main className={`mx-auto px-4 py-6 lg:px-6 ${isMenuPage ? 'max-w-6xl' : 'max-w-4xl'}`}>
                <Outlet />
            </main>
        </div>
    );
};

export default BdeShell;
