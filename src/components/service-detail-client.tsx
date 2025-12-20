"use client"

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ProcessStep {
    title: string;
    description: string;
}

export interface ServiceDetailProps {
    title: string;
    subtitle: string;
    description: string;
    benefits: string[];
    targetAudience: string;
    image: string;
    process?: ProcessStep[];
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

export function ServiceDetailClient({
    title,
    subtitle,
    description,
    benefits,
    targetAudience,
    image,
    process
}: ServiceDetailProps) {
    return (
        <div className="min-h-screen bg-background relative overflow-hidden text-foreground selection:bg-primary/10">
            {/* Background Blobs */}
            <Blob className="w-[800px] h-[800px] bg-primary/30 -top-40 -right-40" delay={0} />
            <Blob className="w-[600px] h-[600px] bg-secondary/40 top-1/2 -left-40" delay={5} />
            <Blob className="w-96 h-96 bg-accent/30 bottom-0 right-1/4" delay={2} />

            <div className="container relative z-10 mx-auto px-4 py-24 md:py-32">

                {/* 1. Header Section - Asymmetric / Disoriented */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-7 relative z-20"
                    >
                        <div className="inline-block mb-6 px-4 py-1.5 border border-primary/20 rounded-full bg-primary/5 backdrop-blur-sm">
                            <span className="text-sm font-bold tracking-widest text-primary uppercase">{subtitle}</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-tight">
                            {title.split(' ').map((word, i) => (
                                <span key={i} className="block">{word}</span>
                            ))}
                        </h1>
                        <div className="p-8 bg-background/60 backdrop-blur-md border border-border/50 rounded-2xl shadow-xl max-w-xl">
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                                {description}
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-5 relative"
                    >
                        {/* Abstract Shapes behind image */}
                        <div className="absolute inset-0 bg-primary/10 rounded-[3rem] rotate-6 transform scale-105 z-0" />
                        <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-background aspect-[4/5]">
                            <Image
                                src={image}
                                alt={title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="text-white/90 font-medium text-sm uppercase tracking-wider mb-2">Target Audience</div>
                                <div className="text-white text-xl font-bold">{targetAudience}</div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* 2. Benefits Section - Staggered Cards */}
                <div className="mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose This?</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={cn(
                                    "group relative p-8 bg-secondary/20 hover:bg-secondary/40 border border-primary/10 hover:border-primary/30 rounded-3xl transition-all duration-300",
                                    index % 2 === 1 ? "md:translate-y-12" : "" // Stagger effect
                                )}
                            >
                                <div className="mb-6 inline-flex p-3 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                    <CheckCircle2 size={32} />
                                </div>
                                <p className="text-lg font-medium leading-relaxed">
                                    {benefit}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 3. Process Section - Corrected Alignment */}
                {process && (
                    <div className="mb-32">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-16 max-w-3xl mx-auto"
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Process We Did To Ensure Smooth Delivery Of Your Needs</h2>
                            <p className="text-muted-foreground">From initial consultation to final deployment, we follow a rigorous methodology to ensure success.</p>
                        </motion.div>

                        <div className="relative max-w-4xl mx-auto">
                            {/* Central Line - Only visible on MD+ */}
                            <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-px bg-border md:-translate-x-1/2" />

                            {process.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className={cn(
                                        "relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 items-start md:items-center group",
                                        index % 2 === 1 ? "md:flex-row-reverse text-left md:text-right" : "text-left"
                                    )}
                                >
                                    {/* Content Side */}
                                    <div className={cn("flex-1 pl-20 md:pl-0", index % 2 === 1 ? "md:pr-12 lg:pr-16" : "md:pl-12 lg:pl-16")}>
                                        <div className="bg-background/50 border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-all group-hover:border-primary/50 backdrop-blur-sm">
                                            <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">{step.title}</h3>
                                            <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                                        </div>
                                    </div>

                                    {/* Center Circle/Marker */}
                                    <div className="absolute left-8 md:left-1/2 top-0 md:top-1/2 md:-translate-y-1/2 -translate-x-1/2 z-10">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-background border-4 border-primary shadow-lg group-hover:scale-110 transition-transform duration-300">
                                            <div className="w-3 h-3 rounded-full bg-primary" />
                                        </div>
                                    </div>

                                    <div className="flex-1 hidden md:block" /> {/* Spacer */}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}

                {/* 4. CTA */}
                <div className="text-center relative pt-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block p-1 rounded-[3rem] bg-gradient-to-tr from-primary via-accent to-secondary"
                    >
                        <div className="bg-background rounded-[2.8rem] px-12 py-20">
                            <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's build this together.</h2>
                            <Button asChild size="lg" className="h-16 px-12 text-xl rounded-full shadow-2xl hover:scale-105 transition-transform">
                                <Link href="/contact">
                                    Get a Quote <ArrowRight className="ml-2" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>

            </div>
        </div>
    );
}
