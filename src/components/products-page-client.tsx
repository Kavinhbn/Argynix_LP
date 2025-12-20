"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const products = [
    {
        title: "Argynix IoT",
        tagline: "Remote Device Management",
        description: "Our flagship platform for monitoring water pumps, tracking fleets, and controlling machinery from anywhere.",
        href: "/products/argynix-iot",
        image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070&auto=format&fit=crop",
        price: "Contact for Quote"
    },
    {
        title: "Smart Logistics Tracker",
        tagline: "Real-time Fleet Intelligence",
        description: "Compact, battery-operated GPS tracker with 4G LTE and LoRaWAN fallback for unbroken chain-of-custody.",
        href: "/products/smart-logistics-tracker",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
        price: "Contact for Quote"
    },
    {
        title: "Industrial Gateway X1",
        tagline: "Legacy Protocol Converter",
        description: "Bridge the gap between old hardware and new cloud systems. Supports Modbus, Profibus, and CAN bus.",
        href: "/products/industrial-gateway-x1",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
        price: "Contact for Quote"
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

export function ProductsPageClient() {
    return (
        <div className="min-h-screen bg-background relative overflow-hidden">
            {/* Background Blobs */}
            <Blob className="w-[600px] h-[600px] bg-primary/20 -top-20 -left-20" delay={0} />
            <Blob className="w-[800px] h-[800px] bg-secondary/30 top-1/2 -right-40" delay={5} />

            <div className="container relative z-10 mx-auto px-4 py-24 md:py-32">

                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-black mb-6"
                    >
                        Our <span className="text-primary">Products</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-muted-foreground"
                    >
                        Engineered for reliability, designed for the future. Explore our hardware and software solutions.
                    </motion.p>
                </div>

                {/* Product List */}
                <div className="space-y-24">
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className={cn(
                                "flex flex-col gap-12 items-center",
                                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                            )}
                        >
                            {/* Image Side */}
                            <div className="w-full lg:w-1/2">
                                <Link href={product.href} className="group block relative rounded-[2rem] overflow-hidden shadow-2xl border border-border bg-secondary/10">
                                    <div className="aspect-video relative overflow-hidden">
                                        <Image
                                            src={product.image}
                                            alt={product.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                                    </div>
                                </Link>
                            </div>

                            {/* Content Side */}
                            <div className="w-full lg:w-1/2 lg:px-8">
                                <div className="text-primary font-bold tracking-widest uppercase mb-2">{product.tagline}</div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">{product.title}</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                    {product.description}
                                </p>
                                <div className="flex items-center gap-6">
                                    <Button asChild size="lg" className="rounded-full px-8">
                                        <Link href={product.href}>
                                            View Details <ArrowUpRight className="ml-2 w-4 h-4" />
                                        </Link>
                                    </Button>
                                    <span className="text-muted-foreground font-medium">{product.price}</span>
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
}
