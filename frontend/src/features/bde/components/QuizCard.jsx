import React, { useState } from 'react';
import { bdeStorage } from '../utils/storage';

const PASS_MARK = 7;

const QuizCard = ({ chapterSlug, items, savedScore, onScoreChange }) => {
    const [answers, setAnswers] = useState(savedScore?.answers || {});
    const [submitted, setSubmitted] = useState(Boolean(savedScore));
    const [result, setResult] = useState(savedScore || null);

    const handlePick = (questionIndex, optionIndex) => {
        if (submitted) {
            return;
        }

        setAnswers((current) => ({
            ...current,
            [questionIndex]: optionIndex,
        }));
    };

    const handleSubmit = () => {
        let score = 0;

        items.forEach((item, index) => {
            if (answers[index] === item.answer) {
                score += 1;
            }
        });

        const nextResult = {
            score,
            total: items.length,
            passed: score >= PASS_MARK,
            answers,
            submittedAt: new Date().toISOString(),
        };

        const stored = bdeStorage.saveQuizScore(chapterSlug, nextResult);
        setResult(stored);
        setSubmitted(true);
        onScoreChange?.();
    };

    const handleRetake = () => {
        bdeStorage.resetQuizScore(chapterSlug);
        setAnswers({});
        setResult(null);
        setSubmitted(false);
        onScoreChange?.();
    };

    const answeredCount = Object.keys(answers).length;

    return (
        <section className="rounded-[18px] border border-[#eadfca] bg-[#fcfaf5] p-5">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
                <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">Chapter quiz</p>
                    <h2 className="mt-2 text-2xl font-semibold text-stone-900">Check your understanding</h2>
                    <p className="mt-2 max-w-2xl text-sm leading-7 text-stone-700">
                        You need at least {PASS_MARK}/{items.length} to mark this chapter complete.
                    </p>
                </div>
                <div className="rounded-[14px] border border-[#eadfca] bg-white px-4 py-3 text-sm font-medium text-stone-700">
                    Answered: <span className="font-bold text-stone-900">{answeredCount}</span> / {items.length}
                </div>
            </div>

            <div className="space-y-6">
                {items.map((item, questionIndex) => {
                    const selectedAnswer = answers[questionIndex];

                    return (
                        <article key={item.question} className="rounded-[16px] border border-[#eadfca] bg-white p-5">
                            <div className="flex gap-3">
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#efe8d7] text-sm font-bold text-stone-900">
                                    {questionIndex + 1}
                                </span>
                                <div className="flex-1">
                                    <h3 className="text-base font-semibold leading-7 text-stone-900">{item.question}</h3>
                                    <div className="mt-4 grid gap-3">
                                        {item.options.map((option, optionIndex) => {
                                            const isSelected = selectedAnswer === optionIndex;
                                            const isCorrect = submitted && item.answer === optionIndex;
                                            const isWrong = submitted && isSelected && item.answer !== optionIndex;

                                            return (
                                                <button
                                                    key={option}
                                                    type="button"
                                                    onClick={() => handlePick(questionIndex, optionIndex)}
                                                    className={`rounded-[14px] border px-4 py-3 text-left text-sm leading-6 transition ${
                                                        isCorrect
                                                            ? 'border-emerald-300 bg-emerald-50 text-emerald-900'
                                                            : isWrong
                                                                ? 'border-rose-300 bg-rose-50 text-rose-900'
                                                                : isSelected
                                                                    ? 'border-sky-300 bg-sky-50 text-sky-900'
                                                                    : 'border-[#eadfca] bg-[#fcfaf5] text-stone-700 hover:border-[#cdb48d] hover:bg-white'
                                                    }`}
                                                >
                                                    {option}
                                                </button>
                                            );
                                        })}
                                    </div>

                                    {submitted && (
                                        <p className="mt-3 text-sm leading-7 text-stone-700">
                                            <span className="font-semibold text-stone-900">Why:</span> {item.explanation}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
                {!submitted && (
                    <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={answeredCount !== items.length}
                        className="rounded-[14px] bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-stone-800 disabled:cursor-not-allowed disabled:bg-stone-300"
                    >
                        Submit quiz
                    </button>
                )}

                {submitted && result && (
                    <>
                        <div className={`rounded-[14px] px-5 py-3 text-sm font-semibold ${
                            result.passed ? 'bg-emerald-50 text-emerald-900' : 'bg-amber-50 text-amber-900'
                        }`}>
                            Score: {result.score}/{result.total} {result.passed ? '• Chapter passed' : '• Retake needed'}
                        </div>
                        <button
                            type="button"
                            onClick={handleRetake}
                            className="rounded-[14px] border border-[#d8cab1] bg-white px-5 py-3 text-sm font-semibold text-stone-700 transition hover:bg-[#fcfaf5]"
                        >
                            Retake quiz
                        </button>
                    </>
                )}
            </div>
        </section>
    );
};

export default QuizCard;
