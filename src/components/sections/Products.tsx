'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShoppingBag } from 'lucide-react';

const products = [
    {
        name: 'Advanced Multivitamins',
        category: 'Supplements',
        price: '$24.99',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5e4a42b15?w=600&q=80',
    },
    {
        name: 'First Aid Medical Kit',
        category: 'Emergency',
        price: '$45.00',
        image: 'https://images.unsplash.com/photo-1603398938378-e54e4450ff7b?w=600&q=80',
    },
    {
        name: 'Premium Blood Pressure Monitor',
        category: 'Devices',
        price: '$89.99',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
    },
    {
        name: 'Organic Herbal Supplements',
        category: 'Wellness',
        price: '$19.50',
        image: 'https://images.unsplash.com/photo-1607613009820-a29f4ae0a455?w=600&q=80',
    }
];

export function Products() {
    return (
        <section id="products" className="py-24 bg-white">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 sm:mb-16 gap-6">
                    <SectionHeader
                        title="Featured Pharmacy Pharmacy"
                        subtitle="Browse our selection of premium, medically approved products and supplements available directly from our clinical pharmacy."
                        alignment="left"
                        className="mb-0 max-w-2xl"
                    />
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Button variant="outline" className="hidden md:flex group">
                            View All Products
                            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-100 mb-6 border border-slate-100">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
                                />
                                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300" />

                                {/* Quick Add Button */}
                                <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    <Button className="w-full shadow-lg h-10 gap-2">
                                        <ShoppingBag size={16} /> Add to Cart
                                    </Button>
                                </div>
                            </div>
                            <div>
                                <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                                    {product.category}
                                </div>
                                <h3 className="font-bold text-slate-900 text-lg mb-1 leading-snug group-hover:text-primary transition-colors">
                                    {product.name}
                                </h3>
                                <div className="font-medium text-slate-500">
                                    {product.price}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <Button variant="outline" className="w-full mt-8 md:hidden group">
                    View All Products
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

            </Container>
        </section>
    );
}
