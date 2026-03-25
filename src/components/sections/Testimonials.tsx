'use client';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Star } from 'lucide-react';

const testimonials = [
    {
        quote: "The care and attention I received at MTM Health was exceptional. Their pharmacy team explained my medications so clearly, I finally felt comfortable with my treatment plan.",
        author: "Sarah Jenkins",
        role: "Local Resident",
        rating: 5,
    },
    {
        quote: "As a working mother, I appreciate how efficient their service is. I can get my family's prescriptions filled quickly without compromising on professional advice.",
        author: "Amanda Chen",
        role: "Teacher",
        rating: 5,
    },
    {
        quote: "Dr. Hans and his team are phenomenal. The integration between the clinic and the pharmacy makes managing my chronic condition so much easier.",
        author: "Robert O'Neill",
        role: "Retired Veteran",
        rating: 5,
    }
];

export function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
            {/* Background Graphic */}
            <div className="absolute top-0 right-0 -mr-48 -mt-48 size-96 rounded-full bg-white opacity-5 mix-blend-overlay blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-48 -mb-48 size-96 rounded-full bg-white opacity-5 mix-blend-overlay blur-3xl pointer-events-none" />

            <Container>
                <SectionHeader
                    title="What Our Patients Say"
                    subtitle="Don't just take our word for it. Hear from the community members who trust us with their health every day."
                    className="[&>h2]:text-white [&>p]:text-primary-foreground/80 mb-16"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.15 }}
                            className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl flex flex-col"
                        >
                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={20} className="fill-amber-400 text-amber-400" />
                                ))}
                            </div>
                            <blockquote className="text-lg leading-relaxed mb-8 flex-1 font-medium">
                                "{testimonial.quote}"
                            </blockquote>
                            <div className="mt-auto">
                                <div className="font-bold text-white text-lg">{testimonial.author}</div>
                                <div className="text-primary-foreground/70 text-sm">{testimonial.role}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

