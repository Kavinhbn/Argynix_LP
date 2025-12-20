"use client"

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Filter, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// --- Data ---
const projects = [
  {
    id: 1,
    title: "Smart Agriculture Ecosystem",
    category: "Agri-Tech",
    client: "GreenValley Farms",
    problem: "Unpredictable crop yields due to inefficient irrigation and lack of soil data.",
    solution: "Deployed IoT sensor nodes for real-time soil analysis coupled with automated irrigation control.",
    result: "20% increase in crop yield and 30% water conservation.",
    image: "https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1974&auto=format&fit=crop",
    tags: ["IoT", "Sensors", "Cloud"],
  },
  {
    id: 2,
    title: "Nexus Home Hub",
    category: "Smart Home",
    client: "Confidential",
    problem: "Fragmented smart devices requiring multiple apps for control.",
    solution: "Created a unified central hub with voice integration (Alexa/Google) and a single mobile app interface.",
    result: "Seamless control of 50+ devices; rated 4.8/5 on App Store.",
    image: "https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1974&auto=format&fit=crop",
    tags: ["IoT", "Mobile App", "Voice Control"],
  },
  {
    id: 3,
    title: "Factory Sentinel",
    category: "Industrial Automation",
    client: "Titan Manufacturing",
    problem: "Frequent unexpected machinery downtime causing production delays.",
    solution: "Implemented vibration analysis and predictive maintenance algorithms on factory equipment.",
    result: "Downtime reduced by 40%, saving $2M annually.",
    image: "https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1974&auto=format&fit=crop",
    tags: ["SCADA", "IoT", "AI/ML"],
  },
  {
    id: 4,
    title: "EcoSense Node",
    category: "Electronics",
    client: "EnviroTech",
    problem: "Short battery life of remote environmental sensors requiring frequent maintenance.",
    solution: "Engineered ultra-low power PCB with energy harvesting capabilities and LoRaWAN connectivity.",
    result: "Battery life extended to 5+ years with zero maintenance.",
    image: "https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1974&auto=format&fit=crop",
    tags: ["PCB Design", "Firmware", "LoRaWAN"],
  },
  {
    id: 5,
    title: "AutoMover Fleet",
    category: "Robotics",
    client: "LogiCorp",
    problem: "High labor costs and error rates in warehouse material transport.",
    solution: "Developed a fleet of autonomous guided vehicles (AGVs) with LIDAR navigation.",
    result: "100% automation of pallet transport; 0 safety incidents.",
    image: "https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1974&auto=format&fit=crop",
    tags: ["Robotics", "AGV", "ROS"],
  },
  {
    id: 6,
    title: "VitalTrack Pro",
    category: "Connectivity",
    client: "MedLife",
    problem: "Inaccurate remote patient monitoring devices.",
    solution: "Built a medical-grade wearable with high-precision sensors and secure Bluetooth transmission.",
    result: "FDA approved; adopted by 3 major hospital networks.",
    image: "https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1974&auto=format&fit=crop",
    tags: ["Wearable", "BLE", "HealthTech"],
  },
];

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

// --- Components ---

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
    className={cn("absolute rounded-full blur-3xl opacity-30 mix-blend-multiply pointer-events-none", className)}
  />
);

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter(
    (project) => filter === "All" || project.category === filter
  );

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Blobs */}
      <Blob className="w-96 h-96 bg-primary/40 -top-20 -left-20" delay={0} />
      <Blob className="w-[500px] h-[500px] bg-secondary/60 top-1/2 -right-40" delay={5} />
      <Blob className="w-80 h-80 bg-accent/40 bottom-0 left-1/3" delay={2} />

      <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
        {/* Header */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">
              OUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/50 text-stroke-primary">
                WORK
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg">
              Engineering solutions that bridge the gap between imagination and reality.
            </p>
          </motion.div>

          {/* Filter */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                  filter === cat
                    ? "bg-primary text-primary-foreground border-primary shadow-lg scale-105"
                    : "bg-background/50 hover:bg-secondary text-muted-foreground border-border hover:border-primary/50"
                )}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Gallery Grid - "Disoriented" Layout */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-12 gap-y-24 gap-x-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              // Calculate "random" positioning based on index
              // Layout pattern:
              // 0: Col 1-7 (Left large)
              // 1: Col 8-12 (Right small, offset down)
              // 2: Col 3-10 (Center medium)
              // Repeat varied

              let colSpan = "";
              let offsetClass = "";

              const patternIndex = index % 3;

              if (patternIndex === 0) {
                colSpan = "md:col-span-12 lg:col-span-7";
              } else if (patternIndex === 1) {
                colSpan = "md:col-span-12 lg:col-span-5";
                offsetClass = "lg:mt-32"; // Stagger down
              } else {
                colSpan = "md:col-span-12 lg:col-span-8 lg:col-start-3";
                offsetClass = "lg:-mt-12"; // Overlap up slightly
              }

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={cn("group relative", colSpan, offsetClass)}
                >
                  {/* Project Card */}
                  <div className="relative">
                    {/* Image Container with "Disoriented" Border/Shape */}
                    <div className="relative overflow-hidden rounded-3xl aspect-[4/3] md:aspect-[16/9] lg:aspect-[3/2] shadow-2xl">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10" />
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Client Badge */}
                      <div className="absolute top-6 left-6 z-20">
                        <Badge variant="secondary" className="backdrop-blur-md bg-background/80 text-foreground border-primary/20">
                          {project.client}
                        </Badge>
                      </div>

                      {/* Overlay Content - Reveals on Hover (or always visible but styled) */}
                      <div className="absolute bottom-0 left-0 right-0 p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-md">
                          {project.title}
                        </h2>
                        <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                          {project.tags.map(tag => (
                            <span key={tag} className="text-xs font-medium text-white/80 bg-white/10 px-2 py-1 rounded backdrop-blur-sm border border-white/10">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
                        <Link href={`#project-${project.id}`}>
                          <div className="bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:shadow-primary/50 transition-shadow">
                            <ArrowUpRight className="w-6 h-6" />
                          </div>
                        </Link>
                      </div>
                    </div>

                    {/* Problem/Solution/Result Content - Floating "Card" overlapping the image */}
                    <div className="relative z-30 mt-[-40px] ml-4 mr-4 md:ml-12 md:mr-0 md:w-3/4 lg:w-2/3 bg-background/80 backdrop-blur-xl border border-border p-6 rounded-2xl shadow-xl hover:bg-background/95 transition-colors duration-300">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1 flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-red-500/80" /> Problem
                          </h4>
                          <p className="text-sm font-medium leading-relaxed">{project.problem}</p>
                        </div>
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1 flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-yellow-500/80" /> Solution
                          </h4>
                          <p className="text-sm font-medium leading-relaxed">{project.solution}</p>
                        </div>
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1 flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-green-500/80" /> Result
                          </h4>
                          <p className="text-sm font-medium leading-relaxed">{project.result}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Footer CTA */}
        <section className="mt-32 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block p-1 rounded-full bg-gradient-to-r from-primary via-accent to-secondary"
          >
            <div className="bg-background rounded-full p-10 md:p-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Have a challenge for us?</h2>
              <Button asChild size="lg" className="text-lg h-14 px-8 rounded-full">
                <Link href="/contact">Work with Us <ChevronRight className="ml-2" /></Link>
              </Button>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}
