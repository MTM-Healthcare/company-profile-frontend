'use client';
import * as React from 'react';

export function OurAchievementsDivider() {
    return (
        <div className="relative w-full my-4 mb-24">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-blue-50/60 to-indigo-50/20 border-y border-blue-100/40" />
            <div className="relative z-10 max-w-7xl mx-auto px-[45px] py-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <p className="text-xs text-blue-400 font-bold uppercase tracking-widest mb-1">Our Impact</p>
                    <h2 className="font-heading font-black text-2xl md:text-3xl text-brand-dark">More Projects & Initiatives</h2>
                </div>
                <p className="text-sm text-gray-500 max-w-md leading-relaxed md:text-right">Each project below represents a cornerstone of our mission to deliver world-class healthcare services to our community.</p>
            </div>
        </div>
    );
}

