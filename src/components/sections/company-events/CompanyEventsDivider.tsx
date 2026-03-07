'use client';
import * as React from 'react';

export function CompanyEventsDivider() {
    return (
        <div className="relative w-full my-4 mb-24">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-blue-50/60 to-indigo-50/20 border-y border-blue-100/40" />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <p className="text-xs text-blue-400 font-bold uppercase tracking-widest mb-1">Event Archive</p>
                    <h2 className="font-heading font-black text-2xl md:text-3xl text-brand-dark">More Events & Campaigns</h2>
                </div>
                <p className="text-sm text-gray-500 max-w-md leading-relaxed md:text-right">Explore our rich history of community involvement, internal celebrations, and industry-leading events.</p>
            </div>
        </div>
    );
}
