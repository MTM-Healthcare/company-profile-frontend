'use client';
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, Share2, BookmarkPlus, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { fetchCMS } from '@/lib/cms';
import type { BlogPost, BlogPostsResponse } from '@/types/cms';

const AVG_WORDS_PER_MINUTE = 200;

function estimateReadTime(text: string): string {
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.max(1, Math.round(words / AVG_WORDS_PER_MINUTE));
    return `${minutes} Min Read`;
}

export default function BlogDetailPage() {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = React.useState<BlogPost | null>(null);
    const [related, setRelated] = React.useState<BlogPost[]>([]);
    const [loading, setLoading] = React.useState(true);
    const [notFoundState, setNotFoundState] = React.useState(false);

    React.useEffect(() => {
        async function load() {
            try {
                const [p, allPosts] = await Promise.all([
                    fetchCMS<BlogPost>(`/api/public/blog-posts/${id}`),
                    fetchCMS<BlogPostsResponse>('/api/public/blog-posts?limit=4').catch(() => ({ posts: [] as BlogPost[], total: 0, page: 1, limit: 4 })),
                ]);
                setPost(p);
                setRelated(allPosts.posts.filter((b) => b.id !== p.id).slice(0, 3));
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

    if (notFoundState || !post) {
        return (
            <div className="flex flex-col min-h-screen relative overflow-hidden">
                <Navbar />
                <main className="flex-grow flex flex-col items-center justify-center gap-4 pt-32">
                    <h1 className="font-heading font-bold text-4xl text-brand-dark">Article Not Found</h1>
                    <Link href="/mtm-blogspot" className="text-blue-600 hover:underline font-semibold">Back to Blog</Link>
                </main>
                <Footer />
            </div>
        );
    }

    const readTime = estimateReadTime((post.content ?? post.description) || '');
    const publishDate = post.publishedAt
        ? new Date(post.publishedAt).toLocaleDateString('en-ID', { year: 'numeric', month: 'long', day: 'numeric' })
        : post.createdAt
            ? new Date(post.createdAt).toLocaleDateString('en-ID', { year: 'numeric', month: 'long', day: 'numeric' })
            : '';

    return (
        <div className="flex flex-col min-h-screen relative overflow-hidden">
            <Navbar />

            <main className="flex-grow w-full pt-28 pb-20 relative z-10">

                {/* ── ARTICLE HEADER ── */}
                <section className="max-w-4xl mx-auto px-[45px] mt-10 mb-12">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <Link href="/mtm-blogspot" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-semibold mb-6 transition-colors">
                            <ArrowLeft size={16} /> Back to Blog
                        </Link>

                        <div className="flex flex-wrap items-center gap-3 mb-6">
                            <span className="bg-blue-50 text-blue-600 text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full border border-blue-100">{post.category}</span>
                            <span className="text-gray-400">•</span>
                            <span className="flex items-center gap-1.5 text-gray-500 text-sm"><Clock size={14} /> {readTime}</span>
                        </div>

                        <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-brand-dark leading-[1.1] mb-8 tracking-tight">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center justify-between border-y border-gray-100 py-4 gap-4">
                            {publishDate && (
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <Calendar size={14} /> {publishDate}
                                </div>
                            )}
                            <div className="flex items-center gap-2">
                                <button className="w-10 h-10 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-600 transition-colors"><BookmarkPlus size={18} /></button>
                                <button className="w-10 h-10 rounded-full bg-blue-50 hover:bg-blue-100 flex items-center justify-center text-blue-600 transition-colors"><Share2 size={18} /></button>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* ── HERO IMAGE ── */}
                <section className="max-w-5xl mx-auto px-[45px] mb-16">
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="w-full h-[300px] md:h-[500px] relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10">
                        <Image src={post.imageUrl} alt={post.title} fill className="object-cover" priority />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                    </motion.div>
                </section>

                {/* ── ARTICLE CONTENT ── */}
                <section className="max-w-3xl mx-auto px-[45px]">
                    {post.content ? (
                        <div
                            className="prose prose-lg prose-blue max-w-none text-gray-600 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    ) : (
                        <p className="text-xl text-gray-700 font-medium leading-relaxed">{post.description}</p>
                    )}
                </section>

                {/* ── SEE ANOTHER ARTICLES ── */}
                {related.length > 0 && (
                    <section className="bg-gray-50 mt-24 py-20 border-t border-gray-100">
                        <div className="max-w-7xl mx-auto px-[45px]">

                            <div className="flex items-end justify-between mb-12">
                                <div>
                                    <h2 className="font-heading font-black text-3xl md:text-4xl text-brand-dark">Related Articles</h2>
                                    <p className="text-gray-500 mt-2 text-lg">Continue reading about health and innovation.</p>
                                </div>
                                <Link href="/mtm-blogspot" className="hidden md:flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group">
                                    View all articles <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {related.map((p) => (
                                    <Link href={`/mtm-blogspot/${p.id}`} key={p.id} className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-50">
                                        <div className="w-full h-[220px] relative overflow-hidden">
                                            <Image src={p.imageUrl} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                            <div className="absolute top-4 left-4">
                                                <span className="bg-white/90 backdrop-blur text-blue-600 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">{p.category}</span>
                                            </div>
                                        </div>
                                        <div className="p-6 flex-grow flex flex-col justify-between">
                                            <div>
                                                {p.publishedAt && (
                                                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                                                        <Calendar size={13} /> {new Date(p.publishedAt).toLocaleDateString('en-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
                                                    </div>
                                                )}
                                                <h4 className="font-heading font-bold text-xl text-brand-dark group-hover:text-blue-600 transition-colors leading-snug mb-4">{p.title}</h4>
                                            </div>
                                            <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                                <ArrowRight size={14} />
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            <div className="mt-10 md:hidden flex justify-center">
                                <Link href="/mtm-blogspot" className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold">
                                    View all articles <ArrowRight size={16} />
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
