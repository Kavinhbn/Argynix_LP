"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Lightbulb, Zap, Radio, Cpu, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// --- Data ---
const innovations = [
    {
        id: 1,
        title: "AI-Powered Predictive Maintenance",
        description: "Our new AI model analyzes real-time sensor data to predict machinery failures with 95% accuracy, drastically reducing downtime and maintenance costs. This system is now being deployed with our key manufacturing partners.",
        image: "/assets/Innovation/ai-powered-predictive-maintenance-for-industrial-iot.png",
        tags: ["AI", "Machine Learning", "IoT", "Industry 4.0"],
        date: "October 17, 2023",
        icon: <Cpu className="w-6 h-6" />
    },
    {
        id: 2,
        title: "Self-Learning Home Automation",
        description: "We're moving beyond simple commands. Our latest home automation hubs learn user habits and preferences to proactively adjust lighting, climate, and security settings for optimal comfort and energy efficiency.",
        image: "/assets/Innovation/self-learning-home-automation-systems.png",
        tags: ["AI", "Smart Home", "Energy Efficiency"],
        date: "September 05, 2023",
        icon: <Zap className="w-6 h-6" />
    },
    {
        id: 3,
        title: "Next-Gen LoRaWAN Protocol",
        description: "Our R&D team has contributed to a new communication protocol that extends battery life for remote IoT devices to over 10 years, unlocking possibilities for long-term environmental and agricultural monitoring.",
        image: "/assets/Innovation/next-gen-lorawan-protocol-for-ultra-low-power-iot.png",
        tags: ["LoRaWAN", "R&D", "Low Power"],
        date: "August 21, 2023",
        icon: <Radio className="w-6 h-6" />
    },
];


export function InnovationsPageClient() {
    return (
        <div className="min-h-screen bg-background relative overflow-hidden text-foreground selection:bg-primary/10">
            {/* Background Blobs */}

            <div className="container relative z-10 mx-auto px-4 py-24 md:py-32">

                {/* 1. Hero Section - Future Vision */}
                <div className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 border border-primary/20 rounded-full bg-primary/5 backdrop-blur-sm">
                            <Lightbulb className="w-4 h-4 text-primary" />
                            <span className="text-sm font-bold tracking-widest text-primary uppercase">Innovation Lab</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-tight">
                            Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Future</span> of Connected Tech
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                            At Argynix, we don't just follow trends; we define them. Our R&D division is tirelessly working on the next generation of autonomous agents, sustainable IoT networks, and human-centric AI.
                        </p>
                    </motion.div>

                    {/* Right Column (Details) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative z-20"
                    >
                        <h2 className="text-3xl font-bold mb-6 border-l-4 border-primary pl-4">Our Philosophy</h2>
                        <p className="text-lg mb-8 leading-relaxed">
                            Innovation isn't just about new gadgets; it's about solving the invisible problems. We believe in <strong>Calm Technology</strong>—systems that work autonomously in the background, requiring minimal human intervention while maximizing efficiency.
                        </p>
                        <p className="text-lg  mb-8 leading-relaxed">
                            From <strong>self-healing IoT networks</strong> to <strong>privacy-first AI</strong>, our engineers are rewriting the rules of industrial connectivity.
                        </p>

                         <div className="p-6 rounded-2xl bg-secondary/10 border border-primary/10 backdrop-blur-md mb-8">
                            <h3 className="text-lg font-bold mb-2">Current Research Focus:</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                    <span>Swarm Intelligence for Robotics</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                    <span>Energy Harvesting for Battery-less Sensors</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                    <span>Edge AI for Privacy-First Processing</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>

                {/* 2. Latest Innovations Grid */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
                    >
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">Latest Breakthroughs</h2>
                            <p className="text-muted-foreground text-lg">From the lab to the real world.</p>
                        </div>
                        <Button variant="outline" className="rounded-full">
                            View All Patents <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-12">
                        {innovations.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group relative bg-background/40 backdrop-blur-md rounded-[2.5rem] border border-white/10 overflow-hidden hover:border-primary/30 transition-all hover:shadow-2xl"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                                    {/* Image Section */}
                                    <div className="lg:col-span-5 relative h-64 lg:h-auto overflow-hidden">
                                        <div className="absolute inset-0  z-10 lg:translate-x-1" />
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>

                                    {/* Content Section */}
                                    <div className="lg:col-span-7 p-8 md:p-12 relative z-20 flex flex-col justify-center">
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="flex gap-2">
                                                {item.tags.map(tag => (
                                                    <Badge key={tag} variant="secondary" className="bg-secondary/50 hover:bg-secondary">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                            <span className="text-sm text-muted-foreground font-mono">{item.date}</span>
                                        </div>

                                        <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                            {item.description}
                                        </p>

                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                                {item.icon}
                                            </div>
                                            <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground group-hover:text-foreground transition-colors">
                                                Read Case Study
                                            </span>
                                            <Button size="icon" variant="ghost" className="rounded-full ml-auto hover:bg-primary hover:text-primary-foreground">
                                                <ArrowUpRight className="w-5 h-5" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
