"use client"

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Factory, Bot, Cpu, Globe, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ProductInquiryModal } from "./product-inquiry-modal";
import { IdeaIcon } from "@/components/animate-ui/icons/idea";
import { CheckmarkIcon } from "@/components/animate-ui/icons/checkmark";
import { AccuracyIcon } from "@/components/animate-ui/icons/accuracy";

// --- Types ---
export interface ProductSpec {
    label: string;
    value: string;
}

export interface Benefit {
    title: string;
    description: string;
}

export interface ProductDetailProps {
    title: string;
    tagline: string;
    description: string;
    image: string;
    specs: ProductSpec[];
    features: string[];
    benefits: Benefit[];
}

const Blob = ({ className, delay = 0 }: { className?: string, delay?: number }) => (
    <motion.div
        animate={{
            scale: [1, 1.2, 0.9, 1.1, 1],
            rotate: [0, 90, 180, 270, 360],
            x: [0, 50, -30, 20, 0],
            y: [0, -40, 30, -20, 0],
        }}
        transition={{
            duration: 20,
            ease: "easeInOut",
            repeat: Infinity,
            delay: delay,
        }}
        className={cn("absolute rounded-full blur-3xl opacity-20 mix-blend-multiply pointer-events-none", className)}
    />
);

export function ProductDetailClient({
    title,
    tagline,
    description,
    image,
    specs,
    features,
    benefits
}: ProductDetailProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="min-h-screen bg-background relative overflow-hidden text-foreground selection:bg-primary/10">
            {/* Background Blobs */}
            <Blob className="w-[800px] h-[800px] bg-primary/20 -top-40 -right-40" delay={0} />
            <Blob className="w-[600px] h-[600px] bg-secondary/30 top-1/2 -left-40" delay={5} />

            {/* Modal */}
            <ProductInquiryModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                productName={title}
            />

            <div className="container relative z-10 mx-auto px-4 py-24 md:py-32">

                {/* 1. Hero Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block mb-6 px-4 py-1.5 border border-primary/20 rounded-full bg-primary/5 backdrop-blur-sm">
                            <span className="text-sm font-bold tracking-widest text-primary uppercase">{tagline}</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-tight">
                            {title}
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                            {description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg" onClick={() => setIsModalOpen(true)}>
                                Request a Quote <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-primary/20 hover:bg-primary/5">
                                Download Datasheet
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Product Image Frame */}
                        <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border bg-background/50 backdrop-blur-md p-8">
                            <div className="relative aspect-square rounded-2xl overflow-hidden bg-white/5">
                                <Image
                                    src={image}
                                    alt={title}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                        {/* Decorative background behind product */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent blur-2xl -z-10 transform translate-y-10 scale-95" />
                    </motion.div>
                </div>

                {/* 2. Specs & Features */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
                    {/* Specs Table */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-4"
                    >
                        <h3 className="text-2xl font-bold mb-6">Specifications</h3>
                        <div className="bg-background border border-border rounded-2xl overflow-hidden">
                            {specs.map((spec, i) => (
                                <div key={i} className="flex justify-between p-4 border-b border-border last:border-0 hover:bg-secondary/20 transition-colors">
                                    <span className="text-muted-foreground font-medium">{spec.label}</span>
                                    <span className="font-semibold text-right">{spec.value}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Features List */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-8"
                    >
                        <h3 className="text-2xl font-bold mb-6">Key Features</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {features.map((feature, i) => (
                                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-secondary/10 border border-primary/5 hover:border-primary/30 transition-colors">
                                    <CheckmarkIcon className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                                    <span className="text-lg">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* 3. Benefits Grid */}
                <div>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold">Built for Performance</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {benefits.map((benefit, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="p-8 rounded-3xl bg-gradient-to-b from-background to-secondary/20 border border-border hover:border-primary/50 transition-all hover:shadow-xl group"
                            >
                                <div className="w-12 h-12 mb-6 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    {/* Using existing icons based on index/context could be complex, keeping simple generic icon or specific mapping if needed. 
                                          For generic reusability, we can stick to a default one or pass icons in props. 
                                          User asked to use "existing icons", so leveraging imports.
                                      */}
                                    {i === 0 ? <IdeaIcon className="w-full h-full" /> : (i === 1 ? <AccuracyIcon className="w-full h-full" /> : <CheckmarkIcon className="w-full h-full" />)}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
