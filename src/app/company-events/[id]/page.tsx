'use client';
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { fetchCMS } from '@/lib/cms';
import type { Event } from '@/types/cms';
import { fadeUp } from '@/utils/animations';

export default function CompanyEventDetailPage() {
    const { id } = useParams<{ id: string }>();
    const [event, setEvent] = React.useState<Event | null>(null);
    const [related, setRelated] = React.useState<Event[]>([]);
    const [loading, setLoading] = React.useState(true);
    const [notFoundState, setNotFoundState] = React.useState(false);

    React.useEffect(() => {
        async function load() {
            try {
                const [evt, allEvents] = await Promise.all([
                    fetchCMS<Event>(`/api/public/events/${id}`),
                    fetchCMS<Event[]>('/api/public/events').catch(() => [] as Event[]),
                ]);
                setEvent(evt);
                setRelated(allEvents.filter((e) => e.id !== evt.id).slice(0, 3));
            } catch {
                setNotFoundState(true);
            } finally {
                setLoading(false);
            }
        }
        load();
    }, [id]);

    if (loading) {
        return (
            <div className="flex flex-col min-h-screen relative overflow-hidden">
                <Navbar />
                <main className="flex-grow flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
                </main>
                <Footer />
            </div>
        );
    }

    if (notFoundState || !event) {
        return (
            <div className="flex flex-col min-h-screen relative overflow-hidden">
                <Navbar />
                <main className="flex-grow flex flex-col items-center justify-center gap-4 pt-32">
                    <h1 className="font-heading font-bold text-4xl text-brand-dark">Event Not Found</h1>
                    <Link href="/company-events" className="text-blue-600 hover:underline font-semibold">Back to Events</Link>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen relative overflow-hidden">
            <Navbar />

            <main className="flex-grow w-full relative z-10">

                {/* ── HERO IMAGE ── */}
                <section className="relative w-full h-[60vh] min-h-[500px] mt-20">
                    <Image src={event.imageUrl} alt={event.title} fill className="object-cover" priority />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-slate-900/10" />

                    <div className="absolute bottom-0 inset-x-0 w-full pb-16">
                        <div className="max-w-4xl mx-auto px-[45px]">
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                                <Link href="/company-events" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-semibold mb-6 transition-colors">
                                    <ArrowLeft size={16} /> Back to Events
                                </Link>
                                <div className="flex flex-wrap items-center gap-3 mb-4">
                                    {event.publishedAt && (
                                        <span className="flex items-center gap-1.5 text-white/80 text-sm">
                                            <Calendar size={14} /> {new Date(event.publishedAt).toLocaleDateString('en-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
                                        </span>
                                    )}
                                </div>
                                <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6 drop-shadow-lg">
                                    {event.title}
                                </h1>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ── EVENT DETAILS ── */}
                <section className="max-w-4xl mx-auto px-[45px] py-16">
                    <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-12">
                        <p className="text-gray-600 text-lg leading-relaxed font-medium">{event.description}</p>
                    </motion.div>
                </section>

                {/* ── SEE ANOTHER EVENTS ── */}
                {related.length > 0 && (
                    <section className="bg-[#EAF3FA] py-24 border-t border-blue-50">
                        <div className="max-w-7xl mx-auto px-[45px]">

                            <div className="flex items-end justify-between mb-12">
                                <div>
                                    <h2 className="font-heading font-black text-3xl md:text-4xl text-brand-dark">More Events</h2>
                                    <p className="text-gray-500 mt-2">Explore other initiatives and gatherings.</p>
                                </div>
                                <Link href="/company-events" className="hidden md:flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group">
                                    View all events <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {related.map((evt) => (
                                    <Link href={`/company-events/${evt.id}`} key={evt.id} className="group">
                                        <div className="w-full h-[240px] rounded-[2rem] overflow-hidden relative mb-5 shadow-sm border border-gray-100 bg-white">
                                            <Image src={evt.imageUrl} alt={evt.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>
                                        <h4 className="font-heading font-bold text-xl text-brand-dark group-hover:text-blue-600 transition-colors leading-snug">{evt.title}</h4>
                                    </Link>
                                ))}
                            </div>

                            <div className="mt-10 md:hidden flex justify-center">
                                <Link href="/company-events" className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold">
                                    View all events <ArrowRight size={16} />
                                </Link>
                            </div>

                        </div>
                    </section>
                )}

            </main>
            <Footer />
        </div>
    );
}
