import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { OurAchievementsHero } from '@/components/sections/our-achievements/OurAchievementsHero';
import { OurAchievementsFeatured } from '@/components/sections/our-achievements/OurAchievementsFeatured';
import { OurAchievementsGrid } from '@/components/sections/our-achievements/OurAchievementsGrid';
import { fetchCMS } from '@/lib/cms';
import type { Achievement } from '@/types/cms';

export const revalidate = 3600;

export default async function OurAchievementsPage() {
    const achievements = await fetchCMS<Achievement[]>('/api/public/achievements').catch(() => []);

    return (
        <div className="flex flex-col min-h-screen relative overflow-hidden bg-[#EAF3FA]">
            <Navbar />
            <main className="pt-28 pb-24 flex-grow w-full relative z-10">
                <OurAchievementsHero />
                <OurAchievementsFeatured achievements={achievements.length ? achievements : undefined} />
                <OurAchievementsGrid achievements={achievements.length ? achievements.slice(4) : undefined} />
            </main>
            <Footer />
        </div>
    );
}
