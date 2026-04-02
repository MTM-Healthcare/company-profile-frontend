import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { OurProjectsHero } from '@/components/sections/our-projects/OurProjectsHero';
import { FeaturedProjects } from '@/components/sections/our-projects/FeaturedProjects';
import { GridProjects } from '@/components/sections/our-projects/GridProjects';
import { fetchCMS } from '@/lib/cms';
import type { Project } from '@/types/cms';

export const revalidate = 3600;

export default async function OurProjectsPage() {
    const projects = await fetchCMS<Project[]>('/api/public/projects').catch(() => []);

    return (
        <div className="flex flex-col min-h-screen relative overflow-hidden">
            <Navbar />
            <main className="pt-28 pb-24 flex-grow w-full relative z-10">
                <OurProjectsHero />
                <FeaturedProjects projects={projects.length ? projects : undefined} />
                <GridProjects projects={projects.length ? projects.slice(4) : undefined} />
            </main>
            <Footer />
        </div>
    );
}
