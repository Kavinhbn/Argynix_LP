
"use client"

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Target, Users, ArrowRight, Zap, Globe, Cpu } from "lucide-react";
import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { RevealText } from "@/components/ui/reveal-text";
import { IdeaIcon } from "@/components/animate-ui/icons/idea";
import { CheckmarkIcon } from "@/components/animate-ui/icons/checkmark";
import { AccuracyIcon } from "@/components/animate-ui/icons/accuracy";

// --- Data ---
const teamMembers = [
  {
    name: "Karthi C",
    role: "CEO & Founder",
    department: "Hardware",
    image: "/assets/about/karthi.jpg",
    bio: "Visionary leader with a passion for integrating AI into industrial ecosystems."
  },
  {
    name: "Karthi C",
    role: "CEO & Founder",
    department: "Software",
    image: "/assets/about/karthi.jpg",
    bio: "Visionary leader with a passion for integrating AI into industrial ecosystems."
  },
  {
    name: "Karthi C",
    role: "CEO & Founder",
    department: "Software",
    image: "/assets/about/karthi.jpg",
    bio: "Visionary leader with a passion for integrating AI into industrial ecosystems."
  },
  // Add more team members here if needed

];

const values = [
  {
    icon: <IdeaIcon className="h-full w-full" />,
    title: "Innovation",
    description: "Pushing boundaries to create what hasn't been imagined yet."
  },
  {
    icon: <CheckmarkIcon className="h-full w-full" />,
    title: "Quality",
    description: "Robust, enterprise-grade solutions that never fail."
  },
  {
    icon: <AccuracyIcon className="h-full w-full" />,
    title: "Client-Centric",
    description: "Your mission is our mission. We build for your success."
  }
]

// --- Components ---

// Reusing the AnimatedGrid style from Home page for consistency
const AnimatedGrid = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:3rem_3rem]">
      <div className="absolute inset-[-10%] animate-pulse-slow">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_300px,hsl(var(--primary-foreground)),transparent)] opacity-20"></div>
      </div>
    </div>
  </div>
);

export default function AboutPageClient() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/10">

      {/* 1. Hero Section - Consistent with Home */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <AnimatedGrid />

        <div className="container relative z-10 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-block mb-4 px-3 py-1 border border-primary/20 rounded-full bg-primary/5 backdrop-blur-md">
              <span className="text-xs font-bold tracking-[0.3em] text-primary uppercase">Who We Are</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground mb-6">
              FORGING THE <br /> <span className="text-primary">FUTURE</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-xl text-muted-foreground leading-relaxed">
              We are the architects of the automated world, bridging the gap between human innovation and machine precision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Brand Story / Mission - Secondary Background */}
      <section className="relative py-24 bg-secondary/30">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center space-y-12">
            <RevealText className="text-3xl md:text-4xl font-bold leading-tight text-foreground">
              Pioneering the next generation of industrial intelligence.
            </RevealText>
            <div className="space-y-8 text-lg text-muted-foreground leading-relaxed font-light max-w-3xl mx-auto">
              <RevealText>
                Argynix isn't just a tech company; we are a partner in evolution. We specialize in IoT, robotics, and advanced automation, designing systems that don't just work—they think, adapt, and improve.
              </RevealText>
              <RevealText>
                From the sensor on the factory floor to the dashboard in the boardroom, we connect every dot. Our mission is to make the complex simple, and the impossible standard.
              </RevealText>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values - "Holographic" adapted to Light Theme */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Our Core DNA</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">The code that runs our company.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                whileHover={{ y: -10 }}
                className="group relative p-10 rounded-2xl bg-secondary/20 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-lg flex flex-col items-center"
              >
               <div className="mb-8 relative w-100% h-100% size-100%">
                  <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="relative w-full h-full">
                    {/* Use a div wrapper to control size nicely */}
                    <div className="w-100% h-100% border border-primary p-3">
                      {value.icon}
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-foreground group-hover:text-primary transition-colors">{value.title}</h3>
                <p className="text-center text-muted-foreground leading-relaxed font-light">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Leadership / Team - Adapted Cards */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">The Operators</h2>
            <p className="text-muted-foreground">The minds behind the machine.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-12">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="group relative w-full max-w-sm"
              >
                <div className="relative h-[450px] overflow-hidden rounded-xl bg-background border border-border shadow-md group-hover:border-primary/50 transition-all duration-500 hover:shadow-2xl">
                  {/* Image */}
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />

                  {/* Overlay Info - Kept dark for contrast with text over image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-3xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">{member.role}</p>
                    <p className="text-white/80 font-medium tracking-wider text-xs mb-4">{member.department}</p>
                    <p className="text-slate-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA Section - Consistent Primary Brand Color */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/5 pattern-grid-lg opacity-10"></div>
        <div className="container relative z-10 px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-primary-foreground mb-8 tracking-tight">
            READY TO <br /> TRANSFORM?
          </h2>
          <p className="text-primary-foreground/80 text-xl max-w-2xl mx-auto mb-10 font-light">
            Your future is waiting. Let's build it together.
          </p>
          <Button asChild size="lg" className="bg-background text-primary hover:bg-secondary hover:text-primary h-14 px-10 text-lg rounded-full shadow-2xl transition-all hover:scale-105">
            <Link href="/contact">
              Get a Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

    </div>
  )
}

