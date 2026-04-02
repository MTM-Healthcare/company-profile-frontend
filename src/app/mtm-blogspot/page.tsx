import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MtmBlogspotHero } from '@/components/sections/mtm-blogspot/MtmBlogspotHero';
import { MtmBlogspotFeatured } from '@/components/sections/mtm-blogspot/MtmBlogspotFeatured';
import { MtmBlogspotDivider } from '@/components/sections/mtm-blogspot/MtmBlogspotDivider';
import { MtmBlogspotGrid } from '@/components/sections/mtm-blogspot/MtmBlogspotGrid';
import { fetchCMS } from '@/lib/cms';
import type { BlogPostsResponse } from '@/types/cms';

export const revalidate = 1800;

export default async function BlogSpotPage() {
    const result = await fetchCMS<BlogPostsResponse>('/api/public/blog-posts?limit=8').catch(() => null);
    const posts = result?.posts ?? [];

    return (
        <div className="flex flex-col min-h-screen relative overflow-hidden">
            <Navbar />
            <main className="pt-28 pb-24 flex-grow w-full relative z-10">
                <MtmBlogspotHero />
                <MtmBlogspotFeatured posts={posts} />
                <MtmBlogspotDivider />
                <MtmBlogspotGrid posts={posts.slice(4)} />
            </main>
            <Footer />
        </div>
    );
}
