"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Clock, ArrowRight, Building, Users, Award, Coffee, Heart, Lightbulb, Zap, Rocket, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

// --- Mock Data ---
const jobOpenings = [
  {
    id: 1,
    title: "Senior IoT Engineer",
    location: "Erode, TamilNadu (On-site)",
    type: "Full-time",
    category: "Engineering",
    description: "Lead the development of next-gen IoT architectures. You will interpret sensor data and build resilient systems for industrial scale.",
    href: "#",
  },
  {
    id: 2,
    title: "Embedded Systems Developer",
    location: "Erode, TamilNadu (On-site)",
    type: "Full-time",
    category: "Engineering",
    description: "Write ultra-efficient firmware for our custom hardware. Experience with RTOS and low-power constraints is a must.",
    href: "#",
  },
  {
    id: 3,
    title: "React Native Developer",
    location: "Remote",
    type: "Contract",
    category: "Software",
    description: "Build intuitive mobile interfaces for controlling our drone swarms and automation hubs.",
    href: "#",
  },
  {
    id: 4,
    title: "Marketing Manager",
    location: "Erode, TamilNadu (Hybrid)",
    type: "Full-time",
    category: "Marketing",
    description: "Tell the story of Argynix. You will lead our brand strategy and help us reach new markets.",
    href: "#",
  },
];

const benefits = [
  {
    icon: <Award className="h-6 w-6" />,
    title: "Competitive Salary",
    description: "Top-tier compensation packages."
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Health & Wellness",
    description: "Comprehensive health coverage."
  },
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Continuous Learning",
    description: "Budget for courses and conferences."
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Collaborative Culture",
    description: "Work with smart, humble people."
  },
  {
    icon: <Coffee className="h-6 w-6" />,
    title: "Flexible Work",
    description: "Hybrid and remote options."
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "High Impact",
    description: "Build things that matter."
  },
]

// --- Components ---

const HeroSection = () => (
  <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-background">
    {/* Background Elements */}
    <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-0" />
    

    <div className="container relative z-10 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Badge variant="outline" className="mb-6 px-4 py-1 border-primary/20 bg-primary/5 backdrop-blur-sm">
          <span className="text-primary font-medium tracking-wide">WE ARE HIRING</span>
        </Badge>
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-tight">
          Join the <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-black to-secondary animate-gradient-x">
            Revolution
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-muted-foreground mb-10 leading-relaxed">
          We are building the nervous system of the future. Come solve problems that actually matter.
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button size="lg" className="rounded-full px-8 text-lg h-14 shadow-lg shadow-primary/20" asChild>
            <Link href="#open-positions">
              View Open Roles <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const JobCard = ({ job }: { job: typeof jobOpenings[0] }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div className={cn(
        "relative overflow-hidden rounded-2xl border bg-card p-8 transition-all duration-500",
        isHovered ? "border-primary/50 shadow-2xl shadow-primary/5 translate-y-[-4px]" : "border-border/50 shadow-sm"
      )}>
        <div className="flex flex-col md:flex-row justify-between gap-6 relative z-10">
          <div className="space-y-4 flex-1">
            <div className="flex items-center gap-3">
              <Badge variant={isHovered ? "default" : "secondary"} className="transition-colors duration-300">
                {job.category}
              </Badge>
              <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{job.type}</span>
            </div>
            <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
              {job.title}
            </h3>
            <div className="flex items-center text-muted-foreground text-sm">
              <MapPin className="w-4 h-4 mr-1.5" />
              {job.location}
            </div>

            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: isHovered ? "auto" : 0, opacity: isHovered ? 1 : 0 }}
              className="overflow-hidden"
            >
              <p className="pt-4 text-muted-foreground leading-relaxed">
                {job.description}
              </p>
            </motion.div>
          </div>

          <div className="flex items-center self-start md:self-center">
            <Button variant="ghost" size="icon" className="rounded-full w-12 h-12 border border-border group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Decorative Gradient */}
        <div className={cn(
          "absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent transition-opacity duration-500 pointer-events-none",
          isHovered ? "opacity-100" : "opacity-0"
        )} />
      </div>
    </motion.div>
  );
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/20">

      <HeroSection />

      <section id="benefits" className="py-24 bg-secondary/30 relative overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Argynix?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We don't just offer jobs; we offer a platform to do your life's best work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-background/80 backdrop-blur-sm border border-border/50 p-8 rounded-2xl hover:border-primary/30 transition-colors shadow-sm cursor-default"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="open-positions" className="py-24 container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex items-center justify-between mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Open Positions</h2>
          <Badge variant="outline" className="px-3 py-1">
            {jobOpenings.length} Roles Available
          </Badge>
        </motion.div>

        <div className="space-y-4">
          {jobOpenings.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </section>

      <section className="py-24 container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/noise.png')] opacity-10 mix-blend-overlay" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-primary-foreground mb-6">
              Don't see your role?
            </h2>
            <p className="text-primary-foreground/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              We are always looking for exceptional talent. If you think you can make a difference, we want to hear from you.
            </p>
            <Button size="lg" variant="secondary" className="rounded-full px-8 h-14 text-lg font-bold shadow-2xl" asChild>
              <Link href="mailto:careers@argynix.com">Pitch Yourself</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
