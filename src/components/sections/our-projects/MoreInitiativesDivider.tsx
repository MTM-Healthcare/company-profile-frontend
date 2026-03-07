'use client';
import * as React from 'react';

export function MoreInitiativesDivider() {
    return (
        <div className="relative w-full my-4 mb-24">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-blue-50/60 to-indigo-50/20 border-y border-blue-100/40" />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <p className="text-xs text-blue-400 font-bold uppercase tracking-widest mb-1">More Initiatives</p>
                    <h2 className="font-heading font-black text-2xl md:text-3xl text-brand-dark">Ongoing & Completed Projects</h2>
                </div>
                <p className="text-sm text-gray-500 max-w-md leading-relaxed md:text-right">Each project is a testament to our drive for operational excellence and patient-first innovation.</p>
            </div>
        </div>
    );
}
