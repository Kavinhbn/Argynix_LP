"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
    {
        title: "Industrial Automation",
        description: "Streamlining production lines with smart PLCs, SCADA systems, and robotic arms.",
   
        href: "/services/industrial-automation",
        color: "bg-blue-500/10 text-blue-500",
        image: "https://images.unsplash.com/photo-1565514020176-8c2cf828c2e7?q=80&w=1964&auto=format&fit=crop"
    },
    {
        title: "IoT Development",
        description: "Connecting devices, sensors, and cloud platforms for real-time data insights.",
     
        href: "/services/iot-development",
        color: "bg-purple-500/10 text-purple-500",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Robotics & AI",
        description: "Autonomous agents and intelligent systems designed to perform complex tasks.",
    
        href: "/services/robotics-ai",
        color: "bg-red-500/10 text-red-500",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Electronics R&D",
        description: "Custom PCB design, firmware engineering, and hardware prototyping.",
      
        href: "/services/electronics-rd",
        color: "bg-amber-500/10 text-amber-500",
        image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=2069&auto=format&fit=crop"
    },
    {
        title: "Smart Home",
        description: "Integrated home automation for security, comfort, and energy efficiency.",
     
        href: "/services/smart-home",
        color: "bg-indigo-500/10 text-indigo-500",
        image: "https://images.unsplash.com/photo-1558002038-1091a166111c?q=80&w=2071&auto=format&fit=crop"
    },
    {
        title: "Agri-Tech",
        description: "Precision farming solutions using IoT sensors and automated irrigation.",
  
        href: "/services/agri-tech",
        color: "bg-green-500/10 text-green-500",
        image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?q=80&w=1896&auto=format&fit=crop"
    }
];

const Blob = ({ className, delay = 0 }: { className?: string, delay?: number }) => (
    <motion.div
        animate={{
            scale: [1, 1.2, 0.9, 1.1, 1],
            rotate: [0, 90, 180, 270, 360],
            x: [0, 50, -30, 20, 0],
            y: [0, -40, 30, -20, 0],
        }}
        transition={{
            duration: 25,
            ease: "easeInOut",
            repeat: Infinity,
            delay: delay,
        }}
        className={cn("absolute rounded-full blur-3xl opacity-30 mix-blend-multiply pointer-events-none", className)}
    />
);

export function ServicesPageClient() {
    return (
        <div className="min-h-screen bg-background relative overflow-hidden">
            {/* Background Blobs */}
            <Blob className="w-[600px] h-[600px] bg-primary/20 -top-20 -left-20" delay={0} />
            <Blob className="w-[800px] h-[800px] bg-secondary/30 top-1/2 -right-40" delay={5} />

            <div className="container relative z-10 mx-auto px-4 py-24 md:py-32">

                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-24">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-black mb-6"
                    >
                        Our <span className="text-primary">Services</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-muted-foreground"
                    >
                        Comprehensive technology solutions engineered to drive your business into the future.
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Link href={service.href} key={index} className="group block h-full">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ y: -10 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative h-full bg-background/50 backdrop-blur-md border border-border rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-primary/50 transition-all duration-500"
                            >
                                {/* Image Header with Overlay */}
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />

                                    
                                </div>

                                <div className="p-8 pt-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{service.title}</h3>
                                        <ArrowUpRight className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    );
}
